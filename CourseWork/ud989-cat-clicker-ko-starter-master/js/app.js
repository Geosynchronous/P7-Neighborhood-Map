var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Fritz');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://www.flickr.com/photos/big');
    this.catNickName = ko.observableArray(['Frodo', 'Little Twit', 'kitty', 'pussycat', 'musche-kate']);

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	}

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


ko.applyBindings(new ViewModel());
