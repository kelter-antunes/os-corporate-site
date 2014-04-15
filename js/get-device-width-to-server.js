function sendWidthToServer() {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    $('.deviceWidth').val(width);
    $('.send-info').click();
}

$(document).ready(function() {
    sendWidthToServer()
});