document.addEventListener("DOMContentLoaded", function () {


  $(function() {
  $('nav a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
  // end smooth scroll

  // social media icons
(function(){
  $('.social-media>a').each(function(){$(this).load('svg/' + $(this).attr('data-icon') + '.svg')});
})();
  // end social media icons


  // parallax effect
(function(){

  var windowHeight = jQuery(window).height();
  var windowScrollPosTop = jQuery(window).scrollTop();
  var windowScrollPosBottom = windowHeight + windowScrollPosTop;
  var windowWidth = jQuery(window).width();

  // start position flag
  var startFlagScroll = false;

  function parEfFunc(){
    windowHeight = jQuery(window).height();
    windowScrollPosTop = jQuery(window).scrollTop();
    windowScrollPosBottom = windowHeight + windowScrollPosTop;
    windowWidth = jQuery(window).width();

  };
  parEfFunc();
  $(window).scroll(parEfFunc);



  function myScrollVal(startValue, endValue, object, direction){
    if (direction === undefined){
      direction = 'Y';
    }

    var objectOffset = jQuery(object).offset();
    var objectOffsetTop = objectOffset.top;
    var objectOffsetBottom = objectOffsetTop + jQuery(object).outerHeight();

    if (windowScrollPosBottom > objectOffsetTop && windowScrollPosTop < (objectOffsetTop+$(object).height())){

//      var scrollTop = $(this).scrollTop();
      $(object).css('transform', 'translate' + direction + '(' + Math.round((startValue+(((windowScrollPosBottom-objectOffsetTop)*(endValue-startValue))/(windowHeight+(objectOffsetBottom-objectOffsetTop))))) + '%)');
    } else if (startFlagScroll === false){
//      $(this).scrollTop();
      $(object).css('transform', 'translate' + direction + '(' + startValue + '%)');
    }

  };

})();
  //end parralax
//  // sticky menu
//  (function(){
//    var nav = ".section--header__nav";
//    var navOffsetTop = $(nav).offset().top;
//    var windowScrollPosTop = jQuery(window).scrollTop();
//    $(window).scroll(positionNav);
//    
//    function positionNav(){
//      windowScrollPosTop = jQuery(window).scrollTop();
//    if (windowScrollPosTop>=navOffsetTop){
//      $(nav).css("position","fixed");
//    } else {
//      $(nav).css("position","relative");
//    }
//    };
//  })()
//  
//  // end sticky menu 
  
  

// end DOMContentLoaded
});
