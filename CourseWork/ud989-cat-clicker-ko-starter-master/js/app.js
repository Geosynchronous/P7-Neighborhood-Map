var initialCats = [
        {  
            clickCount: 0,
            name: "Chicago", 
            imgSrc: "images/chicago.jpg", 
            imgAttribution:'http://thecore.uchicago.edu/Winter2011/editors-note.shtml',
            nicknames: ['The Chalk Board Tiger', 'Shaggy\'s Artwork', 'University of Chicago President\'s Lament', 'Decades of Student Admiration' ]
        }, 
        {  
            clickCount: 0,
            name: "Chill", 
            imgSrc: "images/chill.jpg", 
            imgAttribution:'http://wikimedia.org',
            nicknames: ['foo']
        }, 
        {  
            clickCount: 0,
            name: "Chops", 
            imgSrc: "images/chops.jpg", 
            imgAttribution:'http://wikimedia.org',
            nicknames: ['foo']
        }, 
        {  
            clickCount: 0,
            name: "Mamasita", 
            imgSrc: "images/mamasita.jpg", 
            imgAttribution:'http://wikimedia.org',
            nicknames: ['foo']
        }, 
        {  
            clickCount: 0,
            name: "Predator", 
            imgSrc: "images/predator.jpg", 
            imgAttribution:'http://wikimedia.org',
            nicknames: ['foo']
        }, 
        {  
            clickCount: 0,
            name: "Siberian", 
            imgSrc: "images/siberian.jpg", 
            imgAttribution:'http://wikimedia.org',
            nicknames: ['foo']
        }, 
        {  
            clickCount: 0,
            name: "Watch", 
            imgSrc: "images/watch.jpg", 
            imgAttribution:'http://wikimedia.org',
            nicknames: ['foo']
        }, 
        {  
            clickCount: 0,
            name: "Wet", 
            imgSrc: "images/wet.jpg", 
            imgAttribution:'http://wikimedia.org',
            nicknames: ['foo']
        }, 
        { 
            clickCount: 0,
            name: "Woods", 
            imgSrc: "images/woods.jpg", 
            imgAttribution:'http://wikimedia.org',
            nicknames: ['foo']
        } 
    ]



var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
    this.nicknames = ko.observableArray(data.nicknames);

	this.title = ko.computed(function() {
		var title;
		if (this.clickCount() < 3) {
			title = 'infant';
		} else if (this.clickCount() < 5) {
			title = 'young whipper snapper';
		} else if (this.clickCount() < 7) {
			title = 'know it all';
		} else if (this.clickCount() < 9) {
			title = 'old fart';
		} else {
			title = 'toast';
		} return title;
	}, this);
};



var ViewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push( new Cat(catItem) );
	});

	this.currentCat = ko.observable( this.catList()[0] );

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};

	this.setCat = function(clickedCat){
		self.currentCat(clickedCat);
	};
};


ko.applyBindings(new ViewModel());
