"use strict";

// ***GLOBAL VARIABLES***
var map,
    largeInfowindow,
    bounds,
    highlightedIcon,
    defaultIcon,
    weatherData,
    apiPath = 'http://api.openweathermap.org/data/2.5/weather?',
    apiKey = '&APPID=db6d60dca9b88a47a0884b8ff753b7f6',
    units = '&units=imperial',
    gps,
    currentTemp,
    maxTemp,
    minTemp,
    humidity,
    description,
    weatherImage,
    styles = [{
        featureType: 'landscape',
        elementType: 'natural.landcover',
        stylers: [{
            visibility: 'on'
        }]
    }, {
        featureType: 'administrative',
        elementType: 'country',
        stylers: [{
            visibility: 'off'
        }]
    }, {
        featureType: 'water',
        stylers: [{
            color: '#19a0d8'
        }]
    }, {
        featureType: 'administrative',
        elementType: 'labels.text.stroke',
        stylers: [{
            color: '#ffffff'
        }, {
            weight: 6
        }]
    }, {
        featureType: 'administrative',
        elementType: 'labels.text.fill',
        stylers: [{
            color: '#e85113'
        }, {
            visibility: 'off'
        }]
    }, {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{
            color: '#efe9e4'
        }, {
            lightness: -40
        }]
    }, {
        featureType: 'transit.station',
        stylers: [{
            weight: 9
        }, {
            hue: '#e85113'
        }]
    }, {
        featureType: 'road.highway',
        elementType: 'labels.icon',
        stylers: [{
            visibility: 'off'
        }]
    }, {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{
            lightness: 100
        }, {
            visibility: 'off'
        }]
    }, {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{
            lightness: -100
        }, {
            visibility: 'off'
        }]
    }, {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{
            visibility: 'on'
        }, {
            color: '#f0e4d3'
        }]
    }, {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [{
            color: '#efe9e4'
        }, {
            lightness: -25
        }]
    }];

var regions = [
        'GLOBAL LOCATIONS',
        'AFRICAN CONTINENT',
        'ASIAN CONTINENT',
        'NORTH AMERICA',
        'CENTRAL AMERICA',
        'SOUTH AMERICA',
        'FIELD RESEARCH',
        'STUDY ABROAD',
        'OUR OFFICES'
      ]

var locations = ([{
        title: 'Kunene Region of Namibia',
        location: {
            lat: -18.789779,
            lng: 13.370975
        },
        continent: 'African Continent',
        category: 'Global Locations',
        type: 'Field Research',
        siteUrl: 'http://www.roundriver.org/where-we-work/southern-africa/kunene-region-of-namibia/',
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/07/Namibia_Kunene_Zebra.jpg'
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
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/07/Lions_Whatwedo-2.jpg'
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
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/07/Taku-bke-2008-5.jpg'
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
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/10/wolverine-project-3.jpg'
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
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/07/san-juan-01.jpg'
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
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/07/Yukon.jpg'
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
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/07/GBRKoeye2_Milek.jpg'
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
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/09/salmon.jpg'
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
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/07/GBRKoeye3_Milek.jpg'
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
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/07/bears-MK.jpg'
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
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/07/yukon_North_Slope-1.jpg'
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
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2013/06/patagonia_header-5.jpg'
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
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/10/costa-rica-01.jpg'
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
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2016/09/Mongolia_project_detail-1024x768.jpg'
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
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/09/patagonia-120-1024x683.jpg'
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
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/07/IMG_1538-1024x1024.jpg'
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
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/09/taku-11-1024x680.jpg'
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
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/09/botswana-5-1024x680.jpg'
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
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/07/RR-web-logo-main.png'
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
        siteImage: 'http://www.roundriver.org/wp-content/uploads/2015/07/RR-web-logo-main.png'
    }]);

