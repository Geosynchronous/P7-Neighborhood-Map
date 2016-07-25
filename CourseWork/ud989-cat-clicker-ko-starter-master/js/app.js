var cat = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Fritz');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://www.flickr.com/photos/big');
    this.catNickName = ko.observableArray(['Frodo', 'Little Twit', 'kitty', 'pussycat', 'musche-kate']);


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

    this.countStats = ko.computed(function () {
            return this.clickCount() + " " + this.title();
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
