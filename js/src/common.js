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
    //new by sbe
    options.blankImage = 'data:image/png;base64,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UmVhZHlxyWU8AAADKmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzIgNzkuMTU5Mjg0LCAyMDE2LzA0LzE5LTEzOjEzOjQwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNS41IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ1NkYzMjAwODNEMTExRTZBQ0QwOTFFNTIyOEUzM0JEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ1NkYzMjAxODNEMTExRTZBQ0QwOTFFNTIyOEUzM0JEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REU3MkEwN0Y4M0NDMTFFNkFDRDA5MUU1MjI4RTMzQkQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REU3MkEwODA4M0NDMTFFNkFDRDA5MUU1MjI4RTMzQkQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz74jeo0AAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAABxJREFUeNrswQEBAAAAgiD/r25IQAEAAMC9CTAADx8AAf9KcrwAAAAASUVORK5CYII=';

})(window.jQuery || window.Zepto);

console.log('call plugin lazyLoadXT');

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




//slider do badruz
//Init bxslider after all images are loaded
$( document ).ready(function() {
    $('.slider1').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        slideMargin: 0,
        onSliderLoad: function(){
            console.log('loaded');
            $('.customers-sublevel-menu .hero-placeholder > div.container').css('opacity', '1');
            $('.ShowOnLoad').css('opacity', '1');
        }
    });

});

$(document).on('click', '.slider_watch_btn', function() {
    var v_idx = $(this).data('video-index');
    $('.case-study-video-wrapper[data-video-index=' + v_idx + ']').fadeIn();
    $('.case-study-videos').fadeIn();

});


$(document).on('click', '.close_vid_btn', function() {
    $(this).closest('.case-study-videos').fadeOut();
    $(this).closest('.case-study-video-wrapper').fadeOut();
});


//Detect a click outside the hero-placeholder and checks if the video container is being displayed, if yes, hides it
$(document).click(function(event) {
    if(!$(event.target).closest('.hero-placeholder').length && !$(event.target).is('.hero-placeholder')) {
        if($('.case-study-videos').is(":visible")) {
            $('.case-study-videos').fadeOut();
            $('.case-study-video-wrapper').fadeOut();
        }
    }
})

//Detect "escape" key to close the video container
$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
        if($('.case-study-videos').is(":visible")) {
            $('.case-study-videos').fadeOut();
            $('.case-study-video-wrapper').fadeOut();
        }
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
    FixStickyTopMenu();
    FixStickyBottomMenu(); 
    ToggleStickyBottomMenu();   
});

function FixStickyTopMenu(){
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

    }
}

function FixStickyBottomMenu(){
    var pathname = window.location.pathname;

    if (!$.browser.mobile) {

        var sticky = $('.welcome-to-os-nav');
        var $body = $('body');
        if (sticky.length == 0) {
            return;
        }
        var top = -1;
        var fixMenuBtm = function() {
            if (top == -1) {
                top = sticky.offset().top;
            }
            var scroll = $(window).scrollTop();

           
             if(scroll <= 50){
                $('.page-nav li').removeClass('active');
            }
           
            if (scroll >= top) {
                sticky.addClass('fixed');
            } else{
                sticky.removeClass('fixed');           
            }
        };
        $(window).load(fixMenuBtm).scroll(fixMenuBtm);

        $('.welcome-to-os-nav .page-nav li a[href="' + window.location.hash + '"]').parent().addClass('active');

    }
}

function ToggleStickyBottomMenu(){
     //@author sbe     
       if (!$.browser.mobile) {  

        $(document).on("scroll", onScroll);

        var navigateTo =  function(hash){
                if(history.replaceState) {
                    history.replaceState(null, null, hash);
                }
                else {
                    location.hash = hash;
                }
        };

        $('.page-nav li a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");

            $(this).each(function () {
                $(this).parent().removeClass('active');
            })
            $(this).parent().addClass('active');

            var target = this.hash;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top-60
            }, 500, 'swing', function () {                           
                $(document).on("scroll", onScroll); 
                navigateTo(target);
            });
        });

        function onScroll(event){
            var scrollPosition = $(document).scrollTop();
            $('.page-nav li a').each(function () {

                var currentLink = $(this);
                var refElement = $(currentLink.attr("href"));
                var elemTop = refElement.position().top;
                var elemBottom = refElement.position().top + refElement.height();

                console.log('%o - %o %o %o', currentLink.attr("href"), elemTop, scrollPosition, elemBottom);
                
                if (elemTop-500 <= scrollPosition && elemBottom+500 > scrollPosition) {
                    $('.page-nav li').removeClass("active");
                    currentLink.parent().addClass("active");
                    //navigateTo(currentLink.attr("href"));
                }
                else{
                    currentLink.parent().removeClass("active");
                }
            });
        }
    }    
}

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
              if (!$('#gnewtonIframe').length>0) {
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
                } catch (e) {}}

            }
        }

    } catch (e) {
        console.log(e);
    }

}, false);


/* apps demo events
$(function() {
    $('a[href*="applicationname"]').click(function(event) {
        var appUrl = $(this).attr('href');
        var appNameParam = 'applicationname=';
        var n = appUrl.lastIndexOf(appNameParam);
        var appName = appUrl.substring(n + appNameParam.length);

        //var _gaq = _gaq || [];
        try {
            osAnalytics.trackEvent("Try Now", {category: "Apps", label: appName});
        } catch (err) {}
    });

});

*/

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


/** search bar **/

function hideSearchBar(){
 $('.header-hero-wrapper div[class*="with-search"]').removeClass("with-search");
}


/** dropdown menus **/
var initial;

function hideDropDown() {

    $('.navigation-bar li[class*="open"]').removeClass("open");
    $("[data-dropdown-wrapper]").hide();
    $('body').removeClass('mega-menu'); // same as below

    if (window.location.pathname !== '/') {
        initial.addClass("open");
    };

}

function toggleDropdowMenu(a) {
    var currentActive = $('.navigation-bar li[class*="open"]');
    $('.navigation-bar li[class*="open"]').removeClass("open");
    $("[data-dropdown-wrapper]").hide();
    $("[data-dropdown-wrapper='" + $(a).attr("data-name") + "']").toggle();
    $('body').addClass('mega-menu'); // This is used to override a CSS style that colides with the "active" CSS style used by the menu entries
    if (a.parent().hasClass("open")) {
        a.parent().removeClass("open");
        currentActive.addClass("open");
    } else {
        a.parent().addClass("open");
        currentActive.removeClass("open");
    }
}

var mkto_resized = false;

$(document).ready(function() {

    initial = $('.navigation-bar li[class*="open"]');

    //add overlay
    $('body').append('<div class="overlay"></div>');

    $("[data-option=dropdown-hover]").on("click tap", function(a) {
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
            $(this).closest('ul').find('li.open').removeClass('open');
            toggleDropdowMenu(b);
            $("[data-dropdown-wrapper]").click(function(a) {
                a.stopPropagation();
            });
            $(document).on("click tap", function() {
                hideDropDown(b);
                hideSearchBar();
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
