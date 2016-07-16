// Cat Clicker Premium by George Fischer
// Udacity Mini-Project

// LIST OF CATS
// IIFE for creating and appending list in "Choose Cat" menu


    // Returns a string with cat names nested inside <li> numbered id tags
    var makeCatList = function() {
        var catListItem = "",
            catListElement;

        var ul = document.getElementById("catList");

        for (var i = 0; i < data.cat.length; i++) {
            catListItem = "<li>" + data.cat[i].name + "</li>";
            catListElement = document.createElement("li");
            catListElement.innerHTML = catListItem;
            ul.appendChild(catListElement);
        }
        // return cats;
    }();

    // var li =

    //     // ... and when we click, alert the value of `num`
    // elem.addEventListener('click', (function(numCopy) {
    //     return function() {
    //         alert(numCopy);
    //     };
    // })(num));





