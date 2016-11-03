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

  var self = this,
      lastButtonId = 0;

  // Need this to make toggle list binding-updates work
  // self.toggleListItem = ko.observable(false);

  // Create KO Array to filter locations for button list display
  // Only one list can display at a time
  self.buttons = ko.observableArray([
    {
      label: 'FIELD RESEARCH',
      showLocationsViews: ko.observable(false),
      id: 0
    },
      {
      label: 'FIELD STUDIES',
      showLocationsViews: ko.observable(false),
      id: 1
    },
    {
      label: 'AFRICA',
      showLocationsViews: ko.observable(false),
      id: 2
    },
    {
      label: 'NORTH AMERICA',
      showLocationsViews: ko.observable(false),
      id: 3
    },
    {
      label: 'CENTRAL AMERICA',
      showLocationsViews: ko.observable(false),
      id: 4
    },
    {
      label: 'SOUTH AMERICA',
      showLocationsViews: ko.observable(false),
      id: 5
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
      category: 'Field Research',
      toggleListItem: ko.observable(true), // used to toggle visibility of inidividual list items
      highlight: ko.observable(false) // used to change styling of list items with CSS binding
    },
    {
      title: 'Okavango Delta, Botswana',
      location: {lat: -19.2798704, lng: 22.8201857},
      continent: 'Africa',
      category: 'Field Research',
      toggleListItem: ko.observable(true),
      highlight: ko.observable(false)
    },
    {
      title: 'Chobe-Linyanti-Zambezi Wetland, Botswana',
      location: {lat: -18.589826, lng: 24.258918},
      continent: 'Africa',
      category: 'Field Research',
      toggleListItem: ko.observable(true),
      highlight: ko.observable(false)
    },
    {
      title: 'Taku River, Tlingit First Nation, Canada',
      location: {lat: 58.6553055,lng: -133.8137736},
      continent: 'North America',
      category: 'Field Research',
      toggleListItem: ko.observable(true),
      highlight: ko.observable(false)
    },
    {
      title: 'Idaho Wolverine Winter Recreation Project, USA',
      location: {lat: 45.0575711, lng: -116.1655369},
      continent: 'North America',
      category: 'Field Research',
      toggleListItem: ko.observable(true),
      highlight: ko.observable(false)
    },
    {
      title: 'Navajo Dine Bikeyah Conservation Project, USA',
      location: {lat: 37.6299925, lng: -109.885184},
      continent: 'North America',
      category: 'Field Research',
      toggleListItem: ko.observable(true),
      highlight: ko.observable(false)
    },
    {
      title: 'North Coast, Yukon Territory, Canada',
      location: {lat: 68.8369357, lng: -149.9462445},
      continent: 'North America',
      category: 'Field Research',
      toggleListItem: ko.observable(true),
      highlight: ko.observable(false)
    },
    {
      title: 'Great Bear Rainforest, Canada',
      location: {lat: 52.9260101, lng: -128.935775},
      continent: 'North America',
      category: 'Field Research',
      toggleListItem: ko.observable(true),
      highlight: ko.observable(false)
    },
    {
      title: 'North Coast Conservation Design, BC, Canada',
      location: {lat: 54.2684383, lng: -130.4447293},
      continent: 'North America',
      category: 'Field Research',
      toggleListItem: ko.observable(true),
      highlight: ko.observable(false)
    },
    {
      title: 'Coastal Forest and Mountains, BC, Canada',
      location: {lat: 55.3639087, lng: -131.830578},
      continent: 'North America',
      category: 'Field Research',
      toggleListItem: ko.observable(true),
      highlight: ko.observable(false)
    },
    {
      title: 'Muskwa-Kechika Conservation Design, BC, Canada',
      location: {lat: 58.9338124, lng: -130.8412957},
      continent: 'North America',
      category: 'Field Research',
      toggleListItem: ko.observable(true),
      highlight: ko.observable(false)
    },
    {
      title: 'Mackenzie Delta, Northwest Territory, Canada',
      location: {lat: 66.999500, lng: -127.437408},
      continent: 'North America',
      category: 'Field Research',
      toggleListItem: ko.observable(true),
      highlight: ko.observable(false)
    },
    {
      title: 'Patagonia, Chile',
      location: {lat: -43.0029846, lng: -71.6979215},
      continent: 'South America',
      category: 'Field Research',
      toggleListItem: ko.observable(true),
      highlight: ko.observable(false)
    },
    {
      title: 'Osa Peninsula, Costa Rica',
      location: {lat: 8.539003, lng:-83.6045026},
      continent: 'Central America',
      category: 'Field Research',
      toggleListItem: ko.observable(true),
      highlight: ko.observable(false)
    }

  ]);



  // IMPORTANT: Knockout will automatically populate the 'location' parameter
  // with the clicked location object for the events functions that follow:

  // This function will be executed when a list item is clicked.
  // It is bound to each location in the list using the Knockout Click binding
  self.listClick = function(location) {
    // Since the marker object is stored inside the associated location object,
    // the marker can now be accessed using 'location.marker'
    populateInfoWindow(location.marker);
  }

  // Mouse Over on a list title inside options-box
  //    - Highlights associated map marker icon
  //    - List title also highlighted with css hover
  this.listMouseOver = function(location) {
    location.marker.setIcon(highlightedIcon);
    location.highlight(true);
  }

  // Mouse Out on a list title inside options-box
  //    - Default restored with associated map marker icon
  //    - List title also default restored with css
  this.listMouseOut = function(location) {
    location.marker.setIcon(defaultIcon);
    location.highlight(false);
  }

  // Toggles Visibility when specific button clicked
  //  THen Filters list and markers
  self.toggleVisibility = function(button) {

    // Toggles Show/Hide for appropriate lists and markers
    var showLocView = !button.showLocationsViews(),
        buttonChange = false;

    // Checks to see if a new button was clicked
    if (button.id != lastButtonId) {
        buttonChange = true;
        // This turns off the highlight on the previous button
        self.buttons()[lastButtonId].showLocationsViews(false);
    }

    // Store current button.id that was clicked
    // Used next time function is called (see above)
    lastButtonId = button.id;

    // Shows/Hides lists and markers
    //    - Shows/Hides when button toggled
    //    - Shows when different button selected
    if ((showLocView) || (buttonChange)) {
      self.buttons()[button.id].showLocationsViews(true);  // resets when toggling different buttons
      self.hideAllLocations(button);  // Clears previous locations
      self.showFilteredLocations(button);
    } else {
      self.hideAllLocations(button);
      self.buttons()[button.id].showLocationsViews(false);
    }
  }

  // Filtering based on specific button clicked
  // Decides which locations are needed for list items and map markers
  self.showFilteredLocations = function(button) {

    // This is the label of the button that the user clicked
    var buttonLabel = button.label.toLowerCase();

    // For each location in the observable self.locations() array
    for (var i = 0; i < self.locations().length; i++) {

      // The location category
      var locCategory = self.locations()[i].category.toLowerCase();
      // The location continent
      var locContinent = self.locations()[i].continent.toLowerCase();

      // If the location category or continent text contains the button label
      if ((locCategory === buttonLabel) || (locContinent === buttonLabel)) {
        self.locations()[i].toggleListItem(true); // show list item
        self.locations()[i].marker.setVisible(true); // show map marker
      } else {
        self.locations()[i].toggleListItem(false); // hide list item
        self.locations()[i].marker.setVisible(false); // hide map marker
      }
    }
      // map.fitBounds(bounds);
  }

  self.hideAllLocations = function(button) {

    // For each location in the observable self.locations() array
    for (var i = 0; i < self.locations().length; i++) {
        self.locations()[i].toggleListItem(false); // hide the list item
        self.locations()[i].marker.setVisible(false); // hide the map marker
        largeInfowindow.close();  //close open infoWindow
      }
   }

  // This function currently not in use
  // Availble for reddisplaying map with optimal boundaries
  // Selected set of locations will fit within map boundaries
  self.setNewBounds = function() {
    bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < self.locations().length; i++) {
      if (self.locations()[i].toggleListItem()) {
        bounds.extend(self.locations()[i].marker.position);
      }
    }
    map.fitBounds(bounds);
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

  // The following is the generic content for all infowindows
  var contentString =
    '<div id="content">' +
      '<div>' + '<h3>' + marker.title + '</h3>' +
      '</div>' +
      '<img src="images/wundergroundLogo_4c_horz.png" alt="WU Logo" width="90">' +
    '</div>';

  // Check to make sure the infowindow is not already opened on this marker.
  if (infowindow.marker != marker) {
      infowindow.marker = marker;
      infowindow.setContent(contentString);
      infowindow.open(map, marker);
      // Make sure the marker property is cleared if the infowindow is closed.
      infowindow.addListener('closeclick', function() {
      infowindow.marker = null;
    });
  }
}

