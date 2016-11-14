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


