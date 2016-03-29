var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

/*$(function() {
    $(".spacer-bg").width(840 - $("span[id*=ListSection]").outerWidth());
});*/

$(window).load(function() {
    if ($('a.logo[href^="/nextstep"]').length === 0) {
        $(".spacer-bg").width(840 - $("span[id*=ListSection]").outerWidth() + 1);
        $('.navigation-bar').css('background-color', 'transparent');
    };


});

osjs(function(a) {
    var b = document.location.href;
    if (b.indexOf("#") !== -1) {
        b = b.replace("agile-platform", "platform");
        var c = b.replace(/.*#/, "");
        c = c.replace(/&_=.*/, "");

        if (osjs("a[href$=\"" + c + "\"]").length !== 0) {
            if (c != "_") {
                setTimeout(function() {
                    try {
                        osjs("a[href$=\"" + c + "\"]")[0].click();
                    } catch (e) {}
                }, 1e3);
            }
        } else {
            c = c + '/';
            if (c != "_") {
                setTimeout(function() {
                    try {
                        osjs("a[href$=\"" + c + "\"]")[0].click();
                    } catch (e) {}
                }, 1e3);
            }
        }

    }

    if ((/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) && width < 767) {} else {
        a(".popup_link").each(function() {
            if (!osjs(this).attr("id")) {
                osjs(this).attr("id", Math.random().toString().replace(".", ""));
            }

            var popupH = osjs(this).attr("popup-height");
            if (popupH === undefined) {
                popupH = -1;
            };
            RichWidgets_Popup_Editor_init(osjs(this).attr("id"), "", " ", popupH, -1, osjs(this).attr("href"), true, true);
        });

    }
    a(".tooltip_link").each(function() {
        if (!osjs(this).attr("id"))
            osjs(this).attr("id", Math.random().toString().replace(".", ""));
        RichWidgets_Popup_Editor_init(osjs(this).attr("id"), "", " ", -1, -1, osjs(this).attr("href"));
    });

    a(".popup_link").click(function() {
        var b = a(this).attr("id");
        if (typeof pageTracker != "undefined")
            pageTracker._trackPageview(a("#" + b).attr("href"));
    });

});

osjs(".Popup").live("dialogopen", function(a, b) {
    osjs("iframe").load(function() {
        setTimeout(function() {
            var scrollTop = $(window).scrollTop(),
                elementOffset = osjs(".Popup").offset().top,
                distance = (elementOffset - scrollTop);

            if (distance < 30)
                osjs(".Popup").animate({
                    top: $(window).scrollTop() + 30
                }, 200);
        }, 1e3);
    });
});



/* Lazy Load XT v1.0.0 2014-01-16
 * http://ressio.github.io/lazy-load-xt
 * Licensed under MIT 
 * (C) 2014 RESS.io 
 */
(function($) {
    var options = $.lazyLoadXT;

    options.forceEvent += ' loadmeeeee';
    options.forceEvent += ' hover-menu';
    options.edgeY = 200;

})(window.jQuery || window.Zepto);


/* home page, filter customers logos by visitor country */
$(function() {

    if (window.location.pathname === '/') {
        // ## NOTE: if the number of current location is not the maximum number, go get global ones to fullfill the matrix  --- done
        // ## NOTE 2: US locale is the global  --- done

        var totalMatrixLogos = 15;


        //get the current location
        var currentLocation = $('#locale-aux').attr('data-locale');
        if (currentLocation === 'gl' || currentLocation === undefined) {

            currentLocation = 'global';
        }

        //get the logos for the current locale
        var logosForCurrentLocale = $('.customer-matrix-entry[data-' + currentLocation + '].customer-matrix-entry[data-' + currentLocation + '!=""]');
        var numberOfCurrentLogos = logosForCurrentLocale.length;

        logosForCurrentLocale.sort(function(a, b) {

            var contentA = parseInt($(a).attr('data-' + currentLocation));
            var contentB = parseInt($(b).attr('data-' + currentLocation));
            return (contentA < contentB) ? -1 : (contentA > contentB) ? 1 : 0;
        });



        if (numberOfCurrentLogos > 15) {
            logosForCurrentLocale.slice(0, 14);
            numberOfCurrentLogos = 15;
        };


        var numberOfMissingLogos = totalMatrixLogos - numberOfCurrentLogos;

        if (numberOfMissingLogos != 0) {
            var globalLogos;
            //get the global logos to fullfill the matrix
            if (numberOfMissingLogos < totalMatrixLogos) {
                globalLogos = $('.customer-matrix-entry[data-' + currentLocation + '=""].customer-matrix-entry[data-global].customer-matrix-entry[data-global!=""]').slice(0, numberOfMissingLogos);
            } else {
                globalLogos = $('.customer-matrix-entry[data-global].customer-matrix-entry[data-global!=""]').slice(0, numberOfMissingLogos);
            }

            globalLogos.sort(function(a, b) {

                var contentA = parseInt($(a).attr('data-global'));
                var contentB = parseInt($(b).attr('data-global'));
                return (contentA < contentB) ? -1 : (contentA > contentB) ? 1 : 0;
            });

            //$.merge(logosForCurrentLocale, globalLogos);

            globalLogos.each(function(index, el) {
                logosForCurrentLocale.push(el);
            });

            //logosForCurrentLocale.push.apply(logosForCurrentLocale, globalLogos)

        };

        //delete existing logos
        $('.customer-matrix-entry').remove();

        //add new logo list
        $('.customers-and-experts a[href="/customers/"]').prepend(logosForCurrentLocale);
        logosForCurrentLocale.css('display', 'inline-block');


    }
});





/* adjust breadcrumb margin top on new case studies version and solutions  */
$(function() {
    $('.case-studies-detail-new .Header_Nav_Breadcrumb').css('margin-top', 300 - $('.cs-title-box-topbar').height() + 15);
});

/** adjust header size if no second level menu 
$(function() {

    var pathname = window.location.pathname;

    if ($('.second-level-menu-wrapper').length === 0 && pathname.indexOf('/solutions/all-industries/') === -1) {
        $('.header-hero-wrapper.page-without-hero').height(70);
    }
});
**/


/** Sticky second level menu **/
$(document).ready(function() {

    var pathname = window.location.pathname;

    if (!$.browser.mobile) {

        var sticky = $('.second-level-menu-wrapper');
        var $body = $('body');
        if (sticky.length == 0) {
            return;
        }
        var top = -1;
        var fixMenu = function() {
            if (top == -1) {
                top = sticky.offset().top;
            }
            var scroll = $(window).scrollTop();

            if (scroll >= top) {
                sticky.addClass('fixed');

                if (pathname.indexOf('/platform/sap/') !== -1) {
                    $body.css('margin-top', '175px');
                }


            } else {
                sticky.removeClass('fixed');
                $body.css('margin-top', '0');
            }
        };
        $(window).load(fixMenu).scroll(fixMenu);




        $('.second-level-menu-wrapper .sub-navigation-bar a[href="' + pathname + '"]').addClass('active');


        /*
                $('.sub-navigation-bar a').each(function(index, el) {
                    var currEl = $(el);

                    if (
                        (pathname === '/platform/' && pathname === currEl.attr('href')) ||
                        (pathname === '/customers/' && pathname === currEl.attr('href')) ||
                        (pathname === '/partners/' && pathname === currEl.attr('href')) ||
                        (pathname === '/platform/whats-new-in-platform-9-amsterdam/' && pathname === currEl.attr('href')) ||
                        (pathname === '/platform/whats-new-in-platform-9-bali/' && pathname === currEl.attr('href')) ||
                        (pathname === '/platform/sap/' && pathname === currEl.attr('href'))


                    ) {
                        currEl.addClass('active');

                    } else if ((currEl.attr('href') !== '/platform/sap/' &&
                            currEl.attr('href') !== '/platform/' &&
                            currEl.attr('href') !== '/customers/' &&
                            currEl.attr('href') !== '/partners/' &&
                            currEl.attr('href') !== '/platform/whats-new-in-platform-9-amsterdam/' &&
                            currEl.attr('href') !== '/platform/whats-new-in-platform-9-bali/') &&
                        pathname.indexOf(currEl.attr('href')) !== -1) {
                        currEl.addClass('active');


                    }
                });
        */

    }
});



function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$(function() {
    if ((/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) && width < 767) {} else {

        $('.magnific_popup_link').magnificPopup({
            type: 'ajax',
            alignTop: true,
            showCloseBtn: false,
            modal: true,
            tClose: 'Close',
            callbacks: {
                open: function() {
                    /*Magnific Pop up - image/video resizing according to screen size*/
                    $(window).resize(function() {
                        $('.mfp-content .mfp-os-popup-content img').css({
                            'width': 'auto',
                            'max-width': 880,
                            'max-height': $(window).height() - 105
                        });

                        var popup_h = parseInt($('.mfp-content .mfp-os-popup-content').height() - 50, 10);
                        var max_h = parseInt($(window).height() - 105, 10);
                        var padd = parseInt($('.mfp-content .mfp-os-popup-content .video-container').css("padding-bottom"), 10);
                        var new_padd = max_h * padd;
                        new_padd = parseInt(new_padd / popup_h);
                        if (new_padd < 500) {
                            $('.mfp-content .mfp-os-popup-content .video-container').css("padding-bottom", new_padd);
                        }
                    });
                },
                ajaxContentAdded: function() {
                    var content;
                    if ($('.mfp-os-popup-content').find('iframe').length == 1) {
                        content = $('.mfp-os-popup-content').find('iframe');
                        if (content.height() !== 0) {
                            $('.mfp-os-thumbs').height(content.height());
                        }

                    } else {
                        content = $('.mfp-os-popup-content').find('img');
                        if (content.height() !== 0) {
                            $('.mfp-os-thumbs').height(content.height());
                        }

                    }
                    /*Magnific Popup - image resizing according to screen size*/
                    $('.mfp-content .mfp-os-popup-content img').css({
                        'width': 'auto',
                        'max-width': 880,
                        'max-height': $(window).height() - 105
                    });

                    var popup_h = parseInt($('.mfp-content .mfp-os-popup-content').height() - 50, 10);
                    var max_h = parseInt($(window).height() - 105, 10);
                    var padd = parseInt($('.mfp-content .mfp-os-popup-content .video-container').css("padding-bottom"), 10);
                    var new_padd = max_h * padd;
                    new_padd = parseInt(new_padd / popup_h);
                    if (new_padd < 500) {
                        $('.mfp-content .mfp-os-popup-content .video-container').css("padding-bottom", new_padd);
                    }

                    $('.mfp-os-main-content').bind("DOMSubtreeModified", function() {
                        $('.mfp-content .mfp-os-popup-content img').css({
                            'width': 'auto',
                            'max-width': 880,
                            'max-height': $(window).height() - 105
                        });

                        var popup_h = parseInt($('.mfp-content .mfp-os-popup-content').height() - 50, 10);
                        var max_h = parseInt($(window).height() - 105, 10);
                        var padd = parseInt($('.mfp-content .mfp-os-popup-content .video-container').css("padding-bottom"), 10);
                        var new_padd = max_h * padd;
                        new_padd = parseInt(new_padd / popup_h);
                        if (new_padd < 500) {
                            $('.mfp-content .mfp-os-popup-content .video-container').css("padding-bottom", new_padd);
                        }
                    })

                },
                close: function() {
                    window.location.hash = '_';
                }
            }
        });

        $('.magnific_popup_link').click(function(event) {
            window.location.hash = $(this).attr('href');
        });

        $(window).resize(function() {
            $('.mfp-os-main-content').width($('.mfp-os-left').width() - 80);
        });

    }
});

$(document).mouseup(function(e) {

    if ($.magnificPopup.instance.currItem !== undefined) {

        if ($.magnificPopup.instance.currItem !== null) {

            if ($.magnificPopup.instance.currItem.type === 'ajax') {
                var container = $('.mfp-back');
                if ((!container.is(e.target) && container.has(e.target).length === 0)) {
                    $.magnificPopup.close();
                }
            }

        }
    }

});

$(document).keyup(function(e) {
    if ($.magnificPopup.instance.currItem !== undefined) {

        if ($.magnificPopup.instance.currItem !== null) {
            if ($.magnificPopup.instance.currItem.type === 'ajax') {
                if (e.keyCode == 27) {
                    $.magnificPopup.close();
                }
            }
        }
    }
});

$(document).ready(function() {
    $('.gotomagnific').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                outsystems: {
                    index: 'outsystems',
                    src: '%id%'
                }
            }
        },
        fixedContentPos: true,
        fixedBgPos: true,

        modal: true,
        callbacks: {
            open: function() {
                $('.mfp-iframe-scaler .mfp-close').css({
                    display: 'none'
                });
            }
        }
    });
});


