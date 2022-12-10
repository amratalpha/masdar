(function($) {
    'use strict';
    $.fn.andSelf = function() {
      return this.addBack.apply(this, arguments);
    }
  
    if ($('.example-1').length) {
      $('.example-1').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4500,
        // center: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          }
        }
      });
    }
  
    if ($('.full-width').length) {
      $('.full-width').owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5500,
        center: true,
        navText: ["<i class='fa fa-chevron-left f-16'></i>", "<i class='fa fa-chevron-right f-16'></i>"]
      });
    }
    if ($('.half-width').length) {
      $('.half-width').owlCarousel({
        items: 2,
        lazyLoad: true,
        loop: true,
        margin: 40,
        autoplay: true,
        mouseDrag: true,
        animateIn: 'fadeIn', // add this
        animateOut: 'fadeOut', // and this
        autoplayTimeout: 50000,
        nav: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 2
          }
        },
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
      });
    }
  
    if ($('.loop').length) {
      $('.loop').owlCarousel({
        center: true,
        items: 2,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 8500,
        responsive: {
          600: {
            items: 4
          }
        }
      });
    }
  
    if ($('.nonloop').length) {
      $('.nonloop').owlCarousel({
        items: 5,
        loop: true,
        margin: 10,
        autoplay: false,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          }
        }
      });
    }
  
    if ($('.auto-width').length) {
      $('.auto-width').owlCarousel({
        items: 2,
        margin: 10,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3500,
        autoWidth: true,
      });
    }
  
    if ($('.lazy-load').length) {
      $('.lazy-load').owlCarousel({
        items: 5,
        lazyLoad: true,
        loop: true,
        margin: 10,
        auto: true,
        autoplay: true,
        autoplayTimeout: 2500,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
      });
    }
  
    if ($('.rtl-carousel').length) {
      $('.rtl-carousel').owlCarousel({
        rtl: true,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          }
        }
      });
    }
    
    if ($('.video-carousel').length) {
      $('.video-carousel').owlCarousel({
        loop: false,
        margin: 10,
        video: true,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
          480: {
            items: 4
          },
          600: {
            items: 4
          }
        }
      });
    }
  
  })(jQuery);