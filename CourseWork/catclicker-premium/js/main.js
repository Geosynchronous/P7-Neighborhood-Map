// Cat Clicker Premium by George Fischer
// Yet another very cool Udacity Mini-Project

// IIFE: Setup, UI and Updates
// Generates needed DOM Elements
// Loads DOM Elements to Page
// Event Listener Triggered Content Updates
var CatClickerPremium = function() {

    // Get DOM Elements
    var ul = document.getElementById("catList");
    var catNameElement = document.getElementById("catName");
    var catCountElement = document.getElementById("catClickCount");
    var catImageElement = document.getElementById("catImage");

    var catListItem = "",
        catListElement,
        clickCount = 0,
        num;

    // GENERATE & UPDATE ELEMENT CONTENT
    // Menu & Image Container Element Content as needed
    for (var i = 0; i < data.cat.length; i++) {
        num = i;
        catListItem = "<li>" + data.cat[i].name + "</li>";
        catListElement = document.createElement("li");
        catListElement.innerHTML = catListItem;

        // MENU LIST ITEM Appended
        ul.appendChild(catListElement);

        // UPDATES IMAGE CONTAINER CONTENTS
        // IIFE for each list element with eventListener and with unique num value
        // ... and when we click the cat list item we the cat image and text update
        // Slick Trick
        catListElement.addEventListener('click', (function(numCopy, clickCountCopy) {
            return function() {
            catNameElement.innerHTML = data.cat[numCopy].name;
            catImageElement.innerHTML = "<img src=" + data.cat[numCopy].images + ">";
            catCountElement.innerHTML = clickCountCopy;

            catImageElement.addEventListener('click', (function(clickCountCopyPassed) {
                return function() {
                clickCountCopyPassed++;
                catCountElement.innerHTML = clickCountCopyPassed;
                };
            })(clickCountCopy));
            };
        })(num, clickCount));
    }
}();







