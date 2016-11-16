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

var regions: [
        'GLOBAL LOCATIONS',
        'AFRICAN CONTINENT',
        'ASIAN CONTINENT',
        'NORTH AMERICA',
        'CENTRAL AMERICA',
        'SOUTH AMERICA',
        'FIELD RESEARCH',
        'STUDY ABROAD',
        'OUR OFFICES'
    ];


