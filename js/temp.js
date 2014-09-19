function _orientationHandler(event){
  if(event.orientation){
    if(event.orientation == 'portrait'){
      $('.app-card').css("height", "auto");
    }
    else if(event.orientation == 'landscape') {
      setSameHeight();
    }
  }
}
function setSameHeight(){
  $('.row').each(function(index, el) {
    boxes = $(this).find('.app-card');
    maxHeight = Math.max.apply(
      Math, boxes.map(function() {m
        return $(this).actual('height');
      }).get());
    boxes.height(maxHeight);
  });
}
$(document).ready(function() {
  if ($(window).width() > 767) {
    $('.apps-home-hero').height( $('.apps-top').height() + 147 );
  }else {
    $(window).bind('orientationchange', _orientationHandler); 
  }
  setSameHeight();
});
$(window).load(function() {
  if ($(window).width() < 767) {
    $('.apps-body h2').on('click touch', function(event) {
      $this = $(this);
      $this.children('span').toggleClass('osicon-arrow-down osicon-arrow-up');
      if ($this.hasClass('apps-h-sales') ) {
        $('.apps-mobile-toggle-sales').slideToggle();
      } else if ($this.hasClass('apps-h-intra') ){
        $('.apps-mobile-toggle-intra').slideToggle();
      }
    });
  }
});