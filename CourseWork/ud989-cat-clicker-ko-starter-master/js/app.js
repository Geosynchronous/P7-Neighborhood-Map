var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Fritz');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://www.flickr.com/photos/big');

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
		} else {
			level = 'old fart';
		} return level;
	}

    this.countStats = ko.pureComputed({
        read: function () {
            return this.clickCount() + " " + this.catLevel();
        },
        // write: function (value) {
        //     var lastSpacePos = value.lastIndexOf(" ");
        //     if (lastSpacePos > 0) { // Ignore values with no space character
        //         this.clickCount(value.substring(0, lastSpacePos));
        //         this.catLevel(value.substring(lastSpacePos + 1));
        //     }
        // },
        owner: this
    });

    this.people = ko.observableArray([
        { nickName: 'Frodo' },
        { nickName: 'Little Twit' },
        { nickName: 'kitty' },
        { nickName: 'pussycat' },
        { nickName: 'musche-kate' }
    ]);
}


ko.applyBindings(new ViewModel());
