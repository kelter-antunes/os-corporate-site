/************** CODE TO PUT IN PERSONAL HOME CMS CONTENT "Home-Guided-Tutorial"   ********************************/
$(function() {
    _kmq.push(function() {
        //Exclude ipads, androids and macs for now. exlude also IE
        if (navigator.userAgent.match(/Windows/) && $("a[id$=CreateApplicationLink]").length > 0 &&
            (!navigator.userAgent.match(/MSIE/) && !navigator.userAgent.match(/Trident/))) {
            var SSVersion = "9.0.0.42";
            var identifyUserParams = $("script").text().match(/identifyUser\((.*)\)/)[1].split(',');
            var username = identifyUserParams[0].replace(/'/g, "");
            var personalName = $(".InfrastructureNameSize").attr("title");

            function bindButtons() {
                $("a[id$=CreateApplicationLink], a[id$=StartGuidedTutorialLink]").on("click", function() {
                    var devEnvABTest = KM.ab("DevEnv Web Test", {
                        "DownloadOnly": 0.5,
                        "WebOrDownload": 0.5
                    });
                    if (devEnvABTest == "WebOrDownload") {
                        $("iframe").load(function() {
                            var frameWindow = $('iframe')[0].contentWindow;
                            if (!frameWindow.devEnvModified) {
                                frameWindow.devEnvModified = true;
                                if (frameWindow.$) {
                                    trackEvent('SP - Need Download Platform Popup', {
                                        WebDevEnv: "true"
                                    }, null);
                                    var downloadPopupText = frameWindow.$(".DownloadPopupText");
                                    var text = downloadPopupText.text();
                                    text += " If you don't wish to download just yet, you can start by using the beta web version.";
                                    downloadPopupText.text(text);
                                    downloadPopupText.next().css("margin-top", "10px");
                                    var downloadButton = frameWindow.$("a:contains(Download)").toggleClass("red");
                                    downloadButton.before("<a href='#' class='btn btn-small red'>Web Version</a>&nbsp;&nbsp;&nbsp;");
                                    frameWindow.$("a:contains(Cancel)").hide();
                                    frameWindow.$("a:contains(Web Version)").click(function() {
                                        if (document.cookie.indexOf("webdevinstalled=true") == -1) {
                                            //Use personalName as installerid, this is the installerid used by events logged by Web ServiceStudio
                                            $.get("/SSStartPage/Installing.aspx?InstallerId=" +
                                                personalName + "&Tool=ServiceStudio&Version=" + SSVersion);
                                            //TRACK INSTALLS NOT TO RUIN EXISTING FUNNELS
                                            trackEvent('SP - Installation Start', {
                                                WebDevEnv: "true"
                                            }, null);
                                            trackEvent('SP - Installation Finish', {
                                                WebDevEnv: "true"
                                            }, null);
                                            var d = new Date();
                                            d.setTime(d.getTime() + (120 /*days*/ * 24 * 60 * 60 * 1000));
                                            var expires = "expires=" + d.toUTCString();
                                            document.cookie = "webdevinstalled=true; " + expires;
                                        }
                                        //New event to track web devenv usage
                                        trackEvent('Sp - Web DevEnv', null, null);
                                        if (text.indexOf("tutorial") != -1) {
                                            trackEvent('SP - Tutorial Start', null, null);
                                            window.open('https://devenv.outsystemscloud.com/#-starttutorial 55A1DDF8-708A-4FE5-9C7D-6580E54AEC0D ' +
                                                personalName + '.outsystemscloud.com ' + username);
                                        } else {
                                            trackEvent('PH - Open Service Studio', null, null);
                                            window.open('https://devenv.outsystemscloud.com/#-login ' +
                                                personalName + '.outsystemscloud.com ' + username);
                                        }
                                        RichWidgets_Popup_Editor_Close();
                                    });
                                }
                            }
                        });
                    }
                });
            }
            bindButtons();
            // do this also after ajax refresh
            osAjaxBackend.BindAfterAjaxRequest(bindButtons);
        }
    });
});
