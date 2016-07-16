// Cat Clicker Premium by George Fischer
// Udacity Mini-Project

// TEMP
// Work on creating menu list

var catListItemizer = function(string) {
    return "<li>" + string + "</li>";
};

// Returns a string with cat names nested inside <li> tags
var makeCatList = function() {
    var cats = "";

    for (var i = 0; i < data.cat.length; i++) {
        cats = cats + catListItemizer(data.cat[i].name);
    }

    return cats;
};

// returns a DOM list element for each cat name
var catListElementGenerator = function() {
    var ul;

    ul = document.createElement("ul");
    ul.innerHTML = makeCatList();
    console.log(ul);

    return ul;
};

// Creates Cat list Elements and loads to page
var catListDiv = document.getElementById("catList");
catListDiv.appendChild(catListElementGenerator());
