// Initialize Click Counter default value
// Write to screen
var count = 0;
var elemCounter = document.getElementById('cats');
var countText = document.createElement("p");
var t = document.createTextNode(count);
countText.appendChild(t);
elemCounter.appendChild(countText);

// returns a DOM element for each cat
var catElementGenerator = function(i) {

    var catContainer,
        catImageContainer,
        catImage,
        catName,

    catContainer = document.createElement("div");
    catImageContainer = document.createElement("div");
    catDescriptionContainer = document.createElement("div");
    catImage = document.createElement("img");

    catContainer.classList.add("catItemContainer");
    catContainer.style.width = "50%";
    catContainer.id = "cat" + i;

	// Thanks to Shaggydactyl for image created at University of Chicago
	//  http://thecore.uchicago.edu/Winter2011/editors-note.shtml

	// Cat Image Nodes created
    catImage.src = "images/cat-" + i + ".jpg";
    catImage.style.width = "100%";
    catImageContainer.style.width = "100%";
    catImageContainer.appendChild(catImage);
    catContainer.appendChild(catImageContainer);

    // Cat Image Name Nodes created
   	catName = document.createElement("h4");
    catName.innerHTML = "Cat " + i;
    catImageContainer.appendChild(catName);

    return catContainer;
};

// Create Cat Elements in HTML
var catDiv = document.getElementById("cats");
for (var i = 1; i < 3; i++) {
    catDiv.appendChild(catElementGenerator(i));
}

// This triggers the Click Score to increment
// Updates value to screen
// Is there a more concise way of writing this?
var cat1Div = document.getElementById("cat1");
cat1Div.addEventListener('click', function(){
	count++;
	// Overwrites previous Count
	countText.innerHTML = count;
}, false);

var cat2Div = document.getElementById("cat2");
cat2Div.addEventListener('click', function(){
	count++;
	// Overwrites previous Count
	countText.innerHTML = count;

}, false);