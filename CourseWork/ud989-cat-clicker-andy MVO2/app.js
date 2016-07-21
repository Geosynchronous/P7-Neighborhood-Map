// Starting again... ud989-cat-clicker-andy MVO2


// Everything needs to fit in here
// MODEL & VIEW WILL NOT TALK DIRECTLY WITH EACH OTHER

$(document).ready(function(){

    // ALL MODEL OBJECTS HERE
    var model = {
         init: function() {
            this.cats = [
                {  
                    name: "Chicago", 
                    images: "images/chicago.jpg", 
                }, 
                {  
                    name: "Chill", 
                    images: "images/chill.jpg", 
                }, 
                {  
                    name: "Chops", 
                    images: "images/chops.jpg", 
                }, 
                {  
                    name: "Mamasita", 
                    images: "images/mamasita.jpg", 
                }, 
                    {  
                    name: "Predator", 
                    images: "images/predator.jpg", 
                }, 
                {  
                    name: "Siberian", 
                    images: "images/siberian.jpg", 
                }, 
                {  
                    name: "Watch", 
                    images: "images/watch.jpg", 
                }, 
                {  
                    name: "Wet", 
                    images: "images/wet.jpg", 
                }, 
                { 
                    name: "Woods", 
                    images: "images/woods.jpg", 
                } ];

        },
    };



    // ALL OCTOPUS OBJECTS HERE
    var octopus = {
        init: function() {
            model.init();
            view.init();
        },
        getCatName: function(catIndex) {
            return model.cats[catIndex].name;
        }
    };



    // ALL VIEW OBJECTS HERE
    var view = {

        init: function() {
            // Creates DIV Element Tag for Buttons
			this.catList = $('<div></div>').attr('id', 'catlist');
            // Creates DIV Element Tag for Cat Pictures
            this.catPic = $('<div></div>').attr('id', 'catpic');
            view.render();
        },
        render: function(){
            // Creates the Labled Buttons Element Tags
            var htmlStr = '',
                catName;

    		for (var i = 0; i < 9; i++) {
                 catName = octopus.getCatName(i);
                 htmlStr += ('<button id="button' + i + '">' + catName +'</button>');
            }
            // Renders page with Cat Picture DIV
            $('body').prepend(this.catPic);

            // Renders page with Cat List DIV and BUTTONS
			$('body').prepend(this.catList);
			$('#catlist').html(htmlStr);
        }
    };


octopus.init();


});


