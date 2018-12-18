$(function() {

  init();

  // Add Smooth Scrolling
  $("a[href*='#']").click(function() {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {

      let target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top
          },
          500
        );
        return false;
      }
    }
  });


  // Functions
  function init() {
    $('#fakeloader').fakeLoader({
      timeToHide: 1200,
      zIndex: '9999',
      spinner: 'spinner1',
      bgColor: '#192bc2'
    });

    $('#page').show();

    $('#testimonial-slider').slick({
      autoplay: true,
      dots: true,
      speed: 1500
    });
  }

});
