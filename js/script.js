var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable("Beige");
    this.imgSrc = ko.observable("img/dog1.jpg");
    // this.level = ko.observable();

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };

    this.level = ko.computed(function() {
        if (this.clickCount() < 5) {
            level = "New Puppy";
            return level;
        } else if (this.clickCount() < 10 ) {
            level = "Trainable Puppy";
            return level;
        } else if (this.clickCount() < 15 ) {
            level = "Trained Puppy";
            return level;
        }
         else  if (this.clickCount() < 10 ) {
            level = "Young Doggy";
            return level;
        } else {
            level = "Big Dog";
            return level;
        }
    }, this);
};

ko.applyBindings(new ViewModel());