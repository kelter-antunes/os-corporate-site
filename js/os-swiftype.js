$(function() {
    var customRendererSearch = function(documentType, item) {
        var out = '<div class="st-result"><h4 class="title"><a href="' + item['url'] + '" class="st-search-result-link">' + item['title'] + '</a></h4><div class="st-metadata"><span class="st-url">' + item['url'] + '</span><span class="st-snippet">' + item.highlight['body'] !=='' ? item.highlight['body'] : escape( item['body'].substring(0, 300) ) + '</span></div></div>';

        return out;
    };

    var customRenderAutoComplete = function(document_type, item) {
        var out = '<p class="title">' + item['title'] + '</p>';
        if (item.highlight.sections) {
            var i = '<span class="section">' + item.highlight.sections + "</span>";
            out = out.concat('<p class="sections">' + i + "</p>");
        }

        return out;
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

    if ($.hashParams().stq !== "") {
        $("#st-search-input").val($.hashParams().stq);
        $("#st-search-input-2").val($.hashParams().stq);
    }

    $('#st-search-input').swiftypeSearch({
        resultContainingElement: '#st-results-container',
        engineKey: 'GZhgtDYXiyvDjz48t2SP',
        renderFunction: customRendererSearch,
        perPage: 10,
        resultPageURL: '/search/',
        filters: function() {
            return {
                'page': {
                    'type': ['website', 'blog']
                }
            };
        }
    });

    $('#st-search-input').swiftype({
        engineKey: 'GZhgtDYXiyvDjz48t2SP',
        renderFunction: customRenderAutoComplete,
        setWidth: false,
        filters: function() {
            return {
                'page': {
                    'type': ['website', 'blog']
                }
            };
        }
    });

    $('#st-search-input-2').swiftype({
        engineKey: 'GZhgtDYXiyvDjz48t2SP',
        renderFunction: customRenderAutoComplete,
        setWidth: false,
        filters: function() {
            return {
                'page': {
                    'type': ['website', 'blog']
                }
            };
        }
    });
});