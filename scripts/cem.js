
$(function() {

    var linkButton = $('#links').find('a');
 
   linkButton.on('click', function(e){
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  /*
   // fade
  var container = $(".wrapper, .job").not('.wrapper:first').not('#jobs-wrapper').fadeTo(0, 0.5); 

  var windowHeight = $(window).height();
  var viewTop = $(window).scrollTop();
  var viewBottom = viewTop + windowHeight;
            
  var cemFromTop = $('#cem-wrapper').offset().top - viewTop;
  var cemFromBottom = viewBottom - $('#cem-wrapper').offset().top - $('#cem-wrapper').height();
  var cemVisible = windowHeight > $('#cem-wrapper').offset().top;

  if( cemVisible ){
    $('#cem-wrapper').fadeTo(0, 1);
  }

    
  $(window).scroll(function() {
      container.each(function(i) {
          
          var windowHeight = $(window).height();
          var viewTop = $(window).scrollTop();
          var viewBottom = viewTop + windowHeight;
          
          var distanceFromTop = $(this).offset().top - viewTop;
          var distanceFromBottom = viewBottom - $(this).offset().top - $(this).height();
          

          if($(this).height() > (windowHeight + 30)) {
            var visible = true;
            var allVisible = true;
          }
          else{
            var visible = (distanceFromTop + distanceFromBottom) <= windowHeight;
            var allVisible = (distanceFromTop * distanceFromBottom) >= 0;
          }
          
         
          
          
          if (visible) {
              if (allVisible) {
                  $(this).stop().fadeTo(300, 1);
              } 
              else {
              //$(this).stop().delay(500).fadeTo(500, 0.5);
              }
      }
    });
  });
   // fade end
  */


});
