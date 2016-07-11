// Initialize Click Counter value
var count = 0;

// Get DOM NODES for HTML Elements
var elemCat = document.getElementById('tiger');
var elemCounter = document.getElementById('counter');


// Create DOM HTML Element Nodes
// Create a generic <p> node
var para = document.createElement("p");
// Create a text node
var t = document.createTextNode(count);

// Append Nodes
// Append the text to <p>
para.appendChild(t);
// Append <p> to <div>
elemCounter.appendChild(para);

// Updates Click Count View
elemCat.addEventListener('click', function(){
	// the element has been clicked...
	count++;
	// Overwrites previous Count
	para.innerHTML = count;


}, false);