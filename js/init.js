(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.slider').slider();
  });

  }); // end of document ready
})(jQuery); // end of jQuery name space