var elemCat = document.getElementById('tiger');
var elemCounter = document.getElementById('counter');

var count = 0;
var para = document.createElement("p");                       // Create a <p> node


elemCat.addEventListener('click', function(){
  //the element has been clicked... do stuff here
	count++;

	var t = document.createTextNode(count);      				  // Create a text node
	para.appendChild(t); 											// Append the text to <p>
	elemCounter.appendChild(para); 									// Append <p> to <div>

	para.innerHTML = count;



}, false);