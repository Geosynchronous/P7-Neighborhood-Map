// Cat Clicker Premium by George Fischer
// Yet another very cool Udacity Mini-Project


// MVO ORGANIZATION:
//  - MODEL, VIEW, OBJECT
//  - Move existing code into correct place
//  - Refactor Work in Progress...

// ALL MODEL OBJECTS HERE
$(function(){
var model = {


};

// ALL VIEW OBJECTS HERE
var view = {

};

// ALL OCTOPUS OBJECTS HERE
var octopus = {

};

//});

// GLOBAL VARIABLES needed for the two Event Listener IIFE's to work together
// (Question: Is there a better way to do this?  Eliminate Global Variables?)
var numNow,
    clickCount = [];

// GET DOM ELEMENTS
// Needed for MENU & CLICK COUNTS
var ul = document.getElementById("catList");
var catNameElement = document.getElementById("catName");
var catCountElement = document.getElementById("catClickCount");
var catImageElement = document.getElementById("catImage");

// CHOOSE CAT MENU
// IIFE Setup, UI and Updates
var CatClickerPremium = function() {

    var catListItem = "",
        catListElement,
        num;

    // GENERATE & UPDATE ELEMENT CONTENT
    // Menu & Image Container Element Content as needed
    for (var i = 0; i < data.cat.length; i++) {
        num = i;
        clickCount[num] = 0;
        catListItem = "<li>" + data.cat[i].name + "</li>";
        catListElement = document.createElement("li");
        catListElement.innerHTML = catListItem;

        // MENU LIST ITEM Appended
        ul.appendChild(catListElement);

        // IIFE UPDATES IMAGE CONTAINER CONTENTS to web page
        // Each cat list element with eventListener and with unique numCopy value
        // ... and when we click the cat list item, the cat image and text update
        // Slick Trick:
        //      - catListElement.addEventListener invoked immediately
        //      - pass in "num" (iterates through all cats) to .addEventListener
        //      - "numCopy" passes unique value of "num" to "return function()" (for each cat)
        //      - "return function()" executed each time "catListElement" is clicked (specific cat)
        //      - current "numCopy" value passed to global "numNow"
        //              - allows current cat displayed to have it's specific click counter updated
        //              - (see "catImageElement.addEventListener()" below)
        catListElement.addEventListener('click', (function(numCopy) {
            return function() {
                catNameElement.innerHTML = data.cat[numCopy].name;
                catImageElement.innerHTML = "<img src=" + data.cat[numCopy].images + ">";
                catCountElement.innerHTML = clickCount[numCopy];
                numNow = numCopy;
            };
        })(num));
    }
}();

// IIFE UPDATES CAT CLICK COUNTS to web page
// For each cat when clicked
// "clickCount[numNow]++"
//      - updates specific click counter for displayed cat
//      - since global, it remembers value to be used in both MENU and CLICK COUNTS
catImageElement.addEventListener('click', (function() {
    return function() {

// HACK CHECK
// See if it is a countable cat from list of choices
//      - if countable cat then update count
//      - if not countable cat (placeholder image)
//              - message to choose another cat
//              - NaN condition
if(numNow >= 0 & numNow <= data.cat.length) {
        clickCount[numNow]++;
        catCountElement.innerHTML = clickCount[numNow];
}
else {
        catCountElement.innerHTML = "Please choose another cat from above list.";
}

    };
})());

});