/**
 *
 *     EVENTS
 *
 **/

// Create IE + others compatible event handler
var eventMethod_Global = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer_Global = window[eventMethod_Global];
var messageEvent_Global = eventMethod_Global == "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
eventer_Global(messageEvent_Global, function(e) {

    try {

        if (e.data !== "") {

            if (e.data === 'kissEvent') {
                var pathName = e.srcElement.location.href;

                var isAppContactUS = (pathName.indexOf('/contact-us-apps/') !== -1);
                var isGlobalContactUS = (pathName.indexOf('/contact-us-global/') !== -1);
                var isOfficeContactUS = (pathName.indexOf('/company/contact-us/') !== -1);
                var isVersusLP = (pathName.indexOf('vs-outsystems/') !== -1);
                var isSalesforceDownload = (pathName.indexOf('/salesforce1-vs-outsystems/') !== -1);

                if (isAppContactUS) {
                    osAnalytics.trackEvent('CS - Submit Contact US Apps');

                } else if (isGlobalContactUS) {
                    osAnalytics.trackEvent('CS - Submit Contact US Global');

                } else if (isOfficeContactUS) {
                    osAnalytics.trackEvent('CS - Submit Contact US Offices');

                } else if (isVersusLP) {
                    if ((pathName.indexOf('kony') !== -1)) {
                        osAnalytics.trackEvent('LP - Submit Demo Contact Us - Kony LP');

                    } else if ((pathName.indexOf('mendix') !== -1)) {
                        osAnalytics.trackEvent('LP - Submit Demo Contact Us - Mendix LP');

                    } else if ((pathName.indexOf('appcelerator') !== -1)) {
                        osAnalytics.trackEvent('LP - Submit Demo Contact Us - Appcelerator LP');

                    } else if (isSalesforceDownload) {
                        osAnalytics.trackEvent('LP - Download collateral', {
                            'Document': 'OutSystems Platform and Force.com'
                        }, null);
                    }

                }
            }
            //marketo form resize
            else {
                var mktodata;
                try {
                    mktodata = JSON.parse(e.data);
                    if (mktodata.mkto_frame.height !== undefined) {
                        console.log('mkto content height = ' + mktodata.mkto_frame.height);
                        if ($('iframe[src^="/contact"]').length === 0) {
                            if ($('iframe[src^="/offer"]').contents().find('iframe').length !== 0) {
                                $('iframe[src^="/offer"]').contents().find('iframe').height(mktodata.mkto_frame.height);
                            } else {
                                $('#mkto_frame').height(mktodata.mkto_frame.height);
                            }

                        }
                    }
                } catch (e) {}

            }
        }

    } catch (e) {
        console.log(e);
    }

}, false);


