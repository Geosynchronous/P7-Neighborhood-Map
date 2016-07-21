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
        },

        updateCurrentCat: function(catIndex) {
            model.currentcat = model.allCats[catIndex];
        },

        getCurrentCat: function() {
            return model.currentcat;
        },

// Probably not needed
        // getCatName: function(catIndex) {
        //     return model.cats[catIndex].name;

        // },
        // getCatImage: function(catIndex) {
        //     return model.cats[catIndex].images;
        // },

        // getCatIdNumberNow: function(catIndex) {
        //     return model.cats[catIndex].images;
        // }

// Probably refactor
        // initBind: function() {
        //     this.clickCount = [];
        //     for (var i = 0; i < 9; i++) {
        //         this.clickCount[i] = 0;
        //         console.log(this.clickCount[i]);
        //         this.bindButtonToCat(i);

        //     }
        //                     this.bindCounterToCat(i);
        // },

        // bindButtonToCat: function(idNumber){
        //     $("#button"+idNumber).click(function(){
        //         $('#catNameTitle').html(octopus.getCatName(idNumber));
        //         $('#catImage').html("<img src=" + octopus.getCatImage(idNumber) + ">");
        //         $('#catClickCount').html("<p>Start Clicking on Cat</p>");
        //         idNumberNow = idnumber;
        //     })
        // },

        // bindCounterToCat: function(idNumber){
        //     $('#catImage').click(function(){
        //         // this.clickCount[idNumber]++;
        //                         console.log(idNumber);
        //         $('#catClickCount').html("this.clickCount[idNumber]");
        //     })
        // }
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
                console.log(model.currentcat);
                 this.htmlStr += ('<button id="button' + i + '">' + model.currentcat.name +'</button>');
            }

            // This is where the magic happens
            // octopus.updateCat();

            // Creates parameters for Default Cat Image & Text Load
            // octopus.updateCurrentCat(0);

            // this.catImageInit = "<img src=" + octopus.getCatImage(0) + ">";
            // this.catNameTitleInit = octopus.getCatName(0);
            // this.catClickCountInit = "<p>Start Clicking on Cat</p>";

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



            //Renders first cat Image, Name, and a Generic Message
            //This view will update when a new cat is selected (from Buttons)



            // $('#catImage').html(this.catImageInit);
            // $('#catNameTitle').html(this.catNameTitleInit);
            // $('#catClickCount').html(this.catClickCountInit);
        }

    };

// Runs all the code
octopus.init();



});


