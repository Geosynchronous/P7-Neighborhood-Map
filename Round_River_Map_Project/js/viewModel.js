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
    // Create the KO observable Array of FILTER BUTTONS
    var len = buttonLabel.regions.length;
    self.buttons = ko.observableArray();
        for ( var i = 0; i < len; i++ ){
            self.buttons.push( new Button( buttonLabel.regions[i], i));
        }
    // Set initial condition where first button is highlighted (selected)
    self.buttons()[0].showLocationsViews(true);

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

