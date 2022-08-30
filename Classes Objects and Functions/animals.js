class Animal {
    constructor(theName) {
        // property
        this.name = theName;
    }

    // Methods
    speak() {
        return (this.name + ' makes a noise.');
    }
    toString() {
        return (this.name + ' is an animal. ' + this.speak());
    }
}

class Cat extends Animal {
    speak() {
        return (this.name + ' meows.')
    }
    toString() {
        return (this.name + ' is a cat. ' + this.speak())
    }
}

class Dog extends Animal {
    speak() {
        return (this.name + ' barks.')
    }
    toString() {
        return (this.name + ' is a dog. ' + this.speak())
    }
}

class Goat extends Animal {
    constructor(theName, theAge) {
        super(theName);
        this.age = theAge;
    }
    speak() {
        return (this.name + ' bleats.')
    }
    toString() {
        return (this.name + ' is a goat. ' + this.speak() + ' ' + this.name + ' is ' + this.age + ' years old.');
    }
}