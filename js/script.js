var initialDogs = [
    {
        clickCount : 0,
        name : 'Beige',
        imgSrc : 'img/dog1.jpg',
        nicknames: ['Beigy', 'Beibei']
    },
    {
        clickCount : 0,
        name : 'Milou',
        imgSrc: 'img/dog2.jpg',
        nicknames : ['Mimi', 'Mile']
    },
    {
        clickCount : 0,
        name : 'Paf',
        imgSrc : 'img/dog3.jpg',
        nicknames : ['Pa', 'Pafy']
    },
    {
        clickCount : 0,
        name : 'Pouf',
        imgSrc : 'img/dog4.jpg',
        nicknames : ['Po', 'Poufy']
    },
    {
        clickCount : 0,
        name : 'Junior',
        imgSrc : 'img/dog5.jpg',
        nicknames : ['Juju', 'Juni']
    }];

var Dog = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.nicknames = ko.observableArray(data.nicknames);

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

var ViewModel = function() {
    var self = this;

    this.dogList = ko.observableArray([]);

    initialDogs.forEach(function(dogItem) {
        self.dogList.push(new Dog(dogItem) );
    });

    this.currentDog = ko.observable(this.dogList()[0]);

    this.incrementCounter = function() {
        self.currentDog().clickCount(self.currentDog().clickCount() + 1);
    };

    this.setDog = function(clickedDog) {
        self.currentDog(clickedDog);
    };
};


ko.applyBindings(new ViewModel());