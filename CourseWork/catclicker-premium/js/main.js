// Cat Clicker Premium by George Fischer
// Udacity Mini-Project

// TEMP
// Work on creating menu list



// Returns a string with cat names nested inside <li> tags
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
    var ol;

    ol = document.createElement("ol");
    ol.innerHTML = makeCatList();
    console.log(ol);

    return ol;
};

// Creates Cat list Elements and loads to page
var catListDiv = document.getElementById("catList");
catListDiv.appendChild(catListElementGenerator());
