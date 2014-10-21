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
        var seeallres;

        var urlstr = '/search/#stq=' + $("#st-search-input").val() + '&stp=1';

        var item_all_res = {"type": "post",
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
        }


        $.each(data, function(docType, results) {
            seeallres=results;
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
        else if(item.highlight.body !== undefined){
            out = out.concat('<p class="body">' + item.highlight.body + "</p>");
        }
        else{
            out = out.concat('<p class="body">' + item.body.substring(0, 200) + '...' + '</p>');
        }
        ctx.registerResult($('<li class="result">' + out + '</li>').appendTo(WebSiteList), item);
    });
    if(WebSite.length>0){
        //WebSiteList.appendTo(WSdiv);
        //$('<div class="column1">Website</div>').appendTo(badruz);
        ctx.registerResult($('<li class="swtpbutton"><p>See all results</p></li>').appendTo(WebSiteList),item_all_res);
        WebSiteList.appendTo(badruz);
    }



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


/*if ($.hashParams().stq !== "") {
    $("#st-search-input").val($.hashParams().stq);
    $("#st-search-input-2").val($.hashParams().stq);
};
*/


/*
$( window ).resize(function() {
    var elms = document.getElementsByClassName("result"),
        l = elms.length;
        console.log(isInViewport(elms[l-1]));
    if(isInViewport(elms[l-1])){        
        console.log("BADRUUZZZ1");
        $('.swtpbutton').css({
            'position': 'inherit',
            'bottom': 'inherit'
        });
    }else{
        console.log("BADRUUZZZ2");
        $('.swtpbutton').css({'position':'fixed','bottom':'0','width':'auto'});
    }
});
*/


// Determine if an element is in the visible viewport
/*function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  var html = document.documentElement;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom + 593 <= (window.innerHeight || html.clientHeight) &&
    rect.right <= (window.innerWidth || html.clientWidth)
  );
}
*/

function isElementInViewport (el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var btn_h = $('.swtpbutton')[0].getBoundingClientRect();
    var rect = el.getBoundingClientRect();

    return (
        rect.left >= 0 &&
        rect.bottom + btn_h.height <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}




function fireIfElementVisible () {
    return function () {
        if($('.result').last() !== undefined){
            if ( isElementInViewport($('.result').last())) {
                console.log("BADRUUZZZ1");
                $('.swtpbutton').css({'position': 'inherit', 'bottom': 'inherit' });
            }
            else{
                console.log("BADRUUZZZ2");
                var wdth = $('.result').last()[0].getBoundingClientRect().width;
                $('.swtpbutton').css({'position':'fixed','bottom':'0','width':wdth});
            }
        }
    }
}

//var elms = document.getElementsByClassName("result"), l = elms.length;

var handler = fireIfElementVisible() ;


//jQuery
$(window).on('DOMContentLoaded load resize scroll', handler); 




$( document ).ready(function() {
    if($.hashParams().stq !== "")
    {
        $("#st-search-input").val($.hashParams().stq);
        $("#st-search-input-2").val($.hashParams().stq);
    }
});

$(window).hashchange(function() {
    if($.hashParams().stq !== "")
    {
        $("#st-search-input").val($.hashParams().stq);
        $("#st-search-input-2").val($.hashParams().stq);
    }
});


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
    fetchFields: {page: ['url', 'body', 'title', 'type', 'highlight', 'sections']},
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
