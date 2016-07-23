// Cat Clicker Premium, MVO STYLE
// by George Fischer

// MODEL---VIEW---OCTOPUS Style Code Organization
// MODEL & VIEW WILL NOT TALK DIRECTLY WITH EACH OTHER

$(document).ready(function(){

    // ALL MODEL OBJECTS HERE
    // This is where the data lives
    var model = {

        // This property will be loaded with one cat at a time
        // - i.e. the current cat that is diplayed on the page
        // - slick way to keep track of property values inside different functions
        currentcat: null,

        // This is all the data for each of the cats
        allCats: [
                {  
                    index: 0,
                    name: "Chicago", 
                    images: "images/chicago.jpg", 
                    count: 0
                }, 
                {  
                    index: 1,
                    name: "Chill", 
                    images: "images/chill.jpg", 
                    count: 0
                }, 
                {  
                    index: 2,
                    name: "Chops", 
                    images: "images/chops.jpg", 
                    count: 0
                }, 
                {  
                    index: 3,
                    name: "Mamasita", 
                    images: "images/mamasita.jpg", 
                    count: 0
                }, 
                {  
                    index: 4,
                    name: "Predator", 
                    images: "images/predator.jpg", 
                    count: 0
                }, 
                {  
                    index: 5,
                    name: "Siberian", 
                    images: "images/siberian.jpg", 
                    count: 0
                }, 
                {  
                    index: 6,
                    name: "Watch", 
                    images: "images/watch.jpg", 
                    count: 0
                }, 
                {  
                    index: 7,
                    name: "Wet", 
                    images: "images/wet.jpg", 
                    count: 0
                }, 
                { 
                    index: 8,
                    name: "Woods", 
                    images: "images/woods.jpg", 
                    count: 0
                } 
            ]
    };



    // ALL OCTOPUS OBJECTS HERE
    // This is the brains of the application
    // The Octopus communicates between Model & View
    // This keeps the Model & View from communicating with each other
    var octopus = {
        init: function() {

            // Sets up intial View and Renders it to webpage
            view.initCats();
            view.renderCats();
            view.initAdmin();
            view.renderAdmin();
        },

        // updateCurrentCat: function(catIndex) {
        //     model.currentcat = model.allCats[catIndex];
        // },

        getCurrentCat: function() {
            return model.currentcat;
        },

        renderCurrentCat: function() {
            $('#catImage').html("<img src=" + model.currentcat.images + ">");
            $('#catNameTitle').html(model.currentcat.name);
            $('#catClickCount').html("<p>" + model.currentcat.count + "</p>");
        },

        initBind: function() {
            for (var i = 0; i < model.allCats.length; i++) {
               octopus.bindButtonToCat(i);
            }
            octopus.bindCounterToCat();
        },

        bindButtonToCat: function(idNumber){
            $("#button"+idNumber).click(function(){
                octopusUpdate.currentCat(idNumber);
                octopus.renderCurrentCat();
                octopus.loadCurrentCatDataToEditor();
            })
        },

        bindCounterToCat: function(){
            $('#catImage').click(function(){
            octopus.getCurrentCat();
            model.currentcat.count++;
            $('#catClickCount').html("<p>" + model.currentcat.count + "</p>");
            // Updates editor count for cat clicks
            $("#newcatCountInput").val(model.currentcat.count);
            })
        },

        hideAdminEditor: function(){
            $("#adminEditArea").hide();
        },

        bindAdminButtonToEditor: function(){
            $("#adminButton").click(function(){
                $("#adminButtonArea").hide();
                $("#adminEditArea").show();
                octopus.getCurrentCat();
                octopus.loadCurrentCatDataToEditor();
            })
        },

        bindSaveButtonToEditor: function(){
            $("#editSave").click(function(){
                $("#adminEditArea").hide();
                $("#adminButtonArea").show();
                octopus.saveCurrentCatEditData();
                octopus.renderCurrentCat();
                octopusUpdate.CurrentCatButtonLabel();
            })
        },

        bindCancelButtonToEditor: function(){
            $("#editCancel").click(function(){
                $("#adminEditArea").hide();
                $("#adminButtonArea").show();
            })
        },

        loadCurrentCatDataToEditor: function(){
            $("#newcatNameInput").val(model.currentcat.name);
            $("#newcatImageInput").val(model.currentcat.images);
            $("#newcatCountInput").val(model.currentcat.count);
        },

         saveCurrentCatEditData: function(){
            model.currentcat.name = $("#newcatNameInput").val();
            model.currentcat.images = $("#newcatImageInput").val();
            model.currentcat.count = $("#newcatCountInput").val();
        }
    };




    var octopusAdmin = {

    };



    var octopusUpdate = {

        currentCat: function(catIndex) {
            model.currentcat = model.allCats[catIndex];
        },

        CatListButtons: function(){
            // Creates the Labled Buttons Element Tags
            this.htmlStr = '';
            for (var i = 0; i < model.allCats.length; i++) {
                octopusUpdate.currentCat(i);
                 this.htmlStr += ('<button id="button' + i + '">' + model.currentcat.name +'</button>');
            }
            $('#catlist').html(this.htmlStr);
        },

        CurrentCatButtonLabel: function(){
            // Creates the lable on the Button for edited Cat Name
            $('#button' + model.currentcat.index).html(model.currentcat.name);
        }
    };

    // ALL VIEW OBJECTS HERE
    // This makes it possible to see the web page content
    var view = {

        initCats: function() {

            // Creates DIV Element Tag for Buttons
			this.catList = $('<div></div>').attr('id', 'catlist');

            // Creates DIV Element Tag for Cat Pictures
            this.catPic = $('<div></div>').attr('id', 'catpic');

            // Creates DIV Elements for inside catpic DIV
            this.catNameElement = $('<div></div>').attr('id', 'catNameTitle');
            this.catCountElement = $('<div></div>').attr('id', 'catClickCount');
            this.catImageElement = $('<div></div>').attr('id', 'catImage');
        },

        initAdmin: function(){

            octopus.bindAdminButtonToEditor();
            octopus.bindSaveButtonToEditor();
            octopus.bindCancelButtonToEditor();
        },

        renderCats: function(){

            // Renders page with catPic DIV
            $('#catsContainer').prepend(this.catPic);

            // Renders page with catList DIV and All BUTTONS
			$('#catsContainer').prepend(this.catList);

            // Renders Cat List Button DIVS
            octopusUpdate.CatListButtons();

            // Renders DIVs needed inside of catPic
            $('#catpic').append(this.catImageElement);
            $('#catpic').append(this.catNameElement);
            $('#catpic').append(this.catCountElement);

            // Renders Default Cat to page
            // Initialize first Cat as Default Cat View
            octopusUpdate.currentCat(0);
            octopus.renderCurrentCat();

            // Binds Menu Items & Cat Image to Click Event Handler
            // Renders Updates of Cat Image and Click Count as needed
            octopus.initBind();
        },

        renderAdmin: function(){

            // Initially hide  Admin Editor
            octopus.hideAdminEditor();
        }
    };

    // START HERE
    // Runs all the code inside the containing function:
    //      $(document).ready(function()
    octopus.init();

});
