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


        var WebSiteList = $('<div class="column1 ">Website</div><div class="column2"><ul class="WebSite"></ul></div>'),
        BlogList = $('<div class="column1 ">Blog</div><div class="column2"><ul class="Blog"></ul></div>'),
        ForgeList = $('<div class="column1 ">Forge</div><div class="column2"><ul class="Forge"></ul></div>'),
        AcademyList = $('<div class="column1 ">Academy</div><div class="column2"><ul class="Academy"></ul></div>'),
        HelpList = $('<div class="column1 ">Help</div><div class="column2"><ul class="Help"></ul></div>'),
        IdeasList = $('<div class="column1 ">Ideas</div><div class="column2"><ul class="Ideas"></ul></div>'),
        ForumsList = $('<div class="column1 ">Forums</div><div class="column2"><ul class="Forums"></ul></div>');
 

        $.each(WebSite, function(idx, item) {
            var out = '<p class="title">' + item['title'] + '</p>';
            if (item.highlight.sections) {
                var i = '<span class="section">' + item.highlight.sections + "</span>";
                out = out.concat('<p class="sections">' + i + "</p>");
            }
            ctx.registerResult($('<li class="result">' + out + '</li>').appendTo(".WebSite"), item);
        });

        $.each(Blog, function(idx, item) {
            var out = '<p class="title">' + item['title'] + '</p>';
            if (item.highlight.sections) {
                var i = '<span class="section">' + item.highlight.sections + "</span>";
                out = out.concat('<p class="sections">' + i + "</p>");
            }
            ctx.registerResult($('<li class="result">' + out + '</li>').appendTo(".Blog"), item);
        });

        $.each(Forge, function(idx, item) {
            var out = '<p class="title">' + item['title'] + '</p>';
            if (item.highlight.sections) {
                var i = '<span class="section">' + item.highlight.sections + "</span>";
                out = out.concat('<p class="sections">' + i + "</p>");
            }
            ctx.registerResult($('<li class="result">' + out + '</li>').appendTo(".Forge"), item);
        });

        $.each(Academy, function(idx, item) {
            var out = '<p class="title">' + item['title'] + '</p>';
            if (item.highlight.sections) {
                var i = '<span class="section">' + item.highlight.sections + "</span>";
                out = out.concat('<p class="sections">' + i + "</p>");
            }
            ctx.registerResult($('<li class="result">' + out + '</li>').appendTo(".Academy"), item);
        });

        $.each(Help, function(idx, item) {
            var out = '<p class="title">' + item['title'] + '</p>';
            if (item.highlight.sections) {
                var i = '<span class="section">' + item.highlight.sections + "</span>";
                out = out.concat('<p class="sections">' + i + "</p>");
            }
            ctx.registerResult($('<li class="result">' + out + '</li>').appendTo(".Help"), item);
        });

        $.each(Ideas, function(idx, item) {
            var out = '<p class="title">' + item['title'] + '</p>';
            if (item.highlight.sections) {
                var i = '<span class="section">' + item.highlight.sections + "</span>";
                out = out.concat('<p class="sections">' + i + "</p>");
            }
            ctx.registerResult($('<li class="result">' + out + '</li>').appendTo(".Ideas"), item);
        });

        $.each(Forums, function(idx, item) {
            var out = '<p class="title">' + item['title'] + '</p>';
            if (item.highlight.sections) {
                var i = '<span class="section">' + item.highlight.sections + "</span>";
                out = out.concat('<p class="sections">' + i + "</p>");
            }
            ctx.registerResult($('<li class="result">' + out + '</li>').appendTo(".Forums"), item);
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
    resultLimit: 100,
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
