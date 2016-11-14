// Whole-script strict mode syntax
"use strict";

// TODO - Split Data into seperate JS files

// Neighborhood Map Project
// Round River Conservation Studies Map
// Udacity FEND Nanodegree
// Developer: George Fischer
// Fall 2016



// Main Functional Sections of Code:
//    ***GLOBAL VARIABLES***
//    ***VIEW-MODEL***
//    ***GOOGLE MAPS***
//    ***APPLY KO BINDINGS***





// ***VIEW-MODEL***
// Defines the data and behavior of the UI
function AppViewModel() {
    var self = this,
        lastButtonId = 0;
    // Slide Button
    self.isActive = ko.observable(false);
    self.toggleActive = function() {
        //console.log("button clicked");
        self.isActive(!self.isActive());
        //console.log(self.isActive());
    };

    // Create KO Array to filter locations for button list display
    // Only one list can display at a time
    self.buttons = ko.observableArray([{
        label: 'GLOBAL LOCATIONS',
        showLocationsViews: ko.observable(true), //set true for initial condition
        id: 0
    }, {
        label: 'AFRICAN CONTINENT',
        showLocationsViews: ko.observable(false),
        id: 1
    }, {
        label: 'ASIAN CONTINENT',
        showLocationsViews: ko.observable(false),
        id: 2
    }, {
        label: 'NORTH AMERICA',
        showLocationsViews: ko.observable(false),
        id: 3
    }, {
        label: 'CENTRAL AMERICA',
        showLocationsViews: ko.observable(false),
        id: 4
    }, {
        label: 'SOUTH AMERICA',
        showLocationsViews: ko.observable(false),
        id: 5
    }, {
        label: 'FIELD RESEARCH',
        showLocationsViews: ko.observable(false),
        id: 6
    }, {
        label: 'STUDY ABROAD',
        showLocationsViews: ko.observable(false),
        id: 7
    }, {
        label: 'OUR OFFICES',
        showLocationsViews: ko.observable(false),
        id: 8
    }]);

    // These are the marker listings that will be shown to the user.
    // Normally we'd have these in a database.
    self.locations = ko.observableArray([{
        title: 'Kunene Region of Namibia',
        location: {
            lat: -18.789779,
            lng: 13.370975
        },
        continent: 'African Continent',
        category: 'Global Locations',
        type: 'Field Research',
        siteUrl: 'http://www.roundriver.org/where-we-work/southern-africa/kunene-region-of-namibia/',
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/07/Namibia_Kunene_Zebra.jpg',
        toggleListItem: ko.observable(true), // used to toggle visibility of inidividual list items
        highlight: ko.observable(false) // used to change styling of list items with CSS binding
    }, {
        title: 'Botswana – KAZA, Okavango Delta & Central Kalahari Game Refuge',
        location: {
            lat: -19.2798704,
            lng: 22.8201857
        },
        continent: 'African Continent',
        category: 'Global Locations',
        type: 'Field Research',
        siteUrl: 'http://www.roundriver.org/where-we-work/southern-africa/botswana-okavango-delta/',
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/07/Lions_Whatwedo-2.jpg',
        toggleListItem: ko.observable(true),
        highlight: ko.observable(false)
    }, {
        title: 'Taku River Wildlife Conservation Project – British Columbia',
        location: {
            lat: 58.6553055,
            lng: -133.8137736
        },
        continent: 'North America',
        category: 'Global Locations',
        type: 'Field Research',
        siteUrl: 'http://www.roundriver.org/where-we-work/north-america/taku-river-wildlife-conservation-project-british-columbia/',
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/07/Taku-bke-2008-5.jpg',
        toggleListItem: ko.observable(true),
        highlight: ko.observable(false)
    }, {
        title: 'Wolverine - Winter Recreation Project – Idaho, Montana and Wyoming',
        location: {
            lat: 45.0575711,
            lng: -116.1655369
        },
        continent: 'North America',
        category: 'Global Locations',
        type: 'Field Research',
        siteUrl: 'http://www.roundriver.org/wolverine/',
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/10/wolverine-project-3.jpg',
        toggleListItem: ko.observable(true),
        highlight: ko.observable(false)
    }, {
        title: 'Colorado Plateau – Utah',
        location: {
            lat: 37.6299925,
            lng: -109.885184
        },
        continent: 'North America',
        category: 'Global Locations',
        type: 'Field Research',
        siteUrl: 'http://www.roundriver.org/where-we-work/north-america/',
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/07/san-juan-01.jpg',
        toggleListItem: ko.observable(true),
        highlight: ko.observable(false)
    }, {
        title: 'North Coast – Yukon Territory',
        location: {
            lat: 68.8369357,
            lng: -149.9462445
        },
        continent: 'North America',
        category: 'Global Locations',
        type: 'Field Research',
        siteUrl: 'http://www.roundriver.org/where-we-work/north-america/north-coast-yukon-territory/',
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/07/Yukon.jpg',
        toggleListItem: ko.observable(true),
        highlight: ko.observable(false)
    }, {
        title: 'Great Bear Rainforest - British Columbia',
        location: {
            lat: 52.9260101,
            lng: -128.935775
        },
        continent: 'North America',
        category: 'Global Locations',
        type: 'Field Research',
        siteUrl: 'http://www.roundriver.org/where-we-work/north-america/great-bear-rainforest/',
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/07/GBRKoeye2_Milek.jpg',
        toggleListItem: ko.observable(true),
        highlight: ko.observable(false)
    }, {
        title: 'North Coast Conservation Design – British Columbia',
        location: {
            lat: 54.2684383,
            lng: -130.4447293
        },
        continent: 'North America',
        category: 'Global Locations',
        type: 'Field Research',
        siteUrl: 'http://www.roundriver.org/where-we-work/north-america/north-coast-conservation-design-british-columbia/',
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/09/salmon.jpg',
        toggleListItem: ko.observable(true),
        highlight: ko.observable(false)
    }, {
        title: 'Coastal Forest and Mountains – British Columbia',
        location: {
            lat: 55.3639087,
            lng: -131.830578
        },
        continent: 'North America',
        category: 'Global Locations',
        type: 'Field Research',
        cateUrl: 'http://www.roundriver.org/where-we-work/north-america/coastal-forest-and-mountains-british-columbia/',
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/07/GBRKoeye3_Milek.jpg',
        toggleListItem: ko.observable(true),
        highlight: ko.observable(false)
    }, {
        title: 'Muskwa Kechika Conservation Design - British Columbia',
        location: {
            lat: 58.9338124,
            lng: -130.8412957
        },
        continent: 'North America',
        category: 'Global Locations',
        type: 'Field Research',
        siteUrl: 'http://www.roundriver.org/where-we-work/north-america/muskwa-kechika-conservation-design-british-columbia/',
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/07/bears-MK.jpg',
        toggleListItem: ko.observable(true),
        highlight: ko.observable(false)
    }, {
        title: 'Mackenzie Delta – Northwest Territories',
        location: {
            lat: 66.999500,
            lng: -127.437408
        },
        continent: 'North America',
        category: 'Global Locations',
        type: 'Field Research',
        siteUrl: 'http://www.roundriver.org/where-we-work/north-america/mackenzie-delta-northwest-territories/',
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/07/yukon_North_Slope-1.jpg',
        toggleListItem: ko.observable(true),
        highlight: ko.observable(false)
    }, {
        title: 'Patagonia - Chile - South America',
        location: {
            lat: -43.0029846,
            lng: -71.6979215
        },
        continent: 'South America',
        category: 'Global Locations',
        type: 'Field Research',
        siteUrl: 'http://www.roundriver.org/where-we-work/south-america/patagonia-chile/',
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2013/06/patagonia_header-5.jpg',
        toggleListItem: ko.observable(true),
        highlight: ko.observable(false)
    }, {
        title: 'Osa Peninsula - Costa Rica - Central America',
        location: {
            lat: 8.539003,
            lng: -83.6045026
        },
        continent: 'Central America',
        category: 'Global Locations',
        type: 'Field Research',
        siteUrl: 'http://www.roundriver.org/where-we-work/central-america/',
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/10/costa-rica-01.jpg',
        toggleListItem: ko.observable(true),
        highlight: ko.observable(false)
    }, {
        title: 'Study Abroad in Mongolia',
        location: {
            lat: 51.198708,
            lng: 99.678212
        },
        continent: 'Asian Continent',
        category: 'Global Locations',
        type: 'Study Abroad',
        siteUrl: 'http://www.roundriver.org/student-programs/programs/mongolia/',
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2016/09/Mongolia_project_detail-1024x768.jpg',
        toggleListItem: ko.observable(true),
        highlight: ko.observable(false)
    }, {
        title: 'Study Abroad in Patagonia',
        location: {
            lat: -48.0029846,
            lng: -71.6979215
        },
        continent: 'South America',
        category: 'Global Locations',
        type: 'Study Abroad',
        siteUrl: 'http://www.roundriver.org/student-programs/programs/patagonia-chile/',
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/09/patagonia-120-1024x683.jpg',
        toggleListItem: ko.observable(true),
        highlight: ko.observable(false)
    }, {
        title: 'Study Abroad in Costa Rica',
        location: {
            lat: 9.539003,
            lng: -84.6045026
        },
        continent: 'Central America',
        category: 'Global Locations',
        type: 'Study Abroad',
        siteUrl: 'http://www.roundriver.org/student-programs/programs/costa-rica-the-osa-peninsula/',
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/07/IMG_1538-1024x1024.jpg',
        toggleListItem: ko.observable(true),
        highlight: ko.observable(false)
    }, {
        title: 'Study Abroad in British Columbia',
        location: {
            lat: 60.6553055,
            lng: -135.8137736
        },
        continent: 'North America',
        category: 'Global Locations',
        type: 'Study Abroad',
        siteUrl: 'http://www.roundriver.org/student-programs/programs/taku-river-tlingit-territory-british-columbia-canada/',
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/09/taku-11-1024x680.jpg',
        toggleListItem: ko.observable(true),
        highlight: ko.observable(false)
    }, {
        title: 'Study Abroad in Botswana',
        location: {
            lat: -21.2798704,
            lng: 24.8201857
        },
        continent: 'Africa',
        category: 'Global Locations',
        type: 'Study Abroad',
        siteUrl: 'http://www.roundriver.org/student-programs/programs/africa-wildlife-conservation-okavango-delta-botswana/',
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/09/botswana-5-1024x680.jpg',
        toggleListItem: ko.observable(true),
        highlight: ko.observable(false)
    }, {
        title: 'Round River Administrative Office',
        location: {
            lat: 40.748879,
            lng: -111.865102
        },
        continent: 'North America',
        category: 'Global Locations',
        type: 'Our Offices',
        siteUrl: 'http://www.roundriver.org/contact-us/',
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/07/RR-web-logo-main.png',
        toggleListItem: ko.observable(true),
        highlight: ko.observable(false)
    }, {
        title: 'Round River Science Office',
        location: {
            lat: 45.678863,
            lng: -111.035495
        },
        continent: 'North America',
        category: 'Global Locations',
        type: 'Our Offices',
        siteUrl: 'http://www.roundriver.org/contact-us/',
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/07/RR-web-logo-main.png',
        toggleListItem: ko.observable(true),
        highlight: ko.observable(false)
    }]);



    // IMPORTANT: Knockout will DYNAMICALLY populate the 'location' parameter
    // with the clicked location object for the events functions that follow:



    // This function will be executed when a list item is clicked.
    // It is bound to each location in the list using the Knockout Click binding
    self.listClick = function(location) {
        // Since the marker object is stored inside the associated location object,
        // the marker can now be accessed using 'location.marker'
        populateInfoWindow(location.marker);
    };
    // Mouse Over on a list title inside options-box
    //    - Highlights associated map marker icon
    //    - List title also highlighted with css hover
    this.listMouseOver = function(location) {
        location.marker.setIcon(highlightedIcon);
        location.highlight(true);
    };
    // Mouse Out on a list title inside options-box
    //    - Default restored with associated map marker icon
    //    - List title also default restored with css
    this.listMouseOut = function(location) {
        location.marker.setIcon(defaultIcon);
        location.highlight(false);
    };
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
            self.buttons()[button.id].showLocationsViews(true); // resets when toggling different buttons
            self.hideAllLocations(button); // Clears previous locations
            self.showFilteredLocations(button);
            self.setNewBounds(button);
        } else {
            self.hideAllLocations(button);
            self.buttons()[button.id].showLocationsViews(false);
        }
    };
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
            // The location type
            var locType = self.locations()[i].type.toLowerCase();
            // If the location category or continent text contains the button label
            if ((locCategory === buttonLabel) || (locContinent === buttonLabel) || (locType === buttonLabel)) {
                self.locations()[i].toggleListItem(true); // show list item
                self.locations()[i].marker.setVisible(true); // show map marker
            } else {
                self.locations()[i].toggleListItem(false); // hide list item
                self.locations()[i].marker.setVisible(false); // hide map marker
            }
        }
    };
    // Hides all List Items and Markers
    self.hideAllLocations = function(button) {
        // For each location in the observable self.locations() array
        for (var i = 0; i < self.locations().length; i++) {
            self.locations()[i].toggleListItem(false); // hide the list item
            self.locations()[i].marker.setVisible(false); // hide the map marker
            largeInfowindow.close(); //close open infoWindow
        }
    };
    // Availble for redisplaying map with optimal boundaries
    // Selected set of locations will fit within map boundaries
    self.setNewBounds = function() {
        bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < self.locations().length; i++) {
            if (self.locations()[i].toggleListItem()) {
                bounds.extend(self.locations()[i].marker.position);
            }
        }
        map.fitBounds(bounds);
    };
}



