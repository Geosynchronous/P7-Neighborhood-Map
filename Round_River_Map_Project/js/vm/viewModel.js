"use strict";

// ***VIEW MODEL***
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
            // Developer-to-Developer tip
            // Just in case, when you use an observable array,
            // their respective content may not necessarily inherit
            // or have observable attributes/properties.

    // FILTER BUTTONS for Active Display
    // (Only one button can display at a time)
    // (See globalData.js for Model Data)
    //
    // Create a constructor for FILTER BUTTONS using a KO observable
    var Button = function (region, index){
      this.label = region;                              // Button Label
      this.showLocationsViews = ko.observable(false);   // Button Active State
      this.id = index;
    };
    // Create the KO observable Array of buttons
    var len = regions.length;
    self.buttons = ko.observableArray();
        for ( var i = 0; i < len; i++ ){
            self.buttons.push( new Button(regions[i], i));
        }
    // Set initial condition where first button is highlighted (selected)
    self.buttons()[0].showLocationsViews(true);

    // These are the marker listings that will be shown to the user.
    // Normally we'd have these in a database.
    //
    // Create a constructor for Locations using with KO observables
    var Location = function (place, index) {
        this.title = place.title;
        this.location = place.location;
        this.lat = place.location.lat;
        this.lng = place.location.lng;
        this.continent = place.continent;
        this.category = place.category;
        this.type = place.type;
        this.siteUrl = place.siteUrl;
        this.siteImage = place.siteImage;
        this.toggleListItem = ko.observable(true);
        this.highlight = ko.observable(false);
    };

    // Create the KO observable Array of locations
    var len = places.length;
    self.locations = ko.observableArray();
        for ( var i = 0; i < len; i++ ){
            self.locations.push( new Location(places[i], i));
        }

    // IMPORTANT: Knockout will DYNAMICALLY populate the 'location' parameter
    // with the clicked location object for the events functions that follow:
    //
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
        len = self.locations().length;
        for (var i = 0; i < len; i++) {
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
        len = self.locations().length;
        for (var i = 0; i < len; i++) {
            self.locations()[i].toggleListItem(false); // hide the list item
            self.locations()[i].marker.setVisible(false); // hide the map marker
            largeInfowindow.close(); //close open infoWindow
        }
    };
    // Availble for redisplaying map with optimal boundaries
    // Selected set of locations will fit within map boundaries
    self.setNewBounds = function() {
        bounds = new google.maps.LatLngBounds();
        len = self.locations().length;
        for (var i = 0; i < len; i++) {
            if (self.locations()[i].toggleListItem()) {
                bounds.extend(self.locations()[i].marker.position);
            }
        }
        map.fitBounds(bounds);
    };
}

