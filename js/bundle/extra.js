function IsEmail(a) {
    var b = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return b.test(a) }

function sendKISScontextToMarketo() { setTimeout(function() {
        var a, b, c;
        try {
            var d = 1 === $(framePopupSelector).contents().find(frameMktoSelector).length;
            if (d ? (a = $(framePopupSelector).contents().find(frameMktoSelector), b = $(framePopupSelector).attr("src").split("/"), c = b[b.length - 2]) : (a = document.getElementById("mkto_frame").contentWindow, b = window.location.pathname.split("/"), c = b[b.length - 2]), void 0 !== a) {
                var e = { input: "KM_LastFormSubmissionContext", origin: "website", currPageContext: c };
                d ? a[0].contentWindow.postMessage(e, "*") : a.postMessage(e, "*") } } catch (f) {} }, 1e3) }

function hideDropDown() { $('.navigation-bar li[class*="active"]').removeClass("active"), $("[data-dropdown-wrapper]").hide(), $("body").removeClass("mega-menu"), "/" !== window.location.pathname && initial.addClass("active") }

function toggleDropdowMenu(a) {
    var b = $('.navigation-bar li[class*="active"]');
    $('.navigation-bar li[class*="active"]').removeClass("active"), $("[data-dropdown-wrapper]").hide(), $("[data-dropdown-wrapper='" + $(a).attr("data-name") + "']").toggle(), $("body").addClass("mega-menu"), a.parent().hasClass("active") ? (a.parent().removeClass("active"), b.addClass("active")) : (a.parent().addClass("active"), b.removeClass("active")) }

