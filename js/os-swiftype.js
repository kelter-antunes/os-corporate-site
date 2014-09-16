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
        var withSections = [],
        noSections = [];

        $.each(data, function(docType, results) {
          $.each(results, function(idx, result) {
            if (result.sections && result.sections.length > 15) {
              withSections.push(result);
          } else {
              noSections.push(result);
          }
      });
      });

        var withSectionsList = $('<ul class="with_sections"></ul>'),
        noSectionsList = $('<ul class="no_sections"></ul>');

        $.each(withSections, function(idx, item) {
          ctx.registerResult($('<li class="result"><p>' + item['name'] + '</p></li>').appendTo(withSectionsList), item);
      });
        $.each(noSections, function(idx, item) {
          ctx.registerResult($('<li class="result"><p>' + item['name'] + '</p></li>').appendTo(noSectionsList), item);
      });
        if (withSections.length > 0) {
          withSectionsList.appendTo(ctx.list);
      }
      if (noSections.length > 0) {
          noSectionsList.appendTo(ctx.list);
      }
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
    searchFields: {
        'page': ['body^2', 'title^2.5', 'sections^3.5', 'tags^1.5', 'url^1']
    }
});

$('#st-search-input').swiftype({
    engineKey: 'GZhgtDYXiyvDjz48t2SP',
    renderFunction: customRenderAutoComplete,
    resultRenderFunction: customResultRenderFunction,
    setWidth: false,
    perPage: 15  
});

$('#st-search-input-2').swiftype({
    engineKey: 'GZhgtDYXiyvDjz48t2SP',
    renderFunction: customRenderAutoComplete,
    resultRenderFunction: customResultRenderFunction,
    setWidth: false,
    perPage: 15,
    filters: function() {
        return {
            'page': {
                'type': ['website', 'blog']
            }
        };
    }
});
});