/* apps demo events */
$(function() {
    $('a[href*="applicationname"]').click(function(event) {
        var appUrl = $(this).attr('href');
        var appNameParam = 'applicationname=';
        var n = appUrl.lastIndexOf(appNameParam);
        var appName = appUrl.substring(n + appNameParam.length);

        //var _gaq = _gaq || [];
        try {
            _gaq.push(['_trackEvent', 'Apps', 'Try Now', appName]);
        } catch (err) {}
    });

});



/*  Tracking Sign-ups in KISSMetrics - From anonymous to named user
 *
 *   marketo listener for current page context, context is now used to track events in kissmetrics
 *   this piece of code sends the actual page to the form iframe, this context is added to an hidden attribute in the form
 *   that will be stored in the lead details, this attribute will change uppon every form submition, but now it's only taken into consideration
 *   in the first form submission, to inform KiSSmetrics where the signup occured.
 *
 *   listener code is in the os-mkto.js, this js is injected in the iframe via Google Tag Manager
 *
 */
//#####PARENT (page)
var framePopupSelector = 'iframe[src^="/"]';
var frameMktoSelector = '#mkto_frame';
var iframeDetect;

function sendKISScontextToMarketo() {
    setTimeout(function() {
        var receiverFrame;
        var url;
        var currPageContext;


        try {
            //is popup
            var isPopup = ($(framePopupSelector).contents().find(frameMktoSelector).length === 1);

            if (isPopup) {
                receiverFrame = $(framePopupSelector).contents().find(frameMktoSelector);
                url = $(framePopupSelector).attr('src').split('/');
                currPageContext = url[url.length - 2];

            } else {
                receiverFrame = document.getElementById("mkto_frame").contentWindow;
                url = window.location.pathname.split('/');
                currPageContext = url[url.length - 2];

            }

            if (receiverFrame !== undefined) {
                var mkto_KM_info = {
                    'input': 'KM_LastFormSubmissionContext',
                    'origin': 'website',
                    'currPageContext': currPageContext
                };

                if (isPopup) {
                    receiverFrame[0].contentWindow.postMessage(mkto_KM_info, '*');
                } else {
                    receiverFrame.postMessage(mkto_KM_info, '*');
                }
            }

        } catch (e) {

        }
    }, 1000);

}
$(function() {

    iframeDetect = setInterval(function() {
        if ($(framePopupSelector).length > 0 || $(frameMktoSelector).length > 0) {
            sendKISScontextToMarketo();
        }
    }, 1000);


});


