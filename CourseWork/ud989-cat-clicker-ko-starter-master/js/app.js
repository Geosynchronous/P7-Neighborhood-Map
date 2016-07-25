var cat = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Fritz');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://www.flickr.com/photos/big');
    this.catNickName = ko.observableArray(['Frodo', 'Little Twit', 'kitty', 'pussycat', 'musche-kate']);


	this.catLevel = function() {

		var level;
		if (this.clickCount() < 3) {
			level = 'infant';
		} else if (this.clickCount() < 5) {
			level = 'young whipper snapper';
		} else if (this.clickCount() < 7) {
			level = 'know it all';
		} else if (this.clickCount() < 9) {
			level = 'old fart';
		} else {
			level = 'toast';
		} return level;
	}

    this.countStats = ko.computed(function () {
            return this.clickCount() + " " + this.catLevel();
        },this);
}


var ViewModel = function() {
	var self = this;

	this.currentCat = ko.observable( new cat());

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	}
}


ko.applyBindings(new ViewModel());
