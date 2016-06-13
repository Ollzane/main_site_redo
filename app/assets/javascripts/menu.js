$(document).ready(function(){
  $('.fa-bars').click(function(){
    $('.slide-over-navigation').toggleClass('slide-active');
    $('.slide-over-navigation-background').toggleClass('slide-background-active');
  });
});

$(document).ready(function() {
  $('.nav-close-button').click(function() {
    $('.slide-over-navigation').toggleClass('slide-active');
    $('.slide-over-navigation-background').toggleClass('slide-background-active');
  });
});

$(document).ready(function() {
  $('.slide-over-navigation-background').click(function() {
    $('.slide-over-navigation').toggleClass('slide-active');
    $('.slide-over-navigation-background').toggleClass('slide-background-active');
  });
});