function RichWidgets_Popup_Editor_init(a, b, c, d, e, f, g, h, i, j) {
    var k = function(a) {
        var b, c = !1;
        try {
            if (b = osjs(a).attr("href"), "undefined" == typeof b) {
                var d = a.getAttribute("onclick");
                if ("undefined" != typeof d && (c = !0, null != d)) {
                    var e;
                    null != (e = d.toString().match(/href='([^']*)'/)) && (b = e[1]) } } } catch (f) {}
        return [b, c] };
    osjs().ready(function(l) {
        function m(a, b, c, d, e, f) { RichWidgets_Popup_Editor_Close(null);
            for (var h = l(".ui-dialog-content"), i = 0; i < h.length; i++)
                if (osjs.data(h.get(i), RichWidgets_Popup_Editor_ClosingTag) == RichWidgets_Popup_Editor_ClosingValue) return setTimeout(function() { m(a, b, c, d, e, f) }, 13), !1;
            if (l(e).show(), -1 == c && (c = RichWidgets_Popup_Editor_InitialHeight), l(a).show().dialog({ dialogClass: "Popup", resizable: !1, autoResize: !1, closeOnEscape: !f, bgiframe: !0, draggable: !1, autoOpen: !0, title: b, modal: !(g === !1), height: c, position: "center", width: -1 == d ? RichWidgets_Popup_Editor_InitialWidth : d, zIndex: RichWidgets_Popup_Editor_Index, close: function() { l(a).find("iframe").unbind("load"), l(a).find("iframe").attr("src", "about:blank"), document.location.href = "#_", setTimeout(function() { l(a).find("iframe").empty(), l(a).empty() }, 13) } }), l(a).find("iframe").height(0), document.location.replace("#" + o), " " == b) l(".ui-dialog-titlebar").height(0), l(".ui-dialog-titlebar-close").attr("class", "ui-dialog-titlebar-close-no-title").html("").hide(), l(".ui-dialog").css("overflow", "visible");
            else {
                var j = l(".ui-dialog-titlebar").height();
                l(a).parents(".Popup").height(c + j) }
            f && l(".ui-dialog-titlebar-close, .ui-dialog-titlebar-close-no-title").remove() }
        a = "#" + a;
        var n, o = osjs(a).attr("href");
        try { n = l(a).get(0) } catch (p) {}
        if ("undefined" != typeof n) { RichWidgets_Popup_Editor_ParentUrl = f;
            var q = k(n);
            linkHref = q[0];
            var r = q[1];
            if ("undefined" != typeof linkHref && "" != linkHref && "#" != linkHref && 0 != linkHref.indexOf("javascript:")) r && n.setAttribute("onclick", n.getAttribute("onclick").toString().replace("window.location.href=", "return false;window.location.href=")), null != n.getAttribute("onclick") && n.setAttribute("onclick", n.getAttribute("onclick").toString().replace("if( ret != true )", "osjs('" + a + "').get(0).setAttribute('confirmed', ret); if( ret != true )")), l(n).click(function() {
                if (null != n.getAttribute("disabled")) {
                    var a = n.getAttribute("disabled").toString().toLowerCase();
                    if ("disabled" == a || -1 != a.indexOf("true")) return !1 }
                if ("false" == n.getAttribute("confirmed")) return !1;
                OsIsIE() && osFocusBackend.ClearFocusedElement();
                var f = l("<div style='text-align: center; display: none;'></div>").appendTo("body");
                f.append('<iframe width="100%" scrolling="auto" height="100%" frameborder="0" src="javascript:void(0);"/>');
                var g = "Loading content...",
                    o = f.prepend("<div id='pleaseWaitDiv' style='text-align: center; color: #FFF; font-size: 18px; padding: 15px 15px 15px 50px; position: absolute; background: #333 url(/CMS_BackOffice/ResourceLink.aspx?ResourceName=ajax-loader) no-repeat 10px 50%; -moz-border-radius: 15px; -webkit-border-radius: 15px; border-radius: 15px; opacity: 0.7; width: 150px; left: 50%; margin-left: -107px;'>" + g + "</div>");
                m(f, c, d, e, o, j), RichWidgets_Popup_Editor_notifyWidget = b;
                var p = k(n)[0],
                    q = p.replace(/(\?|&)_=.*?(&|$)/, "$1_=" + +(new Date).now + "$2"),
                    r = q + (q == p ? (q.indexOf("?") >= 0 ? "&" : "?") + "_=" + +new Date : "");
                return f.find("iframe").attr("src", r),
                    function(a) { a.find("iframe").load(function() {
                            if (RichWidgets_Popup_Editor_resize(a, e, d, !0) && h) {
                                var b = this.contentWindow;
                                b.osAjaxBackend.BindAfterAjaxRequest(function() { b.parent.RichWidgets_Popup_Editor_resize(a, e, d, i) }) } }) }(f), f = null, o = null, !1 });
            else try { window.OsHandleException(new Error("Popup link id must be the id of a Link or Button Widget with Method Navigate."), l.osErrorCodes.SystemJavascriptError, "Popup_Editor") } catch (p) {} } }) }

function RichWidgets_Popup_Editor_resize(a, b, c, d) {
    if ("undefined" == typeof d && (d = c, c = b, b = a, a = osjs(".ui-dialog-content")), osjs.data(a.get(0), RichWidgets_Popup_Editor_ClosingTag) == RichWidgets_Popup_Editor_ClosingValue) return !1;
    var e = a.find("iframe")[0],
        f = document.location.href.replace(/(https?:\/\/[^\/]*).*/, "$1"),
        g = e.src.replace(/(https?:\/\/[^\/]*).*/, "$1"),
        h = g.toLowerCase() == f.toLowerCase() || 0 != g.indexOf("http");
    if (!h && (-1 == b || -1 == c)) throw new Error("A Popup with a screen from a different server (or https) needs explicict width, height set.");
    if (h) {
        var i = e.contentDocument ? e.contentDocument : e.contentWindow.document;
        if (0 == i.documentElement.scrollHeight) return !1 }
    var j = osjs(a).parents(".Popup").outerHeight(),
        k = -1 == b ? osjs(i).width() : b,
        l = -1 == c ? osjs(i).height() : c,
        m = osjs(".ui-dialog-titlebar").height(); - 1 == c ? osjs.browser.msie && (l += 1) : h && (i.body.style.height = "auto"), osjs(a).height(l), osjs(i).find(".ECT_FeedbackContainer").hide();
    var n = osjs(a).parents(".Popup"),
        o = {};
    if (-1 == c) {
        var p = parseInt(n.css("top"));
        d && (o.top = Math.max(20, p + (j - (l + m)) / 2)), o.height = l + m }
    if (-1 == b) {
        var q = parseInt(n.css("left"));
        d && (o.left = q + (n.width() - k) / 2), o.width = k }
    if (n.width() == o.width && n.height() == o.height - (osjs.browser.msie ? 1 : 0)) return osjs("#pleaseWaitDiv").hide(), osjs(a).height(l - (osjs.browser.msie ? 1 : 0)), !0;
    n.width() == RichWidgets_Popup_Editor_InitialWidth && n.height() == RichWidgets_Popup_Editor_InitialHeight && osjs(e).height(0);
    var r = function() { setTimeout(function() { osjs(a).dialog("size"), osjs(".ui-dialog-titlebar-close-no-title").css("display", "block"), osjs(a).find("iframe").height("100%").width(o.width) }, 13) },
        s = osjs("#pleaseWaitDiv");
    return s.hide(), -1 == c || -1 == b ? n.animate(o, { duration: 200, complete: r }) : r(), i = null, n = null, !0 }

function RichWidgets_Popup_Editor_Close() { popupToClose = osjs(".ui-dialog-content"), osjs(popupToClose).data(RichWidgets_Popup_Editor_ClosingTag, RichWidgets_Popup_Editor_ClosingValue), setTimeout(function() { osjs(popupToClose).dialog("close"), osjs(popupToClose).remove() }, 0) }! function(a, b, c, d) {
    function e(a, b) {
        return a[b] === d ? s[b] : a[b] }

    function f(a, b) {
        var c = s["on" + a];
        c && (v(c) ? c.call(b[0]) : b.addClass(c.addClass || "").removeClass(c.removeClass || "")), b.trigger("lazy" + a, [b]), j() }

    function g(b) { f(b.type, a(this).off(o, g)) }

    function h(c) {
        if (y.length) { c = c || s.forceLoad, z = 1 / 0;
            var d, e, h = u.scrollTop(),
                i = b.innerHeight || u.height(),
                j = b.innerWidth || u.width();
            for (d = 0, e = y.length; e > d; d++) {
                var k, l = y[d],
                    n = l[0],
                    p = l[m],
                    r = !1,
                    t = c;
                if (a.contains(q, n)) {
                    if (c || !p.visibleOnly || n.offsetWidth || n.offsetHeight) {
                        if (!t) {
                            var w = n.getBoundingClientRect(),
                                x = p.edgeX,
                                A = p.edgeY;
                            k = w.top + h - A - i, t = h >= k && w.bottom > -A && w.left <= j + x && w.right > -x }
                        if (t) { f("show", l);
                            var B = p.srcAttr,
                                C = v(B) ? B(l) : n.getAttribute(B);
                            C && (l.on(o, g), n.src = C), r = !0 } else z > k && (z = k) } } else r = !0;
                r && (y.splice(d--, 1), e--) }
            e || f("complete", a(q)) } }

    function i() { A > 1 ? (A = 1, h(), setTimeout(i, s.throttle)) : A = 0 }

    function j(a) { y.length && (a && "scroll" === a.type && a.currentTarget === b && z >= u.scrollTop() || (A || setTimeout(i, 0), A = 2)) }

    function k() { u.lazyLoadXT(), j() }

    function l() { h(!0) }
    var m = "lazyLoadXT",
        n = "lazied",
        o = "load error",
        p = "lazy-hidden",
        q = c.documentElement || c.body,
        r = b.onscroll === d || !!b.operamini || !q.getBoundingClientRect,
        s = { autoInit: !0, selector: "img[data-src]", blankImage: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", throttle: 99, forceLoad: r, loadEvent: "pageshow", updateEvent: "load orientationchange resize scroll touchmove", forceEvent: "", oninit: { removeClass: "lazy" }, onshow: { addClass: p }, onload: { removeClass: p, addClass: "lazy-loaded" }, onerror: { removeClass: p }, checkDuplicates: !0 },
        t = { srcAttr: "data-src", edgeX: 0, edgeY: 0, visibleOnly: !0 },
        u = a(b),
        v = a.isFunction,
        w = a.extend,
        x = a.data || function(b, c) {
            return a(b).data(c) },
        y = [],
        z = 0,
        A = 0;
    a[m] = w(s, t, a[m]), a.fn[m] = function(c) { c = c || {};
        var d, g = e(c, "blankImage"),
            h = e(c, "checkDuplicates"),
            i = e(c, "scrollContainer"),
            k = {};
        a(i).on("scroll", j);
        for (d in t) k[d] = e(c, d);
        return this.each(function() {
            if (this === b) a(s.selector).lazyLoadXT(c);
            else {
                if (h && x(this, n)) return;
                var d = a(this).data(n, 1);
                g && "IMG" === d[0].tagName && !this.src && (this.src = g), d[m] = w({}, k), f("init", d), y.push(d) } }) }, a(c).ready(function() { f("start", u), u.on(s.loadEvent, k).on(s.updateEvent, j).on(s.forceEvent, l), s.autoInit && k() }) }(window.jQuery || window.Zepto, window, document),
function(a) {
    var b = a.lazyLoadXT;
    b.selector += ",video,iframe[data-src]", b.videoPoster = "data-poster", a(document).on("lazyshow", "video", function(c, d) {
        var e = d.lazyLoadXT.srcAttr,
            f = a.isFunction(e);
        d.attr("poster", d.attr(b.videoPoster)).children("source,track").each(function() {
            var b = a(this);
            b.attr("src", f ? e(b) : b.attr(e)) }), this.load() }) }(window.jQuery || window.Zepto);
var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
$(window).load(function() { 0 === $('a.logo[href^="/nextstep"]').length && ($(".spacer-bg").width(840 - $("span[id*=ListSection]").outerWidth() + 1), $(".navigation-bar").css("background-color", "transparent")) }), osjs(function(a) {
        var b = document.location.href;
        if (-1 !== b.indexOf("#")) { b = b.replace("agile-platform", "platform");
            var c = b.replace(/.*#/, "");
            c = c.replace(/&_=.*/, ""), 0 !== osjs('a[href$="' + c + '"]').length ? "_" != c && setTimeout(function() {
                try { osjs('a[href$="' + c + '"]')[0].click() } catch (a) {} }, 1e3) : (c += "/", "_" != c && setTimeout(function() {
                try { osjs('a[href$="' + c + '"]')[0].click() } catch (a) {} }, 1e3)) } /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) && 767 > width || a(".popup_link").each(function() { osjs(this).attr("id") || osjs(this).attr("id", Math.random().toString().replace(".", ""));
            var a = osjs(this).attr("popup-height");
            void 0 === a && (a = -1), RichWidgets_Popup_Editor_init(osjs(this).attr("id"), "", " ", a, -1, osjs(this).attr("href"), !0, !0) }), a(".tooltip_link").each(function() { osjs(this).attr("id") || osjs(this).attr("id", Math.random().toString().replace(".", "")), RichWidgets_Popup_Editor_init(osjs(this).attr("id"), "", " ", -1, -1, osjs(this).attr("href")) }), a(".popup_link").click(function() {
            var b = a(this).attr("id"); "undefined" != typeof pageTracker && pageTracker._trackPageview(a("#" + b).attr("href")) }) }), osjs(".Popup").live("dialogopen", function(a, b) { osjs("iframe").load(function() { setTimeout(function() {
                var a = $(window).scrollTop(),
                    b = osjs(".Popup").offset().top,
                    c = b - a;
                30 > c && osjs(".Popup").animate({ top: $(window).scrollTop() + 30 }, 200) }, 1e3) }) }),
    function(a) {
        var b = a.lazyLoadXT;
        b.forceEvent += " loadmeeeee", b.forceEvent += " hover-menu", b.edgeY = 200 }(window.jQuery || window.Zepto), $(function() {
        if ("/" === window.location.pathname) {
            var a = 15,
                b = $("#locale-aux").attr("data-locale"); "gl" !== b && void 0 !== b || (b = "global");
            var c = $(".customer-matrix-entry[data-" + b + "].customer-matrix-entry[data-" + b + '!=""]'),
                d = c.length;
            c.sort(function(a, c) {
                var d = parseInt($(a).attr("data-" + b)),
                    e = parseInt($(c).attr("data-" + b));
                return e > d ? -1 : d > e ? 1 : 0 }), d > 15 && (c.slice(0, 14), d = 15);
            var e = a - d;
            if (0 != e) {
                var f;
                f = a > e ? $(".customer-matrix-entry[data-" + b + '=""].customer-matrix-entry[data-global].customer-matrix-entry[data-global!=""]').slice(0, e) : $('.customer-matrix-entry[data-global].customer-matrix-entry[data-global!=""]').slice(0, e), f.sort(function(a, b) {
                    var c = parseInt($(a).attr("data-global")),
                        d = parseInt($(b).attr("data-global"));
                    return d > c ? -1 : c > d ? 1 : 0 }), f.each(function(a, b) { c.push(b) }) }
            $(".customer-matrix-entry").remove(), $('.customers-and-experts a[href="/customers/"]').prepend(c), c.css("display", "inline-block") } }), $(function() { $(".case-studies-detail-new .Header_Nav_Breadcrumb").css("margin-top", 300 - $(".cs-title-box-topbar").height() + 15) }), $(document).ready(function() {
        var a = window.location.pathname;
        if (!$.browser.mobile) {
            var b = $(".second-level-menu-wrapper"),
                c = $("body");
            if (0 == b.length) return;
            var d = -1,
                e = function() {-1 == d && (d = b.offset().top);
                    var e = $(window).scrollTop();
                    e >= d ? (b.addClass("fixed"), -1 !== a.indexOf("/platform/sap/") && c.css("margin-top", "175px")) : (b.removeClass("fixed"), c.css("margin-top", "0")) };
            $(window).load(e).scroll(e), $('.second-level-menu-wrapper .sub-navigation-bar a[href="' + a + '"]').addClass("active") } }), $(function() { /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) && 767 > width || ($(".magnific_popup_link").magnificPopup({ type: "ajax", alignTop: !0, showCloseBtn: !1, modal: !0, tClose: "Close", callbacks: { open: function() { $(window).resize(function() { $(".mfp-content .mfp-os-popup-content img").css({ width: "auto", "max-width": 880, "max-height": $(window).height() - 105 });
                        var a = parseInt($(".mfp-content .mfp-os-popup-content").height() - 50, 10),
                            b = parseInt($(window).height() - 105, 10),
                            c = parseInt($(".mfp-content .mfp-os-popup-content .video-container").css("padding-bottom"), 10),
                            d = b * c;
                        d = parseInt(d / a), 500 > d && $(".mfp-content .mfp-os-popup-content .video-container").css("padding-bottom", d) }) }, ajaxContentAdded: function() {
                    var a;
                    1 == $(".mfp-os-popup-content").find("iframe").length ? (a = $(".mfp-os-popup-content").find("iframe"), 0 !== a.height() && $(".mfp-os-thumbs").height(a.height())) : (a = $(".mfp-os-popup-content").find("img"), 0 !== a.height() && $(".mfp-os-thumbs").height(a.height())), $(".mfp-content .mfp-os-popup-content img").css({ width: "auto", "max-width": 880, "max-height": $(window).height() - 105 });
                    var b = parseInt($(".mfp-content .mfp-os-popup-content").height() - 50, 10),
                        c = parseInt($(window).height() - 105, 10),
                        d = parseInt($(".mfp-content .mfp-os-popup-content .video-container").css("padding-bottom"), 10),
                        e = c * d;
                    e = parseInt(e / b), 500 > e && $(".mfp-content .mfp-os-popup-content .video-container").css("padding-bottom", e), $(".mfp-os-main-content").bind("DOMSubtreeModified", function() { $(".mfp-content .mfp-os-popup-content img").css({ width: "auto", "max-width": 880, "max-height": $(window).height() - 105 });
                        var a = parseInt($(".mfp-content .mfp-os-popup-content").height() - 50, 10),
                            b = parseInt($(window).height() - 105, 10),
                            c = parseInt($(".mfp-content .mfp-os-popup-content .video-container").css("padding-bottom"), 10),
                            d = b * c;
                        d = parseInt(d / a), 500 > d && $(".mfp-content .mfp-os-popup-content .video-container").css("padding-bottom", d) }) }, close: function() { window.location.hash = "_" } } }), $(".magnific_popup_link").click(function(a) { window.location.hash = $(this).attr("href") }), $(window).resize(function() { $(".mfp-os-main-content").width($(".mfp-os-left").width() - 80) })) }), $(document).mouseup(function(a) {
        if (void 0 !== $.magnificPopup.instance.currItem && null !== $.magnificPopup.instance.currItem && "ajax" === $.magnificPopup.instance.currItem.type) {
            var b = $(".mfp-back");
            b.is(a.target) || 0 !== b.has(a.target).length || $.magnificPopup.close() } }), $(document).keyup(function(a) { void 0 !== $.magnificPopup.instance.currItem && null !== $.magnificPopup.instance.currItem && "ajax" === $.magnificPopup.instance.currItem.type && 27 == a.keyCode && $.magnificPopup.close() }), $(document).ready(function() { $(".gotomagnific").magnificPopup({ type: "iframe", iframe: { patterns: { outsystems: { index: "outsystems", src: "%id%" } } }, fixedContentPos: !0, fixedBgPos: !0, modal: !0, callbacks: { open: function() { $(".mfp-iframe-scaler .mfp-close").css({ display: "none" }) } } }) });
var eventMethod_Global = window.addEventListener ? "addEventListener" : "attachEvent",
    eventer_Global = window[eventMethod_Global],
    messageEvent_Global = "attachEvent" == eventMethod_Global ? "onmessage" : "message";
eventer_Global(messageEvent_Global, function(a) {
    try {
        if ("" !== a.data)
            if ("kissEvent" === a.data) {
                var b = a.srcElement.location.href,
                    c = -1 !== b.indexOf("/contact-us-apps/"),
                    d = -1 !== b.indexOf("/contact-us-global/"),
                    e = -1 !== b.indexOf("/company/contact-us/"),
                    f = -1 !== b.indexOf("vs-outsystems/"),
                    g = -1 !== b.indexOf("/salesforce1-vs-outsystems/");
                c ? osAnalytics.trackEvent("CS - Submit Contact US Apps") : d ? osAnalytics.trackEvent("CS - Submit Contact US Global") : e ? osAnalytics.trackEvent("CS - Submit Contact US Offices") : f && (-1 !== b.indexOf("kony") ? osAnalytics.trackEvent("LP - Submit Demo Contact Us - Kony LP") : -1 !== b.indexOf("mendix") ? osAnalytics.trackEvent("LP - Submit Demo Contact Us - Mendix LP") : -1 !== b.indexOf("appcelerator") ? osAnalytics.trackEvent("LP - Submit Demo Contact Us - Appcelerator LP") : g && osAnalytics.trackEvent("LP - Download collateral", { Document: "OutSystems Platform and Force.com" }, null)) } else {
                var h;
                try { h = JSON.parse(a.data), void 0 !== h.mkto_frame.height && (console.log("mkto content height = " + h.mkto_frame.height), 0 === $('iframe[src^="/contact"]').length && (0 !== $('iframe[src^="/offer"]').contents().find("iframe").length ? $('iframe[src^="/offer"]').contents().find("iframe").height(h.mkto_frame.height) : $("#mkto_frame").height(h.mkto_frame.height))) } catch (a) {} } } catch (a) { console.log(a) } }, !1)
var framePopupSelector = 'iframe[src^="/"]',
    frameMktoSelector = "#mkto_frame",
    iframeDetect;
$(function() { iframeDetect = setInterval(function() {
        ($(framePopupSelector).length > 0 || $(frameMktoSelector).length > 0) && sendKISScontextToMarketo() }, 1e3) }), $(function() {
    if ("/" !== location.pathname) try { wistiaEmbeds.onFind(function(a) { a.videoFoam(!0) }) } catch (a) {} }), $(function(a) { $(".scrollup").click(function(a) {
        return a.preventDefault(), $("html, body").animate({ scrollTop: 0 }, 600), !1 }) }), $(document).ready(function() { $(".hist-back-link").click(function(a) { a.preventDefault(), history.back(1) }), $(".tooltip-link").mouseover(function(a) {
        var b = $(this).attr("title");
        $(this).attr("title", ""), /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? $(this).append('<div id="tooltip"><div class="tipHeader"></div><div class="tipBody">' + b + '</div><div class="tipFooter"><span class="osicon-close" style="font-size: 23px;color: white;"></span></div></div>') : $(this).append('<div id="tooltip"><div class="tipHeader"></div><div class="tipBody">' + b + '</div><div class="tipFooter"></div></div>'), $("#tooltip").width($(".session-details").width() - 30), $("#tooltip").css("top", 30), $("#tooltip").css("left", 0), $("#tooltip").fadeIn("500") }).mouseout(function() { $(this).attr("title", $(".tipBody").html()), $(this).children("div#tooltip").remove() }) }), $(document).ready(function() {
    if (null === osjs.cookie("OS_AcceptCookies")) {
        if ("EU" === $("#locale-aux").attr("data-locale-continent")) $(".invisiblediv").show();
        else { $(".invisiblediv").hide();
            var a = new Date,
                b = a.getMonth() + 1,
                c = a.getDate(),
                d = a.getFullYear() + "/" + (10 > b ? "0" : "") + b + "/" + (10 > c ? "0" : "") + c;
            osjs.cookie("OS_AcceptCookies", d, { expires: 365, path: "/" }) }
        $(".warning_EU_cookiemsg").length >= 1 && ($(".CloseArea").click(function() {
            var a = new Date,
                b = a.getMonth() + 1,
                c = a.getDate(),
                d = a.getFullYear() + "/" + (10 > b ? "0" : "") + b + "/" + (10 > c ? "0" : "") + c;
            osjs.cookie("OS_AcceptCookies", d, { expires: 365, path: "/" }), $(".warning_EU_cookiemsg").slideUp() }), $(".warning_EU_cookiemsg").slideDown(500)) } });
var initial, mkto_resized = !1;
$(document).ready(function() { initial = $('.navigation-bar li[class*="active"]'), $("body").append('<div class="overlay"></div>'), $("[data-option=dropdown-hover]").click(function(a) { a.preventDefault(), a.stopPropagation(), $(window).trigger("hover-menu");
        var b = $(this),
            c = $(b).attr("data-name"),
            d = $("[data-dropdown-wrapper='" + c + "']");
        d.is(":visible") ? hideDropDown(b) : ($(this).closest("ul").find("li.active").removeClass("active"), toggleDropdowMenu(b), $("[data-dropdown-wrapper]").click(function(a) { a.stopPropagation() }), $(document).on("click", function() { hideDropDown(b) })) }) });
var mkto_resized = !1;
$(document).ready(function() { $.browser.mobile && $("#mkto_frame").bind("load", function() {
            if (void 0 !== $(this).css("width") && "100%" === $(this)[0].style.width || void 0 !== $(".video-container #mkto_frame")) {
                var a = window.innerWidth - 20;
                parseInt($(this).css("width")) >= a && (mkto_resized = !0, $(this).css("width", a)) } }) }), $(window).resize(function() {
        if ($.browser.mobile && void 0 !== $("#mkto_frame").css("width")) {
            var a = window.innerWidth - 20;
            mkto_resized && $("#mkto_frame").css("width", a) } }), "www.outsystems.com" !== window.location.host && $(function() {
        for (var a, b, c = document.getElementsByTagName("iframe"), d = c.length; d--;) a = c[d], "about:blank" === a.src && a.getAttribute("data-iframe-src") && (b = a.getAttribute("data-iframe-src"), a.src = b) }),
    function(a) {
        (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|iPhone|iPad|iPod|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)) }(navigator.userAgent || navigator.vendor || window.opera), $(function() {
        try {
            var a = KM.i();
            IsEmail(a) && __insp.push(["tagSession", { email: a }]) } catch (b) {} }),
    function(a) {
        function b(b, e) {
            var f = a(window).width(),
                g = {};
            if (!b.is(":visible") && !d) {
                switch (d = !0, b.addClass("ps-active-panel").css({ position: "fixed", top: "50px", height: "100%", "overflow-y": "auto", "z-index": 99 }), b.data(e), e.side) {
                    case "left":
                        b.css({ left: "-" + f + "px", right: "auto" }), g.left = "+=" + f;
                        break;
                    case "right":
                        b.css({ left: "auto", right: "-" + f + "px" }), g.right = "+=" + f }
                c.css({ overflow: "hidden" }), b.show().animate({ right: "-" + f, leaveTransforms: !0, useTranslate3d: !0 }, e.duration, "jswing", function() { d = !1 }) } }
        var c = a("body"),
            d = !1;
        a.panelslider = function(c, d) {
            var e = a(".ps-active-panel"),
                f = { side: "left", duration: 1e3, clickClose: !0 };
            d = a.extend({}, f, d), e.is(":visible") && e[0] != c[0] ? a.panelslider.close(function() { b(c, d) }) : e.length && !e.is(":hidden") || b(c, d) }, a.panelslider.close = function(b) {
            var e = a(".ps-active-panel"),
                f = e.data("duration"),
                g = a(window).width(),
                h = { "overflow-x": "auto" },
                i = {};
            if (e.length && !e.is(":hidden") && !d) {
                switch (d = !0, e.data("side")) {
                    case "left":
                        i.left = "-=" + g;
                        break;
                    case "right":
                        i.right = "-=" + g }
                e.animate({ right: "-" + g, leaveTransforms: !0, useTranslate3d: !0 }, f, "jswing"), c.animate(h, f, function() { c.css({ overflow: "auto" }), e.hide(), e.removeClass("ps-active-panel"), d = !1, a(window).trigger("panelClose") }) } }, a(document).bind("click keyup", function(b) {
            var c = a(".ps-active-panel"); "keyup" == b.type && 27 != b.keyCode || c.is(":visible") && c.data("clickClose") && a.panelslider.close() }), a(document).on("click", ".ps-active-panel", function(a) { a.stopPropagation() }), a.fn.panelslider = function(b) {
            return this.click(function(c) {
                var d = a(".ps-active-panel"),
                    e = this.getAttribute("href"),
                    f = e;
                e = e.replace("!", "");
                var g = a(e);
                d.is(":visible") && g[0] == d[0] ? a.panelslider.close() : a.panelslider(g, b), c.preventDefault(), c.stopPropagation(), a(":animated").promise().done(function() { window.location.hash = f }) }), this } }(jQuery), ! function(a) { a.fn.parallaxSlider = function(f) {
            var g = a.extend({}, a.fn.parallaxSlider.defaults, f);
            return this.each(function() {
                var f, h = a(this),
                    i = a.meta ? a.extend({}, g, h.data()) : g,
                    j = a(".pxs_slider", h),
                    k = j.children(),
                    l = k.length,
                    m = a(".pxs_next", h),
                    n = a(".pxs_prev", h),
                    o = a(".pxs_bg1", h),
                    p = a(".pxs_bg2", h),
                    q = a(".pxs_bg3", h),
                    r = 0,
                    s = a(".pxs_thumbnails", h),
                    t = s.children(),
                    u = a(".pxs_loading", h),
                    v = a(".pxs_slider_wrapper", h),
                    w = 0,
                    x = v.find("img");
                x.each(function() {
                    var g = a(this);
                    a("<img/>").load(function() {
                        if (++w, w == l) { u.hide(), v.show();
                            var g = j.find("div:first").width();
                            e(j, k, l, o, p, q, g, m, n), d(t.eq(0)), m.bind("click", function() {
                                if (++r, r >= l) {
                                    if (!i.circular) return --r, !1;
                                    r = 0 }
                                d(t.eq(r)), c(r, j, q, p, o, i.speed, i.easing, i.easingBg) }), n.bind("click", function() {
                                if (--r, 0 > r) {
                                    if (!i.circular) return ++r, !1;
                                    r = l - 1 }
                                d(t.eq(r)), c(r, j, q, p, o, i.speed, i.easing, i.easingBg) }), jQuery.browser.mobile && (j.bind("swipeleft", function(a) { a.stopPropagation(), a.preventDefault(), i.auto && clearInterval(f), m.trigger("click") }), j.bind("swiperight", function(a) { a.stopPropagation(), a.preventDefault(), i.auto && clearInterval(f), n.trigger("click") })), t.bind("click", function(b) { b.preventDefault();
                                var e = a(this);
                                d(e), i.auto && clearInterval(f), r = e.index(), c(r, j, q, p, o, i.speed, i.easing, i.easingBg) }), 0 != i.auto && (i.circular = !0, f = setInterval(function() { m.trigger("click") }, i.auto)), a(window).resize(function() { b = a(window).width(), e(j, k, l, o, p, q, g, m, n), c(r, j, q, p, o, 1, i.easing, i.easingBg) }) } }).error(function() {}).attr("src", g.attr("src")) }) }) };
        var b = a(window).width(),
            c = function(a, c, d, e, f, g, h, i) {
                var j = parseInt(-b * a);
                window.opera && window.opera.buildNumber ? (c.stop().animate({ left: j + "px" }, g, h), d.stop().animate({ left: j / 2 + "px" }, g, i), e.stop().animate({ left: j / 4 + "px" }, g, i), f.stop().animate({ left: j / 8 + "px" }, g, i)) : (c.stop().animate({ opacity: 0 }, g, function() { c.animate({ left: j + "px" }, 100, function() { c.animate({ opacity: 1 }, g) }) }), d.stop().animate({ opacity: 0 }, g, function() { c.animate({ left: j / 2 + "px" }, 100, function() { c.animate({ opacity: 1 }, g) }) }), e.stop().animate({ opacity: 0 }, g, function() { c.animate({ left: j / 4 + "px" }, 100, function() { c.animate({ opacity: 1 }, g) }) }), f.stop().animate({ opacity: 0 }, g, function() { c.animate({ left: j / 8 + "px" }, 100, function() { c.animate({ opacity: 1 }, g) }) })) },
            d = function(a) { a.siblings().removeClass("selected"), a.addClass("selected") },
            e = function(a, c, d, e, f, g) {
                var h = b * d;
                a.width(h + "px"), c.width(b + "px"), e.width(h + "px"), f.width(h + "px"), g.width(h + "px") };
        a.fn.parallaxSlider.defaults = { auto: 1e4, speed: 1e3, easing: "jswing", easingBg: "jswing", circular: !0 } }(jQuery),
    function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery) }(function(a) {
        function b() {
            var b = this;
            b.top = "auto", b.left = "auto", b.right = "auto", b.bottom = "auto", b.set = function(c, d) { a.isNumeric(d) && (b[c] = Math.round(d)) } }

        function c(a, b, c) {
            function d(d, e) { g(), a.data(q) || (d ? (e && a.data(r, !0), c.showTip(a)) : (z.tipOpenImminent = !0, i = setTimeout(function() { i = null, f() }, b.intentPollInterval))) }

            function e(d) { g(), z.tipOpenImminent = !1, a.data(q) && (a.data(r, !1), d ? c.hideTip(a) : (z.delayInProgress = !0, i = setTimeout(function() { i = null, c.hideTip(a), z.delayInProgress = !1 }, b.closeDelay))) }

            function f() {
                var e = Math.abs(z.previousX - z.currentX),
                    f = Math.abs(z.previousY - z.currentY),
                    g = e + f;
                g < b.intentSensitivity ? c.showTip(a) : (z.previousX = z.currentX, z.previousY = z.currentY, d()) }

            function g() { i = clearTimeout(i), z.delayInProgress = !1 }

            function h() { c.resetPosition(a) }
            var i = null;
            this.show = d, this.hide = e, this.cancel = g, this.resetPosition = h }

        function d() {
            function a(a, e, g, h, i) {
                var j, k = e.split("-")[0],
                    l = new b;
                switch (j = f(a) ? d(a, k) : c(a, k), e) {
                    case "n":
                        l.set("left", j.left - g / 2), l.set("bottom", z.windowHeight - j.top + i);
                        break;
                    case "e":
                        l.set("left", j.left + i), l.set("top", j.top - h / 2);
                        break;
                    case "s":
                        l.set("left", j.left - g / 2), l.set("top", j.top + i);
                        break;
                    case "w":
                        l.set("top", j.top - h / 2), l.set("right", z.windowWidth - j.left + i);
                        break;
                    case "nw":
                        l.set("bottom", z.windowHeight - j.top + i), l.set("right", z.windowWidth - j.left - 20);
                        break;
                    case "nw-alt":
                        l.set("left", j.left), l.set("bottom", z.windowHeight - j.top + i);
                        break;
                    case "ne":
                        l.set("left", j.left - 20), l.set("bottom", z.windowHeight - j.top + i);
                        break;
                    case "ne-alt":
                        l.set("bottom", z.windowHeight - j.top + i), l.set("right", z.windowWidth - j.left);
                        break;
                    case "sw":
                        l.set("top", j.top + i), l.set("right", z.windowWidth - j.left - 20);
                        break;
                    case "sw-alt":
                        l.set("left", j.left), l.set("top", j.top + i);
                        break;
                    case "se":
                        l.set("left", j.left - 20), l.set("top", j.top + i);
                        break;
                    case "se-alt":
                        l.set("top", j.top + i), l.set("right", z.windowWidth - j.left) }
                return l }

            function c(a, b) {
                var c, d, e = a.offset(),
                    f = a.outerWidth(),
                    g = a.outerHeight();
                switch (b) {
                    case "n":
                        c = e.left + f / 2, d = e.top;
                        break;
                    case "e":
                        c = e.left + f, d = e.top + g / 2;
                        break;
                    case "s":
                        c = e.left + f / 2, d = e.top + g;
                        break;
                    case "w":
                        c = e.left, d = e.top + g / 2;
                        break;
                    case "nw":
                        c = e.left, d = e.top;
                        break;
                    case "ne":
                        c = e.left + f, d = e.top;
                        break;
                    case "sw":
                        c = e.left, d = e.top + g;
                        break;
                    case "se":
                        c = e.left + f, d = e.top + g }
                return { top: d, left: c } }

            function d(a, b) {
                function c() { o.push(j.matrixTransform(l)) }
                var d, e, f, g, h = a.closest("svg")[0],
                    i = a[0],
                    j = h.createSVGPoint(),
                    k = i.getBBox(),
                    l = i.getScreenCTM(),
                    m = k.width / 2,
                    n = k.height / 2,
                    o = [],
                    p = ["nw", "n", "ne", "e", "se", "s", "sw", "w"];
                if (j.x = k.x, j.y = k.y, c(), j.x += m, c(), j.x += m, c(), j.y += n, c(), j.y += n, c(), j.x -= m, c(), j.x -= m, c(), j.y -= n, c(), o[0].y !== o[1].y || o[0].x !== o[7].x)
                    for (e = Math.atan2(l.b, l.a) * y, f = Math.ceil((e % 360 - 22.5) / 45), 1 > f && (f += 8); f--;) p.push(p.shift());
                for (g = 0; g < o.length; g++)
                    if (p[g] === b) { d = o[g];
                        break }
                return { top: d.y + z.scrollTop, left: d.x + z.scrollLeft } }
            this.compute = a }

        function e(c) {
            function e(a) { a.data(q, !0), y.queue(function(b) { f(a), b() }) }

            function f(a) {
                var b;
                if (a.data(q)) {
                    if (z.isTipOpen) return z.isClosing || g(z.activeHover), void y.delay(100).queue(function(b) { f(a), b() });
                    a.trigger("powerTipPreRender"), b = j(a), b && (y.empty().append(b), a.trigger("powerTipRender"), z.activeHover = a, z.isTipOpen = !0, y.data(t, c.mouseOnToPopup), c.followMouse ? h() : (u(a), z.isFixedTipOpen = !0), y.fadeIn(c.fadeInTime, function() { z.desyncTimeout || (z.desyncTimeout = setInterval(w, 500)), a.trigger("powerTipOpen") })) } }

            function g(a) { z.isClosing = !0, z.activeHover = null, z.isTipOpen = !1, z.desyncTimeout = clearInterval(z.desyncTimeout), a.data(q, !1), a.data(r, !1), y.fadeOut(c.fadeOutTime, function() {
                    var d = new b;
                    z.isClosing = !1, z.isFixedTipOpen = !1, y.removeClass(), d.set("top", z.currentY + c.offset), d.set("left", z.currentX + c.offset), y.css(d), a.trigger("powerTipClose") }) }

            function h() {
                if (!z.isFixedTipOpen && (z.isTipOpen || z.tipOpenImminent && y.data(s))) {
                    var a, d, e = y.outerWidth(),
                        f = y.outerHeight(),
                        g = new b;
                    g.set("top", z.currentY + c.offset), g.set("left", z.currentX + c.offset), a = k(g, e, f), a !== A.none && (d = l(a), 1 === d ? a === A.right ? g.set("left", z.windowWidth - e) : a === A.bottom && g.set("top", z.scrollTop + z.windowHeight - f) : (g.set("left", z.currentX - e - c.offset), g.set("top", z.currentY - f - c.offset))), y.css(g) } }

            function u(b) {
                var d, e;
                c.smartPlacement ? (d = a.fn.powerTip.smartPlacementLists[c.placement], a.each(d, function(a, c) {
                    var d = k(v(b, c), y.outerWidth(), y.outerHeight());
                    return e = c, d === A.none ? !1 : void 0 })) : (v(b, c.placement), e = c.placement), y.addClass(e) }

            function v(a, d) {
                var e, f, g = 0,
                    h = new b;
                h.set("top", 0), h.set("left", 0), y.css(h);
                do e = y.outerWidth(), f = y.outerHeight(), h = x.compute(a, d, e, f, c.offset), y.css(h); while (++g <= 5 && (e !== y.outerWidth() || f !== y.outerHeight()));
                return h }

            function w() {
                var a = !1;!z.isTipOpen || z.isClosing || z.delayInProgress || (z.activeHover.data(q) === !1 || z.activeHover.is(":disabled") ? a = !0 : i(z.activeHover) || z.activeHover.is(":focus") || z.activeHover.data(r) || (y.data(t) ? i(y) || (a = !0) : a = !0), a && g(z.activeHover)) }
            var x = new d,
                y = a("#" + c.popupId);
            0 === y.length && (y = a("<div/>", { id: c.popupId }),
                0 === o.length && (o = a("body")), o.append(y)), c.followMouse && (y.data(s) || (m.on("mousemove", h), n.on("scroll", h), y.data(s, !0))), c.mouseOnToPopup && y.on({ mouseenter: function() { y.data(t) && z.activeHover && z.activeHover.data(p).cancel() }, mouseleave: function() { z.activeHover && z.activeHover.data(p).hide() } }), this.showTip = e, this.hideTip = g, this.resetPosition = u
        }

        function f(a) {
            return window.SVGElement && a[0] instanceof SVGElement }

        function g() { z.mouseTrackingActive || (z.mouseTrackingActive = !0, a(function() { z.scrollLeft = n.scrollLeft(), z.scrollTop = n.scrollTop(), z.windowWidth = n.width(), z.windowHeight = n.height() }), m.on("mousemove", h), n.on({ resize: function() { z.windowWidth = n.width(), z.windowHeight = n.height() }, scroll: function() {
                    var a = n.scrollLeft(),
                        b = n.scrollTop();
                    a !== z.scrollLeft && (z.currentX += a - z.scrollLeft, z.scrollLeft = a), b !== z.scrollTop && (z.currentY += b - z.scrollTop, z.scrollTop = b) } })) }

        function h(a) { z.currentX = a.pageX, z.currentY = a.pageY }

        function i(a) {
            var b = a.offset(),
                c = a[0].getBoundingClientRect(),
                d = c.right - c.left,
                e = c.bottom - c.top;
            return z.currentX >= b.left && z.currentX <= b.left + d && z.currentY >= b.top && z.currentY <= b.top + e }

        function j(b) {
            var c, d, e = b.data(v),
                f = b.data(w),
                g = b.data(x);
            return e ? (a.isFunction(e) && (e = e.call(b[0])), d = e) : f ? (a.isFunction(f) && (f = f.call(b[0])), f.length > 0 && (d = f.clone(!0, !0))) : g && (c = a("#" + g), c.length > 0 && (d = c.html())), d }

        function k(a, b, c) {
            var d = z.scrollTop,
                e = z.scrollLeft,
                f = d + z.windowHeight,
                g = e + z.windowWidth,
                h = A.none;
            return (a.top < d || Math.abs(a.bottom - z.windowHeight) - c < d) && (h |= A.top), (a.top + c > f || Math.abs(a.bottom - z.windowHeight) > f) && (h |= A.bottom), (a.left < e || a.right + b > g) && (h |= A.left), (a.left + b > g || a.right < e) && (h |= A.right), h }

        function l(a) {
            for (var b = 0; a;) a &= a - 1, b++;
            return b }
        var m = a(document),
            n = a(window),
            o = a("body"),
            p = "displayController",
            q = "hasActiveHover",
            r = "forcedOpen",
            s = "hasMouseMove",
            t = "mouseOnToPopup",
            u = "originalTitle",
            v = "powertip",
            w = "powertipjq",
            x = "powertiptarget",
            y = 180 / Math.PI,
            z = { isTipOpen: !1, isFixedTipOpen: !1, isClosing: !1, tipOpenImminent: !1, activeHover: null, currentX: 0, currentY: 0, previousX: 0, previousY: 0, desyncTimeout: null, mouseTrackingActive: !1, delayInProgress: !1, windowWidth: 0, windowHeight: 0, scrollTop: 0, scrollLeft: 0 },
            A = { none: 0, top: 1, bottom: 2, left: 4, right: 8 };
        a.fn.powerTip = function(b, d) {
            if (!this.length) return this;
            if ("string" === a.type(b) && a.powerTip[b]) return a.powerTip[b].call(this, this, d);
            var f = a.extend({}, a.fn.powerTip.defaults, b),
                h = new e(f);
            return g(), this.each(function() {
                var b, d = a(this),
                    e = d.data(v),
                    g = d.data(w),
                    i = d.data(x);
                d.data(p) && a.powerTip.destroy(d), b = d.attr("title"), e || i || g || !b || (d.data(v, b), d.data(u, b), d.removeAttr("title")), d.data(p, new c(d, f, h)) }), f.manual || this.on({ "mouseenter.powertip": function(b) { a.powerTip.show(this, b) }, "mouseleave.powertip": function() { a.powerTip.hide(this) }, "focus.powertip": function() { a.powerTip.show(this) }, "blur.powertip": function() { a.powerTip.hide(this, !0) }, "keydown.powertip": function(b) { 27 === b.keyCode && a.powerTip.hide(this, !0) } }), this }, a.fn.powerTip.defaults = { fadeInTime: 200, fadeOutTime: 100, followMouse: !1, popupId: "powerTip", intentSensitivity: 7, intentPollInterval: 100, closeDelay: 100, placement: "n", smartPlacement: !1, offset: 10, mouseOnToPopup: !1, manual: !1 }, a.fn.powerTip.smartPlacementLists = { n: ["n", "ne", "nw", "s"], e: ["e", "ne", "se", "w", "nw", "sw", "n", "s", "e"], s: ["s", "se", "sw", "n"], w: ["w", "nw", "sw", "e", "ne", "se", "n", "s", "w"], nw: ["nw", "w", "sw", "n", "s", "se", "nw"], ne: ["ne", "e", "se", "n", "s", "sw", "ne"], sw: ["sw", "w", "nw", "s", "n", "ne", "sw"], se: ["se", "e", "ne", "s", "n", "nw", "se"], "nw-alt": ["nw-alt", "n", "ne-alt", "sw-alt", "s", "se-alt", "w", "e"], "ne-alt": ["ne-alt", "n", "nw-alt", "se-alt", "s", "sw-alt", "e", "w"], "sw-alt": ["sw-alt", "s", "se-alt", "nw-alt", "n", "ne-alt", "w", "e"], "se-alt": ["se-alt", "s", "sw-alt", "ne-alt", "n", "nw-alt", "e", "w"] }, a.powerTip = { show: function(b, c) {
                return c ? (h(c), z.previousX = c.pageX, z.previousY = c.pageY, a(b).data(p).show()) : a(b).first().data(p).show(!0, !0), b }, reposition: function(b) {
                return a(b).first().data(p).resetPosition(), b }, hide: function(b, c) {
                return b ? a(b).first().data(p).hide(c) : z.activeHover && z.activeHover.data(p).hide(!0), b }, destroy: function(b) {
                return a(b).off(".powertip").each(function() {
                    var b = a(this),
                        c = [u, p, q, r];
                    b.data(u) && (b.attr("title", b.data(u)), c.push(v)), b.removeData(c) }), b } }, a.powerTip.showTip = a.powerTip.show, a.powerTip.closeTip = a.powerTip.hide
    });
