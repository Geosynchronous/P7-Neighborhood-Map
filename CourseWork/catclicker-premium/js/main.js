// Cat Clicker Premium by George Fischer
// Udacity Mini-Project

// IIFE for creating and appending list in "Choose Cat" menu
var makeCatMenu = function() {

    // Returns a string with cat names nested inside <li> numbered id tags
    var makeCatList = function() {
        var cats = "",
            catListItem = "";

        for (var i = 0; i < data.cat.length; i++) {
            catListItem = "<li id=" + "cat" + i + ">" + data.cat[i].name + "</li>";
            cats = cats + catListItem;
        }
        return cats;
    };

    // returns a DOM list element for each cat name
    var catListElementGenerator = function() {
        var ul;

        ul = document.createElement("ul");
        ul.innerHTML = makeCatList();
        return ul;
    };

    // Creates Cat list Elements and loads to page
    var catListDiv = document.getElementById("catList");
    catListDiv.appendChild(catListElementGenerator());
}();