/** WISITA RESPONSIVE VIDEOS */
$(function() {
    if (location.pathname !== '/') {

        try {
            wistiaEmbeds.onFind(function(video) {
                video.videoFoam(true);
            });

        } catch (e) {

        }

    }
});



/**Tracking Sign-ups in KISSMetrics - From anonymous to named user**/


/* wistia events */
// Category: Video 
// Action: Start Watching 
// Label: [Video Name] 
// Value:

// Category: Video 
// Action: Watched 50% 
// Label: [Video Name] 
// Value:

// Category: Video 
// Action: Watched 75% 
// Label: [Video Name] 
// Value:

//enable Wistia Trackings
/* 
var eWT = true;
$(function() {

    if ((typeof wistiaEmbeds != 'undefined')) {
        wistiaEmbeds.onFind(function(video) {

            var percent50;
            var percent70;

            video.bind("play", function() {

                percent50 = video.duration() * 0.5;
                percent70 = video.duration() * 0.75;

                if (eWT) {
                    //KM
                    trackEvent('Start Watching', {
                        'Video': video.name()
                    }, null);

                    //GA
                    _gaq.push(['_trackEvent', 'Video', 'Start Watching', video.name()]);

                    //marketo
                    if ((typeof Munchkin !== 'undefined')) {
                        Munchkin.munchkinFunction('visitWebPage', {
                            url: '/view-video-start-watching',
                            params: video.name()
                        });
                    }

                }
                return this.unbind;

            }).bind('end', function() {
                if (eWT) {
                    //KM
                    trackEvent('Complete', {
                        'Video': video.name()
                    }, null);

                    //GA
                    _gaq.push(['_trackEvent', 'Video', 'Complete', video.name()]);

                    //marketo
                    if ((typeof Munchkin !== 'undefined')) {
                        Munchkin.munchkinFunction('visitWebPage', {
                            url: '/view-video-complete',
                            params: video.name()
                        });
                    }

                }
                return this.unbind;

            });

            var done50 = false;
            var done75 = false;

            video.bind('secondchange', function(s) {
                var currentSecond = Math.floor(s);

                if (s > percent50 && s < percent70 && !done50) {
                    if (eWT) {
                        //KM
                        trackEvent('Watched 50%', {
                            'Video': video.name()
                        }, null);

                        //GA
                        _gaq.push(['_trackEvent', 'Video', 'Watched 50%', video.name()]);

                        //marketo
                        if ((typeof Munchkin !== 'undefined')) {
                            Munchkin.munchkinFunction('visitWebPage', {
                                url: '/view-video-50-percent',
                                params: video.name()
                            });
                        }
                    }

                    done50 = true;
                }

                if (s > percent70 && !done75) {
                    if (eWT) {
                        //KM
                        trackEvent('Watched 75%', {
                            'Video': video.name()
                        }, null);

                        //GA
                        _gaq.push(['_trackEvent', 'Video', 'Watched 75%', video.name()]);

                        //marketo
                        if ((typeof Munchkin !== 'undefined')) {
                            Munchkin.munchkinFunction('visitWebPage', {
                                url: '/view-video-75-percent',
                                params: video.name()
                            });
                        }

                    }
                    done75 = true;
                }

                //return this.unbind;
            });

        });
    };
});


 *
 *
 *     EVENTS  END
 *
 *
 **/