var RichWidgets_Popup_Editor_ShowTimeoutMilSecs = 200,
    RichWidgets_Popup_Editor_HideTimeoutMilSecs = 800,
    RichWidgets_Popup_Editor_InitialWidth = 210,
    RichWidgets_Popup_Editor_InitialHeight = 100,
    RichWidgets_Popup_Editor_notifyWidget, RichWidgets_Popup_Editor_Index = 4010,
    RichWidgets_Popup_Editor_ParentUrl, RichWidgets_Popup_Editor_ClosingTag = "closing",
    RichWidgets_Popup_Editor_ClosingValue = "true",
    popupToClose, Mobify = window.Mobify = window.Mobify || {};
Mobify.$ = Mobify.$ || window.Zepto || window.jQuery, Mobify.UI = Mobify.UI || { classPrefix: "m-" },
    function(a, b) { a.support = a.support || {}, a.extend(a.support, { touch: "ontouchend" in b }) }(Mobify.$, document), Mobify.UI.Utils = function(a) {
        var b = {},
            c = a.support;
        b.events = c.touch ? { down: "touchstart", move: "touchmove", up: "touchend" } : { down: "mousedown", move: "mousemove", up: "mouseup" }, b.getCursorPosition = c.touch ? function(a) {
            return a = a.originalEvent || a, { x: a.touches[0].clientX, y: a.touches[0].clientY } } : function(a) {
            return { x: a.clientX, y: a.clientY } }, b.getProperty = function(a) {
            for (var b = ["Webkit", "Moz", "O", "ms", ""], c = document.createElement("div").style, d = 0; d < b.length; ++d)
                if (void 0 !== c[b[d] + a]) return b[d] + a }, a.extend(c, { transform: !!b.getProperty("Transform"), transform3d: !!(window.WebKitCSSMatrix && "m11" in new WebKitCSSMatrix) });
        var d = b.getProperty("Transform");
        c.transform3d ? b.translateX = function(a, b) { "number" == typeof b && (b += "px"), a.style[d] = "translate3d(" + b + ",0,0)" } : c.transform ? b.translateX = function(a, b) { "number" == typeof b && (b += "px"), a.style[d] = "translate(" + b + ",0)" } : b.translateX = function(a, b) { "number" == typeof b && (b += "px"), a.style.left = b };
        var e = (b.getProperty("Transition"), b.getProperty("TransitionDuration"));
        return b.setTransitions = function(a, b) { b ? a.style[e] = "" : a.style[e] = "0s" }, b.requestAnimationFrame = function() {
            var a = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) { window.setTimeout(a, 1e3 / 60) },
                b = function() { a.apply(window, arguments) };
            return b }(), b }(Mobify.$), Mobify.UI.Carousel = function(a, b) {
        var c = { dragRadius: 10, moveRadius: 20, classPrefix: void 0, classNames: { outer: "carousel", inner: "carousel-inner", item: "item", center: "center", touch: "has-touch", dragging: "dragging", active: "active" } },
            d = a.support,
            e = function(a, b) { this.setOptions(b), this.initElements(a), this.initOffsets(), this.initAnimation(), this.bind() };
        return e.defaults = c, e.prototype.setOptions = function(b) {
            var d = this.options || a.extend({}, c, b);
            d.classNames = a.extend({}, d.classNames, b.classNames || {}), d.classPrefix = d.classPrefix || Mobify.UI.classPrefix, this.options = d }, e.prototype.initElements = function(b) { this._index = 1, this.element = b, this.$element = a(b), this.$inner = this.$element.find("." + this._getClass("inner")), this.$items = this.$inner.children(), this.$start = this.$items.eq(0), this.$sec = this.$items.eq(1), this.$current = this.$items.eq(this._index), this._length = this.$items.length, this._alignment = this.$element.hasClass(this._getClass("center")) ? .5 : 0 }, e.prototype.initOffsets = function() { this._offset = 0, this._offsetDrag = 0 }, e.prototype.initAnimation = function() { this.animating = !1, this.dragging = !1, this._needsUpdate = !1, this._enableAnimation() }, e.prototype._getClass = function(a) {
            return this.options.classPrefix + this.options.classNames[a] }, e.prototype._enableAnimation = function() { this.animating || (b.setTransitions(this.$inner[0], !0), this.$inner.removeClass(this._getClass("dragging")), this.animating = !0) }, e.prototype._disableAnimation = function() { this.animating && (b.setTransitions(this.$inner[0], !1), this.$inner.addClass(this._getClass("dragging")), this.animating = !1) }, e.prototype.update = function() {
            if (!this._needsUpdate) {
                var a = this;
                this._needsUpdate = !0, b.requestAnimationFrame(function() { a._update() }) } }, e.prototype._update = function() {
            if (this._needsUpdate) {
                var a = Math.round(this._offset + this._offsetDrag);
                b.translateX(this.$inner[0], a), this._needsUpdate = !1 } }, e.prototype.bind = function() {
            function c(a) { d.touch || a.preventDefault(), m = !0, n = !1, h = b.getCursorPosition(a), i = 0, j = 0, k = !1, p._disableAnimation(), u = 1 == p._index, v = p._index == p._length }

            function e(a) {
                if (m && !n) {
                    var c = b.getCursorPosition(a);
                    i = h.x - c.x, j = h.y - c.y, k || l(i) > l(j) && l(i) > o ? (k = !0, a.preventDefault(), u && 0 > i ? i = i * -t / (i - t) : v && i > 0 && (i = i * t / (i + t)), p._offsetDrag = -i, p.update()) : l(j) > l(i) && l(j) > o && (n = !0) } }

            function f(a) { m && (m = !1, p._enableAnimation(), !n && l(i) > s.moveRadius ? i > 0 ? p.next() : p.prev() : (p._offsetDrag = 0, p.update())) }

            function g(a) { k && a.preventDefault() }
            var h, i, j, k, l = Math.abs,
                m = !1,
                n = !1,
                o = this.options.dragRadius,
                p = this,
                q = this.$element,
                r = this.$inner,
                s = this.options,
                t = this.$element.width(),
                u = !1,
                v = !1;
            r.on(b.events.down + ".carousel", c).on(b.events.move + ".carousel", e).on(b.events.up + ".carousel", f).on("click.carousel", g).on("mouseout.carousel", f), q.on("click", "[data-slide]", function(b) { b.preventDefault();
                var c = a(this).attr("data-slide"),
                    d = parseInt(c, 10);
                isNaN(d) ? p[c]() : p.move(d) }), q.on("afterSlide", function(a, b, c) { p.$items.eq(b - 1).removeClass(p._getClass("active")), p.$items.eq(c - 1).addClass(p._getClass("active")), p.$element.find("[data-slide='" + b + "']").removeClass(p._getClass("active")), p.$element.find("[data-slide='" + c + "']").addClass(p._getClass("active")) }), q.trigger("beforeSlide", [1, 1]), q.trigger("afterSlide", [1, 1]), p.update() }, e.prototype.unbind = function() { this.$inner.off() }, e.prototype.destroy = function() { this.unbind(), this.$element.trigger("destroy"), this.$element.remove(), this.$element = null, this.$inner = null, this.$start = null, this.$current = null }, e.prototype.move = function(a, b) {
            var c = this.$element,
                d = (this.$inner, this.$items),
                e = this.$start,
                f = this.$current,
                g = this._length,
                h = this._index;
            b = b || {}, 1 > a ? a = 1 : a > this._length && (a = g), a == this._index, c.trigger("beforeSlide", [h, a]), this.$current = f = d.eq(a - 1);
            var i = f.prop("offsetLeft") + f.prop("clientWidth") * this._alignment,
                j = e.prop("offsetLeft") + e.prop("clientWidth") * this._alignment,
                k = -(i - j);
            this._offset = k, this._offsetDrag = 0, this._index = a, this.update(), c.trigger("afterSlide", [h, a]) }, e.prototype.next = function() { this.move(this._index + 1) }, e.prototype.prev = function() { this.move(this._index - 1) }, e }(Mobify.$, Mobify.UI.Utils),
    function(a) { a.fn.carousel = function(b, c) {
            var d = a.extend({}, a.fn.carousel.defaults);
            return "object" == typeof b && (d = a(d, b), c = null, b = null), this.each(function() {
                var e = (a(this), this._carousel);
                e || (e = new Mobify.UI.Carousel(this, d)), b && (e[b](c), "destroy" === b && (e = null)), this._carousel = e }), this }, a.fn.carousel.defaults = {} }(Mobify.$), $.fn.stkr = function(a) {
        var b = $(this),
            c = $(this).css("position"),
            d = $.extend({ startSticky: "body", endSticky: null, stickyPosition: "top-left", top: null, left: null, bottom: null, right: null, offsetStick: 0, offsetUnstick: 0, horizontal: !1, toggleVisibility: !1, toggleFade: !1 }, a);
        $(function() {
            return d.toggleFade && d.toggleVisibility ? b.css({ visibility: "hidden", opacity: 0 }) : d.toggleVisibility ? b.css({ visibility: "hidden" }) : b });
        var e = function() {
                if ("top-left" == d.stickyPosition) {
                    if (d.toggleFade && d.toggleVisibility) return b.css({ position: "fixed", top: 20, left: 20, opacity: 1, visibility: "visible" });
                    if (d.toggleFade) return b.css({ position: "fixed", top: 20, left: 20, opacity: 1 });
                    if (d.toggleVisibility) return b.css({ position: "fixed", top: 20, left: 20, visibility: "visible" });
                    if (!d.toggleFade && !d.toggleVisibility) return b.css({ position: "fixed", top: 20, left: 20 }) } else if ("top-right" == d.stickyPosition) {
                    if (d.toggleFade && d.toggleVisibility) return b.css({ position: "fixed", top: 20, right: 20, opacity: 1, visibility: "visible" });
                    if (d.toggleFade) return b.css({ position: "fixed", top: 20, right: 20, opacity: 1 });
                    if (d.toggleVisibility) return b.css({ position: "fixed", top: 20, right: 20, visibility: "visible" });
                    if (!d.toggleFade && !d.toggleVisibility) return b.css({ position: "fixed", top: 20, right: 20 }) } else if ("bottom-right" == d.stickyPosition) {
                    if (d.toggleFade && d.toggleVisibility) return b.css({ position: "fixed", bottom: 20, right: 20, opacity: 1, visibility: "visible" });
                    if (d.toggleFade) return b.css({ position: "fixed", bottom: 20, right: 20, opacity: 1 });
                    if (d.toggleVisibility) return b.css({ position: "fixed", bottom: 20, right: 20, visibility: "visible" });
                    if (!d.toggleFade && !d.toggleVisibility) return b.css({ position: "fixed", bottom: 20, right: 20 }) } else if ("bottom-left" == d.stickyPosition) {
                    if (d.toggleFade && d.toggleVisibility) return b.css({ position: "fixed", bottom: 20, left: 20, opacity: 1, visibility: "visible" });
                    if (d.toggleFade) return b.css({ position: "fixed", bottom: 20, left: 20, opacity: 1 });
                    if (d.toggleVisibility) return b.css({ position: "fixed", bottom: 20, left: 20, visibility: "visible" });
                    if (!d.toggleFade && !d.toggleVisibility) return b.css({ position: "fixed", bottom: 20, left: 20 }) } else {
                    if (d.toggleFade && d.toggleVisibility) return b.css({ position: "fixed", top: d.top, left: d.left, bottom: d.bottom, right: d.right, opacity: 1, visibility: "visible" });
                    if (d.toggleFade) return b.css({ position: "fixed", top: d.top, left: d.left, bottom: d.bottom, right: d.right, opacity: 1 });
                    if (d.toggleVisibility) return b.css({ position: "fixed", top: d.top, left: d.left, bottom: d.bottom, right: d.right, visibility: "visible" });
                    if (!d.toggleFade && !d.toggleVisibility) return b.css({ position: "fixed", top: d.top, left: d.left, bottom: d.bottom, right: d.right }) } },
            f = function() {
                return d.toggleFade ? c ? b.css({ opacity: 0, position: c }) : b.css({ opacity: 0, position: "static" }) : d.toggleVisibility ? c ? b.css({ visibility: "hidden", position: c }) : b.css({ visibility: "hidden", position: "static" }) : d.toggleFade || d.toggleVisibility ? void 0 : c ? b.css({ position: c }) : b.css({ position: "static" }) };
        $(document).scroll(function() {
            var a = $(d.startSticky).position();
            if (d.horizontal) {
                var b = $(document).scrollLeft();
                if (d.endSticky) {
                    var c = $(d.endSticky).position();
                    b > a.left - d.offsetStick && b < c.left - d.offsetUnstick ? e() : f() } else b > a.left - d.offsetStick ? e() : f() } else {
                var b = $(document).scrollTop();
                if (d.endSticky) {
                    var c = $(d.endSticky).position();
                    b < a.top - d.offsetStick ? f() : b > a.top - d.offsetStick && b < c.top + d.offsetUnstick ? e() : f() } else b > a.top - d.offsetStick && e() } }) }, ! function(a) { a.fn.stickyScroll = function(b) {
            var c = { init: function(b) {
                    function c() {
                        return a(document).height() - f.container.offset().top - f.container.attr("offsetHeight") }

                    function d() {
                        return f.container.offset().top }

                    function e(b) {
                        return a(b).attr("offsetHeight") }
                    var f;
                    return "auto" !== b.mode && "manual" !== b.mode && (b.container && (b.mode = "auto"), b.bottomBoundary && (b.mode = "manual")), f = a.extend({ mode: "auto", container: a("body"), topBoundary: null, bottomBoundary: null }, b), f.container = a(f.container), f.container.length ? ("auto" === f.mode && (f.topBoundary = d(), f.bottomBoundary = c()), this.each(function(b) {
                        var g = a(this),
                            h = a(window),
                            i = Date.now() + b,
                            j = e(g);
                        g.data("sticky-id", i), h.bind("scroll.stickyscroll-" + i, function() {
                            var b = a(document).scrollTop(),
                                c = a(document).height() - b - j;
                            c <= f.bottomBoundary ? g.offset({ top: a(document).height() - f.bottomBoundary - j }).removeClass("sticky-active").removeClass("sticky-inactive").addClass("sticky-stopped") : b > f.topBoundary ? g.offset({ top: a(window).scrollTop() }).removeClass("sticky-stopped").removeClass("sticky-inactive").addClass("sticky-active") : b < f.topBoundary && g.css({ position: "", top: "", bottom: "" }).removeClass("sticky-stopped").removeClass("sticky-active").addClass("sticky-inactive") }), h.bind("resize.stickyscroll-" + i, function() { "auto" === f.mode && (f.topBoundary = d(), f.bottomBoundary = c()), j = e(g), a(this).scroll() }), g.addClass("sticky-processed"), h.scroll() })) : void(console && console.log("StickyScroll: the element " + b.container + " does not exist, we're throwing in the towel")) }, reset: function() {
                    return this.each(function() {
                        var b = a(this),
                            c = b.data("sticky-id");
                        b.css({ position: "", top: "", bottom: "" }).removeClass("sticky-stopped").removeClass("sticky-active").removeClass("sticky-inactive").removeClass("sticky-processed"), a(window).unbind(".stickyscroll-" + c) }) } };
            return c[b] ? c[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? void(console && console.log("Method" + b + " does not exist on jQuery.stickyScroll")) : c.init.apply(this, arguments) } }(jQuery),
    function(a) { a.fn.addBack = a.fn.addBack || a.fn.andSelf, a.fn.extend({ actual: function(b, c) {
                if (!this[b]) throw '$.actual => The jQuery method "' + b + '" you called does not exist';
                var d, e, f = { absolute: !1, clone: !1, includeMargin: !1 },
                    g = a.extend(f, c),
                    h = this.eq(0);
                if (g.clone === !0) d = function() {
                    var a = "position: absolute !important; top: -1000 !important; ";
                    h = h.clone().attr("style", a).appendTo("body") }, e = function() { h.remove() };
                else {
                    var i, j = [],
                        k = "";
                    d = function() { i = h.parents().addBack().filter(":hidden"), k += "visibility: hidden !important; display: block !important; ", g.absolute === !0 && (k += "position: absolute !important; "), i.each(function() {
                            var b = a(this),
                                c = b.attr("style");
                            j.push(c), b.attr("style", c ? c + ";" + k : k) }) }, e = function() { i.each(function(b) {
                            var c = a(this),
                                d = j[b];
                            void 0 === d ? c.removeAttr("style") : c.attr("style", d) }) } }
                d();
                var l = /(outer)/.test(b) ? h[b](g.includeMargin) : h[b]();
                return e(), l } }) }(jQuery),
    function(a) {
        function b() {}

        function c(a) {
            function c(b) { b.prototype.option || (b.prototype.option = function(b) { a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b)) }) }

            function e(b, c) { a.fn[b] = function(e) {
                    if ("string" == typeof e) {
                        for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                            var j = this[h],
                                k = a.data(j, b);
                            if (k)
                                if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                    var l = k[e].apply(k, g);
                                    if (void 0 !== l) return l } else f("no such method '" + e + "' for " + b + " instance");
                            else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'") }
                        return this }
                    return this.each(function() {
                        var d = a.data(this, b);
                        d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d)) }) } }
            if (a) {
                var f = "undefined" == typeof console ? b : function(a) { console.error(a) };
                return a.bridget = function(a, b) { c(b), e(a, b) }, a.bridget } }
        var d = Array.prototype.slice; "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c(a.jQuery) }(window),
    function(a) {
        function b(b) {
            var c = a.event;
            return c.target = c.target || c.srcElement || b, c }
        var c = document.documentElement,
            d = function() {};
        c.addEventListener ? d = function(a, b, c) { a.addEventListener(b, c, !1) } : c.attachEvent && (d = function(a, c, d) { a[c + d] = d.handleEvent ? function() {
                var c = b(a);
                d.handleEvent.call(d, c) } : function() {
                var c = b(a);
                d.call(a, c) }, a.attachEvent("on" + c, a[c + d]) });
        var e = function() {};
        c.removeEventListener ? e = function(a, b, c) { a.removeEventListener(b, c, !1) } : c.detachEvent && (e = function(a, b, c) { a.detachEvent("on" + b, a[b + c]);
            try { delete a[b + c] } catch (d) { a[b + c] = void 0 } });
        var f = { bind: d, unbind: e }; "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f }(this),
    function(a) {
        function b(a) { "function" == typeof a && (b.isReady ? a() : f.push(a)) }

        function c(a) {
            var c = "readystatechange" === a.type && "complete" !== e.readyState;
            if (!b.isReady && !c) { b.isReady = !0;
                for (var d = 0, g = f.length; g > d; d++) {
                    var h = f[d];
                    h() } } }

        function d(d) {
            return d.bind(e, "DOMContentLoaded", c), d.bind(e, "readystatechange", c), d.bind(a, "load", c), b }
        var e = a.document,
            f = [];
        b.isReady = !1, "function" == typeof define && define.amd ? (b.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], d)) : a.docReady = d(a.eventie) }(this),
    function() {
        function a() {}

        function b(a, b) {
            for (var c = a.length; c--;)
                if (a[c].listener === b) return c;
            return -1 }

        function c(a) {
            return function() {
                return this[a].apply(this, arguments) } }
        var d = a.prototype,
            e = this,
            f = e.EventEmitter;
        d.getListeners = function(a) {
            var b, c, d = this._getEvents();
            if (a instanceof RegExp) { b = {};
                for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c]) } else b = d[a] || (d[a] = []);
            return b }, d.flattenListeners = function(a) {
            var b, c = [];
            for (b = 0; a.length > b; b += 1) c.push(a[b].listener);
            return c }, d.getListenersAsObject = function(a) {
            var b, c = this.getListeners(a);
            return c instanceof Array && (b = {}, b[a] = c), b || c }, d.addListener = function(a, c) {
            var d, e = this.getListenersAsObject(a),
                f = "object" == typeof c;
            for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : { listener: c, once: !1 });
            return this }, d.on = c("addListener"), d.addOnceListener = function(a, b) {
            return this.addListener(a, { listener: b, once: !0 }) }, d.once = c("addOnceListener"), d.defineEvent = function(a) {
            return this.getListeners(a), this }, d.defineEvents = function(a) {
            for (var b = 0; a.length > b; b += 1) this.defineEvent(a[b]);
            return this }, d.removeListener = function(a, c) {
            var d, e, f = this.getListenersAsObject(a);
            for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
            return this }, d.off = c("removeListener"), d.addListeners = function(a, b) {
            return this.manipulateListeners(!1, a, b) }, d.removeListeners = function(a, b) {
            return this.manipulateListeners(!0, a, b) }, d.manipulateListeners = function(a, b, c) {
            var d, e, f = a ? this.removeListener : this.addListener,
                g = a ? this.removeListeners : this.addListeners;
            if ("object" != typeof b || b instanceof RegExp)
                for (d = c.length; d--;) f.call(this, b, c[d]);
            else
                for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
            return this }, d.removeEvent = function(a) {
            var b, c = typeof a,
                d = this._getEvents();
            if ("string" === c) delete d[a];
            else if (a instanceof RegExp)
                for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
            else delete this._events;
            return this }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
            var c, d, e, f, g = this.getListenersAsObject(a);
            for (e in g)
                if (g.hasOwnProperty(e))
                    for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
            return this }, d.trigger = c("emitEvent"), d.emit = function(a) {
            var b = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(a, b) }, d.setOnceReturnValue = function(a) {
            return this._onceReturnValue = a, this }, d._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0 }, d._getEvents = function() {
            return this._events || (this._events = {}) }, a.noConflict = function() {
            return e.EventEmitter = f, a }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return a }) : "object" == typeof module && module.exports ? module.exports = a : this.EventEmitter = a }.call(this),
    function(a) {
        function b(a) {
            if (a) {
                if ("string" == typeof d[a]) return a;
                a = a.charAt(0).toUpperCase() + a.slice(1);
                for (var b, e = 0, f = c.length; f > e; e++)
                    if (b = c[e] + a, "string" == typeof d[b]) return b } }
        var c = "Webkit Moz ms Ms O".split(" "),
            d = document.documentElement.style; "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return b }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b }(window),
    function(a) {
        function b(a) {
            var b = parseFloat(a),
                c = -1 === a.indexOf("%") && !isNaN(b);
            return c && b }

        function c() {
            for (var a = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, b = 0, c = g.length; c > b; b++) {
                var d = g[b];
                a[d] = 0 }
            return a }

        function d(a) {
            function d(a) {
                if ("string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
                    var d = f(a);
                    if ("none" === d.display) return c();
                    var e = {};
                    e.width = a.offsetWidth, e.height = a.offsetHeight;
                    for (var k = e.isBorderBox = !(!j || !d[j] || "border-box" !== d[j]), l = 0, m = g.length; m > l; l++) {
                        var n = g[l],
                            o = d[n];
                        o = h(a, o);
                        var p = parseFloat(o);
                        e[n] = isNaN(p) ? 0 : p }
                    var q = e.paddingLeft + e.paddingRight,
                        r = e.paddingTop + e.paddingBottom,
                        s = e.marginLeft + e.marginRight,
                        t = e.marginTop + e.marginBottom,
                        u = e.borderLeftWidth + e.borderRightWidth,
                        v = e.borderTopWidth + e.borderBottomWidth,
                        w = k && i,
                        x = b(d.width);
                    x !== !1 && (e.width = x + (w ? 0 : q + u));
                    var y = b(d.height);
                    return y !== !1 && (e.height = y + (w ? 0 : r + v)), e.innerWidth = e.width - (q + u), e.innerHeight = e.height - (r + v), e.outerWidth = e.width + s, e.outerHeight = e.height + t, e } }

            function h(a, b) {
                if (e || -1 === b.indexOf("%")) return b;
                var c = a.style,
                    d = c.left,
                    f = a.runtimeStyle,
                    g = f && f.left;
                return g && (f.left = a.currentStyle.left), c.left = b, b = c.pixelLeft, c.left = d, g && (f.left = g), b }
            var i, j = a("boxSizing");
            return function() {
                if (j) {
                    var a = document.createElement("div");
                    a.style.width = "200px", a.style.padding = "1px 2px 3px 4px", a.style.borderStyle = "solid", a.style.borderWidth = "1px 2px 3px 4px", a.style[j] = "border-box";
                    var c = document.body || document.documentElement;
                    c.appendChild(a);
                    var d = f(a);
                    i = 200 === b(d.width), c.removeChild(a) } }(), d }
        var e = a.getComputedStyle,
            f = e ? function(a) {
                return e(a, null) } : function(a) {
                return a.currentStyle },
            g = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"]; "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], d) : "object" == typeof exports ? module.exports = d(require("get-style-property")) : a.getSize = d(a.getStyleProperty) }(window),
    function(a, b) {
        function c(a, b) {
            return a[h](b) }

        function d(a) {
            if (!a.parentNode) {
                var b = document.createDocumentFragment();
                b.appendChild(a) } }

        function e(a, b) { d(a);
            for (var c = a.parentNode.querySelectorAll(b), e = 0, f = c.length; f > e; e++)
                if (c[e] === a) return !0;
            return !1 }

        function f(a, b) {
            return d(a), c(a, b) }
        var g, h = function() {
            if (b.matchesSelector) return "matchesSelector";
            for (var a = ["webkit", "moz", "ms", "o"], c = 0, d = a.length; d > c; c++) {
                var e = a[c],
                    f = e + "MatchesSelector";
                if (b[f]) return f } }();
        if (h) {
            var i = document.createElement("div"),
                j = c(i, "div");
            g = j ? c : f } else g = e; "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return g }) : window.matchesSelector = g }(this, Element.prototype),
    function(a) {
        function b(a, b) {
            for (var c in b) a[c] = b[c];
            return a }

        function c(a) {
            for (var b in a) return !1;
            return b = null, !0 }

        function d(a) {
            return a.replace(/([A-Z])/g, function(a) {
                return "-" + a.toLowerCase() }) }

        function e(a, e, f) {
            function h(a, b) { a && (this.element = a, this.layout = b, this.position = { x: 0, y: 0 }, this._create()) }
            var i = f("transition"),
                j = f("transform"),
                k = i && j,
                l = !!f("perspective"),
                m = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "otransitionend", transition: "transitionend" }[i],
                n = ["transform", "transition", "transitionDuration", "transitionProperty"],
                o = function() {
                    for (var a = {}, b = 0, c = n.length; c > b; b++) {
                        var d = n[b],
                            e = f(d);
                        e && e !== d && (a[d] = e) }
                    return a }();
            b(h.prototype, a.prototype), h.prototype._create = function() { this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" }) }, h.prototype.handleEvent = function(a) {
                var b = "on" + a.type;
                this[b] && this[b](a) }, h.prototype.getSize = function() { this.size = e(this.element) }, h.prototype.css = function(a) {
                var b = this.element.style;
                for (var c in a) {
                    var d = o[c] || c;
                    b[d] = a[c] } }, h.prototype.getPosition = function() {
                var a = g(this.element),
                    b = this.layout.options,
                    c = b.isOriginLeft,
                    d = b.isOriginTop,
                    e = parseInt(a[c ? "left" : "right"], 10),
                    f = parseInt(a[d ? "top" : "bottom"], 10);
                e = isNaN(e) ? 0 : e, f = isNaN(f) ? 0 : f;
                var h = this.layout.size;
                e -= c ? h.paddingLeft : h.paddingRight, f -= d ? h.paddingTop : h.paddingBottom, this.position.x = e, this.position.y = f }, h.prototype.layoutPosition = function() {
                var a = this.layout.size,
                    b = this.layout.options,
                    c = {};
                b.isOriginLeft ? (c.left = this.position.x + a.paddingLeft + "px", c.right = "") : (c.right = this.position.x + a.paddingRight + "px", c.left = ""), b.isOriginTop ? (c.top = this.position.y + a.paddingTop + "px", c.bottom = "") : (c.bottom = this.position.y + a.paddingBottom + "px", c.top = ""), this.css(c), this.emitEvent("layout", [this]) };
            var p = l ? function(a, b) {
                return "translate3d(" + a + "px, " + b + "px, 0)" } : function(a, b) {
                return "translate(" + a + "px, " + b + "px)" };
            h.prototype._transitionTo = function(a, b) { this.getPosition();
                var c = this.position.x,
                    d = this.position.y,
                    e = parseInt(a, 10),
                    f = parseInt(b, 10),
                    g = e === this.position.x && f === this.position.y;
                if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
                var h = a - c,
                    i = b - d,
                    j = {},
                    k = this.layout.options;
                h = k.isOriginLeft ? h : -h, i = k.isOriginTop ? i : -i, j.transform = p(h, i), this.transition({ to: j, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 }) }, h.prototype.goTo = function(a, b) { this.setPosition(a, b), this.layoutPosition() }, h.prototype.moveTo = k ? h.prototype._transitionTo : h.prototype.goTo, h.prototype.setPosition = function(a, b) { this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10) }, h.prototype._nonTransition = function(a) { this.css(a.to), a.isCleaning && this._removeStyles(a.to);
                for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this) }, h.prototype._transition = function(a) {
                if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
                var b = this._transn;
                for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
                for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
                if (a.from) { this.css(a.from);
                    var d = this.element.offsetHeight;
                    d = null }
                this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0 };
            var q = j && d(j) + ",opacity";
            h.prototype.enableTransition = function() { this.isTransitioning || (this.css({ transitionProperty: q, transitionDuration: this.layout.options.transitionDuration }), this.element.addEventListener(m, this, !1)) }, h.prototype.transition = h.prototype[i ? "_transition" : "_nonTransition"], h.prototype.onwebkitTransitionEnd = function(a) { this.ontransitionend(a) }, h.prototype.onotransitionend = function(a) { this.ontransitionend(a) };
            var r = { "-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform" };
            h.prototype.ontransitionend = function(a) {
                if (a.target === this.element) {
                    var b = this._transn,
                        d = r[a.propertyName] || a.propertyName;
                    if (delete b.ingProperties[d], c(b.ingProperties) && this.disableTransition(), d in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[d]), d in b.onEnd) {
                        var e = b.onEnd[d];
                        e.call(this), delete b.onEnd[d] }
                    this.emitEvent("transitionEnd", [this]) } }, h.prototype.disableTransition = function() { this.removeTransitionStyles(), this.element.removeEventListener(m, this, !1), this.isTransitioning = !1 }, h.prototype._removeStyles = function(a) {
                var b = {};
                for (var c in a) b[c] = "";
                this.css(b) };
            var s = { transitionProperty: "", transitionDuration: "" };
            return h.prototype.removeTransitionStyles = function() { this.css(s) }, h.prototype.removeElem = function() { this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this]) }, h.prototype.remove = function() {
                if (!i || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
                var a = this;
                this.on("transitionEnd", function() {
                    return a.removeElem(), !0 }), this.hide() }, h.prototype.reveal = function() { delete this.isHidden, this.css({ display: "" });
                var a = this.layout.options;
                this.transition({ from: a.hiddenStyle, to: a.visibleStyle, isCleaning: !0 }) }, h.prototype.hide = function() { this.isHidden = !0, this.css({ display: "" });
                var a = this.layout.options;
                this.transition({ from: a.visibleStyle, to: a.hiddenStyle, isCleaning: !0, onTransitionEnd: { opacity: function() { this.isHidden && this.css({ display: "none" }) } } }) }, h.prototype.destroy = function() { this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" }) }, h }
        var f = a.getComputedStyle,
            g = f ? function(a) {
                return f(a, null) } : function(a) {
                return a.currentStyle }; "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], e) : (a.Outlayer = {}, a.Outlayer.Item = e(a.EventEmitter, a.getSize, a.getStyleProperty)) }(window),
    function(a) {
        function b(a, b) {
            for (var c in b) a[c] = b[c];
            return a }

        function c(a) {
            return "[object Array]" === l.call(a) }

        function d(a) {
            var b = [];
            if (c(a)) b = a;
            else if (a && "number" == typeof a.length)
                for (var d = 0, e = a.length; e > d; d++) b.push(a[d]);
            else b.push(a);
            return b }

        function e(a, b) {
            var c = n(b, a); - 1 !== c && b.splice(c, 1) }

        function f(a) {
            return a.replace(/(.)([A-Z])/g, function(a, b, c) {
                return b + "-" + c }).toLowerCase() }

        function g(c, g, l, n, o, p) {
            function q(a, c) {
                if ("string" == typeof a && (a = h.querySelector(a)), !a || !m(a)) return void(i && i.error("Bad " + this.constructor.namespace + " element: " + a));
                this.element = a, this.options = b({}, this.constructor.defaults), this.option(c);
                var d = ++r;
                this.element.outlayerGUID = d, s[d] = this, this._create(), this.options.isInitLayout && this.layout() }
            var r = 0,
                s = {};
            return q.namespace = "outlayer", q.Item = p, q.defaults = { containerStyle: { position: "relative" }, isInitLayout: !0, isOriginLeft: !0, isOriginTop: !0, isResizeBound: !0, isResizingContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } }, b(q.prototype, l.prototype), q.prototype.option = function(a) { b(this.options, a) }, q.prototype._create = function() { this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), b(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize() }, q.prototype.reloadItems = function() { this.items = this._itemize(this.element.children) }, q.prototype._itemize = function(a) {
                for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
                    var g = b[e],
                        h = new c(g, this);
                    d.push(h) }
                return d
            }, q.prototype._filterFindItemElements = function(a) { a = d(a);
                for (var b = this.options.itemSelector, c = [], e = 0, f = a.length; f > e; e++) {
                    var g = a[e];
                    if (m(g))
                        if (b) { o(g, b) && c.push(g);
                            for (var h = g.querySelectorAll(b), i = 0, j = h.length; j > i; i++) c.push(h[i]) } else c.push(g) }
                return c }, q.prototype.getItemElements = function() {
                for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
                return a }, q.prototype.layout = function() { this._resetLayout(), this._manageStamps();
                var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                this.layoutItems(this.items, a), this._isLayoutInited = !0 }, q.prototype._init = q.prototype.layout, q.prototype._resetLayout = function() { this.getSize() }, q.prototype.getSize = function() { this.size = n(this.element) }, q.prototype._getMeasurement = function(a, b) {
                var c, d = this.options[a];
                d ? ("string" == typeof d ? c = this.element.querySelector(d) : m(d) && (c = d), this[a] = c ? n(c)[b] : d) : this[a] = 0 }, q.prototype.layoutItems = function(a, b) { a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout() }, q.prototype._getItemsForLayout = function(a) {
                for (var b = [], c = 0, d = a.length; d > c; c++) {
                    var e = a[c];
                    e.isIgnored || b.push(e) }
                return b }, q.prototype._layoutItems = function(a, b) {
                function c() { d.emitEvent("layoutComplete", [d, a]) }
                var d = this;
                if (!a || !a.length) return void c();
                this._itemsOn(a, "layout", c);
                for (var e = [], f = 0, g = a.length; g > f; f++) {
                    var h = a[f],
                        i = this._getItemLayoutPosition(h);
                    i.item = h, i.isInstant = b || h.isLayoutInstant, e.push(i) }
                this._processLayoutQueue(e) }, q.prototype._getItemLayoutPosition = function() {
                return { x: 0, y: 0 } }, q.prototype._processLayoutQueue = function(a) {
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    this._positionItem(d.item, d.x, d.y, d.isInstant) } }, q.prototype._positionItem = function(a, b, c, d) { d ? a.goTo(b, c) : a.moveTo(b, c) }, q.prototype._postLayout = function() { this.resizeContainer() }, q.prototype.resizeContainer = function() {
                if (this.options.isResizingContainer) {
                    var a = this._getContainerSize();
                    a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1)) } }, q.prototype._getContainerSize = k, q.prototype._setContainerMeasure = function(a, b) {
                if (void 0 !== a) {
                    var c = this.size;
                    c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px" } }, q.prototype._itemsOn = function(a, b, c) {
                function d() {
                    return e++, e === f && c.call(g), !0 }
                for (var e = 0, f = a.length, g = this, h = 0, i = a.length; i > h; h++) {
                    var j = a[h];
                    j.on(b, d) } }, q.prototype.ignore = function(a) {
                var b = this.getItem(a);
                b && (b.isIgnored = !0) }, q.prototype.unignore = function(a) {
                var b = this.getItem(a);
                b && delete b.isIgnored }, q.prototype.stamp = function(a) {
                if (a = this._find(a)) { this.stamps = this.stamps.concat(a);
                    for (var b = 0, c = a.length; c > b; b++) {
                        var d = a[b];
                        this.ignore(d) } } }, q.prototype.unstamp = function(a) {
                if (a = this._find(a))
                    for (var b = 0, c = a.length; c > b; b++) {
                        var d = a[b];
                        e(d, this.stamps), this.unignore(d) } }, q.prototype._find = function(a) {
                return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = d(a)) : void 0 }, q.prototype._manageStamps = function() {
                if (this.stamps && this.stamps.length) { this._getBoundingRect();
                    for (var a = 0, b = this.stamps.length; b > a; a++) {
                        var c = this.stamps[a];
                        this._manageStamp(c) } } }, q.prototype._getBoundingRect = function() {
                var a = this.element.getBoundingClientRect(),
                    b = this.size;
                this._boundingRect = { left: a.left + b.paddingLeft + b.borderLeftWidth, top: a.top + b.paddingTop + b.borderTopWidth, right: a.right - (b.paddingRight + b.borderRightWidth), bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth) } }, q.prototype._manageStamp = k, q.prototype._getElementOffset = function(a) {
                var b = a.getBoundingClientRect(),
                    c = this._boundingRect,
                    d = n(a),
                    e = { left: b.left - c.left - d.marginLeft, top: b.top - c.top - d.marginTop, right: c.right - b.right - d.marginRight, bottom: c.bottom - b.bottom - d.marginBottom };
                return e }, q.prototype.handleEvent = function(a) {
                var b = "on" + a.type;
                this[b] && this[b](a) }, q.prototype.bindResize = function() { this.isResizeBound || (c.bind(a, "resize", this), this.isResizeBound = !0) }, q.prototype.unbindResize = function() { this.isResizeBound && c.unbind(a, "resize", this), this.isResizeBound = !1 }, q.prototype.onresize = function() {
                function a() { b.resize(), delete b.resizeTimeout }
                this.resizeTimeout && clearTimeout(this.resizeTimeout);
                var b = this;
                this.resizeTimeout = setTimeout(a, 100) }, q.prototype.resize = function() { this.isResizeBound && this.needsResizeLayout() && this.layout() }, q.prototype.needsResizeLayout = function() {
                var a = n(this.element),
                    b = this.size && a;
                return b && a.innerWidth !== this.size.innerWidth }, q.prototype.addItems = function(a) {
                var b = this._itemize(a);
                return b.length && (this.items = this.items.concat(b)), b }, q.prototype.appended = function(a) {
                var b = this.addItems(a);
                b.length && (this.layoutItems(b, !0), this.reveal(b)) }, q.prototype.prepended = function(a) {
                var b = this._itemize(a);
                if (b.length) {
                    var c = this.items.slice(0);
                    this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c) } }, q.prototype.reveal = function(a) {
                var b = a && a.length;
                if (b)
                    for (var c = 0; b > c; c++) {
                        var d = a[c];
                        d.reveal() } }, q.prototype.hide = function(a) {
                var b = a && a.length;
                if (b)
                    for (var c = 0; b > c; c++) {
                        var d = a[c];
                        d.hide() } }, q.prototype.getItem = function(a) {
                for (var b = 0, c = this.items.length; c > b; b++) {
                    var d = this.items[b];
                    if (d.element === a) return d } }, q.prototype.getItems = function(a) {
                if (a && a.length) {
                    for (var b = [], c = 0, d = a.length; d > c; c++) {
                        var e = a[c],
                            f = this.getItem(e);
                        f && b.push(f) }
                    return b } }, q.prototype.remove = function(a) { a = d(a);
                var b = this.getItems(a);
                if (b && b.length) { this._itemsOn(b, "remove", function() { this.emitEvent("removeComplete", [this, b]) });
                    for (var c = 0, f = b.length; f > c; c++) {
                        var g = b[c];
                        g.remove(), e(g, this.items) } } }, q.prototype.destroy = function() {
                var a = this.element.style;
                a.height = "", a.position = "", a.width = "";
                for (var b = 0, c = this.items.length; c > b; b++) {
                    var d = this.items[b];
                    d.destroy() }
                this.unbindResize(), delete this.element.outlayerGUID, j && j.removeData(this.element, this.constructor.namespace) }, q.data = function(a) {
                var b = a && a.outlayerGUID;
                return b && s[b] }, q.create = function(a, c) {
                function d() { q.apply(this, arguments) }
                return Object.create ? d.prototype = Object.create(q.prototype) : b(d.prototype, q.prototype), d.prototype.constructor = d, d.defaults = b({}, q.defaults), b(d.defaults, c), d.prototype.settings = {}, d.namespace = a, d.data = q.data, d.Item = function() { p.apply(this, arguments) }, d.Item.prototype = new p, g(function() {
                    for (var b = f(a), c = h.querySelectorAll(".js-" + b), e = "data-" + b + "-options", g = 0, k = c.length; k > g; g++) {
                        var l, m = c[g],
                            n = m.getAttribute(e);
                        try { l = n && JSON.parse(n) } catch (o) { i && i.error("Error parsing " + e + " on " + m.nodeName.toLowerCase() + (m.id ? "#" + m.id : "") + ": " + o);
                            continue }
                        var p = new d(m, l);
                        j && j.data(m, a, p) } }), j && j.bridget && j.bridget(a, d), d }, q.Item = p, q
        }
        var h = a.document,
            i = a.console,
            j = a.jQuery,
            k = function() {},
            l = Object.prototype.toString,
            m = "object" == typeof HTMLElement ? function(a) {
                return a instanceof HTMLElement } : function(a) {
                return a && "object" == typeof a && 1 === a.nodeType && "string" == typeof a.nodeName },
            n = Array.prototype.indexOf ? function(a, b) {
                return a.indexOf(b) } : function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1 };
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], g) : a.Outlayer = g(a.eventie, a.docReady, a.EventEmitter, a.getSize, a.matchesSelector, a.Outlayer.Item)
    }(window),
    function(a) {
        function b(a) {
            function b() { a.Item.apply(this, arguments) }
            return b.prototype = new a.Item, b.prototype._create = function() { this.id = this.layout.itemGUID++, a.Item.prototype._create.call(this), this.sortData = {} }, b.prototype.updateSortData = function() {
                if (!this.isIgnored) { this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                    var a = this.layout.options.getSortData,
                        b = this.layout._sorters;
                    for (var c in a) {
                        var d = b[c];
                        this.sortData[c] = d(this.element, this) } } }, b } "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], b) : (a.Isotope = a.Isotope || {}, a.Isotope.Item = b(a.Outlayer)) }(window),
    function(a) {
        function b(a, b) {
            function c(a) { this.isotope = a, a && (this.options = a.options[this.namespace], this.element = a.element, this.items = a.filteredItems, this.size = a.size) }
            return function() {
                function a(a) {
                    return function() {
                        return b.prototype[a].apply(this.isotope, arguments) } }
                for (var d = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], e = 0, f = d.length; f > e; e++) {
                    var g = d[e];
                    c.prototype[g] = a(g) } }(), c.prototype.needsVerticalResizeLayout = function() {
                var b = a(this.isotope.element),
                    c = this.isotope.size && b;
                return c && b.innerHeight !== this.isotope.size.innerHeight }, c.prototype._getMeasurement = function() { this.isotope._getMeasurement.apply(this, arguments) }, c.prototype.getColumnWidth = function() { this.getSegmentSize("column", "Width") }, c.prototype.getRowHeight = function() { this.getSegmentSize("row", "Height") }, c.prototype.getSegmentSize = function(a, b) {
                var c = a + b,
                    d = "outer" + b;
                if (this._getMeasurement(c, d), !this[c]) {
                    var e = this.getFirstItemSize();
                    this[c] = e && e[d] || this.isotope.size["inner" + b] } }, c.prototype.getFirstItemSize = function() {
                var b = this.isotope.filteredItems[0];
                return b && b.element && a(b.element) }, c.prototype.layout = function() { this.isotope.layout.apply(this.isotope, arguments) }, c.prototype.getSize = function() { this.isotope.getSize(), this.size = this.isotope.size }, c.modes = {}, c.create = function(a, b) {
                function d() { c.apply(this, arguments) }
                return d.prototype = new c, b && (d.options = b), d.prototype.namespace = a, c.modes[a] = d, d }, c } "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], b) : (a.Isotope = a.Isotope || {}, a.Isotope.LayoutMode = b(a.getSize, a.Outlayer)) }(window),
    function(a) {
        function b(a, b) {
            var d = a.create("masonry");
            return d.prototype._resetLayout = function() { this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
                var a = this.cols;
                for (this.colYs = []; a--;) this.colYs.push(0);
                this.maxY = 0 }, d.prototype.measureColumns = function() {
                if (this.getContainerWidth(), !this.columnWidth) {
                    var a = this.items[0],
                        c = a && a.element;
                    this.columnWidth = c && b(c).outerWidth || this.containerWidth }
                this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1) }, d.prototype.getContainerWidth = function() {
                var a = this.options.isFitWidth ? this.element.parentNode : this.element,
                    c = b(a);
                this.containerWidth = c && c.innerWidth }, d.prototype._getItemLayoutPosition = function(a) { a.getSize();
                var b = a.size.outerWidth % this.columnWidth,
                    d = b && 1 > b ? "round" : "ceil",
                    e = Math[d](a.size.outerWidth / this.columnWidth);
                e = Math.min(e, this.cols);
                for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c(f, g), i = { x: this.columnWidth * h, y: g }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
                return i }, d.prototype._getColGroup = function(a) {
                if (2 > a) return this.colYs;
                for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
                    var e = this.colYs.slice(d, d + a);
                    b[d] = Math.max.apply(Math, e) }
                return b }, d.prototype._manageStamp = function(a) {
                var c = b(a),
                    d = this._getElementOffset(a),
                    e = this.options.isOriginLeft ? d.left : d.right,
                    f = e + c.outerWidth,
                    g = Math.floor(e / this.columnWidth);
                g = Math.max(0, g);
                var h = Math.floor(f / this.columnWidth);
                h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
                for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j]) }, d.prototype._getContainerSize = function() { this.maxY = Math.max.apply(Math, this.colYs);
                var a = { height: this.maxY };
                return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a }, d.prototype._getContainerFitWidth = function() {
                for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
                return (this.cols - a) * this.columnWidth - this.gutter }, d.prototype.needsResizeLayout = function() {
                var a = this.containerWidth;
                return this.getContainerWidth(), a !== this.containerWidth }, d }
        var c = Array.prototype.indexOf ? function(a, b) {
            return a.indexOf(b) } : function(a, b) {
            for (var c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                if (e === b) return c }
            return -1 }; "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], b) : a.Masonry = b(a.Outlayer, a.getSize) }(window),
    function(a) {
        function b(a, b) {
            for (var c in b) a[c] = b[c];
            return a }

        function c(a, c) {
            var d = a.create("masonry"),
                e = d.prototype._getElementOffset,
                f = d.prototype.layout,
                g = d.prototype._getMeasurement;
            b(d.prototype, c.prototype), d.prototype._getElementOffset = e, d.prototype.layout = f, d.prototype._getMeasurement = g;
            var h = d.prototype.measureColumns;
            d.prototype.measureColumns = function() { this.items = this.isotope.filteredItems, h.call(this) };
            var i = d.prototype._manageStamp;
            return d.prototype._manageStamp = function() { this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, i.apply(this, arguments) }, d } "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], c) : c(a.Isotope.LayoutMode, a.Masonry) }(window),
    function(a) {
        function b(a) {
            var b = a.create("fitRows");
            return b.prototype._resetLayout = function() { this.x = 0, this.y = 0, this.maxY = 0 }, b.prototype._getItemLayoutPosition = function(a) { a.getSize(), 0 !== this.x && a.size.outerWidth + this.x > this.isotope.size.innerWidth && (this.x = 0, this.y = this.maxY);
                var b = { x: this.x, y: this.y };
                return this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight), this.x += a.size.outerWidth, b }, b.prototype._getContainerSize = function() {
                return { height: this.maxY } }, b } "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b) : b(a.Isotope.LayoutMode) }(window),
    function(a) {
        function b(a) {
            var b = a.create("vertical", { horizontalAlignment: 0 });
            return b.prototype._resetLayout = function() { this.y = 0 }, b.prototype._getItemLayoutPosition = function(a) { a.getSize();
                var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment,
                    c = this.y;
                return this.y += a.size.outerHeight, { x: b, y: c } }, b.prototype._getContainerSize = function() {
                return { height: this.y } }, b } "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b) : b(a.Isotope.LayoutMode) }(window),
    function(a) {
        function b(a, b) {
            for (var c in b) a[c] = b[c];
            return a }

        function c(a) {
            return "[object Array]" === k.call(a) }

        function d(a) {
            var b = [];
            if (c(a)) b = a;
            else if (a && "number" == typeof a.length)
                for (var d = 0, e = a.length; e > d; d++) b.push(a[d]);
            else b.push(a);
            return b }

        function e(a, b) {
            var c = l(b, a); - 1 !== c && b.splice(c, 1) }

        function f(a, c, f, i, k) {
            function l(a, b) {
                return function(c, d) {
                    for (var e = 0, f = a.length; f > e; e++) {
                        var g = a[e],
                            h = c.sortData[g],
                            i = d.sortData[g];
                        if (h > i || i > h) {
                            var j = void 0 !== b[g] ? b[g] : b,
                                k = j ? 1 : -1;
                            return (h > i ? 1 : -1) * k } }
                    return 0 } }
            var m = a.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });
            m.Item = i, m.LayoutMode = k, m.prototype._create = function() { this.itemGUID = 0, this._sorters = {}, this._getSorters(), a.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
                for (var b in k.modes) this._initLayoutMode(b) }, m.prototype.reloadItems = function() { this.itemGUID = 0, a.prototype.reloadItems.call(this) }, m.prototype._itemize = function() {
                for (var b = a.prototype._itemize.apply(this, arguments), c = 0, d = b.length; d > c; c++) {
                    var e = b[c];
                    e.id = this.itemGUID++ }
                return this._updateItemsSortData(b), b }, m.prototype._initLayoutMode = function(a) {
                var c = k.modes[a],
                    d = this.options[a] || {};
                this.options[a] = c.options ? b(c.options, d) : d, this.modes[a] = new c(this) }, m.prototype.layout = function() {
                return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout() }, m.prototype._layout = function() {
                var a = this._getIsInstant();
                this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, a), this._isLayoutInited = !0 }, m.prototype.arrange = function(a) { this.option(a), this._getIsInstant(), this.filteredItems = this._filter(this.items), this._sort(), this._layout() }, m.prototype._init = m.prototype.arrange, m.prototype._getIsInstant = function() {
                var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                return this._isInstant = a, a }, m.prototype._filter = function(a) {
                function b() { l.reveal(e), l.hide(f) }
                var c = this.options.filter;
                c = c || "*";
                for (var d = [], e = [], f = [], g = this._getFilterTest(c), h = 0, i = a.length; i > h; h++) {
                    var j = a[h];
                    if (!j.isIgnored) {
                        var k = g(j);
                        k && d.push(j), k && j.isHidden ? e.push(j) : k || j.isHidden || f.push(j) } }
                var l = this;
                return this._isInstant ? this._noTransition(b) : b(), d }, m.prototype._getFilterTest = function(a) {
                return g && this.options.isJQueryFiltering ? function(b) {
                    return g(b.element).is(a) } : "function" == typeof a ? function(b) {
                    return a(b.element) } : function(b) {
                    return f(b.element, a) } }, m.prototype.updateSortData = function(a) { this._getSorters(), a = d(a);
                var b = this.getItems(a);
                b = b.length ? b : this.items, this._updateItemsSortData(b) }, m.prototype._getSorters = function() {
                var a = this.options.getSortData;
                for (var b in a) {
                    var c = a[b];
                    this._sorters[b] = n(c) } }, m.prototype._updateItemsSortData = function(a) {
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    d.updateSortData() } };
            var n = function() {
                function a(a) {
                    if ("string" != typeof a) return a;
                    var c = h(a).split(" "),
                        d = c[0],
                        e = d.match(/^\[(.+)\]$/),
                        f = e && e[1],
                        g = b(f, d),
                        i = m.sortDataParsers[c[1]];
                    return a = i ? function(a) {
                        return a && i(g(a)) } : function(a) {
                        return a && g(a) } }

                function b(a, b) {
                    var c;
                    return c = a ? function(b) {
                        return b.getAttribute(a) } : function(a) {
                        var c = a.querySelector(b);
                        return c && j(c) } }
                return a }();
            m.sortDataParsers = { parseInt: function(a) {
                    return parseInt(a, 10) }, parseFloat: function(a) {
                    return parseFloat(a) } }, m.prototype._sort = function() {
                var a = this.options.sortBy;
                if (a) {
                    var b = [].concat.apply(a, this.sortHistory),
                        c = l(b, this.options.sortAscending);
                    this.filteredItems.sort(c), a !== this.sortHistory[0] && this.sortHistory.unshift(a) } }, m.prototype._mode = function() {
                var a = this.options.layoutMode,
                    b = this.modes[a];
                if (!b) throw Error("No layout mode: " + a);
                return b.options = this.options[a], b }, m.prototype._resetLayout = function() { a.prototype._resetLayout.call(this), this._mode()._resetLayout() }, m.prototype._getItemLayoutPosition = function(a) {
                return this._mode()._getItemLayoutPosition(a) }, m.prototype._manageStamp = function(a) { this._mode()._manageStamp(a) }, m.prototype._getContainerSize = function() {
                return this._mode()._getContainerSize() }, m.prototype.needsResizeLayout = function() {
                return this._mode().needsResizeLayout() }, m.prototype.appended = function(a) {
                var b = this.addItems(a);
                if (b.length) {
                    var c = this._filterRevealAdded(b);
                    this.filteredItems = this.filteredItems.concat(c) } }, m.prototype.prepended = function(a) {
                var b = this._itemize(a);
                if (b.length) {
                    var c = this.items.slice(0);
                    this.items = b.concat(c), this._resetLayout(), this._manageStamps();
                    var d = this._filterRevealAdded(b);
                    this.layoutItems(c), this.filteredItems = d.concat(this.filteredItems) } }, m.prototype._filterRevealAdded = function(a) {
                var b = this._noTransition(function() {
                    return this._filter(a) });
                return this.layoutItems(b, !0), this.reveal(b), a }, m.prototype.insert = function(a) {
                var b = this.addItems(a);
                if (b.length) {
                    var c, d, e = b.length;
                    for (c = 0; e > c; c++) d = b[c], this.element.appendChild(d.element);
                    var f = this._filter(b);
                    for (this._noTransition(function() { this.hide(f) }), c = 0; e > c; c++) b[c].isLayoutInstant = !0;
                    for (this.arrange(), c = 0; e > c; c++) delete b[c].isLayoutInstant;
                    this.reveal(f) } };
            var o = m.prototype.remove;
            return m.prototype.remove = function(a) { a = d(a);
                var b = this.getItems(a);
                if (o.call(this, a), b && b.length)
                    for (var c = 0, f = b.length; f > c; c++) {
                        var g = b[c];
                        e(g, this.filteredItems) } }, m.prototype._noTransition = function(a) {
                var b = this.options.transitionDuration;
                this.options.transitionDuration = 0;
                var c = a.call(this);
                return this.options.transitionDuration = b, c }, m }
        var g = a.jQuery,
            h = String.prototype.trim ? function(a) {
                return a.trim() } : function(a) {
                return a.replace(/^\s+|\s+$/g, "") },
            i = document.documentElement,
            j = i.textContent ? function(a) {
                return a.textContent } : function(a) {
                return a.innerText },
            k = Object.prototype.toString,
            l = Array.prototype.indexOf ? function(a, b) {
                return a.indexOf(b) } : function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1 }; "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], f) : a.Isotope = f(a.Outlayer, a.getSize, a.matchesSelector, a.Isotope.Item, a.Isotope.LayoutMode) }(window), ! function(a) {
        var b, c, d, e, f, g, h, i = "Close",
            j = "BeforeClose",
            k = "AfterClose",
            l = "BeforeAppend",
            m = "MarkupParse",
            n = "Open",
            o = "Change",
            p = "mfp",
            q = "." + p,
            r = "mfp-ready",
            s = "mfp-removing",
            t = "mfp-prevent-close",
            u = function() {},
            v = !!window.jQuery,
            w = a(window),
            x = function(a, c) { b.ev.on(p + a + q, c) },
            y = function(b, c, d, e) {
                var f = document.createElement("div");
                return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f },
            z = function(c, d) { b.ev.triggerHandler(p + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d])) },
            A = function(c) {
                return c === h && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), h = c), b.currTemplate.closeBtn },
            B = function() { a.magnificPopup.instance || (b = new u, b.init(), a.magnificPopup.instance = b) },
            C = function() {
                var a = document.createElement("p").style,
                    b = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== a.transition) return !0;
                for (; b.length;)
                    if (b.pop() + "Transition" in a) return !0;
                return !1 };
        u.prototype = { constructor: u, init: function() {
                var c = navigator.appVersion;
                b.isIE7 = -1 !== c.indexOf("MSIE 7."), b.isIE8 = -1 !== c.indexOf("MSIE 8."), b.isLowIE = b.isIE7 || b.isIE8, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = C(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), e = a(document), b.popupsCache = {} }, open: function(c) { d || (d = a(document.body));
                var f;
                if (c.isObj === !1) { b.items = c.items.toArray(), b.index = 0;
                    var h, i = c.items;
                    for (f = 0; f < i.length; f++)
                        if (h = i[f], h.parsed && (h = h.el[0]), h === c.el[0]) { b.index = f;
                            break } } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
                if (b.isOpen) return void b.updateItemHTML();
                b.types = [], g = "", b.ev = c.mainEl && c.mainEl.length ? c.mainEl.eq(0) : e, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = y("bg").on("click" + q, function() { b.close() }), b.wrap = y("wrap").attr("tabindex", -1).on("click" + q, function(a) { b._checkIfClose(a.target) && b.close() }), b.container = y("container", b.wrap)), b.contentContainer = y("content"), b.st.preloader && (b.preloader = y("preloader", b.container, b.st.tLoading));
                var j = a.magnificPopup.modules;
                for (f = 0; f < j.length; f++) {
                    var k = j[f];
                    k = k.charAt(0).toUpperCase() + k.slice(1), b["init" + k].call(b) }
                z("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (x(m, function(a, b, c, d) { c.close_replaceWith = A(d.type) }), g += " mfp-close-btn-in") : b.wrap.append(A())), b.st.alignTop && (g += " mfp-align-top"), b.wrap.css(b.fixedContentPos ? { overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY } : { top: w.scrollTop(), position: "absolute" }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({ height: e.height(), position: "absolute" }), b.st.enableEscapeKey && e.on("keyup" + q, function(a) { 27 === a.keyCode && b.close() }), w.on("resize" + q, function() { b.updateSize() }), b.st.closeOnContentClick || (g += " mfp-auto-cursor"), g && b.wrap.addClass(g);
                var l = b.wH = w.height(),
                    o = {};
                if (b.fixedContentPos && b._hasScrollBar(l)) {
                    var p = b._getScrollbarSize();
                    p && (o.marginRight = p) }
                b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : o.overflow = "hidden");
                var s = b.st.mainClass;
                return b.isIE7 && (s += " mfp-ie7"), s && b._addClassToMFP(s), b.updateItemHTML(), z("BuildControls"), a("html").css(o), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || d), b._lastFocusedEl = document.activeElement, setTimeout(function() { b.content ? (b._addClassToMFP(r), b._setFocus()) : b.bgOverlay.addClass(r), e.on("focusin" + q, b._onFocusIn) }, 16), b.isOpen = !0, b.updateSize(l), z(n), c }, close: function() { b.isOpen && (z(j), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(s), setTimeout(function() { b._close() }, b.st.removalDelay)) : b._close()) }, _close: function() { z(i);
                var c = s + " " + r + " ";
                if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                    var d = { marginRight: "" };
                    b.isIE7 ? a("body, html").css("overflow", "") : d.overflow = "", a("html").css(d) }
                e.off("keyup" + q + " focusin" + q), b.ev.off(q), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, z(k) }, updateSize: function(a) {
                if (b.isIOS) {
                    var c = document.documentElement.clientWidth / window.innerWidth,
                        d = window.innerHeight * c;
                    b.wrap.css("height", d), b.wH = d } else b.wH = a || w.height();
                b.fixedContentPos || b.wrap.css("height", b.wH), z("Resize") }, updateItemHTML: function() {
                var c = b.items[b.index];
                b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
                var d = c.type;
                if (z("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                    var e = b.st[d] ? b.st[d].markup : !1;
                    z("FirstMarkupParse", e), b.currTemplate[d] = e ? a(e) : !0 }
                f && f !== c.type && b.container.removeClass("mfp-" + f + "-holder");
                var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
                b.appendContent(g, d), c.preloaded = !0, z(o, c), f = c.type, b.container.prepend(b.contentContainer), z("AfterChange") }, appendContent: function(a, c) { b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(A()) : b.content = a : b.content = "", z(l), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content) }, parseEl: function(c) {
                var d, e = b.items[c];
                if (e.tagName ? e = { el: a(e) } : (d = e.type, e = { data: e, src: e.src }), e.el) {
                    for (var f = b.types, g = 0; g < f.length; g++)
                        if (e.el.hasClass("mfp-" + f[g])) { d = f[g];
                            break }
                    e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href")) }
                return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, z("ElementParse", e), b.items[c] }, addGroup: function(a, c) {
                var d = function(d) { d.mfpEl = this, b._openClick(d, a, c) };
                c || (c = {});
                var e = "click.magnificPopup";
                c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d))) }, _openClick: function(c, d, e) {
                var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
                if (f || 2 !== c.which && !c.ctrlKey && !c.metaKey) {
                    var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                    if (g)
                        if (a.isFunction(g)) {
                            if (!g.call(b)) return !0 } else if (w.width() < g) return !0;
                    c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e) } }, updateStatus: function(a, d) {
                if (b.preloader) { c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                    var e = { status: a, text: d };
                    z("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) { a.stopImmediatePropagation() }), b.container.addClass("mfp-s-" + a), c = a } }, _checkIfClose: function(c) {
                if (!a(c).hasClass(t)) {
                    var d = b.st.closeOnContentClick,
                        e = b.st.closeOnBgClick;
                    if (d && e) return !0;
                    if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                    if (c === b.content[0] || a.contains(b.content[0], c)) {
                        if (d) return !0 } else if (e && a.contains(document, c)) return !0;
                    return !1 } }, _addClassToMFP: function(a) { b.bgOverlay.addClass(a), b.wrap.addClass(a) }, _removeClassFromMFP: function(a) { this.bgOverlay.removeClass(a), b.wrap.removeClass(a) }, _hasScrollBar: function(a) {
                return (b.isIE7 ? e.height() : document.body.scrollHeight) > (a || w.height()) }, _setFocus: function() {
                (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus() }, _onFocusIn: function(c) {
                return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1) }, _parseMarkup: function(b, c, d) {
                var e;
                d.data && (c = a.extend(d.data, c)), z(m, [b, c, d]), a.each(c, function(a, c) {
                    if (void 0 === c || c === !1) return !0;
                    if (e = a.split("_"), e.length > 1) {
                        var d = b.find(q + "-" + e[0]);
                        if (d.length > 0) {
                            var f = e[1]; "replaceWith" === f ? d[0] !== c[0] && d.replaceWith(c) : "img" === f ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c) } } else b.find(q + "-" + a).html(c) }) }, _getScrollbarSize: function() {
                if (void 0 === b.scrollbarSize) {
                    var a = document.createElement("div");
                    a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a) }
                return b.scrollbarSize } }, a.magnificPopup = { instance: null, proto: u.prototype, modules: [], open: function(b, c) {
                return B(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b) }, close: function() {
                return a.magnificPopup.instance && a.magnificPopup.instance.close() }, registerModule: function(b, c) { c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>', tClose: "Close (Esc)", tLoading: "Loading..." } }, a.fn.magnificPopup = function(c) { B();
            var d = a(this);
            if ("string" == typeof c)
                if ("open" === c) {
                    var e, f = v ? d.data("magnificPopup") : d[0].magnificPopup,
                        g = parseInt(arguments[1], 10) || 0;
                    f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({ mfpEl: e }, d, f) } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
            else c = a.extend(!0, {}, c), v ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
            return d };
        var D, E, F, G = "inline",
            H = function() { F && (E.after(F.addClass(D)).detach(), F = null) };
        a.magnificPopup.registerModule(G, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function() { b.types.push(G), x(i + "." + G, function() { H() }) }, getInline: function(c, d) {
                    if (H(), c.src) {
                        var e = b.st.inline,
                            f = a(c.src);
                        if (f.length) {
                            var g = f[0].parentNode;
                            g && g.tagName && (E || (D = e.hiddenClass, E = y(D), D = "mfp-" + D), F = f.after(E).detach().removeClass(D)), b.updateStatus("ready") } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                        return c.inlineElement = f, f }
                    return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d } } });
        var I, J = "ajax",
            K = function() { I && d.removeClass(I) },
            L = function() { K(), b.req && b.req.abort() };
        a.magnificPopup.registerModule(J, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function() { b.types.push(J), I = b.st.ajax.cursor, x(i + "." + J, L), x("BeforeChange." + J, L) }, getAjax: function(c) { I && d.addClass(I), b.updateStatus("loading");
                    var e = a.extend({ url: c.src, success: function(d, e, f) {
                            var g = { data: d, xhr: f };
                            z("ParseAjax", g), b.appendContent(a(g.data), J), c.finished = !0, K(), b._setFocus(), setTimeout(function() { b.wrap.addClass(r) }, 16), b.updateStatus("ready"), z("AjaxContentAdded") }, error: function() { K(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src)) } }, b.st.ajax.settings);
                    return b.req = a.ajax(e), "" } } });
        var M, N = function(c) {
            if (c.data && void 0 !== c.data.title) return c.data.title;
            var d = b.st.image.titleSrc;
            if (d) {
                if (a.isFunction(d)) return d.call(b, c);
                if (c.el) return c.el.attr(d) || "" }
            return "" };
        a.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: { initImage: function() {
                    var a = b.st.image,
                        c = ".image";
                    b.types.push("image"), x(n + c, function() { "image" === b.currItem.type && a.cursor && d.addClass(a.cursor) }), x(i + c, function() { a.cursor && d.removeClass(a.cursor), w.off("resize" + q) }), x("Resize" + c, b.resizeImage), b.isLowIE && x("AfterChange", b.resizeImage) }, resizeImage: function() {
                    var a = b.currItem;
                    if (a && a.img && b.st.image.verticalFit) {
                        var c = 0;
                        b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c) } }, _onImageHasSize: function(a) { a.img && (a.hasSize = !0, M && clearInterval(M), a.isCheckingImgSize = !1, z("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1)) }, findImageSize: function(a) {
                    var c = 0,
                        d = a.img[0],
                        e = function(f) { M && clearInterval(M), M = setInterval(function() {
                                return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(M), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500))) }, f) };
                    e(1) }, getImage: function(c, d) {
                    var e = 0,
                        f = function() { c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, z("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g())) },
                        g = function() { c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0) },
                        h = b.st.image,
                        i = d.find(".mfp-img");
                    if (i.length) {
                        var j = document.createElement("img");
                        j.className = "mfp-img", c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1) }
                    return b._parseMarkup(d, { title: N(c), img_replaceWith: c.img }, c), b.resizeImage(), c.hasSize ? (M && clearInterval(M), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d) } }
        });
        var O, P = function() {
            return void 0 === O && (O = void 0 !== document.createElement("p").style.MozTransform), O };
        a.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function(a) {
                    return a.is("img") ? a : a.find("img") } }, proto: { initZoom: function() {
                    var a, c = b.st.zoom,
                        d = ".zoom";
                    if (c.enabled && b.supportsTransition) {
                        var e, f, g = c.duration,
                            h = function(a) {
                                var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    d = "all " + c.duration / 1e3 + "s " + c.easing,
                                    e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                                    f = "transition";
                                return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b },
                            k = function() { b.content.css("visibility", "visible") };
                        x("BuildControls" + d, function() {
                            if (b._allowZoom()) {
                                if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                                f = h(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() { f.css(b._getOffset(!0)), e = setTimeout(function() { k(), setTimeout(function() { f.remove(), a = f = null, z("ZoomAnimationEnded") }, 16) }, g) }, 16) } }), x(j + d, function() {
                            if (b._allowZoom()) {
                                if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                    if (a = b._getItemToZoom(), !a) return;
                                    f = h(a) }
                                f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() { f.css(b._getOffset()) }, 16) } }), x(i + d, function() { b._allowZoom() && (k(), f && f.remove(), a = null) }) } }, _allowZoom: function() {
                    return "image" === b.currItem.type }, _getItemToZoom: function() {
                    return b.currItem.hasSize ? b.currItem.img : !1 }, _getOffset: function(c) {
                    var d;
                    d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                    var e = d.offset(),
                        f = parseInt(d.css("padding-top"), 10),
                        g = parseInt(d.css("padding-bottom"), 10);
                    e.top -= a(window).scrollTop() - f;
                    var h = { width: d.width(), height: (v ? d.innerHeight() : d[0].offsetHeight) - g - f };
                    return P() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h } } });
        var Q = "iframe",
            R = "//about:blank",
            S = function(a) {
                if (b.currTemplate[Q]) {
                    var c = b.currTemplate[Q].find("iframe");
                    c.length && (a || (c[0].src = R), b.isIE8 && c.css("display", a ? "block" : "none")) } };
        a.magnificPopup.registerModule(Q, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function() { b.types.push(Q), x("BeforeChange", function(a, b, c) { b !== c && (b === Q ? S() : c === Q && S(!0)) }), x(i + "." + Q, function() { S() }) }, getIframe: function(c, d) {
                    var e = c.src,
                        f = b.st.iframe;
                    a.each(f.patterns, function() {
                        return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0 });
                    var g = {};
                    return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d } } });
        var T = function(a) {
                var c = b.items.length;
                return a > c - 1 ? a - c : 0 > a ? c + a : a },
            U = function(a, b, c) {
                return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c) };
        a.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function() {
                    var c = b.st.gallery,
                        d = ".mfp-gallery",
                        f = Boolean(a.fn.mfpFastClick);
                    return b.direction = !0, c && c.enabled ? (g += " mfp-gallery", x(n + d, function() { c.navigateByImgClick && b.wrap.on("click" + d, ".mfp-img", function() {
                            return b.items.length > 1 ? (b.next(), !1) : void 0 }), e.on("keydown" + d, function(a) { 37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next() }) }), x("UpdateStatus" + d, function(a, c) { c.text && (c.text = U(c.text, b.currItem.index, b.items.length)) }), x(m + d, function(a, d, e, f) {
                        var g = b.items.length;
                        e.counter = g > 1 ? U(c.tCounter, f.index, g) : "" }), x("BuildControls" + d, function() {
                        if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                            var d = c.arrowMarkup,
                                e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(t),
                                g = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(t),
                                h = f ? "mfpFastClick" : "click";
                            e[h](function() { b.prev() }), g[h](function() { b.next() }), b.isIE7 && (y("b", e[0], !1, !0), y("a", e[0], !1, !0), y("b", g[0], !1, !0), y("a", g[0], !1, !0)), b.container.append(e.add(g)) } }), x(o + d, function() { b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() { b.preloadNearbyImages(), b._preloadTimeout = null }, 16) }), void x(i + d, function() { e.off(d), b.wrap.off("click" + d), b.arrowLeft && f && b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(), b.arrowRight = b.arrowLeft = null })) : !1 }, next: function() { b.direction = !0, b.index = T(b.index + 1), b.updateItemHTML() }, prev: function() { b.direction = !1, b.index = T(b.index - 1), b.updateItemHTML() }, goTo: function(a) { b.direction = a >= b.index, b.index = a, b.updateItemHTML() }, preloadNearbyImages: function() {
                    var a, c = b.st.gallery.preload,
                        d = Math.min(c[0], b.items.length),
                        e = Math.min(c[1], b.items.length);
                    for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                    for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a) }, _preloadItem: function(c) {
                    if (c = T(c), !b.items[c].preloaded) {
                        var d = b.items[c];
                        d.parsed || (d = b.parseEl(c)), z("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() { d.hasSize = !0 }).on("error.mfploader", function() { d.hasSize = !0, d.loadError = !0, z("LazyLoadError", d) }).attr("src", d.src)), d.preloaded = !0 } } } });
        var V = "retina";
        a.magnificPopup.registerModule(V, { options: { replaceSrc: function(a) {
                        return a.src.replace(/\.\w+$/, function(a) {
                            return "@2x" + a }) }, ratio: 1 }, proto: { initRetina: function() {
                        if (window.devicePixelRatio > 1) {
                            var a = b.st.retina,
                                c = a.ratio;
                            c = isNaN(c) ? c() : c, c > 1 && (x("ImageHasSize." + V, function(a, b) { b.img.css({ "max-width": b.img[0].naturalWidth / c, width: "100%" }) }), x("ElementParse." + V, function(b, d) { d.src = a.replaceSrc(d, c) })) } } } }),
            function() {
                var b = 1e3,
                    c = "ontouchstart" in window,
                    d = function() { w.off("touchmove" + f + " touchend" + f) },
                    e = "mfpFastClick",
                    f = "." + e;
                a.fn.mfpFastClick = function(e) {
                    return a(this).each(function() {
                        var g, h = a(this);
                        if (c) {
                            var i, j, k, l, m, n;
                            h.on("touchstart" + f, function(a) { l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, w.on("touchmove" + f, function(a) { m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0], (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10) && (l = !0, d()) }).on("touchend" + f, function(a) { d(), l || n > 1 || (g = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function() { g = !1 }, b), e()) }) }) }
                        h.on("click" + f, function() { g || e() }) }) }, a.fn.destroyMfpFastClick = function() { a(this).off("touchstart" + f + " click" + f), c && w.off("touchmove" + f + " touchend" + f) } }(), B()
    }(window.jQuery || window.Zepto),
    function(a, b, c, d) { "use strict";
        var e = function() {
                var a = c.body || c.documentElement,
                    a = a.style;
                return "" == a.WebkitTransition ? "-webkit-" : "" == a.MozTransition ? "-moz-" : "" == a.OTransition ? "-o-" : "" == a.transition ? "" : !1 },
            f = e() !== !1,
            g = function(a, b, c) {
                var d = {},
                    f = e();
                d[f + "transform"] = "translateX(" + b + ")", d[f + "transition"] = f + "transform " + c + "s linear", a.css(d) },
            h = "ontouchstart" in b,
            i = b.navigator.pointerEnabled || b.navigator.msPointerEnabled,
            j = function(a) {
                if (h) return !0;
                if (!i || "undefined" == typeof a || "undefined" == typeof a.pointerType) return !1;
                if ("undefined" != typeof a.MSPOINTER_TYPE_MOUSE) {
                    if (a.MSPOINTER_TYPE_MOUSE != a.pointerType) return !0 } else if ("mouse" != a.pointerType) return !0;
                return !1 };
        a.fn.imageLightbox = function(d) {
            var d = a.extend({ selector: 'id="imagelightbox"', allowedTypes: "png|jpg|jpeg|gif", animationSpeed: 250, preloadNext: !0, enableKeyboard: !0, quitOnEnd: !1, quitOnImgClick: !1, quitOnDocClick: !0, onStart: !1, onEnd: !1, onLoadStart: !1, onLoadEnd: !1 }, d),
                e = a([]),
                k = a(),
                l = a(),
                m = 0,
                n = 0,
                o = 0,
                p = !1,
                q = function(b) {
                    return "a" == a(b).prop("tagName").toLowerCase() && new RegExp(".(" + d.allowedTypes + ")$", "i").test(a(b).attr("href")) },
                r = function() {
                    if (!l.length) return !0;
                    var c = .8 * a(b).width(),
                        d = .9 * a(b).height(),
                        e = new Image;
                    e.src = l.attr("src"), e.onload = function() {
                        if (m = e.width, n = e.height, m > c || n > d) {
                            var f = m / n > c / d ? m / c : n / d;
                            m /= f, n /= f }
                        l.css({ width: m + "px", height: n + "px", top: (a(b).height() - n) / 2 + "px", left: (a(b).width() - m) / 2 + "px" }) } },
                s = function(b) {
                    if (p) return !1;
                    if (b = "undefined" == typeof b ? !1 : "left" == b ? 1 : -1, l.length) {
                        if (b !== !1 && (e.length < 2 || d.quitOnEnd === !0 && (-1 === b && 0 == e.index(k) || 1 === b && e.index(k) == e.length - 1))) return u(), !1;
                        var c = { opacity: 0 };
                        f ? g(l, 100 * b - o + "px", d.animationSpeed / 1e3) : c.left = parseInt(l.css("left")) + 100 * b + "px", l.animate(c, d.animationSpeed, function() { t() }), o = 0 }
                    p = !0, d.onLoadStart !== !1 && d.onLoadStart(), setTimeout(function() { l = a("<img " + d.selector + " />").attr("src", k.attr("href")).load(function() { l.appendTo("body"), r();
                            var c = { opacity: 1 };
                            if (l.css("opacity", 0), f) g(l, -100 * b + "px", 0), setTimeout(function() { g(l, "0px", d.animationSpeed / 1e3) }, 50);
                            else {
                                var h = parseInt(l.css("left"));
                                c.left = h + "px", l.css("left", h - 100 * b + "px") }
                            if (l.animate(c, d.animationSpeed, function() { p = !1, d.onLoadEnd !== !1 && d.onLoadEnd() }), d.preloadNext) {
                                var i = e.eq(e.index(k) + 1);
                                i.length || (i = e.eq(0)), a("<img />").attr("src", i.attr("href")).load() } }).error(function() { d.onLoadEnd !== !1 && d.onLoadEnd() });
                        var c = 0,
                            h = 0,
                            n = 0;
                        l.on(i ? "pointerup MSPointerUp" : "click", function(a) {
                            if (a.preventDefault(), d.quitOnImgClick) return u(), !1;
                            if (j(a.originalEvent)) return !0;
                            var b = (a.pageX || a.originalEvent.pageX) - a.target.offsetLeft;
                            k = e.eq(e.index(k) - (m / 2 > b ? 1 : -1)), k.length || (k = e.eq(m / 2 > b ? e.length : 0)), s(m / 2 > b ? "left" : "right") }).on("touchstart pointerdown MSPointerDown", function(a) {
                            return !j(a.originalEvent) || d.quitOnImgClick ? !0 : (f && (n = parseInt(l.css("left"))), void(c = a.originalEvent.pageX || a.originalEvent.touches[0].pageX)) }).on("touchmove pointermove MSPointerMove", function(a) {
                            return !j(a.originalEvent) || d.quitOnImgClick ? !0 : (a.preventDefault(), h = a.originalEvent.pageX || a.originalEvent.touches[0].pageX, o = c - h, void(f ? g(l, -o + "px", 0) : l.css("left", n - o + "px"))) }).on("touchend touchcancel pointerup pointercancel MSPointerUp MSPointerCancel", function(a) {
                            return !j(a.originalEvent) || d.quitOnImgClick ? !0 : void(Math.abs(o) > 50 ? (k = e.eq(e.index(k) - (0 > o ? 1 : -1)), k.length || (k = e.eq(0 > o ? e.length : 0)), s(o > 0 ? "right" : "left")) : f ? g(l, "0px", d.animationSpeed / 1e3) : l.animate({ left: n + "px" }, d.animationSpeed / 2)) }) }, d.animationSpeed + 100) },
                t = function() {
                    return l.length ? (l.remove(), void(l = a())) : !1 },
                u = function() {
                    return l.length ? void l.animate({ opacity: 0 }, d.animationSpeed, function() { t(), p = !1, d.onEnd !== !1 && d.onEnd() }) : !1 };
            return a(b).on("resize", r), d.quitOnDocClick && a(c).on(h ? "touchend" : "click", function(b) { l.length && !a(b.target).is(l) && u() }), d.enableKeyboard && a(c).on("keyup", function(a) {
                return l.length ? (a.preventDefault(), 27 == a.keyCode && u(), void(37 != a.keyCode && 39 != a.keyCode || (k = e.eq(e.index(k) - (37 == a.keyCode ? 1 : -1)), k.length || (k = e.eq(37 == a.keyCode ? e.length : 0)), s(37 == a.keyCode ? "left" : "right")))) : !0 }), a(c).on("click", this.selector, function(b) {
                return q(this) ? (b.preventDefault(), p ? !1 : (p = !1, d.onStart !== !1 && d.onStart(), k = a(this), void s())) : !0 }), this.each(function() {
                return q(this) ? void(e = e.add(a(this))) : !0 }), this.switchImageLightbox = function(a) {
                var b = e.eq(a);
                if (b.length) {
                    var c = e.index(k);
                    k = b, s(c > a ? "left" : "right") }
                return this }, this.quitImageLightbox = function() {
                return u(), this }, this } }(jQuery, window, document),
    function(a, b, c) { "$:nomunge";

        function d(a) {
            return a = a || location.href, "#" + a.replace(/^[^#]*#?(.*)$/, "$1") }
        var e, f = "hashchange",
            g = document,
            h = a.event.special,
            i = g.documentMode,
            j = "on" + f in b && (i === c || i > 7);
        a.fn[f] = function(a) {
            return a ? this.bind(f, a) : this.trigger(f) }, a.fn[f].delay = 50, h[f] = a.extend(h[f], { setup: function() {
                return j ? !1 : void a(e.start) }, teardown: function() {
                return j ? !1 : void a(e.stop) } }), e = function() {
            function e() {
                var c = d(),
                    g = n(k);
                c !== k ? (m(k = c, g), a(b).trigger(f)) : g !== k && (location.href = location.href.replace(/#.*/, "") + g), h = setTimeout(e, a.fn[f].delay) }
            var h, i = {},
                k = d(),
                l = function(a) {
                    return a },
                m = l,
                n = l;
            return i.start = function() { h || e() }, i.stop = function() { h && clearTimeout(h), h = c }, a.browser.msie && !j && function() {
                var b, c;
                i.start = function() { b || (c = a.fn[f].src, c = c && c + d(), b = a('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() { c || m(d()), e() }).attr("src", c || "javascript:0").insertAfter("body")[0].contentWindow, g.onpropertychange = function() {
                        try { "title" === event.propertyName && (b.document.title = g.title) } catch (a) {} }) }, i.stop = l, n = function() {
                    return d(b.location.href) }, m = function(c, d) {
                    var e = b.document,
                        h = a.fn[f].domain;
                    c !== d && (e.title = g.title, e.open(), h && e.write('<script>document.domain="' + h + '"</script>'), e.close(), b.location.hash = c) } }(), i }() }(jQuery, this), ! function(a) {
        function b(a) {
            return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;") }
        var c = function(a) {
            var b, c, d = {};
            if ("" === a) return {};
            for (b = 0; b < a.length; b += 1) c = a[b].split("="), 2 === c.length && (d[c[0]] = decodeURIComponent(c[1].replace(/\+/g, " ")));
            return d };
        a.queryParams = function() {
            return c(window.location.search.substr(1).split("&")) }, a.hashParams = function() {
            return c(window.location.hash.substr(1).split("&")) }, window.Swiftype = window.Swiftype || {}, Swiftype.root_url = Swiftype.root_url || "https://api.swiftype.com", Swiftype.pingUrl = function(a, b) {
            var c = setTimeout(b, 350),
                d = new Image;
            return d.onload = d.onerror = function() { clearTimeout(c), b() }, d.src = a, !1 }, Swiftype.pingSearchResultClick = function(b, c, d) {
            var e = { t: (new Date).getTime(), engine_key: b, doc_id: c, q: Swiftype.currentQuery },
                f = Swiftype.root_url + "/api/v1/public/analytics/pc?" + a.param(e);
            Swiftype.pingUrl(f, d) }, a.fn.swiftypeSearch = function(b) {
            var b = a.extend({}, a.fn.swiftypeSearch.defaults, b);
            return this.each(function() {
                var c = a(this),
                    d = a.meta ? a.extend({}, b, c.data()) : b;
                c.data("swiftype-config-search", d), c.selectedCallback = function(b) {
                    return function(c) {
                        var e = a(this);
                        c.preventDefault(), Swiftype.pingSearchResultClick(d.engineKey, b.id, function() { window.location = e.attr("href") }) } }, c.registerResult = function(b, d) { b.data("swiftype-item", d), a("a", b).click(c.selectedCallback(d)) }, c.getContentCache = function() {
                    return a("#" + g) };
                var e = a(d.resultContainingElement),
                    f = e.html(),
                    g = "st-content-cache",
                    h = c.getContentCache(),
                    i = function(a, b) { location.hash = "stq=" + encodeURIComponent(a) + "&stp=" + b },
                    j = function(b, c) {
                        function i(a) {
                            if (void 0 !== a) {
                                var b = a;
                                return "function" == typeof b && (b = b.call()), b } }
                        c = a.extend({ page: 1 }, c);
                        var j = {};
                        h.length || (e.after("<div id='" + g + "' style='display: none;'></div>"), h.html(f).hide()), d.loadingFunction(b, e), Swiftype.currentQuery = b, j.q = b, j.engine_key = d.engineKey, j.page = c.page, j.per_page = i(d.perPage), j.search_fields = i(d.searchFields), j.fetch_fields = i(d.fetchFields), j.facets = i(d.facets), j.filters = i(d.filters), j.document_types = i(d.documentTypes), j.functional_boosts = i(d.functionalBoosts), j.sort_field = i(d.sortField), j.sort_direction = i(d.sortDirection), j.spelling = i(d.spelling), a.getJSON(Swiftype.root_url + "/api/v1/public/engines/search.json?callback=?", j).success(l) };
                a(window).hashchange(function() {
                    var b = a.hashParams();
                    if (b.stq) j(b.stq, { page: b.stp });
                    else {
                        var d = c.getContentCache();
                        d.length && (e.html(d.html()), d.remove()) } });
                var k = c.parents("form");
                k && k.bind("submit", function(a) { a.preventDefault();
                    var b = c.val();
                    i(b, 1) }), a(document).on("click", "[data-hash][data-page]", function(b) { b.preventDefault();
                    var c = a(this);
                    i(a.hashParams().stq, c.data("page")) }), a(document).on("click", "[data-hash][data-spelling-suggestion]", function(b) { b.preventDefault();
                    var c = a(this);
                    i(c.data("spelling-suggestion"), 1) });
                var l = function(a) { "function" == typeof d.preRenderFunction && d.preRenderFunction.call(c, a), d.renderResultsFunction(c.getContext(), a), "function" == typeof d.postRenderFunction && d.postRenderFunction.call(c, a) };
                c.getContext = function() {
                    return { config: d, resultContainer: e, registerResult: c.registerResult } }, a(window).hashchange() }) };
        var d = function(b, c) {
                var d, e = -1,
                    f = b.config;
                a.each(c, function(a, b) { b.num_pages > e && (d = a, e = b.num_pages) });
                var g = c[d].current_page,
                    h = c[d].num_pages;
                a(f.renderPaginationForType(d, g, h)).appendTo(b.resultContainer) },
            e = function(b, c) {
                var e = b.resultContainer,
                    f = b.config;
                e.html(""), a.each(c.records, function(c, d) { a.each(d, function(d, g) { b.registerResult(a(f.renderFunction(c, g)).appendTo(e), g) }) }), d(b, c.info) },
            f = function(a, c) {
                return '<div class="st-result"><h3 class="title"><a href="' + c.url + '" class="st-search-result-link">' + b(c.title) + "</a></h3></div>" },
            g = function(a, b) { b.html('<p class="st-loading-message">loading...</p>') },
            h = function(b) {
                var c = 0,
                    d = this.getContext().resultContainer,
                    e = null;
                b.info && a.each(b.info, function(a, b) { c += b.total_result_count, b.spelling_suggestion && (e = b.spelling_suggestion.text) }), 0 === c && d.html("<div id='st-no-results' class='st-no-results'>No results found.</div>"), null !== e && d.append('<div class="st-spelling-suggestion">Did you mean <a href="#" data-hash="true" data-spelling-suggestion="' + e + '">' + e + "</a>?</div>") },
            i = function(a, b, c) {
                var d, e, f = '<div class="st-page">';
                return 1 != b && (d = b - 1, f = f + '<a href="#" class="st-prev" data-hash="true" data-page="' + d + '">&laquo; previous</a>'), c > b && (e = b + 1, f = f + '<a href="#" class="st-next" data-hash="true" data-page="' + e + '">next &raquo;</a>'), f += "</div>" };
        a.fn.swiftypeSearch.defaults = { attachTo: void 0, documentTypes: void 0, facets: void 0, filters: void 0, engineKey: void 0, searchFields: void 0, functionalBoosts: void 0, sortField: void 0, sortDirection: void 0, fetchFields: void 0, preRenderFunction: void 0, postRenderFunction: h, loadingFunction: g, renderResultsFunction: e, renderFunction: f, renderPaginationForType: i, perPage: 10, spelling: "strict" } }(jQuery),
    function(a) {
        function b(a) { this.size = 0, this.limit = a, this._keymap = {} }
        var c = function(a) {
            var b, c, d = {};
            if ("" === a) return {};
            for (b = 0; b < a.length; b += 1) c = a[b].split("="), 2 === c.length && (d[c[0]] = decodeURIComponent(c[1].replace(/\+/g, " ")));
            return d };
        a.queryParams = function() {
            return c(window.location.search.substr(1).split("&")) }, a.hashParams = function() {
            return c(window.location.hash.substr(1).split("&")) };
        var d = 0;
        window.Swiftype = window.Swiftype || {}, Swiftype.root_url = Swiftype.root_url || "https://api.swiftype.com", Swiftype.pingUrl = function(a, b) {
            var c = setTimeout(b, 350),
                d = new Image;
            return d.onload = d.onerror = function() { clearTimeout(c), b() }, d.src = a, !1 }, Swiftype.pingAutoSelection = function(b, c, d, e) {
            var f = { t: (new Date).getTime(), engine_key: b, doc_id: c, prefix: d },
                g = Swiftype.root_url + "/api/v1/public/analytics/pas?" + a.param(f);
            Swiftype.pingUrl(g, e) }, Swiftype.findSelectedSection = function() {
            function b(a) {
                var b = a.replace(/\s+/g, "");
                return b = b.toLowerCase() }
            var c = a.hashParams().sts;
            c && (c = b(c), a("h1, h2, h3, h4, h5, h6").each(function(d) {
                return $this = a(this), b($this.text()).indexOf(c) >= 0 ? (this.scrollIntoView(!0), !1) : void 0 })) }, Swiftype.htmlEscape = Swiftype.htmlEscape || function(a) {
            return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;") }, a.fn.swiftype = function(c) { Swiftype.findSelectedSection();
            var c = a.extend({}, a.fn.swiftype.defaults, c);
            return this.each(function() {
                var f = a(this),
                    g = a.meta ? a.extend({}, c, f.data()) : c;
                f.attr("autocomplete", "off"), f.data("swiftype-config-autocomplete", g), f.submitted = !1, f.cache = new b(10), f.emptyQueries = [], f.isEmpty = function(b) {
                    return a.inArray(e(b), this.emptyQueries) >= 0 }, f.addEmpty = function(a) { f.emptyQueries.unshift(e(a)) };
                var i = g.dropdownStylesFunction(f),
                    j = a('<div class="swiftype-widget" />'),
                    k = a("<div />").addClass(g.suggestionListClass).appendTo(j).css(i).hide();
                j.appendTo(g.autocompleteContainingElement);
                var l = a("<" + g.suggestionListType + " />").appendTo(k);
                f.data("swiftype-list", l), f.abortCurrent = function() { f.currentRequest && f.currentRequest.abort() }, f.showList = function() { n(g.disableAutocomplete) === !1 && k.show() }, f.hideList = function(a) { a ? k.hide() : setTimeout(function() { k.hide() }, 10) }, f.focused = function() {
                    return f.is(":focus") }, f.submitting = function() { f.submitted = !0 }, f.listResults = function() {
                    return a(g.resultListSelector, l) }, f.activeResult = function() {
                    return f.listResults().filter("." + g.activeItemClass).first() }, f.prevResult = function() {
                    var a = f.listResults(),
                        b = a.index(f.activeResult()),
                        c = b - 1,
                        d = a.eq(c);
                    f.listResults().removeClass(g.activeItemClass), c >= 0 && d.addClass(g.activeItemClass) }, f.nextResult = function() {
                    var a = f.listResults(),
                        b = a.index(f.activeResult()),
                        c = b + 1,
                        d = a.eq(c);
                    f.listResults().removeClass(g.activeItemClass), c >= 0 && d.addClass(g.activeItemClass) }, f.selectedCallback = function(a) {
                    return function() {
                        var b = f.val(),
                            c = function() { g.onComplete(a, b) };
                        Swiftype.pingAutoSelection(g.engineKey, a.id, b, c) } }, f.registerResult = function(a, b) { a.data("swiftype-item", b), a.click(f.selectedCallback(b)).mouseover(function() { f.listResults().removeClass(g.activeItemClass), a.addClass(g.activeItemClass) }) }, f.getContext = function() {
                    return { config: g, list: l, registerResult: f.registerResult } };
                var m, o = !1;
                f.lastValue = "", f.keyup(function(a) {
                    return o ? void(o = !1) : void(a.which > 36 && a.which < 41 || 16 == a.which || (g.typingDelay > 0 ? (clearTimeout(m), m = setTimeout(function() { h(f) }, g.typingDelay)) : h(f))) }), f.styleDropdown = function() { k.css(g.dropdownStylesFunction(f)) }, a(window).resize(function(a) { f.styleDropdown() }), f.keydown(function(a) { f.styleDropdown();
                    var b = f.activeResult();
                    switch (a.which) {
                        case 13:
                            0 !== b.length && l.is(":visible") ? (a.preventDefault(), f.selectedCallback(b.data("swiftype-item"))()) : f.currentRequest && f.submitting(), f.hideList(), o = !0;
                            break;
                        case 38:
                            a.preventDefault(), 0 === b.length ? f.listResults().last().addClass(g.activeItemClass) : f.prevResult();
                            break;
                        case 40:
                            a.preventDefault(), 0 === b.length ? f.listResults().first().addClass(g.activeItemClass) : b != f.listResults().last() && f.nextResult();
                            break;
                        case 27:
                            f.hideList(), o = !0;
                            break;
                        default:
                            f.submitted = !1 } }), f.keypress(function(a) { 13 == a.which && f.activeResult().length > 0 && a.preventDefault() });
                var p = !1,
                    q = !1;
                a(document).bind("mousedown.swiftype" + ++d, function() { p = !0 }), a(document).bind("mouseup.swiftype" + d, function() { p = !1, q && (q = !1, f.hideList()) }), f.blur(function() { p ? q = !0 : f.hideList() }), f.focus(function() { setTimeout(function() { f.select() }, 10), f.listResults().filter(":not(." + g.noResultsClass + ")").length > 0 && f.showList() }) }) };
        var e = function(b) {
                return a.trim(b).toLowerCase() },
            f = function(b, c) { b.abortCurrent();
                var d = {},
                    f = b.data("swiftype-config-autocomplete");
                d.q = c, d.engine_key = f.engineKey, d.search_fields = n(f.searchFields), d.fetch_fields = n(f.fetchFields), d.filters = n(f.filters), d.document_types = n(f.documentTypes), d.functional_boosts = n(f.functionalBoosts), d.sort_field = n(f.sortField), d.sort_direction = n(f.sortDirection), d.per_page = f.resultLimit;
                var g = Swiftype.root_url + "/api/v1/public/engines/suggest.json";
                b.currentRequest = a.ajax({ type: "GET", dataType: "jsonp", url: g, data: d }).success(function(a) {
                    var d = e(c);
                    return a.record_count > 0 ? (b.cache.put(d, a.records), void i(b, a.records, c)) : (b.addEmpty(d), b.data("swiftype-list").empty(), void b.hideList()) }) },
            g = function(a, b) {
                var c = e(b);
                if (a.isEmpty(c)) return a.data("swiftype-list").empty(), void a.hideList();
                var d = a.cache.get(c);
                d ? i(a, d, b) : f(a, b) },
            h = function(b) {
                var c = b.val();
                if (c !== b.lastValue) return b.lastValue = c, "" === a.trim(c) ? (b.data("swiftype-list").empty(), void b.hideList()) : void("undefined" != typeof b.data("swiftype-config-autocomplete").engineKey && g(b, c)) },
            i = function(a, b, c) {
                var d = a.data("swiftype-list"),
                    e = a.data("swiftype-config-autocomplete");
                d.empty(), a.hideList(!0), e.resultRenderFunction(a.getContext(), b);
                var f = a.listResults().length;
                (f > 0 && a.focused() || void 0 !== e.noResultsMessage) && (a.submitted ? a.submitted = !1 : a.showList()) },
            j = function(b, c) {
                var d = b.list,
                    e = b.config;
                a.each(c, function(c, f) { a.each(f, function(f, g) { b.registerResult(a("<li>" + e.renderFunction(c, g) + "</li>").appendTo(d), g) }) }) },
            k = function(a, b) {
                return '<p class="title">' + Swiftype.htmlEscape(b.title) + "</p>" },
            l = function(a, b) { window.location = a.url },
            m = function(b) {
                var c = b.data("swiftype-config-autocomplete"),
                    d = c.attachTo ? a(c.attachTo) : b,
                    e = d.offset(),
                    f = { position: "absolute", "z-index": 9999, top: e.top + d.outerHeight() + 1, left: e.left };
                return c.setWidth && (f.width = d.outerWidth() - 2), f },
            n = function(a) {
                if (void 0 !== a) {
                    var b = a;
                    return "function" == typeof b && (b = b.call()), b } };
        b.prototype.put = function(a, b) {
            var c = { key: a, value: b };
            return this._keymap[a] = c, this.tail ? (this.tail.newer = c, c.older = this.tail) : this.head = c, this.tail = c, this.size === this.limit ? this.shift() : void this.size++ }, b.prototype.shift = function() {
            var a = this.head;
            return a && (this.head.newer ? (this.head = this.head.newer, this.head.older = void 0) : this.head = void 0, a.newer = a.older = void 0, delete this._keymap[a.key]), a }, b.prototype.get = function(a, b) {
            var c = this._keymap[a];
            if (void 0 !== c) return c === this.tail ? c.value : (c.newer && (c === this.head && (this.head = c.newer), c.newer.older = c.older), c.older && (c.older.newer = c.newer), c.newer = void 0, c.older = this.tail, this.tail && (this.tail.newer = c), this.tail = c, b ? c : c.value) }, b.prototype.remove = function(a) {
            var b = this._keymap[a];
            if (b) return delete this._keymap[b.key], b.newer && b.older ? (b.older.newer = b.newer, b.newer.older = b.older) : b.newer ? (b.newer.older = void 0, this.head = b.newer) : b.older ? (b.older.newer = void 0, this.tail = b.older) : this.head = this.tail = void 0, this.size--, b.value }, b.prototype.clear = function() { this.head = this.tail = void 0, this.size = 0, this._keymap = {} }, "function" == typeof Object.keys ? b.prototype.keys = function() {
            return Object.keys(this._keymap) } : b.prototype.keys = function() {
            var a = [];
            for (var b in this._keymap) a.push(b);
            return a }, a.fn.swiftype.defaults = { activeItemClass: "active", attachTo: void 0, documentTypes: void 0, filters: void 0, engineKey: void 0, searchFields: void 0, functionalBoosts: void 0, sortField: void 0, sortDirection: void 0, fetchFields: void 0, noResultsClass: "noResults", noResultsMessage: void 0, onComplete: l, resultRenderFunction: j, renderFunction: k, dropdownStylesFunction: m, resultLimit: void 0, suggestionListType: "ul", suggestionListClass: "autocomplete", resultListSelector: "li", setWidth: !0, typingDelay: 80, disableAutocomplete: !1, autocompleteContainingElement: "body" } }(jQuery), $(function() {
        function a(a) {
            if ("function" == typeof jQuery && a instanceof jQuery && (a = a[0]), void 0 !== $(".swtpbutton")[0]) try {
                var b = $(".swtpbutton")[0].getBoundingClientRect(),
                    c = a.getBoundingClientRect();
                return c.left >= 0 && c.bottom + b.height <= (window.innerHeight || document.documentElement.clientHeight) && c.right <= (window.innerWidth || document.documentElement.clientWidth) } catch (d) { console.log("exception -> isElementInViewport") } }

        function b() {
            return function() {
                if (void 0 !== $(".result").last()[0])
                    if (a($(".result").last())) $(".swtpbutton").css({ position: "relative", bottom: "initial", width: "auto", "padding-left": "0px", "padding-right": "0px", "border-left": "0px solid #e6e6e6", "border-bottom": "0px solid #e6e6e6" });
                    else {
                        var b = $(".result").last()[0].getBoundingClientRect().width;
                        $(".swtpbutton").css({ position: "fixed", bottom: "0", width: b, "padding-left": "0px", "padding-right": "0px", "border-left": "1px solid #e6e6e6", "border-bottom": "1px solid #e6e6e6" }) } } }
        var c = function(a, b) {
                var c = b.highlight.body;
                void 0 === c && (c = b.body.substring(0, 300)), c = c.concat("...");
                var d = '<div class="st-result"><h4 class="title"><a href="' + b.url + '" class="st-search-result-link">' + b.title + '</a></h4><div class="st-metadata"><span class="st-url">' + b.url + '</span><span class="st-snippet">' + c.replace("matchCookie", " ").replace("<em>match</em>Cookie", "") + "</span></div></div>";
                return d },
            d = function(a, b) {
                var c = '<p class="title">' + b.title + "</p>";
                return c = void 0 !== b.description ? c.concat('<p class="body">' + b.description.replace("matchCookie", " ").replace("<em>match</em>Cookie", "") + "</p>") : void 0 !== b.highlight.body ? c.concat('<p class="body">' + b.highlight.body.replace("matchCookie", " ").replace("<em>match</em>Cookie", "").substring(0, 700) + "</p>") : c.concat('<p class="body">' + b.body.replace("matchCookie", " ").replace("<em>match</em>Cookie", "").substring(0, 700) + "</p>") },
            e = function(a, b) {
                var c = [],
                    d = "/search/#stq=" + $("#st-search-input").val() + "&stp=1",
                    e = { type: "post", url: d, title: "", id: "", _type: "page", _index: "crawled", _version: null, sort: null, highlight: { title: "" } };
                $.each(b, function(a, b) { $.each(b, function(a, b) { b.type && c.length < 5 && c.push(b), c.length > 4 }), c.length > 4 });
                var f = $('<div class="autocompbox"></div>'),
                    g = $('<ul class="WebSite"></ul>');
                $.each(c, function(b, c) {
                    var d = '<p class="title">' + c.title + "</p>";
                    d = void 0 !== c.description ? d.concat('<p class="body">' + c.description.replace("matchCookie", " ").replace("<em>match</em>Cookie", "") + "</p>") : void 0 !== c.highlight.body ? d.concat('<p class="body">' + c.highlight.body.replace("matchCookie", " ").replace("<em>match</em>Cookie", "").substring(0, 500) + "</p>") : d.concat('<p class="body">' + c.body.replace("matchCookie", " ").replace("<em>match</em>Cookie", "").substring(0, 500) + "</p>"), a.registerResult($('<li class="result">' + d + "</li>").appendTo(g), c) }), c.length > 0 && (a.registerResult($('<li class="swtpbutton"><p>See all results</p></li>').appendTo(g), e), g.appendTo(f)), c.length > 0 && f.appendTo(a.list) },
            f = b();
        $(window).on("DOMContentLoaded load resize scroll", f), $("#st-search-input").keydown(function(a) { 13 !== a.which || $(".autocomplete li.active").is(":visible") || (window.location = "/search/#stq=" + $(this).val() + "&stp=1", $("#st-search-input-2").val($(this).val())) }), $("#st-search-input-2").keydown(function(a) { 13 !== a.which || $(".autocomplete li.active").is(":visible") || (window.location.hash = "#stq=" + $(this).val() + "&stp=1", $(".inpt-search-mobile").val($(this).val()), $("#st-search-input").val($(this).val())) }), $(".inpt-search-mobile").keydown(function(a) { 13 !== a.which || $(".autocomplete li.active").is(":visible") || (window.location.hash = "#stq=" + $(this).val() + "&stp=1", $("#st-search-input-2").val($(this).val()), $(".search-overlay").toggle(), $("body").removeClass("mobile-body-no-scroll")) }), $(document).ready(function() { "" !== $.hashParams().stq && ($("#st-search-input").val($.hashParams().stq), $("#st-search-input-2").val($.hashParams().stq), $(".inpt-search-mobile").val($.hashParams().stq)) }), $(window).hashchange(function() { "" !== $.hashParams().stq && ($("#st-search-input").val($.hashParams().stq), $("#st-search-input-2").val($.hashParams().stq), $(".inpt-search-mobile").val($.hashParams().stq)) }), $(document).delegate(".autocomplete li", "mouseout", function() { $(this).removeClass("active") }), $("#st-search-input").swiftypeSearch({
            resultContainingElement: "#st-results-container",
            engineKey: "GZhgtDYXiyvDjz48t2SP",
            renderFunction: c,
            perPage: 10,
            resultPageURL: "/search/"
        }), $(".inpt-search-mobile").swiftypeSearch({ resultContainingElement: "#st-results-container", engineKey: "GZhgtDYXiyvDjz48t2SP", renderFunction: c, perPage: 10, resultPageURL: "/search/" }), $("#st-search-input").swiftype({ engineKey: "GZhgtDYXiyvDjz48t2SP", resultRenderFunction: e, setWidth: !1, resultLimit: 5, fetchFields: { page: ["url", "body", "title", "type", "highlight", "sections"] } }), $("#st-search-input-2").swiftype({ engineKey: "GZhgtDYXiyvDjz48t2SP", fetchFields: { page: ["url", "body", "title", "type", "highlight", "sections"] }, renderFunction: d, resultLimit: 5 })
    }), ! function(a) { "use strict";
        a.fn.succinct = function(b) {
            var c = a.extend({ size: 240, omission: "...", ignore: !0 }, b);
            return this.each(function() {
                var b, d, e = a(this),
                    f = /[!-\/:-@\[-`{-~]$/,
                    g = function() { e.each(function() { b = a(this).text(), b.length > c.size && (d = a.trim(b).substring(0, c.size).split(" ").slice(0, -1).join(" "), c.ignore && (d = d.replace(f, "")), a(this).text(d + c.omission)) }) };
                g() }) } }(jQuery), ! function(a) { "use strict";
        a.fn.zAccordion = function(b) {
            var c = { timeout: 6e3, width: null, slideWidth: null, tabWidth: null, height: null, startingSlide: 0, slideClass: null, easing: null, speed: 1200, auto: !0, trigger: "click", pause: !0, invert: !1, animationStart: function() {}, animationComplete: function() {}, buildComplete: function() {}, errors: !1 },
                d = { displayError: function(a, b) { window.console && b && console.log("zAccordion: " + a + ".") }, findChildElements: function(a) {
                        return void 0 !== a.children().get(0) }, getNext: function(a, b) {
                        var c = b + 1;
                        return c >= a && (c = 0), c }, fixHeight: function(a) {
                        return null === a.height && void 0 !== a.slideHeight ? (a.height = a.slideHeight, !0) : null !== a.height && void 0 === a.slideHeight ? !0 : null === a.height && void 0 === a.slideHeight ? !1 : void 0 }, getUnits: function(a) {
                        return null !== a ? a.toString().indexOf("%") > -1 ? "%" : (a.toString().indexOf("px") > -1, "px") : void 0 }, toInteger: function(a) {
                        return null !== a ? parseInt(a, 10) : void 0 }, sizeAccordion: function(a, b) {
                        return void 0 === b.width && void 0 === b.slideWidth && void 0 === b.tabWidth ? (d.displayError("width must be defined", b.errors), !1) : void 0 !== b.width && void 0 === b.slideWidth && void 0 === b.tabWidth ? b.width > 100 && "%" === b.widthUnits ? (d.displayError("width cannot be over 100%", b.errors), !1) : (b.slideWidthUnits = b.widthUnits, b.tabWidthUnits = b.widthUnits, "%" === b.widthUnits ? (b.tabWidth = 100 / (a.children().size() + 1), b.slideWidth = 100 - (a.children().size() - 1) * b.tabWidth) : (b.tabWidth = b.width / (a.children().size() + 1), b.slideWidth = b.width - (a.children().size() - 1) * b.tabWidth), !0) : void 0 === b.width && void 0 !== b.slideWidth && void 0 === b.tabWidth ? (d.displayError("width must be defined", b.errors), !1) : void 0 === b.width && void 0 === b.slideWidth && void 0 !== b.tabWidth ? (d.displayError("width must be defined", b.errors), !1) : void 0 !== b.width && void 0 === b.slideWidth && void 0 !== b.tabWidth ? b.widthUnits !== b.tabWidthUnits ? (d.displayError("Units do not match", b.errors), !1) : b.width > 100 && "%" === b.widthUnits ? (d.displayError("width cannot be over 100%", b.errors), !1) : a.children().size() * b.tabWidth > 100 && "%" === b.widthUnits || a.children().size() * b.tabWidth > b.width && "px" === b.widthUnits ? (d.displayError("tabWidth too large for accordion", b.errors), !1) : (b.slideWidthUnits = b.widthUnits, b.slideWidth = "%" === b.widthUnits ? 100 - (a.children().size() - 1) * b.tabWidth : b.width - (a.children().size() - 1) * b.tabWidth, !0) : void 0 !== b.width && void 0 !== b.slideWidth && void 0 === b.tabWidth ? b.widthUnits !== b.slideWidthUnits ? (d.displayError("Units do not match", b.errors), !1) : b.width > 100 && "%" === b.widthUnits ? (d.displayError("width cannot be over 100%", b.errors), !1) : b.slideWidth >= b.width ? (d.displayError("slideWidth cannot be greater than or equal to width", b.errors), !1) : a.children().size() * b.slideWidth < 100 && "%" === b.widthUnits || a.children().size() * b.slideWidth < b.width && "px" === b.widthUnits ? (d.displayError("slideWidth too small for accordion", b.errors), !1) : (b.tabWidthUnits = b.widthUnits, b.tabWidth = "%" === b.widthUnits ? (100 - b.slideWidth) / (a.children().size() - 1) : (b.width - b.slideWidth) / (a.children().size() - 1), !0) : void 0 === b.width && void 0 !== b.slideWidth && void 0 !== b.tabWidth ? (d.displayError("width must be defined", b.errors), !1) : void 0 !== b.width && void 0 !== b.slideWidth && void 0 !== b.tabWidth ? (d.displayError("At maximum two of three attributes (width, slideWidth, and tabWidth) should be defined", b.errors), !1) : void 0 }, timer: function(a) {
                        var b = a.data("next") + 1;
                        if (a.data("pause") && a.data("inside") && a.data("auto")) try { clearTimeout(a.data("interval")) } catch (c) {} else if (a.data("pause") && !a.data("inside") && a.data("auto")) {
                            try { clearTimeout(a.data("interval")) } catch (d) {}
                            a.data("interval", setTimeout(function() { a.children(a.children().get(0).tagName + ":nth-child(" + b + ")").trigger(a.data("trigger")) }, a.data("timeout"))) } else if (!a.data("pause") && a.data("auto")) {
                            try { clearTimeout(a.data("interval")) } catch (e) {}
                            a.data("interval", setTimeout(function() { a.children(a.children().get(0).tagName + ":nth-child(" + b + ")").trigger(a.data("trigger")) }, a.data("timeout"))) } } },
                e = { init: function(b) {
                        var e, f = ["slideWidth", "tabWidth", "startingSlide", "slideClass", "animationStart", "animationComplete", "buildComplete"];
                        for (e = 0; e < f.length; e += 1) void 0 !== a(this).data(f[e].toLowerCase()) && (a(this).data(f[e], a(this).data(f[e].toLowerCase())), a(this).removeData(f[e].toLowerCase()));
                        return b = a.extend(c, b, a(this).data()), this.length <= 0 ? (d.displayError("Selector does not exist", b.errors), !1) : d.fixHeight(b) ? d.findChildElements(this) ? b.speed > b.timeout ? (d.displayError("Speed cannot be greater than timeout", b.errors), !1) : (b.heightUnits = d.getUnits(b.height), b.height = d.toInteger(b.height), b.widthUnits = d.getUnits(b.width), b.width = d.toInteger(b.width), b.slideWidthUnits = d.getUnits(b.slideWidth), b.slideWidth = d.toInteger(b.slideWidth), b.tabWidthUnits = d.getUnits(b.tabWidth), b.tabWidth = d.toInteger(b.tabWidth), null !== b.slideClass && (b.slideOpenClass = b.slideClass + "-open", b.slideClosedClass = b.slideClass + "-closed", b.slidePreviousClass = b.slideClass + "-previous"), d.sizeAccordion(this, b) ? this.each(function() {
                            var c, e, f, g, h = b,
                                i = a(this),
                                j = [],
                                k = -1;
                            c = h.slideWidth - h.tabWidth, e = i.get(0).tagName, f = i.children().get(0).tagName, g = i.children().size(), i.data(a.extend({}, { auto: h.auto, interval: null, timeout: h.timeout, trigger: h.trigger, current: h.startingSlide, previous: k, next: d.getNext(g, h.startingSlide), slideClass: h.slideClass, inside: !1, pause: h.pause })), "%" === h.heightUnits && (h.height = "BODY" === i.parent().get(0).tagName ? .01 * h.height * a(window).height() : .01 * h.height * i.parent().height(), h.heightUnits = "px"), i.children().each(function(b) {
                                var d, e, k;
                                e = h.invert ? e = (g - 1) * h.tabWidth - b * h.tabWidth : b * h.tabWidth, j[b] = e, d = h.invert ? 10 * (g - 1 - b) : 10 * b, null !== h.slideClass && a(this).addClass(h.slideClass), a(this).css({ top: 0, "z-index": d, margin: 0, padding: 0, "float": "left", display: "block", position: "absolute", overflow: "hidden", width: h.slideWidth + h.widthUnits, height: h.height + h.heightUnits }), "LI" === f && a(this).css({ "text-indent": 0 }), h.invert ? a(this).css({ right: e + h.widthUnits, "float": "right" }) : a(this).css({ left: e + h.widthUnits, "float": "left" }), b === h.startingSlide ? (a(this).css("cursor", "default"), null !== h.slideClass && a(this).addClass(h.slideOpenClass)) : (a(this).css("cursor", "pointer"), null !== h.slideClass && a(this).addClass(h.slideClosedClass), b > h.startingSlide && !h.invert ? (k = b + 1, i.children(f + ":nth-child(" + k + ")").css({ left: j[k - 1] + c + h.widthUnits })) : b < h.startingSlide && h.invert && (k = b + 1, i.children(f + ":nth-child(" + k + ")").css({ right: j[k - 1] + c + h.widthUnits }))) }), i.css({ display: "block", height: h.height + h.heightUnits, width: h.width + h.widthUnits, padding: 0, position: "relative", overflow: "hidden" }), ("UL" === e || "OL" === e) && i.css({ "list-style": "none" }), i.hover(function() {
                                if (i.data("inside", !0), i.data("pause")) try { clearTimeout(i.data("interval")) } catch (a) {} }, function() { i.data("inside", !1), i.data("auto") && i.data("pause") && d.timer(i) }), i.children().bind(h.trigger, function() {
                                if (a(this).index() !== i.data("current")) {
                                    var b, e, l, m;
                                    for (l = k + 1, m = i.data("current") + 1, 0 !== l && null !== h.slideClass && i.children(f + ":nth-child(" + l + ")").removeClass(h.slidePreviousClass), i.children(f + ":nth-child(" + m + ")"), null !== h.slideClass && i.children(f + ":nth-child(" + m + ")").addClass(h.slidePreviousClass), k = i.data("current"), i.data("previous", i.data("current")), l = k, l += 1, i.data("current", a(this).index()), m = i.data("current"), m += 1, i.children().css("cursor", "pointer"), a(this).css("cursor", "default"), null !== h.slideClass && (i.children().addClass(h.slideClosedClass).removeClass(h.slideOpenClass), a(this).addClass(h.slideOpenClass).removeClass(h.slideClosedClass)), i.data("next", d.getNext(g, a(this).index())), d.timer(i), h.animationStart(), h.invert ? i.children(f + ":nth-child(" + m + ")").stop().animate({ right: j[i.data("current")] + h.widthUnits }, h.speed, h.easing, h.animationComplete) : i.children(f + ":nth-child(" + m + ")").stop().animate({ left: j[i.data("current")] + h.widthUnits }, h.speed, h.easing, h.animationComplete), b = 0; g > b; b += 1) e = b + 1, b < i.data("current") && (h.invert ? i.children(f + ":nth-child(" + e + ")").stop().animate({ right: h.width - e * h.tabWidth + h.widthUnits }, h.speed, h.easing) : i.children(f + ":nth-child(" + e + ")").stop().animate({ left: j[b] + h.widthUnits }, h.speed, h.easing)), b > i.data("current") && (h.invert ? i.children(f + ":nth-child(" + e + ")").stop().animate({ right: (g - e) * h.tabWidth + h.widthUnits }, h.speed, h.easing) : i.children(f + ":nth-child(" + e + ")").stop().animate({ left: j[b] + c + h.widthUnits }, h.speed, h.easing));
                                    return !1 } }), i.data("auto") && d.timer(i), h.buildComplete() }) : !1) : (d.displayError("No child elements available", b.errors), !1) : (d.displayError("height must be defined", b.errors), !1) }, stop: function() { a(this).data("auto") && (clearTimeout(a(this).data("interval")), a(this).data("auto", !1)) }, start: function() {
                        if (!a(this).data("auto")) {
                            var b = a(this).data("next") + 1;
                            a(this).data("auto", !0), a(this).children(a(this).children().get(0).tagName + ":nth-child(" + b + ")").trigger(a(this).data("trigger")) } }, trigger: function(b) {
                        (b >= a(this).children().size() || 0 > b) && (b = 0), b += 1, a(this).children(a(this).children().get(0).tagName + ":nth-child(" + b + ")").trigger(a(this).data("trigger")) }, destroy: function(b) {
                        var c, d, f = a(this).data("slideClass");
                        return void 0 !== b && (c = void 0 !== b.removeStyleAttr ? b.removeStyleAttr : !0, d = void 0 !== b.removeClasses ? b.removeClasses : !1), clearTimeout(a(this).data("interval")), a(this).children().stop().unbind(a(this).data("trigger")), a(this).unbind("mouseenter mouseleave mouseover mouseout"), c && (a(this).removeAttr("style"), a(this).children().removeAttr("style")), d && (a(this).children().removeClass(f), a(this).children().removeClass(f + "-open"), a(this).children().removeClass(f + "-closed"), a(this).children().removeClass(f + "-previous")), a(this).removeData(), void 0 !== b && "undefined" !== b.destroyComplete && ("undefined" != typeof b.destroyComplete.afterDestroy && b.destroyComplete.afterDestroy(), b.destroyComplete.rebuild) ? e.init.apply(this, [b.destroyComplete.rebuild]) : void 0 } };
            return e[b] ? e[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? void a.error("zAccordion: " + b + " does not exist.") : e.init.apply(this, arguments) } }(jQuery);
