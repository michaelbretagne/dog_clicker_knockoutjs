var Dog = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable("Beige");
    this.imgSrc = ko.observable("img/dog1.jpg");
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
    this.dogList = ko.observableArray([
    { nickname: 'Beige' },
    { nickname: 'Milou' },
    { nickname: 'Pif' },
    { nickname: 'Paf' },
    { nickname: 'Junior' }
    ]);
};

var ViewModel = function() {
    var self = this;

    this.currentDog = ko.observable(new Dog());

    this.incrementCounter = function() {
        self.currentDog().clickCount(self.currentDog().clickCount() + 1);
    };

};

ko.applyBindings(new ViewModel());