function hideInfoWindow(marker) {
  var infowindow = largeInfowindow;
      infowindow.marker = null;
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

function createMarkers() {

  // This will be our listing marker icon.
  defaultIcon = makeMarkerIcon('images/RR-circle.png');

  // Create a highlighted marker icon
  // Used when the user mouses over the marker
  highlightedIcon = makeMarkerIcon('images/RR-circle-highlight.png');

  // The following group uses the location array
  // to create an array of markers on initialize.
  for (var i = 0; i < vm.locations().length; i++) {

    // Get the position from the location array.
    var position = vm.locations()[i].location;
    var title = vm.locations()[i].title;

    // Create a marker per location, and put into markers array.
    // I believe this renders the markers to the map as well.
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

    // All markers get the following event bindings:
    // Two event listeners - one for mouseover, one for mouseout,
    //    - to change the markersIcons back and forth, which creates a highlight effect.
    //    - to highlight effect any list item that is hovered over
    // NOTE --- For listMouseOver/listMouseOut funtion events:
    //    - On map events are invoked below
    //    - On list events are invoked by ko event calling these funcitons (see index.html)

    marker.addListener('mouseover', function(i) {
      // return an anonymous function
      // this should store the current values of 'i' and map marker and list item
      // basically an event listener with the return function gets created for each location
      return function() {
        vm.listMouseOver(vm.locations()[i]);
      }
    }(i)); // pass 'i' as parameters to this event listener function

    // Same comment from above anonyous function applies here as well
    marker.addListener('mouseout', function(i) {
      return function() {
        vm.listMouseOut(vm.locations()[i]);
      }
    }(i));
  }

  // After all markers are created, fit the map to these boundaries
  map.fitBounds(bounds);
}



// The Google Callback function
// This function is executed immediately after the Google API script finishes loading,
// and it should be used to initialize the Google Map objects
function initMap() {
  // define map and render it into the map div
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




// ***APPLY BINDINGS***
// This will create the AppViewModel object
// Apply bindings immediately after this entire js application loads
var vm = new AppViewModel();
ko.applyBindings(vm);