/** Bind to smooth scroll top **/

$(function(a) {
    $('.scrollup').click(function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});



$(document).ready(function() {
    $(".hist-back-link").click(function(event) {
        event.preventDefault();
        history.back(1);
    });

    $('.tooltip-link').mouseover(function(e) {
        var tip = $(this).attr('title');
        $(this).attr('title', '');
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            $(this).append('<div id="tooltip"><div class="tipHeader"></div><div class="tipBody">' + tip + '</div><div class="tipFooter"><span class="osicon-close" style="font-size: 23px;color: white;"></span></div></div>');
        } else {
            $(this).append('<div id="tooltip"><div class="tipHeader"></div><div class="tipBody">' + tip + '</div><div class="tipFooter"></div></div>');
        }
        $('#tooltip').width($('.session-details').width() - 30);
        $('#tooltip').css('top', 30);
        $('#tooltip').css('left', 0);
        $('#tooltip').fadeIn('500');
    }).mouseout(function() {
        $(this).attr('title', $('.tipBody').html());
        $(this).children('div#tooltip').remove();
    });
});



/** cookie message **/
$(document).ready(function() {

    if (osjs.cookie('OS_AcceptCookies') === null) {

        if ($('#locale-aux').attr('data-locale-continent') === 'EU') {
            $('.invisiblediv').show();
        } else {
            $('.invisiblediv').hide();
            var d = new Date();
            var month = d.getMonth() + 1;
            var day = d.getDate();
            var output = d.getFullYear() + '/' +
                (month < 10 ? '0' : '') + month + '/' +
                (day < 10 ? '0' : '') + day;

            osjs.cookie("OS_AcceptCookies", output, {
                expires: 365,
                path: '/'
            });
        }



        if ($('.warning_EU_cookiemsg').length >= 1) {
            $('.CloseArea').click(function() {

                var d = new Date();
                var month = d.getMonth() + 1;
                var day = d.getDate();
                var output = d.getFullYear() + '/' +
                    (month < 10 ? '0' : '') + month + '/' +
                    (day < 10 ? '0' : '') + day;

                osjs.cookie("OS_AcceptCookies", output, {
                    expires: 365,
                    path: '/'
                });
                $('.warning_EU_cookiemsg').slideUp();
            });

            $('.warning_EU_cookiemsg').slideDown(500);
        }

    }

});







