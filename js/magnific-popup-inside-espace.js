$(window).load(function() {
    var content;
    if ($('.mfp-os-popup-content').find('iframe').length == 1) {
        //is video
        content = $('.mfp-os-popup-content').find('iframe');
        $('.mfp-os-thumbs').height(content.height());

    } else {
        //is screenshot
        content = $('.mfp-os-popup-content').find('img');
        $('.mfp-os-thumbs').height(content.height());

    }
});