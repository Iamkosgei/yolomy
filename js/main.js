// Scrolling Effect
      $(window).on("scroll", function() {
        if($(window).scrollTop()) {
              $('#main-nav').addClass('pink');
              console.log("scrolling")
        }

        else {
              $('#main-nav').removeClass('pink');
        }
  })