"use strict";

function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'js/model/locations.json', true);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
          }
    };
    xobj.send(null);
 }

function init() {
 loadJSON(function(response) {
  // Parse JSON string into object
    var locationsX = JSON.parse(response);
    console.log(locationsX);
    // ko.applyBindings(new ViewModel(locations));
 });
}

init();

