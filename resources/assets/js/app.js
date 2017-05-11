
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

  $('.item').matchHeight();
  
  var container = $('.main');
  var gmap;

  // Map Helper
  var map = {

    ini: function() {
      var loc = map.getAllLocations();

      gmap = new Maplace({
            locations: loc,
            controls_on_map: false,
            map_div: '#google-map',
            show_markers: true,
            map_options: {zoomControlOptions: {position: google.maps.ControlPosition.TOP_RIGHT}}
        });

      gmap.Load();
    },

    /**
     * Get all locations of the houses - data `lat` and `long`
     * @return object
     */
    getAllLocations: function() {
      var locations = [];
      container.find('.item').each(function(index, el) {
        var lat = $(this).data('lat');
        var long = $(this).data('long');
        var price = $(this).data('price');
        var name = $(this).data('name');

        var location = {
          lat: lat,
          lon: long,
          zoom: 14,
          visible: true,
          title: price,
          html: [
            '<h4>' + name + '</h4>',
            '<p style="margin-top: -10px; font-weight: bolder;">&#8369;' + price + '</p>'
        ].join(''),
          show_infowindow: true,
        };
        locations.push(location);
      });

      return locations;
    },
  };

  map.ini();

  $('.item').mouseover(function() {
    var this_index = $(this).data('index');
    gmap.ViewOnMap(this_index + 1);
  });

  $('.footer-button').on('click', function() {
    $( ".footer" ).slideToggle( "slow" );
  });

  $('.close-footer-btn').on('click', function() {
    $( ".footer" ).slideToggle( "slow" );
  });

})(jQuery);