/** dropdown menus **/
var initial;

function hideDropDown() {

    $('.navigation-bar li[class*="active"]').removeClass("active");
    $("[data-dropdown-wrapper]").hide();
    $('body').removeClass('mega-menu'); // same as below

    if (window.location.pathname !== '/') {
        initial.addClass("active");
    };

}

function toggleDropdowMenu(a) {
    var currentActive = $('.navigation-bar li[class*="active"]');
    $('.navigation-bar li[class*="active"]').removeClass("active");
    $("[data-dropdown-wrapper]").hide();
    $("[data-dropdown-wrapper='" + $(a).attr("data-name") + "']").toggle();
    $('body').addClass('mega-menu'); // This is used to override a CSS style that colides with the "active" CSS style used by the menu entries
    if (a.parent().hasClass("active")) {
        a.parent().removeClass("active");
        currentActive.addClass("active");
    } else {
        a.parent().addClass("active");
        currentActive.removeClass("active");
    }
}

var mkto_resized = false;

$(document).ready(function() {

    initial = $('.navigation-bar li[class*="active"]');

    //add overlay
    $('body').append('<div class="overlay"></div>');

    $("[data-option=dropdown-hover]").click(function(a) {
        a.preventDefault(), a.stopPropagation();

        $(window).trigger('hover-menu');

        var b = $(this),
            menuName = $(b).attr("data-name"),
            c = $("[data-dropdown-wrapper='" + menuName + "']");
        if (c.is(":visible")) {
            // Davide was here!
            hideDropDown(b);
            //$(this).closest('ul').find('li.active').removeClass('active');
            //$(this).get(0).click();
            //c.find('a').get(0).click();
        } else {
            $(this).closest('ul').find('li.active').removeClass('active');
            toggleDropdowMenu(b);
            $("[data-dropdown-wrapper]").click(function(a) {
                a.stopPropagation();
            });
            $(document).on("click", function() {
                hideDropDown(b)
            });
        }
    });


});

