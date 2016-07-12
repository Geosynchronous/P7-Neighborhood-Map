// Initialize Click Counter default value
var count = 0;

// Get DOM NODES for HTML Elements
var elemCounter = document.getElementById('counter');

// Create DOM HTML Element Nodes
// Create a generic <p> node
var para = document.createElement("p");
// Create a text node
var t = document.createTextNode(count);

// Append Nodes and write Default Count
// Append the text to <p>
para.appendChild(t);
// Append <p> to <div>
elemCounter.appendChild(para);


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
    catImage.src = "images/cat-" + i + ".jpg";
    catImage.style.width = "100%";
    catImageContainer.style.width = "100%";
    catImageContainer.appendChild(catImage);
    catContainer.appendChild(catImageContainer);

   	catName = document.createElement("h4");
    catName.innerHTML = "Cat " + i;
    catImageContainer.appendChild(catName);

    return catContainer;
};

var catDiv = document.getElementById("cats");
for (var i = 1; i < 3; i++) {
    catDiv.appendChild(catElementGenerator(i));
}


var cat1Div = document.getElementById("cat1");
// Updates Click Count View
cat1Div.addEventListener('click', function(){
	// the element has been clicked...
	count++;
	// Overwrites previous Count
	para.innerHTML = count;

}, false);


var cat2Div = document.getElementById("cat2");
// Updates Click Count View
cat2Div.addEventListener('click', function(){
	// the element has been clicked...
	count++;
	// Overwrites previous Count
	para.innerHTML = count;


}, false);