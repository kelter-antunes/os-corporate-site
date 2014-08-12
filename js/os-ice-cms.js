var nodes = $('[cms=true]');
var currentElement = null;

nodes.each(function(index, el) {
    
    $(this).mouseover(function(event) {
        var element = $(this);

        if (element.attr('cms') === null)
            return;

        currentElement = element;
        var idx = 0;
        for (idx = 0; idx < nodes.length; idx++) {
            $(nodes[idx]).css({
                borderStyle: 'none'
            });
        }

        element.css({
            borderStyle: 'dashed'
        });

        var mTop = element.offset.top;
        var mLeft = element.offset.left + element.width - $('" + cmsProps.Id + "').width;

        $('#" + cmsProps.Id + "').css({
            display: 'block',
            top: mTop,
            left: mLeft
        });
        $('#" + cmsProps.Id + "').css({top: (mTop - 10) + 'px' });
        $('#" + cmsProps.Id + "').css({top: (mLeft + 10) + 'px' });
    });
});


function getParent(element) {

    if (element.cms !== null)
        return element;

    var ancestorlist = element.parents();
    var ix = 0;
    for (ix = 0; ix < ancestorlist.length; ix++) {

        if (ancestorlist[ix].attr('cms') != null)
            return ancestorlist[ix];
    }

    return element;
}


function respondToMouseOver(event) {


}

function respondToMouseOut(event) {

    var element = $(this);
    element.css({
        borderStyle: 'none'
    });
    $('" + cmsProps.Id + "').css({
        display: 'none'
    });
}

function CMSRedirect() {
    window.open(currentElement.attr('url'), 'CMS', 'scrollbars=yes,resizable=yes,modal=yes');
    return false;
}