var mkto_resized = false;
$(document).ready(function() {
    //marketo iframe width resize for iphone cases when width is 100%
    if ($.browser.mobile) {
        $('#mkto_frame').bind('load', function() {
            if ($(this).css('width') !== undefined && $(this)[0].style.width === '100%' || $('.video-container #mkto_frame') !== undefined) {
                var wdth = window.innerWidth - 20;
                if (parseInt($(this).css('width')) >= wdth) {
                    mkto_resized = true;
                    $(this).css('width', wdth);
                }
            }
        });
    }
});


//marketo iframe width resize for iphone cases when width is 100%, when orientation changes from portrait to landscape
$(window).resize(function() {
    if ($.browser.mobile) {
        if ($('#mkto_frame').css('width') !== undefined) {
            var wdth = window.innerWidth - 20;
            if (mkto_resized) {
                $('#mkto_frame').css('width', wdth);
            }
        }
    }
});




/* google universal mimic
 *  google tag manager is configured to decorate iframe urls via javascript
 *  since we don't have that running on development environments we need to
 *  have the identical logic here */
if (window.location.host !== "www.outsystems.com") {
    $(function() {
        var iframes = document.getElementsByTagName('iframe'),
            i = iframes.length,
            iframe, src;

        //now loop through all iframes, decorate the source url and remove the display none
        while (i--) {
            iframe = iframes[i];
            if (iframe.src === 'about:blank' && iframe.getAttribute('data-iframe-src')) {
                src = iframe.getAttribute('data-iframe-src');
                iframe.src = src;
            }
        }

    });
};








/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|iPhone|iPad|iPod|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
})(navigator.userAgent || navigator.vendor || window.opera);
