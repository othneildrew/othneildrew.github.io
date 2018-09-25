$(function() {

  // Add background color to nav when user scrolls more than 50px down
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('#main-navbar').removeClass('navbar-dark');
      $('#main-navbar').addClass('scrolledNavbar navbar-light');
    }
    if ($(this).scrollTop() < 50) {
      $('#main-navbar').removeClass('scrolledNavbar navbar-light');
      $('#main-navbar').addClass('navbar-dark');
    }
  });

  // Change speed of carousel
  $('#testimonial-carousel').carousel({
    interval: 5000
  });

});
