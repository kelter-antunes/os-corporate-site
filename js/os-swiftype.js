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
        var WebSite = [], Blog = [], Forge = [], Academy = [],
        Help = [], Ideas = [], Forums = []; 

        $.each(data, function(docType, results) {
          $.each(results, function(idx, result) {
            if(result.type && result.type === 'website' && WebSite.length < 5){
              WebSite.push(result);
          }
            if(result.type && result.type === 'blog' && Blog.length < 5){
              Blog.push(result);
          }            
            if(result.type && result.type === 'forge' && Forge.length < 5){
              Forge.push(result);
          }            
            if(result.type && result.type === 'academy' && Academy.length < 5){
              Academy.push(result);
          }            
            if(result.type && result.type === 'help' && Help.length < 5){
              Help.push(result);
          }            
            if(result.type && result.type === 'ideas' && Ideas.length < 5){
              Ideas.push(result);
          }            
            if(result.type && result.type === 'forums' && Forums.length < 5){
              Forums.push(result);
          }
      });
      });

        var WebSiteList = $('<ul class="WebSite"></ul>'),
        BlogList = $('<ul class="Blog"></ul>'),
        ForgeList = $('<ul class="Forge"></ul>'),
        AcademyList = $('<ul class="Academy"></ul>'),
        HelpList = $('<ul class="Help"></ul>'),
        IdeasList = $('<ul class="Ideas"></ul>'),
        ForumsList = $('<ul class="Forums"></ul>');

        $.each(WebSite, function(idx, item) {
            var out = '<p class="title">' + item['title'] + '</p>';
            if (item.highlight.sections) {
                var i = '<span class="section">' + item.highlight.sections + "</span>";
                out = out.concat('<p class="sections">' + i + "</p>");
            }
            out = out.concat('<p class="sections">' + item['type'] + "</p>");
            ctx.registerResult($('<li class="result">' + out + '</li>').appendTo(WebSiteList), item);
        });

        $.each(Blog, function(idx, item) {
            var out = '<p class="title">' + item['title'] + '</p>';
            if (item.highlight.sections) {
                var i = '<span class="section">' + item.highlight.sections + "</span>";
                out = out.concat('<p class="sections">' + i + "</p>");
            }
            out = out.concat('<p class="sections">' + item['type'] + "</p>");
            ctx.registerResult($('<li class="result">' + out + '</li>').appendTo(BlogList), item);
        });

        $.each(Forge, function(idx, item) {
            var out = '<p class="title">' + item['title'] + '</p>';
            if (item.highlight.sections) {
                var i = '<span class="section">' + item.highlight.sections + "</span>";
                out = out.concat('<p class="sections">' + i + "</p>");
            }
            out = out.concat('<p class="sections">' + item['type'] + "</p>");
            ctx.registerResult($('<li class="result">' + out + '</li>').appendTo(ForgeList), item);
        });

        $.each(Academy, function(idx, item) {
            var out = '<p class="title">' + item['title'] + '</p>';
            if (item.highlight.sections) {
                var i = '<span class="section">' + item.highlight.sections + "</span>";
                out = out.concat('<p class="sections">' + i + "</p>");
            }
            out = out.concat('<p class="sections">' + item['type'] + "</p>");
            ctx.registerResult($('<li class="result">' + out + '</li>').appendTo(AcademyList), item);
        });

        $.each(Help, function(idx, item) {
            var out = '<p class="title">' + item['title'] + '</p>';
            if (item.highlight.sections) {
                var i = '<span class="section">' + item.highlight.sections + "</span>";
                out = out.concat('<p class="sections">' + i + "</p>");
            }
            out = out.concat('<p class="sections">' + item['type'] + "</p>");
            ctx.registerResult($('<li class="result">' + out + '</li>').appendTo(HelpList), item);
        });

        $.each(Ideas, function(idx, item) {
            var out = '<p class="title">' + item['title'] + '</p>';
            if (item.highlight.sections) {
                var i = '<span class="section">' + item.highlight.sections + "</span>";
                out = out.concat('<p class="sections">' + i + "</p>");
            }
            out = out.concat('<p class="sections">' + item['type'] + "</p>");
            ctx.registerResult($('<li class="result">' + out + '</li>').appendTo(IdeasList), item);
        });

        $.each(Forums, function(idx, item) {
            var out = '<p class="title">' + item['title'] + '</p>';
            if (item.highlight.sections) {
                var i = '<span class="section">' + item.highlight.sections + "</span>";
                out = out.concat('<p class="sections">' + i + "</p>");
            }
            out = out.concat('<p class="sections">' + item['type'] + "</p>");
            ctx.registerResult($('<li class="result">' + out + '</li>').appendTo(ForumsList), item);
        });

        if (WebSite.length > 0) {
          WebSiteList.appendTo(ctx.list);
      }
        if (Blog.length > 0) {
          BlogList.appendTo(ctx.list);
      }
        if (Forge.length > 0) {
          ForgeList.appendTo(ctx.list);
      }
        if (Academy.length > 0) {
          AcademyList.appendTo(ctx.list);
      }
        if (Help.length > 0) {
          HelpList.appendTo(ctx.list);
      }
        if (Ideas.length > 0) {
          IdeasList.appendTo(ctx.list);
      }
      if (Forums.length > 0) {
          ForumsList.appendTo(ctx.list);
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
    resultRenderFunction: customResultRenderFunction,
    setWidth: false,
    perPage: 100,
    fetchFields: {page: ['url', 'body', 'title', 'type', 'highlight', 'sections']},
});

$('#st-search-input-2').swiftype({
    engineKey: 'GZhgtDYXiyvDjz48t2SP',
    renderFunction: customRenderAutoComplete,
    setWidth: false,
    resultLimit : 15,
    filters: function() {
        return {
            'page': {
                'type': ['website', 'blog']
            }
        };
    }
});
});
