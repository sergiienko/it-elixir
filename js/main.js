;(function($) {

  $(function() {

    $("a", ".ba-menu").click(function() {

      $(document.body).toggleClass("ba-menu-open");

    });

    $(".ba-menu-toggle").click(function() {

      $(document.body).toggleClass("ba-menu-open");

    });

    $(".ba-menu-overlay").click(function() {

      $(document.body).toggleClass("ba-menu-open");
      
    });

    // Slider

    $(".ba-projects__slider").slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: ".slick-prev",
      nextArrow: ".slick-next",
      slide: ".ba-slide",
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    // Map

    var display = new google.maps.LatLng(50.420561, 30.519305),
        initialize = function() {
          var mapProp = {
                center: new google.maps.LatLng(50.420852, 30.520927),
                zoom: 17,
                // disableDefaultUI: true,
                mapTypeControl: false,
                streetViewControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false
              },

              map = new google.maps.Map(document.getElementById("map"), mapProp);
              
              marker = new google.maps.Marker({
                  position: display,
                  icon: "img/icon/address.svg"
              });

          marker.setMap(map);
        }

    google.maps.event.addDomListener(window, "load", initialize);

    // Popup

    $('.ba-popup').each(function() {
      $(this).append('<a class="ba-popup__close js-hide-popup" href="#">Close</a>');
    });

    $('.js-show-popup').on('click', function(e) {
      e.preventDefault();
      $('.ba-popup-overlay').fadeIn(400);
      $(this).siblings('.ba-popup').fadeIn(400);
    });

    $('.js-hide-popup').on('click', function(e) {
      e.preventDefault();
      $('.ba-popup-overlay, .ba-popup').fadeOut(400);
    });

    // Mail form

   $(".ba-help__form").submit( function () {    
      $.ajax({   
        type: "POST",
        data : $(this).serialize(),
        cache: false,  
        url: "send.php",   
        success: function(data){
            alert("Thank you. We'll contact you soon");
        }   
      });   
      return false;   
    }); 

  });

})(jQuery);
