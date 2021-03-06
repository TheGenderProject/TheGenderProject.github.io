(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, options);
  });

$(document).ready(function(){
    $('.slider').slider();
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav')
        .sidenav()
        .on('click tap', 'li a', () => {
            $('.sidenav').sidenav('close');
        });
});

  }); // end of document ready
})(jQuery); // end of jQuery name space
