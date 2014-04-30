var debugEnabled = window.location.hostname != "outsystems.com";

(function(d, b, h) {
    var c = a("html", "body"),
        g = f(location.pathname);

    function f(i) {
        return i.replace(/^\//, "").replace(/(index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "")
    }

    function a(m) {
        var l = 0,
            o = arguments.length,
            j, k, n;
        for (; l < o; l++) {
            n = arguments[l], j = d(n);
            if (j.scrollTop() > 0) {
                return n
            } else {
                j.scrollTop(1);
                k = j.scrollTop() > 0;
                j.scrollTop(0);
                if (k) {
                    return n
                }
            }
        }
        return []
    }

    function e(l) {
        var k = 17,
            j = 100,
            i = 50 * 1000 / 34;
        return (l / i) * 1000
    }
    d.fn.smoothScrollTrigger = function(i) {
        return this.each(function(l, k) {
            var m = f(this.pathname) || g,
                o, j, n;
            if (g == m && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/, "")) {
                j = d(this.hash);
                n = this.hash;
                o = n && j.length ? j.offset().top : null
            }
            d(this).bind("click", function(p) {
                p.preventDefault();
                osjs('#device').css('height', '200px');
                d.smoothScrollTo(j, function() {
                    if (n) {
                        location.hash = n
                    }
                })
            })
        })
    };
    d.smoothScrollTo = function(i, m) {
        var j = d(i).offset().top,
            l = d(i).attr("id") || null,
            k;
        k = e(Math.abs(j - d(b).scrollTop()));
        if (!c.length) {
            c = a("html", "body")
        }
        if (c.length) {
            d(c).stop().animate({
                scrollTop: j
            }, k, function() {
                osjs('#device').css('height', '0px');
                if (m && typeof m === "function") {
                    m()
                }
            })
        } else {
            d("html, body").stop().animate({
                scrollTop: j
            }, k, function() {
                if (m && typeof m === "function") {
                    m()
                }
            })
        }
    }
})(osjs, this);
osjs(document).ready(function() {
    osjs(".hist-back-link").click(function(event) {
        event.preventDefault();
        history.back(1);
    });

    var stickyPoints = [{
        'id': 'sticky',
        'class': 'sticky',
        'offset': 0
    }, {
        'id': 'development',
        'class': 'development',
        'offset': 0
    }, {
        'id': 'integrations',
        'class': 'integrations',
        'offset': 0
    }, {
        'id': 'change-management',
        'class': 'change-management',
        'offset': 0
    }, {
        'id': 'operations',
        'class': 'operations',
        'offset': 0
    }],
        sticky = osjs('#sticky');
    osjs.each(stickyPoints, function(i, point) {
        if (osjs('#' + point.id).length) {
            point.offset = osjs('#' + point.id).offset().top;
        }
    });
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1;
    var isipad = ua.search("ipad") > -1;
    if (isipad) {
        osjs('.sticky-mist').remove();
    }
    var update = function(e) {
        var currentPosition = osjs(window).scrollTop();
        osjs.each(stickyPoints, function(i, point) {
            if (osjs('#sticky').hasClass('sticky')) {
                osjs('.sticky-mist').show();
            } else {
                osjs('.sticky-mist').hide();
            }
            if (osjs('.TopSlider').is(":visible")) {
                if (osjs('#sticky').hasClass('sticky')) {
                    osjs('#sticky').css('top', '30px');
                    osjs('.sticky-mist').css('top', '30px');
                } else {
                    osjs('#sticky').css('top', '');
                    osjs('.sticky-mist').css('top', '');
                }
            } else {
                osjs('#sticky').css('top', '');
                osjs('.sticky-mist').css('top', '');
            }
            if (currentPosition >= (point.offset - 10)) {
                sticky.removeClass();
                if (i != 0) {
                    sticky.addClass('sticky ' + point['class']);
                } else {
                    sticky.addClass(point['class']);
                }
                if (isAndroid) {
                    osjs('#sticky').css('top', window.pageYOffset + 'px');
                }
            } else {
                sticky.removeClass(point['class']);
            }
        });
    }
    osjs(window).bind("touchmove", update).bind("scroll", update);
    osjs("a.scroll-to").smoothScrollTrigger();
});

osjs(function(a) {
    var b = document.location.href;
    if (b.indexOf("#") != -1) {
        b = b.replace("agile-platform", "platform");
        var c = b.replace(/.*#/, "");
        c = c.replace(/&_=.*/, "");

        if (c != "_")
            setTimeout(function() {
                osjs("a[href$=\"" + c + "\"]").click()
            }, 1e3)
    }

    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if ((/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) && width < 767) {} else {
        a(".popup_link").each(function() {
            if (!osjs(this).attr("id"))
                osjs(this).attr("id", Math.random().toString().replace(".", ""));
            RichWidgets_Popup_Editor_init(osjs(this).attr("id"), "", " ", -1, -1, osjs(this).attr("href"))
        });
    }
    a(".tooltip_link").each(function() {
        if (!osjs(this).attr("id"))
            osjs(this).attr("id", Math.random().toString().replace(".", ""));
        RichWidgets_Popup_Editor_init(osjs(this).attr("id"), "", " ", -1, -1, osjs(this).attr("href"))
    });

    a(".popup_link").click(function() {
        var b = a(this).attr("id");
        if (typeof pageTracker != "undefined")
            pageTracker._trackPageview(a("#" + b).attr("href"));

        setTimeout(function() {
            osjs(".Popup").live("dialogclose", function() {
                //document.location.href = "#_";
            })
        }, 1e3)
    })

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
        }, 1e3)


    })
});


// Create IE + others compatible event handler
var eventMethod_Global = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer_Global = window[eventMethod_Global];
var messageEvent_Global = eventMethod_Global == "attachEvent" ? "onmessage" : "message";

//var eventFirstRun = true;

// Listen to message from child window
eventer_Global(messageEvent_Global, function(e) {
    if (e.data != "") {
        $("#pd_frame").css('height', e.data);
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
    }).mousemove(function(e) {
        //$('#tooltip').css('top', e.pageY - 30);
        //$('#tooltip').css('left', e.pageX + 20);
    }).mouseout(function() {
        $(this).attr('title', $('.tipBody').html());
        $(this).children('div#tooltip').remove();
    });
});


/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|iPhone|iPad|iPod|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
})(navigator.userAgent || navigator.vendor || window.opera);