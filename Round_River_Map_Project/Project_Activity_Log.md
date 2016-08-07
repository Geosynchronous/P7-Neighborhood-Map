#Introduction

Monday August 1, 2016

7:11 PM
- **Project_Activity_Log Created**
- This is a daily ongoing list of these sectioned activities:
  - Project Development
  - Project Review Submissions

##Project Development

7:15 PM

- **Project Plan**
- Just Read over the [Project Rubric](https://review.udacity.com/#!/rubrics/17/view)... Wow!  What a challenging project!
- Need to start from the project from scratch... right now the project folder is empty, except for this document log.
- I will create an interactive map project that might be of use the non-profit organization [Round River Conservation Studies](http://www.roundriver.org/)
- I will use information from their website, and newly released media information, as well as third party APIs
- The "Neighborhood" will be the whole world, I will start with by using Administrative and Field Locations that are on Four Continents, and it will use the satellite view
- Additional functionality will be added in, and seperated as I move through the [developmment plan layed out in the course](https://classroom.udacity.com/nanodegrees/nd001/parts/00113454014/modules/271165859175462/lessons/2711658591239847/concepts/26906985370923)
- First I will have the basic map rendered as above, using previous code in the course as a model.  Once the satellite view renders with some basic location markers, I will then, move it into an MVVM model, and start implementing knokout framework, and then I will make it responsive for all devices before moving on to greater functionalities.

8:07 PM
- **Cloned Project Files**
- Used [Project_Code_5_BeingStylish.html](ers/geo/version-control/P7-Neighborhood-Map/CourseWork/ud864-master-student/Project_Code_5_BeingStylish.html) and image folder from my previous Coursework
- Will modify marker geocode list to use Round River Data

10:28 PM
- **14 Map Markers Added**
- The whole world is shown
- Markers are too big, and should be centered on lat/lng
- NYC is the default position, change to admin office location in SLC, UT

Tuesday August 2, 2016

12:18 AM
- **Map Icons still need work**
- Opening map centers on RR headquarters in SLC, UT but with no marker(yet)
- Zoom = 2 now shows whole world on first map
- Maybe large markers are better 75 x 75
- need to figure out how to center marker...
- Maybe see if color change works, not sure of the code in makeMarkerIcon()...

10:21 AM
- **fix: imageIcon**
- Image icons are 33 x 33 in both a default mode, and a highlight mode
- Some of the lat/lng entries are off, but close enough for now
- Here's what it looks like: ![Screenshot of Map Markers](https://github.com/Geosynchronous/P7-Neighborhood-Map/blob/master/DocImages/Screen%20Shot%202016-08-02%20at%209.44.47%20AM.png)

10:58 AM
- **feat: Style Visibility off**
- for counttires, and admin and water labels
- a natural world without borders
- looks cleaner

11:23 AM
- **Turned on Terrain**
- looks good

1:36 PM
- **on init showListings**
- ready to put the code in MVVM framework with knockout.js

3:03 PM
- **chore: file seperation of html, js, and css**
- code still works fine
- created necessary folders and files, and moved code around
- next: MVVM Framework with Knockout.js on this existing code
- After working framework in place, add much more functionality

Wednesday August 3, 2016

10:32 PM
- **feat: ko bindings hide and show listings**
- Switched to ko bindings for `hideListings` and `showListings`
- Nested `function AppViewModel()` and `  ko.applyBindings(new AppViewModel());` inside `function initMap()`.
- In `index.html` the google map is still loaded as before, and invokes `initMap` after loading:

```
    <script async defer
        src=
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyAaL-jhZDIeEBOjiVX31sDh6UjauQlfWk4&v=3&callback=initMap">
    </script>
```
- at the moment, I am not sure there is a better way to do this.  Will ask Ryan tommorrow during the online mentor meeting. Right now the model and view model are all inside `function AppViewModel()` which itself gets called by `initMap()`
- Seperate model from view-model still needs to be done
- And binding to the map DIV still needs attention with ko

4:33 PM
- **Added self/this designation & ko binds**
- According to the Project Instructions, Knockout is not to be used with direct Google Map Functionalities, Knockout fine for Options Box Views and Functions

5:42 PM
- **feat: Better Options Box**
- Looks like this: ![Screenshot](https://github.com/Geosynchronous/P7-Neighborhood-Map/blob/master/DocImages/Screen%20Shot%202016-08-03%20at%205.35.35%20PM.png)
 
6:01 PM
- **Enhanced Data Structure**
- Think this will help me display and filter markers
- Need to add more markers to data
- Need to add more properties and attributes:

```
    // TODO - add all sites, add all properties
    //      (Categories: Field Research, Field Studies, Administrative, Special Events)
    var locations = [
      {
        title: 'Kunene Region, Namibia',
        location: {lat: -18.789779,lng: 13.370975},
        continent: 'Africa',
        category: 'Field Research'
      },
      {title: 'Okavango Delta, Botswana',
```

6:57 PM
- **Idea for UI**
- This will probably be more of a toggle situation, with only one item open at a time, and itemized listings shown below, that are also clickable and will open the corresponding `infoWindow` functionality: ![Screenshot of Option Box](https://github.com/Geosynchronous/P7-Neighborhood-Map/blob/master/DocImages/Screen%20Shot%202016-08-03%20at%206.53.28%20PM.jpg)

Thursday August 4, 2016

12:21 PM
- **MENTOR MEETING**
- Ryan just spent an hour with me going over my code big time and answering a lot of questions
- My head is ready to explode
- Will get back to this after a break and start refactoring my code...

![screenshot](https://github.com/Geosynchronous/P7-Neighborhood-Map/blob/master/DocImages/Screen%20Shot%202016-08-04%20at%2012.36.34%20PM.png)

2:22 PM
- **STYLE CHANGES**
- THis is getting close to the overall look I envision: ![Screenshot](https://github.com/Geosynchronous/P7-Neighborhood-Map/blob/master/DocImages/Screen%20Shot%202016-08-05%20at%204.14.28%20PM.jpg)

- Also want a large round river icon over Greenville, Missisippi as the intro view, with satellite view

Friday August 5, 2016

12:16 AM
- **Style**
- Made more changes, reflected in the image above

4:18 PM
- **feat: active social icons**
- change above screenshot to reflect the update
- these are the social links and icons that Round River is using

5:10 PM
- **HTML for Above Screenshot**

```
<!DOCTYPE html>
<html lang="en">
<!--
Neighborhood Map Project
Udacity FEND Nanodegree
Developer: George Fischer

Prototype Google Map App
MVVM Framework with Knockout.js
Model-View-ViewModel (MVVM) pattern

Map created for:
  Round River Conservation Studies
  http://www.roundriver.org
  Non-Profit Organization
-->

<!--
  THE ***VIEW***
  HTML markup that defines the appearance of your UI
 -->
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0"><link rel="stylesheet" id="vc_google_fonts_merriweather_sans300300italicregularitalic700700italic800800italic-css" href="//fonts.googleapis.com/css?family=Merriweather+Sans%3A300%2C300italic%2Cregular%2Citalic%2C700%2C700italic%2C800%2C800italic&amp;subset=latin&amp;ver=4.5.3" type="text/css" media="all">
    <link rel="stylesheet" href="css/style.css">
    <script src= "js/knockout-3.4.0.js"></script>
    <script src= "js/app.js"></script>
    <title>Round River Map</title>
  </head>
  <body>
    <div class="container">
      <div class="options-box">
        <a href="http://www.roundriver.org" title="Go to roundriver.org">
          <img alt="Round River" src="images/RR-Main-Logo.png">
        </a>
        <div>
          <button class="button" id="show-listings" data-bind="click: showListings">FIELD RESEARCH</button>
          <button class="button" id="show-listings" data-bind="click: showListings">FIELD STUDIES</button>
          <button class="button" id="show-listings" data-bind="click: showListings">AFRICA</button>
          <button class="button" id="show-listings" data-bind="click: showListings">NORTH AMERICA</button>
          <button class="button" id="show-listings" data-bind="click: showListings">CENTRAL AMERICA</button>
          <button class="button" id="show-listings" data-bind="click: showListings">SOUTH AMERICA</button>
          <button class="button" id="show-listings" data-bind="click: showListings">SPECIAL EVENTS</button>
          <button class="button" id="hide-listings" data-bind="click: hideListings">All Listings</button>
        </div>
        <div class="contact">

            <a id="about" href="http://www.roundriver.org/about-us" title="About Us">
              <h2>About Us</h2>
            </a>

            <img id="hero" src="images/great-bear-01.jpg">

            <!--
            ROUND RIVER Social Media Linked Icons
            -->
            <a href="http://roundriver.us3.list-manage1.com/track/click?u=8b5c8d1d4bd3f6d6e96472b97&id=3081df2487&e=26c9040171">
              <img class="social" alt="Round River" src="images/social/color-facebook-48.png">
            </a>
            <a href="http://roundriver.us3.list-manage.com/track/click?u=8b5c8d1d4bd3f6d6e96472b97&id=81b66d90a8&e=26c9040171">
              <img class="social" alt="Round River" src="images/social/color-instagram-48.png">
            </a>
            <a href="http://www.roundriver.org/wp-content/uploads/2015/07/great-bear-01.jpg">
              <img class="social" alt="Round River" src="images/social/color-link-48.png">
            </a>
            <a href="http://roundriver.us3.list-manage.com/track/click?u=8b5c8d1d4bd3f6d6e96472b97&id=cb4f4cc46a&e=26c9040171">
              <img class="social" alt="Round River" src="images/social/color-twitter-48.png">
            </a>
            <a href="http://roundriver.us3.list-manage2.com/track/click?u=8b5c8d1d4bd3f6d6e96472b97&id=19e75a7c08&e=26c9040171">
              <img class="social" alt="Round River" src="images/social/color-vimeo-48.png">
            </a>
            <a href="http://roundriver.us3.list-manage1.com/track/click?u=8b5c8d1d4bd3f6d6e96472b97&id=8a763f7326&e=26c9040171">
              <img class="social" alt="Round River" src="images/social/color-youtube-48.png">
            </a>
        </div>
      </div>
      <div id="map"></div>
    </div>
    <script async defer
        src=
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyAaL-jhZDIeEBOjiVX31sDh6UjauQlfWk4&v=3&callback=initMap">
    </script>
  </body>
</html>

```

- Basically the above html code creates the overall view the way I want it, except that I haven't added the kn list items when a button is toggled.  So there will be some changes to make the items appear in the view under the button.  Also the code has not been set up to be responsive for various viewport device widths.  I will deal with that after I get all the functionality built into my code base.

5:28 PM
- **app.js Code**

```
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
```

- Basically, this js code works fine.  However, I am a bit confused about employing the MVVM model to it.  During the mentoring session with Ryan yesterday, I learned how to sort this code out.  Basically, I just need to do a bunch of refactoring:
  - The `initMap` function does not need to encapsulate all of the code as it currently does. It just needs to do the following:
    - define the map
    - define the infoWindow
    - create the markers
  - The actual `viewModel` needs to be invoked before `initMap` can be executed.  To do that:
    - I need to seperate out concerns that doen't belong there:
      - Round River & Google Map Data
      - Google Map functions
  - Todo the above:
    - refactor function locations 
    - refactor variables locations
    - leverage global sharing will greatly simplify matters, for vars shared between `vm` and other functions, which minimizes the passing of vars:
      - bounds
      - map
      - largeInfowindow
      - styles[]
    - respecify prefixed objects as needed (this, self, vm, etc)
    - create `vm` var to simplify designation of `viewModel`
  - Rewrite some of the code to make things fit together better
    - define `bounds` in `initMap` so it gets created as soon as the map loads
    - store the markers in the ko locations array to provide ubquitious access to markers, since they all have the same data structure:
      - `vm.locations()[i].marker = marker;` 

9:03 PM
- ** Major Refactor app.js**

```
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
  ]);

  // This function will be executed when a list item is clicked.
  // It is bound to each location in the list using the Knockout Click binding
  // Knockout will automatically populate the 'location' parameter with the clicked location object
  self.listClick = function(location) {
    // Since the marker object is stored inside the associated location object,
    // the marker can now be accessed using 'location.marker'
    populateInfoWindow(location.marker);
  }

  // This function will loop through the markers array and display them all.
  self.showAllListings = function() {
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
  var defaultIcon = makeMarkerIcon('images/RR-circle.png');

  // Create a highlighted marker icon
  // Used when the user mouses over the marker
  var highlightedIcon = makeMarkerIcon('images/RR-circle-highlight.png');

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

```

11:46 PM
- **Style Changes**

Saturday August 6, 2016

12:28 AM
- **feat: list the locations under buttons**
- When a list item is clicked on it opens up the corresponding infoWindow thanks to ko
- Added this html code:

```
          <ul data-bind="foreach: locations">
            <li data-bind="text: title, click: $parent.listClick"></li>
          </ul>
```

- Added this js code:

```

  // This function will be executed when a list item is clicked.
  // It is bound to each location in the list using the Knockout Click binding
  // Knockout will automatically populate the 'location' parameter with the clicked location object
  self.listClick = function(location) {
    // Since the marker object is stored inside the associated location object,
    // the marker can now be accessed using 'location.marker'
    populateInfoWindow(location.marker);
  }
```

- There is still a lot of work to do with this, such as filtering for each of the different buttons
  - have to update the data, adding properties, values and more listed places
  - have to make the list clear, when a different button is selected

1:13 AM
- **Style and Data Location Updatea**

10:59 AM
- **feat: highlight list item & marker on mouse over**
- Used KO to highlight marker
- Used CSS to highlight list title item
- Made “highlightIcon” and “defaultIcon” global
- Function created in “AppViewModel”
- An infoWindow can be open on a marker and the above functionality does not change, Which makes for a decent UI
- Code:

```
          <ul class = "button-list" data-bind="foreach: locations">
            <li data-bind="text: title, click: $parent.listClick, event: { mouseover: $parent.listMouseOver, mouseout: $parent.listMouseOut }"></li>
          </ul>
```

```
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
```
- Note how the infoWindow can be selected while different items are highlighted: ![screenshot](https://github.com/Geosynchronous/P7-Neighborhood-Map/blob/master/DocImages/Screen%20Shot%202016-08-06%20at%2010.46.05%20AM.jpg)

1:47 PM
- **test: KO visible**
- Makes list appear and disappear with chanfe of KO blabla boolean
- Now I need to probably make an array for the buttons, since they will hold the filters and only one button can display a list at a time
- Thinking....

3:33 PM
- **refactor: Buttons**
- Used `foreach` and created KO array
- Now multiple lines of code for every button is not needed in the base html file
- One single KO foreach works just fine
- Now to add visibility of lists, and filtering for each button


5:00 PM
- **STUCK & REVERTED**
- tried to nest KO `foreach` for buttons and list, broke my code...
- in over my head, revereted to previous, working situation
- since the map markers are already set, and do not need to change on the fly, they only need to be filtered
- All that needs to be done is make the map markers and option-box lists hide or show according to selected dependecies
- The KO `buttons` array will be doing all the UI selecting, so this is where the hide/show state will reside for clicked buttons
- The filtering for the different button categories will be done using the KO `locations` array

9:00 PM
- **feat: buttons array used to label buttons**
- not as elegant as I would like, but it will have to do for now, until I am able to nest KO `foreach` statements
- it works fine, though a bit bulkiy and repititious coding

Sunday August 7, 2016

1:08 AM
- **test: Toggle**
- I'm being ko'd by knockout

8:37 AM
- **test: Incorporated a simple Fiddle Example**
- Iterated working js fiddle example until I got my list toggle working
completely on it’s own.  Needed to create  a ko.observable var to pass
in ko buttons array value  so that it could be in the proper ko
function form for the binding to work.

10:59 AM
- **feat: create all list buttons with foreach**
- less repetitive code
-more precise button bindings
-use only one list at bottom of buttons, which is probably a good way to
go, least complex
