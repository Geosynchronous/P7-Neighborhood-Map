// Starting again... ud989-cat-clicker-andy MVO2


// Everything needs to fit in here
// MODEL & VIEW WILL NOT TALK DIRECTLY WITH EACH OTHER

$(document).ready(function(){

    // ALL MODEL OBJECTS HERE
    var model = {

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
    		for (var i = 1; i < 6; i++) {
                 htmlStr += ('<button id="button' + i + '">Cat ' + i +'</button>');
            }
            // Renders page with DIV and BUTTONS
			$('body').prepend(this.catList);
			$('#catlist').html(htmlStr);
        }
    };

view.init();



});


