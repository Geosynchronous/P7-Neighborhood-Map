"use strict";


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
