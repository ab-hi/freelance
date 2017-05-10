$(document).ready(function(){

	     $('.carousel.carousel1').carousel({indicators: true});

/* for animations on page scroll*/

	     (function($) {

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

var win = $(window);

var cards = $(".slide-in");



cards.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  
  cards.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("slide_in"); 
    } 

  });
  
});



var cards_left = $(".slide-in-left");



cards_left.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible-left"); 
  } 
});

win.scroll(function(event) {
  
  cards_left.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("slide_in_left"); 
    } 

  });
  
});

var cards_right = $(".slide-in-right");



cards_right.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible-right"); 
  } 
});

win.scroll(function(event) {
  
  cards_right.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("slide_in_right"); 
    } 

  });
  
});

var cards_bounce = $(".slide-in-bounce");



cards_bounce.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible-right"); 
  } 
});

win.scroll(function(event) {
  
  cards_bounce.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("animated lightSpeedIn"); 
    }  

  });
  
});


var cards_roll = $(".slide-in-roll");



cards_roll.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible-right"); 
  } 
});

win.scroll(function(event) {
  
  cards_roll.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("animated rollIn"); 
    }  

  });
  
});






 $(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000, 'swing');
	});

 $('select').material_select();

});