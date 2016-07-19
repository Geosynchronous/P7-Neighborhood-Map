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
			this.catList = $('<div></div>').attr('id', 'catlist');
			// this.button = $('<button></button>').attr('id', 'button1');
            view.render();
        },
        render: function(){

            var htmlStr = '';
    		for (var i = 1; i < 6; i++) {
                 htmlStr += ('<button id="button' + i + '">Cat ' + i +'</button>');
             }

			$('body').prepend(this.catList);
			$('#catlist').html(htmlStr);
        }
    };

// '<button id="button1">Cat 1</button>'
// += ('<button id="button"' + i + '>Cat ' + i '</button>')

view.init();



});

			// var element1 = $("<div></div>").attr('id', 'catlist');

			// $("body").prepend(element1);

