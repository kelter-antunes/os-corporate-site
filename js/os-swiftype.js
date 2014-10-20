$(function() {

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



var customResultRenderFunction = function(ctx, data) {
        var WebSite = [];

        $.each(data, function(docType, results) {
          $.each(results, function(idx, result) {
            if(result.type && WebSite.length < 5){
                  WebSite.push(result);
                  return;
              }
        });
      });

    var badruz = $('<div class="autocompbox"></div>');

    var WebSiteList = $('<ul class="WebSite"></ul>');


    $.each(WebSite, function(idx, item) {
        var out = '<p class="title">' + item['title'] + '</p>';
        if (item['description'] !== undefined) {
            out = out.concat('<p class="body">' + item['description'] + "</p>");
        }
        else{
            out = out.concat('<p class="body">' + item.highlight.body + "</p>");
        }
        ctx.registerResult($('<li class="result">' + out + '</li>').appendTo(WebSiteList), item);
    });
    if(WebSite.length>0){
        //WebSiteList.appendTo(WSdiv);
        //$('<div class="column1">Website</div>').appendTo(badruz);
        WebSiteList.appendTo(badruz);
    }

  
    $('<li class="swtpbutton">See all results</li>').appendTo(badruz);


    if(WebSite.length > 0){
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
    /*searchFields: {
        'page': ['body^2', 'title^2.5', 'sections^3.5', 'tags^1.5', 'url^1']
    }*/
});

$('#st-search-input').swiftype({
    engineKey: 'GZhgtDYXiyvDjz48t2SP',
    resultRenderFunction: customResultRenderFunction,
    //setWidth: '980px',
    setWidth: false,
    resultLimit: 35,
    fetchFields: {page: ['url', 'body', 'title', 'type', 'highlight', 'sections']},
    //autocompleteContainingElement: '.navigation-inner.container',
    //dropdownStylesFunction: customResultStyle
});



$('#st-search-input-2').swiftype({
    engineKey: 'GZhgtDYXiyvDjz48t2SP',
    resultRenderFunction: customResultRenderFunction,
    setWidth: false,
    resultLimit: 35,
    fetchFields: {page: ['url', 'body', 'title', 'type', 'highlight', 'sections']}
    /*renderFunction: customRenderAutoComplete,
    setWidth: false,
    resultLimit : 15,*/
    filters: function() {
        return {
            'page': {
                'type': ['website', 'blog']
            }
        };
    }
});
});
