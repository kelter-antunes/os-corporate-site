$(function() {

    function htmlEscape(str) {
        return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    var customRendererSearch = function(documentType, item) {

        var snippet = item.highlight['body'];
        if (snippet === undefined) {
            snippet = item['body'].substring(0, 300);
        }
        snippet = snippet.concat('...');
        var out = '<div class="st-result"><h4 class="title"><a href="' + item['url'] + '" class="st-search-result-link">' + item['title'] + '</a></h4><div class="st-metadata"><span class="st-url">' + item['url'] + '</span><span class="st-snippet">' + snippet.replace('matchCookie', ' ').replace('<em>match</em>Cookie', '') + '</span></div></div>';

        return out;
    };

    var customRenderAutoComplete = function(document_type, item) {

        var out = '<p class="title">' + item['title'] + '</p>';
        if (item['description'] !== undefined) {
            out = out.concat('<p class="body">' + item['description'].replace('matchCookie', ' ').replace('<em>match</em>Cookie', '') + "</p>");
        } else if (item.highlight.body !== undefined) {
            out = out.concat('<p class="body">' + item.highlight['body'].replace('matchCookie', ' ').replace('<em>match</em>Cookie', '') + '...' + "</p>");
        } else {
            out = out.concat('<p class="body">' + item.body.substring(0, 200).replace('matchCookie', ' ').replace('<em>match</em>Cookie', '') + '...' + '</p>');
        }

        return out;
    };



    var customResultRenderFunction = function(ctx, data) {
        var WebSite = [];

        var urlstr = '/search/#stq=' + $("#st-search-input").val() + '&stp=1';

        var item_all_res = {
            "type": "post",
            "url": urlstr,
            "title": "",
            "id": "",
            "_type": "page",
            "_index": "crawled",
            "_version": null,
            "sort": null,
            "highlight": {
                "title": ""
            },
        };


        $.each(data, function(docType, results) {
            $.each(results, function(idx, result) {
                if (result.type && WebSite.length < 5) {
                    WebSite.push(result);
                    return;
                }
            });
        });

        var badruz = $('<div class="autocompbox"></div>');

        var WebSiteList = $('<ul class="WebSite"></ul>');


        $.each(WebSite, function(idx, item) {
            var out = '<p class="title">' + item['title'].substring(0,150) + '</p>';
            if (item['description'] !== undefined) {
                out = out.concat('<p class="body">' + item['description'].replace('matchCookie', ' ').replace('<em>match</em>Cookie', '').substring(0, 300) + "</p>");
            } else if (item.highlight['body'] !== undefined) {
                out = out.concat('<p class="body">' + item.highlight['body'].replace('matchCookie', ' ').replace('<em>match</em>Cookie', '').substring(0, 300) + '...' + "</p>");
            } else {
                out = out.concat('<p class="body">' + item.body.replace('matchCookie', ' ').replace('<em>match</em>Cookie', '').substring(0, 300) + '...' + '</p>');
            }
            ctx.registerResult($('<li class="result">' + out + '</li>').appendTo(WebSiteList), item);
        });

        if (WebSite.length > 0) {
            ctx.registerResult($('<li class="swtpbutton"><p>See all results</p></li>').appendTo(WebSiteList), item_all_res);
            WebSiteList.appendTo(badruz);
        }


        if (WebSite.length > 0) {
            badruz.appendTo(ctx.list);
        }

    };


    var customResultStyle = function($this) {
        var styles = {
            'position': 'absolute',
            'z-index': 9999,
            'top': '80px',
            'left': 'auto',
            'width': '980px'
        };
        return styles;
    };


    $("#st-search-input").keydown(function(ev) {
        if (ev.which === 13 && !$('.autocomplete li.active').is(':visible')) {
            window.location = '/search/#stq=' + $(this).val() + '&stp=1';
            $("#st-search-input-2").val($(this).val());
        }
    });


    $("#st-search-input-2").keydown(function(ev) {
        if (ev.which === 13 && !$('.autocomplete li.active').is(':visible')) {
            window.location.hash = '#stq=' + $(this).val() + '&stp=1';
            $("#st-search-input").val($(this).val());
        }
    });



    function isElementInViewport(el) {
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }
        var btn_h = $('.swtpbutton')[0].getBoundingClientRect();
        var rect = el.getBoundingClientRect();

        return (
            rect.left >= 0 &&
            rect.bottom + btn_h.height <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }




    function fireIfElementVisible() {
        return function() {
            if ($('.result').last()[0] !== undefined) {
                if (isElementInViewport($('.result').last())) {
                    $('.swtpbutton').css({
                        'position': 'initial',
                        'bottom': 'initial',
                        'width': 'auto',
                        'padding-left': '0px',
                        'padding-right': '0px',
                        'border-left': '0px solid #e6e6e6',
                        'border-bottom': '0px solid #e6e6e6'
                    });
                } else {
                    var wdth = $('.result').last()[0].getBoundingClientRect().width;
                    $('.swtpbutton').css({
                        'position': 'fixed',
                        'bottom': '0',
                        'width': wdth,
                        'padding-left': '0px',
                        'padding-right': '0px',
                        'border-left': '1px solid #e6e6e6',
                        'border-bottom': '1px solid #e6e6e6'
                    });
                }
            }
        };
    }

    var handler = fireIfElementVisible();
    $(window).on('DOMContentLoaded load resize scroll', handler);

    $(document).ready(function() {
        if ($.hashParams().stq !== "") {
            $("#st-search-input").val($.hashParams().stq);
            $("#st-search-input-2").val($.hashParams().stq);
        }
    });

    $(window).hashchange(function() {
        if ($.hashParams().stq !== "") {
            $("#st-search-input").val($.hashParams().stq);
            $("#st-search-input-2").val($.hashParams().stq);
        }
    });


    $(document).delegate('.autocomplete li', "mouseout", function() {
        $(this).removeClass('active');
    });




    //SEARCH***********************************************************
    $('#st-search-input').swiftypeSearch({
        resultContainingElement: '#st-results-container',
        engineKey: 'GZhgtDYXiyvDjz48t2SP',
        renderFunction: customRendererSearch,
        perPage: 10,
        resultPageURL: '/search/'
            /*,
            filters: function() {
                return {
                    'page': {
                        'type': ['website', 'blog']
                    }
                };
            }*/
    });


    //AUTOCOMPLETE***************************************************
    $('#st-search-input').swiftype({
        engineKey: 'GZhgtDYXiyvDjz48t2SP',
        resultRenderFunction: customResultRenderFunction,
        setWidth: false,
        resultLimit: 5,
        fetchFields: {
            page: ['url', 'body', 'title', 'type', 'highlight', 'sections']
        }
        /*, 
        filters: function() {
            return {
                'page': {
                    'type': ['website', 'blog']
                }
            };
        }*/

    });


    $('#st-search-input-2').swiftype({
        engineKey: 'GZhgtDYXiyvDjz48t2SP',
        fetchFields: {
            page: ['url', 'body', 'title', 'type', 'highlight', 'sections']
        },
        renderFunction: customRenderAutoComplete,
        resultLimit: 5
            /*,
            filters: function() {
                return {
                    'page': {
                        'type': ['website', 'blog']
                    }
                };
            }*/
    });
});
