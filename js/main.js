// Scrolling Effect
      $(window).on("scroll", function() {
        if($(window).scrollTop()) {
              $('#main-nav').addClass('pink');
        }

        else {
              $('#main-nav').removeClass('pink');
        }
  })