// ***GOOGLE MAPS***
// Maps not compatible with KNOCKOUT
// Hence code seperate from VIEW MODEL

// Loads Infowindow content after marker has been clicked
function loadContent(marker) {
    var infowindow = largeInfowindow;
    var weatherUrl = apiPath + gps + apiKey + units;
    // AJAX data request from Open Weather Map API
    $.getJSON(weatherUrl).done(function(data) {
        weatherData = data;
        currentTemp = Math.round(weatherData.main.temp);
        maxTemp = Math.round(weatherData.main.temp_max);
        minTemp = Math.round(weatherData.main.temp_min);
        humidity = Math.round(weatherData.main.humidity);
        description = weatherData.weather[0].main;
        weatherImage = "images/weather/" + weatherData.weather[0].icon + ".png";
        // The following is the generic DOM Node content for all infowindows
        // It naturally executes after the above AJAX data is done being retrieved
        var contentString =
            '<div class="iw-container">' +
            '<div class="iw-title">' + marker.title +
            '</div>' +
            '<div class="iw-moreInfo">' +
            '<a class="iw-moreInfoText" target="_blank" href=' + marker.siteUrl + '>' + 'info' + '</a>' +
            '</div>' +
            '<div>' +
            '<img class="infoWindowImage" src=' + marker.siteImage + '>' +
            '</div>' +
            '<div class="weather" >' +
            '<div class="iw-ImageDiv">' +
            '<img class="iw-Image" src=' + weatherImage + '>' +
            '</div>' +
            '<div class="listing">' +
            '<p class="stats" >' + currentTemp + 'F' + '</p>' +
            '</div>' +
            '<div class="listing">' +
            '<p class="stats" >' + humidity + '%' + '</p>' +
            '</div>' +
            '<div class="credits">' +
            '<a target="_blank" href="http://openweathermap.org/weathermap" title="Credit: OpenWeatherMap.org">' +
            '<img src="images/OpenWeatherMap_logo.png">'
            '</a>' +
        '</div>' +
        '</div>' +
        '</div>';
        // Check to make sure the infowindow is not already opened on this marker.
        if (infowindow.marker != marker) {
            infowindow.marker = marker;
            // Try to Zoom and Center for a better Infowindow Position on Map
            // A lot less panning and zooming in now needed by user... but...
            map.setZoom(9);
            map.setCenter(marker.getPosition());
            // Make Info Window
            infowindow.setContent(contentString);
            infowindow.open(map, marker);
            // Make sure the marker property is cleared if the infowindow is closed.
            infowindow.addListener('closeclick', function() {
                infowindow.marker = null;
            });
        }
    }).fail(function() {
        alert("Load Error: Open Weather Map API");
    });
}

