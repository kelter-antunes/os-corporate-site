var queryParser = function(a) {
    var i, p, b = {};
    for (i = 0; i < a.length; i += 1) {
        p = a[i].split('=');
        if (p.length === 2) {
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
    }
    return b;
};

$.hashParams = function() {
    return queryParser(window.location.hash.substr(1).split('&'));
};

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function htmlEscape(str) {
    return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

var customRendererSearch = function(documentType, item) {
    var snippet = item.highlight['body'];
    if (snippet === undefined) {
        snippet = item['body'].substring(0, 300);
    }
    var out = '<div class="st-result"><h4 class="title"><a href="' + item['url'] + '" class="st-search-result-link">' + item['title'] + '</a></h4><div class="st-metadata"><span class="st-url">' + item['url'] + '</span><span class="st-snippet">' + snippet + '</span></div></div>';

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

var reloadResults = function() {
    $(window).hashchange();
};

var searchConfig = {
    type: undefined,
    tags: undefined
};

var readFilters = function() {
    return {
        page: {
            type: window.searchConfig.type,
            tags: getParameterByName('tag')
        }
    };
};

/** st init **/
$(function() {

    $('.st-search .link-tab').on('click', function(e) {
        e.preventDefault();

        var dataType = $(this).attr('data-filter-type');

        $('.st-search .link-tab').removeClass('active');
        $(this).addClass('active');

        if (dataType !== 'all') {
            window.searchConfig.type = dataType;
        } else {
            window.searchConfig.type = undefined;
        }
        reloadResults();
    });

    $(".st-search-input").keydown(function(ev) {
        if (ev.which === 13 && !$('.autocomplete li.active').is(':visible')) {
            window.location = '/search/#stq=' + $(this).val() + '&stp=1';
            $(".st-search-input-big").val($(this).val());
        }
    });

    $(".st-search-input-big").keydown(function(ev) {
        if (ev.which === 13 && !$('.autocomplete li.active').is(':visible')) {
            ev.preventDefault();
            window.location.hash = '#stq=' + $(this).val() + '&stp=1';
            $(".st-search-input").val($(this).val());
            $('.searchQueryHolder').html($.hashParams().stq);
        }
    });

    if ($.hashParams().stq !== "") {
        $(".st-search-input").val($.hashParams().stq);
        $(".st-search-input-big").val($.hashParams().stq);
    }

    $('.st-search-input').swiftypeSearch({
        resultContainingElement: '.st-results-container',
        engineKey: 'GZhgtDYXiyvDjz48t2SP',
        renderFunction: customRendererSearch,
        perPage: 10,
        resultPageURL: '/community/st_search.aspx'
    });

    $('.st-search-input').swiftype({
        engineKey: 'GZhgtDYXiyvDjz48t2SP',
        renderFunction: customRenderAutoComplete,
        setWidth: '392px',
    });

    $('.st-search-input-big').swiftype({
        engineKey: 'GZhgtDYXiyvDjz48t2SP',
        renderFunction: customRenderAutoComplete,
        setWidth: true,
        filters: readFilters
    });
});