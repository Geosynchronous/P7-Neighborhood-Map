// REFACTOR ANDY's CODE for MVO

// MVO ORGANIZATION:
//  - MODEL, VIEW, OBJECT
//  - Move existing code into correct place
//  - Refactor Work in Progress...

// ALL MODEL OBJECTS HERE
// LOL.... HOW???

$(document).ready(function(){

    // ALL MODEL OBJECTS HERE
    var model = {

    };

    // ALL VIEW OBJECTS HERE
    var view = {

    };

    // ALL OCTOPUS OBJECTS HERE
    var octopus = {

    };
});


// REFACTOR EVERYTHING BELOW
// And move into MVO vars above

var cats = $(".cat");
var buttons = $("button");

function hideAllCats(){
	for (var i=0; i<cats.length; i++){
		$(cats[i]).hide();
	}
}

function bindButtonToCat(idNumber){
	$("#button"+idNumber).click(function(){
		hideAllCats();
		$("#cat"+idNumber).show();
	})
}

function bindCounterToCat(idNumber){
	var cat = "#cat"+idNumber
	$(cat).click(function(){
		var count = $(cat+" > .counter").text();
		count = parseInt(count) + 1;
		$(cat+" > .counter").text(count);
	})
}

for (var i=1; i<=buttons.length; i++){
	bindButtonToCat(i);
}

for (var i=1; i<=cats.length; i++){
	bindCounterToCat(i);
}

hideAllCats();
$("#cat1").show();