// Neighborhood Map Project
// Round River Conservation Studies Map
// Udacity FEND Nanodegree
// Developer: George Fischer

function initMap() {

  // THE ***VIEW-MODEL***
  // JavaScript that defines the data and behavior of your UI
  function AppViewModel() {



    // THE ***MODEL*** PART of VIEW-MODEL

    var self = this;

    self.map;
    // Create a new blank array for all the listing markers.
    self.markers = [];

    // Create a styles array to use with the map.
    var styles = [
      {
        featureType: 'landscape',
        elementType: 'natural.landcover',
        stylers: [
          { visibility: 'on' }
        ]
      },
      {
        featureType: 'administrative',
        elementType: 'country',
        stylers: [
          { visibility: 'off' }
        ]
      },
      {
        featureType: 'water',
        stylers: [
          { color: '#19a0d8' }
        ]
      },{
        featureType: 'administrative',
        elementType: 'labels.text.stroke',
        stylers: [
          { color: '#ffffff' },
          { weight: 6 }
        ]
      },{
        featureType: 'administrative',
        elementType: 'labels.text.fill',
        stylers: [
          { color: '#e85113' },
          { visibility: 'off' }
        ]
      },{
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [
          { color: '#efe9e4' },
          { lightness: -40 }
        ]
      },{
        featureType: 'transit.station',
        stylers: [
          { weight: 9 },
          { hue: '#e85113' }
        ]
      },{
        featureType: 'road.highway',
        elementType: 'labels.icon',
        stylers: [
          { visibility: 'off' }
        ]
      },{
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [
          { lightness: 100 },
          { visibility: 'off' }
        ]
      },{
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
          { lightness: -100 },
          { visibility: 'off' }
        ]
      },{
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [
          { visibility: 'on' },
          { color: '#f0e4d3' }
        ]
      },{
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [
          { color: '#efe9e4' },
          { lightness: -25 }
        ]
      }
    ];

    // These are the real estate listings that will be shown to the user.
    // Normally we'd have these in a database instead.

    // TODO - add all sites, add all properties
    //      (Categories: Field Research, Field Studies, Offices, Special Events)
    var locations = [
      {
        title: 'Kunene Region, Namibia',
        location: {lat: -18.789779,lng: 13.370975},
        continent: 'Africa',
        category: 'Field Research',
        visible: false
      },
      {title: 'Okavango Delta, Botswana', location: {lat: -19.2798704, lng: 22.8201857}},
      {title: 'Chobe-Linyanti-Zambezi Wetland, Botswana', location: {lat: -18.589826, lng: 24.258918}},
      {title: 'Taku River, Tlingit First Nation, British Columbia', location: {lat: 58.6553055,lng: -133.8137736}},
      {title: 'Idaho Wolverine Winter Recreation Project, Idaho', location: {lat: 45.0575711, lng: -116.1655369}},
      {title: 'Navajo Dine Bikeyah Conservation Project, Utah', location: {lat: 37.6299925, lng: -109.885184}},
      {title: 'North Coast, Yukon Territory', location: {lat: 68.8369357, lng: -149.9462445}},
      {title: 'Great Bear Rainforest, British Columbia', location: {lat: 52.9260101, lng: -128.935775}},
      {title: 'North Coast Conservation Design, British Columbia', location: {lat: 54.2684383, lng: -130.4447293}},
      {title: 'Coastal Forest and Mountains, British Columbia', location: {lat: 55.3639087, lng: -131.830578}},
      {title: 'Muskwa-Kechika Conservation Design, British Columbia', location: {lat: 58.9338124, lng: -130.8412957}},
      {title: 'Mackenzie Delta, Northwest Territories', location: {lat: 66.999500, lng: -127.437408}},
      {title: 'Patagonia, Chile', location: {lat: -43.0029846, lng: -71.6979215}},
      {title: 'Osa Peninsula, Costa Rica', location: {lat: 8.539003, lng:-83.6045026}}
    ];



    // THE ***VIEW-MODEL*** PART OF VIEW-MODEL

    //Constructor creates a new map - only center and zoom are required.
    self.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.7501481, lng: -111.8665667},
      zoom: 2,
      styles: styles,
      backgroundColor: 'black',
      mapTypeId: 'terrain',
      mapTypeControl: true
    });

    var largeInfowindow = new google.maps.InfoWindow();

    // Style the markers a bit. This will be our listing marker icon.
    var defaultIcon = makeMarkerIcon('images/RR-circle.png');

    // Create a "highlighted location" marker color for when the user
    // mouses over the marker.
    var highlightedIcon = makeMarkerIcon('images/RR-circle-highlight.png');

    var largeInfowindow = new google.maps.InfoWindow();
    // The following group uses the location array to create an array of markers on initialize.
    for (var i = 0; i < locations.length; i++) {
      // Get the position from the location array.
      var position = locations[i].location;
      var title = locations[i].title;
      // Create a marker per location, and put into markers array.
      var marker = new google.maps.Marker({
        position: position,
        title: title,
        animation: google.maps.Animation.DROP,
        icon: defaultIcon,
        id: i
      });
      // Push the marker to our array of markers.
      self.markers.push(marker);
      // Create an onclick event to open the large infowindow at each marker.
      marker.addListener('click', function() {
        populateInfoWindow(this, largeInfowindow);
      });
      // Two event listeners - one for mouseover, one for mouseout,
      // to change the colors back and forth.
      marker.addListener('mouseover', function() {
        this.setIcon(highlightedIcon);
      });
      marker.addListener('mouseout', function() {
        this.setIcon(defaultIcon);
      });
    }

    // This function populates the infowindow when the marker is clicked. We'll only allow
    // one infowindow which will open at the marker that is clicked, and populate based
    // on that markers position.
    function populateInfoWindow(marker, infowindow) {
      // Check to make sure the infowindow is not already opened on this marker.
      if (infowindow.marker != marker) {
          infowindow.marker = marker;
          infowindow.setContent('<div>' + marker.title + '</div>');
          infowindow.open(self.map, marker);
          // Make sure the marker property is cleared if the infowindow is closed.
          infowindow.addListener('closeclick', function() {
          infowindow.marker = null;
        });
      }
    }

    // This function takes in an image, and then creates a new marker
    // icon of that image. The icon will be 33 px wide by 33 high, have an origin
    // of 0, 0 and be anchored at 17, 33).
    // TODO - There is a better way to do this google maps v3.11 and beyond
    function makeMarkerIcon(iconImage) {
      var markerImage = new google.maps.MarkerImage(
        iconImage,
        new google.maps.Size(33, 33),
        new google.maps.Point(0, 0),
        new google.maps.Point(17, 33),
        new google.maps.Size(33,33));
      return markerImage;
    }

    // This function will loop through the markers array and display them all.
    self.showListings = function() {
      var bounds = new google.maps.LatLngBounds();
      // Extend the boundaries of the map for each marker and display the marker
      for (var i = 0; i < self.markers.length; i++) {
        self.markers[i].setMap(self.map);
        bounds.extend(self.markers[i].position);
      }
      self.map.fitBounds(bounds);
    }

    // This function will loop through the listings and hide them all.
    self.hideListings = function() {
      for (var i = 0; i < self.markers.length; i++) {
        self.markers[i].setMap(null);
      }
    }

    // Show all place markers on init
    self.showListings();

  }

  // Activates knockout.js
  ko.applyBindings(new AppViewModel());
}

