// Cat Clicker Premium by George Fischer
// Udacity Mini-Project

// LIST OF CATS
// IIFE for creating, appending and selecting list in "Choose Cat" menu
var makeCatList = function() {

    // Create and Append List
    var catListItem = "",
        catListElement,
        num;

    var ul = document.getElementById("catList");

    for (var i = 0; i < data.cat.length; i++) {
        num = i;
        catListItem = "<li>" + data.cat[i].name + "</li>";
        catListElement = document.createElement("li");
        catListElement.innerHTML = catListItem;
        ul.appendChild(catListElement);

        // IIFE for each list element with eventListener  and with unique num value
        // ... and when we click, alert the value of `num`
        catListElement.addEventListener('click', (function(numCopy) {
            return function() {
            alert(numCopy);
            };
        })(num));
    }
}();







