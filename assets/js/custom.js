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

 $(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000, 'swing');
	});

 $('select').material_select();

});