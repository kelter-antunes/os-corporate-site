var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
osjs(function(a) {
    var b = document.location.href;
    if (b.indexOf("#") !== -1) {
        b = b.replace("agile-platform", "platform");
        var c = b.replace(/.*#/, "");
        c = c.replace(/&_=.*/, "");

        if (osjs("a[href$=\"" + c + "\"]").length !== 0){
            if (c != "_"){
                setTimeout(function() {
                    osjs("a[href$=\"" + c + "\"]")[0].click();
                }, 1e3);
            }
        }else{
            c = c + '/';
            if (c != "_"){
                setTimeout(function() {
                    osjs("a[href$=\"" + c + "\"]")[0].click();
                }, 1e3);
            }
        }
        
    }

    if ((/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) && width < 767) {} else {
        a(".popup_link").each(function() {
            if (!osjs(this).attr("id"))
                osjs(this).attr("id", Math.random().toString().replace(".", ""));
            RichWidgets_Popup_Editor_init(osjs(this).attr("id"), "", " ", -1, -1, osjs(this).attr("href"));
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

$(function() {
    if ((/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) && width < 767) {} else {

        $('.magnific_popup_link').magnificPopup({
            type: 'ajax',
            alignTop: true,
            showCloseBtn: false,
            modal: true,
            tClose: 'Close',
            callbacks: {
                open: function() {},
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

// Create IE + others compatible event handler
var eventMethod_Global = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer_Global = window[eventMethod_Global];
var messageEvent_Global = eventMethod_Global == "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
eventer_Global(messageEvent_Global, function(e) {
    if (e.data !== "") {

        if (e.data === 'kissEvent') {
            var pathName = e.srcElement.location.href;

            var isAppContactUS = (pathName === '/contact-us-apps/');
            var isGlobalContactUS = (pathName === '/contact-us-global/');
            var isOfficeContactUS = (pathName === '/company/contact-us/');


            if (isAppContactUS) {
                trackEvent('CS - Submit Contact US Apps');

            } else if (isGlobalContactUS) {
                trackEvent('CS - Submit Contact US Global');

            } else if (isOfficeContactUS) {
                trackEvent('CS - Submit Contact US Offices');

            }

        };


    }
}, false);

osjs(function(a) {
    osjs('.scrollup').click(function(event) {
        event.preventDefault();
        osjs("html, body").animate({
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

        $.getJSON("http://www.telize.com/geoip?callback=?",
            function(json) {
                if (json.continent_code == 'EU')
                    $('.invisiblediv').show();
                else {
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
            }
            );


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



/** pardot protocol fix **/
function checkhttps() {

    $("iframe").each(function() {
        if ($(this).attr("src").match('^http://go.outsystems.com')) {
            $(this).attr("src", $(this).attr("src").replace("http://go.outsystems.com", "https://go.pardot.com"));
        }
    });
    $("iframe").each(function() {
        if ($(this).attr("src").indexOf("/") === 0) {

            $(this).contents().find('iframe').each(function() {
                if ($(this).attr("src").match('^http://go.outsystems.com')) {
                    $(this).attr("src", $(this).attr("src").replace("http://go.outsystems.com", "https://go.pardot.com"));
                }
            });
        }
    });
}

$().ready(function() {
    if ("https:" == document.location.protocol) {
        setInterval(function() {
            checkhttps();
        }, 1000);
        checkhttps();
    }
});


/** marketo iframe resize hack **/
var initialH;
var mktoH = function marketoHeight() {
    initialH = $('#mkto_frame').contents().height() + 'px';
    $('#mkto_frame').height(initialH);
};
$(document).ready(function() {
    var mktoFrame = $("iframe[src*='http://go1.outsystems.com/']");
    if (mktoFrame.length !== 0) {
        mktoFrame.parent().css('overflow-x', 'hidden');
        setTimeout(mktoH, 2500);
    }

});



/** dropdown menus **/
var currentActive;

function hideDropDown(_elem) {
    $('.navigation-bar li[class=active]').removeClass('active');
    $('[data-dropdown-wrapper]').hide();
}

function toggleDropdowMenu(_elem) {
    $('.navigation-bar li[class=active]').removeClass('active');
    $('[data-dropdown-wrapper]').hide();
    $("[data-dropdown-wrapper='" + $(_elem).attr('data-name') + "']").toggle();

    if (_elem.parent().hasClass('active')) {
        _elem.parent().removeClass('active');
        currentActive.addClass('active');
    } else {
        _elem.parent().addClass('active');
        currentActive.removeClass('active');
    }
}
$(document).ready(function() {
    currentActive = $('.navigation-bar li[class=active]');
    $('[data-option=dropdown]').click(function(e) {
        e.preventDefault();
        e.stopPropagation();

        var clicked = $(this);

        if ($("[data-dropdown-wrapper='" + $(clicked).attr('data-name') + "']").is(":visible")) {
            hideDropDown(clicked);
        } else {
            toggleDropdowMenu(clicked);
        }


        $('[data-dropdown-wrapper]').click(function(event) {
            event.stopPropagation();
        });

        $(document).on('click', function(e) {
            hideDropDown(clicked);
        });
    });
});






/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
 (function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|iPhone|iPad|iPod|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
})(navigator.userAgent || navigator.vendor || window.opera);