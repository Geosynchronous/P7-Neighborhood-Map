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

        },
        getCatImage: function(catIndex) {
            return model.cats[catIndex].images;
        },

// Todo - Update catClickCount
        bindButtonToCat: function(idNumber){
            $("#button"+idNumber).click(function(){
                $('#catNameTitle').html(octopus.getCatName(idNumber));
                $('#catImage').html("<img src=" + octopus.getCatImage(idNumber) + ">");
                $('#catClickCount').html("<p>Start Clicking on Cat</p>");
            })
        }

        // //todo
        //  bindCounterToCat: function(idNumber){
        //     var cat = "#cat"+idNumber    clickCount = [],
        //     $('#catImage').click(function(){
        //         var count = $(cat+" > .counter").text();
        //         count = parseInt(count) + 1;
        //         $(cat+" > .counter").text(count);
        //     })
        // }



        // TODO What about just using this????????????
        // function bindButtonToCat(idNumber){
        //     $("#button"+idNumber).click(function(){
        //         hideAllCats();
        //         $("#cat"+idNumber).show();
        //     })
        // }

        // updateCat: function() {
        //     var numNow,
        //         clickCount = [],
        //         num;


        //     // GENERATE & UPDATE ELEMENT CONTENT
        //     // Menu & Image Container Element Content as needed
        //     for (var i = 0; i < 9; i++) {
        //         num = i;
        //         clickCount[num] = 0;


        //         // TODO - Make Buttons here
        //         //      - Refactor View for both buttons and cat stuff

        //         buttonListItem = "<button>" + this.getCatName(num) + "</button>";
        //         buttonListElement = document.createElement("button");
        //         buttonListElement.innerHTML = buttonListItem;


        //         // MENU LIST ITEM Appended... still need proper jQUery action append?
        //         // reference octopus.buttonListElement???
        //        $('#catlist').append(buttonListElement);
        //         // The above will replace this in the view render section
        //         // Or just leave it here...???
        //         $('#catlist').html(this.htmlStr);






        //         // IIFE UPDATES IMAGE CONTAINER CONTENTS to web page
        //         button.addEventListener('click', (function(numCopy) {
        //             return function() {
        //                 catNameElement.innerHTML = this.getCatName(numCopy);
        //                 catImageElement.innerHTML = "<img src=" + octopus.getCatImage(numCopy) + ">";
        //                 catCountElement.innerHTML = clickCount[numCopy];
        //                 numNow = numCopy;
        //             };
        //         })(num));
        //     }
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
            this.htmlStr = '',
            this.catName;
            for (var i = 0; i < 9; i++) {
                 var catName = octopus.getCatName(i);
                 this.htmlStr += ('<button id="button' + i + '">' + catName +'</button>');
            }

            // This is where the magic happens
            // octopus.updateCat();

            // Creates parameters for Default Cat Image & Text Load
            this.catImageInit = "<img src=" + octopus.getCatImage(0) + ">";
            this.catNameTitleInit = octopus.getCatName(0);
            this.catClickCountInit = "<p>Start Clicking on Cat</p>";

            view.render();
            for (var i = 0; i < 9; i++) {
                octopus.bindButtonToCat(i);
            }
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
            $('#catImage').html(this.catImageInit);
            $('#catNameTitle').html(this.catNameTitleInit);
            $('#catClickCount').html(this.catClickCountInit);
        }

    };

// Runs all the code
octopus.init();



});