// This function populates the infowindow when the marker is clicked. Only
// one infowindow which will open at the marker that is clicked, and populate based
// on that markers position.
function populateInfoWindow(marker) {
    gps = 'lat=' + marker.latitude + '&' + 'lon=' + marker.longitude;
    loadContent(marker);
    // Makes selected map marker bounce for timed duration
    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(function () {
        marker.setAnimation(null);
    }, 700*5); // 700 is current maps duration of one bounce (v3.13)
}

// Closes the Open Info Window when "X" button clicked
function hideInfoWindow(marker) {
    var infowindow = largeInfowindow;
    infowindow.marker = null;
}

// This function takes in an image, and then creates a new marker
// icon of that image. The icon will be 33 px wide by 33 high, have an origin
// of 0, 0 and be anchored at 17, 33).
function makeMarkerIcon(iconImage) {
    var markerImage = new google.maps.MarkerImage(
        iconImage,
        new google.maps.Size(33, 33),
        new google.maps.Point(0, 0),
        new google.maps.Point(17, 33),
        new google.maps.Size(33, 33));
    return markerImage;
}

// Creates the map markers for each geolocation
// All hard coded data is loaded here for each marker
// API info is loaded later when the Info Window is loaded in realtime
// The map boundaries for markers are established here
// The Event Listeners for the markers are invoked here
// initMap() follows this function, and invokes it
function createMarkers() {
    // Listing marker icon, the Round River Logo
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
        var siteUrl = vm.locations()[i].siteUrl;
        var siteImage = vm.locations()[i].siteImage;
        var latitude = vm.locations()[i].location.lat;
        var longitude = vm.locations()[i].location.lng;
        // Create a marker per location, and put into markers array.
        // I believe this renders the markers to the map as well.
        var marker = new google.maps.Marker({
            position: position,
            title: title,
            siteUrl: siteUrl,
            siteImage: siteImage,
            latitude: latitude,
            longitude: longitude,
            animation: google.maps.Animation.DROP,
            icon: defaultIcon,
            id: i,
            animation: google.maps.Animation.DROP,
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
            };
        }(i)); // pass 'i' as parameters to this event listener function
        // Same comment from above anonyous function applies here as well
        marker.addListener('mouseout', function(i) {
            return function() {
                vm.listMouseOut(vm.locations()[i]);
            };
        }(i));
    }
    // After all markers are created, fit the map to these boundaries
    map.fitBounds(bounds);
}

// The Google Callback function
// This function is executed immediately after the Google API script finishes loading,
// and it should be used to initialize the Google Map objects
// Last script element is where the Google API script is invoked
function initMap() {
    // define map and render it into the map div
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 40.7501481,
            lng: -111.8665667
        },
        zoom: 1,
        maxZoom: 17,
        backgroundColor: '#af9a6b',
        styles: styles,
        mapTypeId: 'terrain',
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_RIGHT
        }
    });
    // define bounds
    bounds = new google.maps.LatLngBounds();
    // define largeInfowindow
    largeInfowindow = new google.maps.InfoWindow();
    // create ALL map markers on map when loaded
    createMarkers();
}

// Google Maps Error message
// Error when Google Maps API not loading at all
//
// NOTE: Error during load - "The Google Maps JavaScript API writes error and warning messages
// to window.console . The following tables list the possible error codes
// returned by the Google Maps JavaScript API, "
function mapError() {
    alert("Load Error: Google Maps API");
    console.log("Load Error: Google Maps API");
}




// ***APPLY KO BINDINGS***

// This will create the AppViewModel object
var vm = new AppViewModel();
// Apply bindings immediately after the preceding JS code loads
ko.applyBindings(vm);


