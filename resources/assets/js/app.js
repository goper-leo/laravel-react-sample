
;(function(jq) {
  "use strict";

  // ** Variables
  var container = $('.main');
  var gmap;
  var houser_item_container = $('.houses-item-container');
  var paginator_dom = container.find('.paginator');
  var loading_dom = container.find('.loading');

  // Map Helper
  var map = {

    ini: function() {
      var loc = map.getAllLocations();

      gmap = new Maplace({
            locations: loc,
            controls_on_map: false,
            map_div: '#google-map',
            show_markers: true,
            map_options: {zoomControlOptions: {position: google.maps.ControlPosition.TOP_RIGHT}},
            visualRefresh: true,
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

    removeAllLocations: function() {
      for (var i = 0; i < 5; i++) {
        container.find('.item').each(function(index, el) {
          gmap.RemoveLocations(index);
        });
      }

      gmap.Load();
    },
  };

  var page = {

    ini: function() {
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
    },

    createPaginator: function() {
      paginator_dom.find('li').each(function(index, el) {

      });
    },
  };

  page.ini();
  map.ini();

  $('body').on('mouseover', '.item', function() {
    var this_index = $(this).data('index');
    gmap.ViewOnMap(this_index + 1);
  });

  $('.footer-button').on('click', function() {

    $( ".footer" ).slideToggle( "slow" );
  });

  $('.close-footer-btn').on('click', function() {

    $( ".footer" ).slideToggle( "slow" );
  });

  /**
   * Pagination event
   */
  $('body').on('click', '.pagination a', function(e) {
    e.preventDefault();

    loading_dom.show();

    var url = $(this).attr('href');
    $.ajax({
      url : url
    }).done(function (data) {

      map.removeAllLocations();
      houser_item_container.html(data.items);
      gmap.AddLocations(map.getAllLocations());
      gmap.Load();
      page.ini();

      paginator_dom.empty();
      paginator_dom.append(data.paginator);

      $("html, body").animate({
            scrollTop: 0
      }, 500);

      loading_dom.hide();
    }).fail(function () {
      alert('Articles could not be loaded.');
    });

  });

})(jQuery);
