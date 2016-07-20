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

                model.test();
        },
        test: function() {
            console.log(this.cats[1].name);
        }


    };

    // ALL OCTOPUS OBJECTS HERE
    var octopus = {

    };

    // ALL VIEW OBJECTS HERE
    var view = {

        init: function() {
            // Creates DIV Element Tag for Buttons
			this.catList = $('<div></div>').attr('id', 'catlist');
            view.render();
        },
        render: function(){
            // Creates the Buttons Element Tags
            var htmlStr = '';
    		for (var i = 1; i < 10; i++) {
                 htmlStr += ('<button id="button' + i + '">Cat ' + i +'</button>');
            }
            // Renders page with DIV and BUTTONS
			$('body').prepend(this.catList);
			$('#catlist').html(htmlStr);
        }
    };

model.init();
view.init();



});


