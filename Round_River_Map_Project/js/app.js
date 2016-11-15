// Whole-script strict mode syntax
"use strict";

// Neighborhood Map Project
// Round River Conservation Studies Map
// Udacity FEND Nanodegree
// Developer: George Fischer
// Fall 2016

// Main Functional Sections of Code:
// (loaded in the following order)
//    ***GLOBAL VARIABLES***
//    ***VIEW MODEL***
//    ***GOOGLE MAPS***
//    ***APPLY KO BINDINGS***



// ***GLOBAL VARIABLES***
// See globalData.js

// ***VIEW MODEL***
// See viewModel.js

// ***GOOGLE MAPS***
// See googleMap.js

// ***APPLY KO BINDINGS***
// This should happen after all the above files are done loading
// This will create the AppViewModel object
var vm = new AppViewModel();
// Apply bindings immediately after the preceding JS code loads
ko.applyBindings(vm);









// TODO -
// - Seperate App Data into seperate files
//      - JSON
//      - JS
// - Set-Up GULP
//      - minify
//      - concat
//      - lint
//      - compress graphics
//      - watch for change
// - Load onto my Web Server
//      - http://geosynchronous.us/roundrivermapapp...
// - Set-Up Bower
//      - https://bower.io/
// - Set-Up Modular PKG Manager
//      - http://browserify.org/
//      - http://requirejs.org/
//      - http://durandaljs.com/
// - Present App to Round River

// Knockout is mainly used together with PHP and ASP.NET back-ends. It is good to couple knockout with libraries such as RequireJS or Browserify for module loading and dependencies, and CrossroadsJS or RouterJS for routes in order to provide comparable functionality to other MVVM frameworks such as AngularJS or EmberJS. You can even get a full-fledged knockout based framework called DurandalJS. If you need to deal with multiple ViewModels in your SPA(Single-Page Application), I suggest Angular or Ember. Of course, you have to choose tools that help you to get the work done on time and in full.


