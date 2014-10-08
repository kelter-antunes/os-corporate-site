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
                  return;
              }
              if(result.type && result.type === 'blog' && Blog.length < 5){
                  Blog.push(result);
                  return;
              }            
              if(result.type && result.type === 'forge' && Forge.length < 5){
                  Forge.push(result);
                  return;
              }            
              if(result.type && result.type === 'academy' && Academy.length < 5){
                  Academy.push(result);
                  return;
              }            
              if(result.type && result.type === 'help' && Help.length < 5){
                  Help.push(result);
                  return;
              }            
              if(result.type && result.type === 'ideas' && Ideas.length < 5){
                  Ideas.push(result);
                  return;
              }            
              if(result.type && result.type === 'forums' && Forums.length < 5){
                  Forums.push(result);
                  return;
              }
        });
      });

    var badruz = $('<div class="autocompbox"></div>');

    var WebSiteList = $('<ul class="WebSite"></ul>'), WSdiv =  $('<div class="column2"></div>'),
    BlogList = $('<ul class="Blog"></ul>'), Bdiv = $('<div class="column2"></div>'),
    ForgeList = $('<ul class="Forge"></ul>'), Fgdiv = $('<div class="column2"></div>'),
    AcademyList = $('<ul class="Academy"></ul>'), Adiv = $('<div class="column2"></div>'),
    HelpList = $('<ul class="Help"></ul>'), Hdiv = $('<div class="column2"></div>'),
    IdeasList = $('<ul class="Ideas"></ul>'), Idiv = $('<div class="column2"></div>'),
    ForumsList = $('<ul class="Forums"></ul>'), Fmdiv = $('<div class="column2"></div>');


    $.each(WebSite, function(idx, item) {
        var out = '<p class="title">' + item['title'] + '</p>';
        if (item.highlight.sections) {
            var i = '<span class="section">' + item.highlight.sections + "</span>";
            out = out.concat('<p class="sections">' + i + "</p>");
        }
        ctx.registerResult($('<li class="result">' + out + '</li>').appendTo(WebSiteList), item);
    });
    if(WebSite.length>0){
        WebSiteList.appendTo(WSdiv);
        $('<div class="column1">Website</div>').appendTo(badruz);
        WSdiv.appendTo(badruz);
    }



    $.each(Blog, function(idx, item) {
        var out = '<p class="title">' + item['title'] + '</p>';
        if (item.highlight.sections) {
            var i = '<span class="section">' + item.highlight.sections + "</span>";
            out = out.concat('<p class="sections">' + i + "</p>");
        }
        ctx.registerResult($('<li class="result">' + out + '</li>').appendTo(BlogList), item);
    });
    if(Blog.length>0){
        BlogList.appendTo(Bdiv);
        $('<div class="column1">Blog</div>').appendTo(badruz);
        Bdiv.appendTo(badruz);
    }



    $.each(Forge, function(idx, item) {
        var out = '<p class="title">' + item['title'] + '</p>';
        if (item.highlight.sections) {
            var i = '<span class="section">' + item.highlight.sections + "</span>";
            out = out.concat('<p class="sections">' + i + "</p>");
        }
        ctx.registerResult($('<li class="result">' + out + '</li>').appendTo(ForgeList), item);
    });
    if(Forge.length>0){
        ForgeList.appendTo(Fgdiv);
        $('<div class="column1">Forge</div>').appendTo(badruz);
        Fgdiv.appendTo(badruz);
    }




    $.each(Academy, function(idx, item) {
        var out = '<p class="title">' + item['title'] + '</p>';
        if (item.highlight.sections) {
            var i = '<span class="section">' + item.highlight.sections + "</span>";
            out = out.concat('<p class="sections">' + i + "</p>");
        }
        ctx.registerResult($('<li class="result">' + out + '</li>').appendTo(AcademyList), item);
    });
    if(Academy.length>0){
        AcademyList.appendTo(Adiv);
        $('<div class="column1">Academy</div>').appendTo(badruz);
        Adiv.appendTo(badruz);
    }




    $.each(Help, function(idx, item) {
        var out = '<p class="title">' + item['title'] + '</p>';
        if (item.highlight.sections) {
            var i = '<span class="section">' + item.highlight.sections + "</span>";
            out = out.concat('<p class="sections">' + i + "</p>");
        }
        ctx.registerResult($('<li class="result">' + out + '</li>').appendTo(HelpList), item);
    });
    if(Help.length>0){
        HelpList.appendTo(Hdiv);
        $('<div class="column1">Help</div>').appendTo(badruz);
        Hdiv.appendTo(badruz);
    }




    $.each(Ideas, function(idx, item) {
        var out = '<p class="title">' + item['title'] + '</p>';
        if (item.highlight.sections) {
            var i = '<span class="section">' + item.highlight.sections + "</span>";
            out = out.concat('<p class="sections">' + i + "</p>");
        }
        ctx.registerResult($('<li class="result">' + out + '</li>').appendTo(IdeasList), item);
    });
    if(Ideas.length>0){
        IdeasList.appendTo(Idiv);
        $('<div class="column1">Ideas</div>').appendTo(badruz);
        Idiv.appendTo(badruz);
    }



    $.each(Forums, function(idx, item) {
        var out = '<p class="title">' + item['title'] + '</p>';
        if (item.highlight.sections) {
            var i = '<span class="section">' + item.highlight.sections + "</span>";
            out = out.concat('<p class="sections">' + i + "</p>");
        }
        ctx.registerResult($('<li class="result">' + out + '</li>').appendTo(ForumsList), item);
    });
    if(Forums.length>0){
        ForumsList.appendTo(Fmdiv);
        $('<div class="column1">Forums</div>').appendTo(badruz);
        Fmdiv.appendTo(badruz);
    }



    if(WebSite.length > 0 || Blog.length > 0 || Forge.length > 0 || Academy.length > 0 ||
        Help.length > 0 ||Ideas.length > 0 || Forums.length > 0){

        badruz.appendTo(ctx.list);
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
    /*searchFields: {
        'page': ['body^2', 'title^2.5', 'sections^3.5', 'tags^1.5', 'url^1']
    }*/
});

$('#st-search-input').swiftype({
    engineKey: 'GZhgtDYXiyvDjz48t2SP',
    resultRenderFunction: customResultRenderFunction,
    setWidth: 980,
    resultLimit: 35,
    fetchFields: {page: ['url', 'body', 'title', 'type', 'highlight', 'sections']},
    autocompleteContainingElement: '.navigation-inner.container'
});



$('#st-search-input-2').swiftype({
    engineKey: 'GZhgtDYXiyvDjz48t2SP',
    resultRenderFunction: customResultRenderFunction,
    setWidth: false,
    resultLimit: 35,
    fetchFields: {page: ['url', 'body', 'title', 'type', 'highlight', 'sections']}
    /*renderFunction: customRenderAutoComplete,
    setWidth: false,
    resultLimit : 15,
    filters: function() {
        return {
            'page': {
                'type': ['website', 'blog']
            }
        };
    }*/
});
});
