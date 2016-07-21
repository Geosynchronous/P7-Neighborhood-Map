// Starting again... ud989-cat-clicker-andy MVO2


// Everything needs to fit in here
// MODEL & VIEW WILL NOT TALK DIRECTLY WITH EACH OTHER

$(document).ready(function(){

    // ALL MODEL OBJECTS HERE
    var model = {

        currentcat: null,

        allCats: [
                {  
                    name: "Chicago", 
                    images: "images/chicago.jpg", 
                    count: 0
                }, 
                {  
                    name: "Chill", 
                    images: "images/chill.jpg", 
                    count: 0
                }, 
                {  
                    name: "Chops", 
                    images: "images/chops.jpg", 
                    count: 0
                }, 
                {  
                    name: "Mamasita", 
                    images: "images/mamasita.jpg", 
                    count: 0
                }, 
                    {  
                    name: "Predator", 
                    images: "images/predator.jpg", 
                    count: 0
                }, 
                {  
                    name: "Siberian", 
                    images: "images/siberian.jpg", 
                    count: 0
                }, 
                {  
                    name: "Watch", 
                    images: "images/watch.jpg", 
                    count: 0
                }, 
                {  
                    name: "Wet", 
                    images: "images/wet.jpg", 
                    count: 0
                }, 
                { 
                    name: "Woods", 
                    images: "images/woods.jpg", 
                    count: 0
                } 
            ]
    };



    // ALL OCTOPUS OBJECTS HERE
    var octopus = {
        init: function() {
            view.init();
            this.initBind();
        },

        updateCurrentCat: function(catIndex) {
            model.currentcat = model.allCats[catIndex];
            console.log(model.currentcat);
        },

        getCurrentCat: function() {
            return model.currentcat;
        },

        renderCurrentCat: function() {
            $('#catImage').html("<img src=" + model.currentcat.images + ">");
            $('#catNameTitle').html(model.currentcat.name);
            $('#catClickCount').html("<p>" + model.currentcat.count + "</p>");
        },

        initBind: function() {
            for (var i = 0; i < 9; i++) {
               octopus.bindButtonToCat(i);
            }
            octopus.bindCounterToCat();
        },

        bindButtonToCat: function(idNumber){
            $("#button"+idNumber).click(function(){
                octopus.updateCurrentCat(idNumber);
                octopus.renderCurrentCat();
                console.log(model.currentcat);
            })
        },

        bindCounterToCat: function(){
            $('#catImage').click(function(){
            octopus.getCurrentCat();
            model.currentcat.count++;
            $('#catClickCount').html("<p>" + model.currentcat.count + "</p>");
            })
        }
    };



    // ALL VIEW OBJECTS HERE
    var view = {

        init: function() {

            // Creates DIV Element Tag for Buttons
			this.catList = $('<div></div>').attr('id', 'catlist');

            // Creates DIV Element Tag for Cat Pictures
            this.catPic = $('<div></div>').attr('id', 'catpic');

            // Creates DIV Elements for inside catpic DIV
            this.catNameElement = $('<div></div>').attr('id', 'catNameTitle');
            this.catCountElement = $('<div></div>').attr('id', 'catClickCount');
            this.catImageElement = $('<div></div>').attr('id', 'catImage');

            // Creates the Labled Buttons Element Tags
            this.htmlStr = '';
            for (var i = 0; i < 9; i++) {
                octopus.updateCurrentCat(i);
                 this.htmlStr += ('<button id="button' + i + '">' + model.currentcat.name +'</button>');
            }

            // Initialize first Cat as Default Cat View
            octopus.updateCurrentCat(0);

            view.render();
            // octopus.initBind();
        },

        render: function(){

            // Renders page with catPic DIV
            $('body').prepend(this.catPic);

            // Renders page with catList DIV and All BUTTONS
			$('body').prepend(this.catList);
			$('#catlist').html(this.htmlStr);

            // Renders DIVs needed inside of catPic
            $('#catpic').append(this.catImageElement);
            $('#catpic').append(this.catNameElement);
            $('#catpic').append(this.catCountElement);

            // Renders Default Cat to page
            octopus.renderCurrentCat();
        }

    };

// Runs all the code
octopus.init();



});


