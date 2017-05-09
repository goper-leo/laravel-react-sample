
;(function(jq) {
  "use strict";

  $('.item-slider').lightSlider({
    gallery: false,
    item: 1,
    loop: true,
    slideMargin: 0,
    pauseOnHover: true,
    mode: 'fade',
    pager: false,
  });


    new Maplace({
        locations: [{
          lat: 45.9,
          lon: 10.9,
          zoom: 8
        }],
        controls_on_map: false,
        map_div: '#google-map',
    }).Load();


})(jQuery);
