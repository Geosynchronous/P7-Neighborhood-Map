// Neighborhood Map Project
// Round River Conservation Studies Map
// Udacity FEND Nanodegree
// Developer: George Fischer




  // Declaring ***GLOBAL VARIABLES***
  //  - Helps organize and simplify code
  //  - Vars that need to be shared between GOOGLE MAPS and VIEW-MODEL
  //  - Eliminates need to pass them
var map,
    largeInfowindow,
    bounds,
    highlightedIcon,
    defaultIcon,
    styles = [
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





// THE ***VIEW-MODEL***
// JavaScript that defines the data and behavior of the UI
function AppViewModel() {
  var self = this;

  // TEST --- for KO visibiity
  self.toggleList = ko.observable(true);

  // TODO - Create KO Array to filter locations for button list display
  //      - Only one list can display at a time, need a propert for that
  self.buttons = ko.observableArray([
    {
      title: 'FIELD RESEARCH',
      showList: true,
    },
      {
      title: 'FIELD STUDIES',
      showList: false,
    },
    {
      title: 'AFRICA',
      showList: false,
    },
    {
      title: 'NORTH AMERICA',
      showList: false,
    },
    {
      title: 'CENTRAL AMERICA',
      showList: false,
    },
    {
      title: 'SOUTH AMERICA',
      showList: false,
    },
    {
      title: 'SPECIAL EVENTS',
      showList: false,
    },
    {
      title: 'ALL LISTINGS',
      showList: false,
    }
  ]);


  // These are the marker listings that will be shown to the user.
  // Normally we'd have these in a database.
  //      TODO - add all sites, add all properties
  //      Categories: Field Research, Field Studies, Offices, Special Events
  self.locations = ko.observableArray([
    {
      title: 'Kunene Region, Namibia',
      location: {lat: -18.789779,lng: 13.370975},
      continent: 'Africa',
      category: 'Field Research'
    },
    {title: 'Okavango Delta, Botswana', location: {lat: -19.2798704, lng: 22.8201857}},
    {title: 'Chobe-Linyanti-Zambezi Wetland, Botswana', location: {lat: -18.589826, lng: 24.258918}},
    {title: 'Taku River, Tlingit First Nation, Canada', location: {lat: 58.6553055,lng: -133.8137736}},
    {title: 'Idaho Wolverine Winter Recreation Project, USA', location: {lat: 45.0575711, lng: -116.1655369}},
    {title: 'Navajo Dine Bikeyah Conservation Project, USA', location: {lat: 37.6299925, lng: -109.885184}},
    {title: 'North Coast, Yukon Territory, Canada', location: {lat: 68.8369357, lng: -149.9462445}},
    {title: 'Great Bear Rainforest, Canada', location: {lat: 52.9260101, lng: -128.935775}},
    {title: 'North Coast Conservation Design, BC, Canada', location: {lat: 54.2684383, lng: -130.4447293}},
    {title: 'Coastal Forest and Mountains, BC, Canada', location: {lat: 55.3639087, lng: -131.830578}},
    {title: 'Muskwa-Kechika Conservation Design, BC, Canada', location: {lat: 58.9338124, lng: -130.8412957}},
    {title: 'Mackenzie Delta, Northwest Territory, Canada', location: {lat: 66.999500, lng: -127.437408}},
    {title: 'Patagonia, Chile', location: {lat: -43.0029846, lng: -71.6979215}},
    {title: 'Osa Peninsula, Costa Rica', location: {lat: 8.539003, lng:-83.6045026}}
  ]);



  // IMPORTANT: Knockout will automatically populate the 'location' parameter
  // with the clicked location object for the events functions that follow:

  // This function will be executed when a list item is clicked.
  // It is bound to each location in the list using the Knockout Click binding
  self.listClick = function(location) {
    // Since the marker object is stored inside the associated location object,
    // the marker can now be accessed using 'location.marker'
    populateInfoWindow(location.marker);
    console.log("listClick");
  }

  // Mouse Over on a list title inside options-box
  //    - Highlights associated map marker icon
  //    - List title also highlighted with css hover
  this.listMouseOver = function(location) {
    location.marker.setIcon(highlightedIcon);
  }

  // Mouse Out on a list title inside options-box
  //    - Default restored with associated map marker icon
  //    - List title also default restored with css
  this.listMouseOut = function(location) {
    location.marker.setIcon(defaultIcon);
  }

  // This function will loop through the markers array and display them all.
  self.showAllListings = function() {
    for (var i = 0; i < self.locations().length; i++) {
      self.locations()[i].marker.setMap(map);
    }
  }




  // TODO
  // This function will loop through the markers array and filter them for display.
  self.filterListings = function() {
    for (var i = 0; i < self.locations().length; i++) {
      self.locations()[i].marker.setMap(map);
    }
  }



  // This function will loop through the listings and hide them all.
  self.hideAllListings = function() {
    for (var i = 0; i < self.locations().length; i++) {
      self.locations()[i].marker.setMap(null);
    }
  }

}





// ALL ***GOOGLE MAP FUNCTIONS*** FOLLOW
// They are not directly compatible with KNOCKOUT


// This function populates the infowindow when the marker is clicked. We'll only allow
// one infowindow which will open at the marker that is clicked, and populate based
// on that markers position.
// TODO - markers should animate or change styling when clicked, or when the associated list item is clicked
function populateInfoWindow(marker) {
  var infowindow = largeInfowindow;
  // Check to make sure the infowindow is not already opened on this marker.
  if (infowindow.marker != marker) {
      infowindow.marker = marker;
      infowindow.setContent('<div>' + marker.title + '</div>');
      infowindow.open(map, marker);
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

// The Google Callback function
// This function is executed immediately after the Google API script finishes loading,
// and it should be used to initialize the Google Map objects
function initMap() {
  // define map
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.7501481, lng: -111.8665667},
    zoom: 2,
    backgroundColor: '#af9a6b',
    styles: styles,
    mapTypeId: 'terrain',
    mapTypeControl: true
  });
  // define bounds
  bounds = new google.maps.LatLngBounds();
  // define largeInfowindow
  largeInfowindow = new google.maps.InfoWindow();
  // create all map markers
  createMarkers();
}

function createMarkers() {
  // This will be our listing marker icon.
  defaultIcon = makeMarkerIcon('images/RR-circle.png');

  // Create a highlighted marker icon
  // Used when the user mouses over the marker
  highlightedIcon = makeMarkerIcon('images/RR-circle-highlight.png');

  // The following group uses the location array to create an array of markers on initialize.
  for (var i = 0; i < vm.locations().length; i++) {
    // Get the position from the location array.
    var position = vm.locations()[i].location;
    var title = vm.locations()[i].title;
    // Create a marker per location, and put into markers array.
    var marker = new google.maps.Marker({
      position: position,
      title: title,
      animation: google.maps.Animation.DROP,
      icon: defaultIcon,
      id: i,
      map: map
    });

    // Store the map marker inside the location object
    // This makes it easier to hide / show / animate the marker later on
    // without looping through a separate markers array
    vm.locations()[i].marker = marker;

    // Extend the bounds object to include this marker's location
    bounds.extend(marker.position);

    // Create an onclick event to open the large infowindow at each marker.
    marker.addListener('click', function() {
      populateInfoWindow(this);
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

  // After all markers are created, fit the map to these boundaries
  map.fitBounds(bounds);
}





// ***APPLY BINDINGS***
// This will create the AppViewModel object
// Apply bindings immediately after this entire js application loads
var vm = new AppViewModel();
ko.applyBindings(vm);
