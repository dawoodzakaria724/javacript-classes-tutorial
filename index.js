class Rectangle {
    // Setup
    constructor (_width, _height, _color) {
        console.log("The Rectangle is being created!");

        this.width = _width;
        this.height = _height;
        this.color = _color;

    }

    getArea() {
        return this.width * this.height;
    }

    printDescription() {
        console.log(`I am a rectangle of ${this.width} X ${this.height} and I am ${this.color}`)
    }
}

let myRectangle1 = new Rectangle(5, 3, "blue");
let myRectangle2 = new Rectangle(8, 12, "red");

console.log(myRectangle1.getArea());
console.log(myRectangle2.getArea());
console.log(myRectangle1.printDescription());
console.log(myRectangle2.printDescription());

// getters and setters

class Square {
    constructor (_width) {
        this.width = _width;
        this.height = _width;
        this.numOfRequestsForArea = 0;
    }

    get area () {
        this.numOfRequestsForArea++;
        return this.width * this.height;
    }

    set area (area) {
        this.width = Math.sqrt(area);
        this.height = this.width;
    }
}

let square1 = new Square(4);
square1.area = 25;

console.log(square1.area);
console.log(square1.area);
console.log(square1.area);
console.log(square1.area);

console.log(square1.numOfRequestsForArea);

// static methods

class Square2 {
    constructor (_width) {
        this.width = _width;
        this.height = _width;
    }

    static equals (a, b) {
        return a.width * a.height === b.width * b.height;
    }

    static isValidDimensions (width, height) {
        return width === height;
    }
}

let square2 = new Square2(8);
let square3 = new Square2(8);

console.log(Square2.equals(square2, square3));
console.log(Square2.isValidDimensions(6, 6));

// inheritance and extends keyword

class Person {
    constructor (_name, _age) {

        this.name = _name;
        this.age = _age;
    }

    describe () {
        console.log(`I am ${this.name} and I am ${this.age} years old`);
    }
}

class Programmer extends Person {
    constructor (_name, _age, _yearsOfExperience) {
        super(_name, _age);

        // custom behavior
        this._yearsOfExperience = _yearsOfExperience;
    }

    code () {
        console.log(`${this.name} is coding`);
    }
}

const programmers = [
    new Programmer ("Dom", 56, 12),
    new Programmer ("Jeff", 24, 4)
];

function developerSoftware (programmers) {
    for (let programmer of programmers) {
        programmer.code();
    }
}

developerSoftware(programmers);

// polymorphism

class Animal {
    constructor (name) {
        this.name = name;
    }

    makeSound () {
        console.log("Generic Animal Sound!!");
    }
}

class Dog extends Animal {
    constructor (name) {
        super(name);
    }

    makeSound () {
        super.makeSound();
        console.log("Woof! Woof!");
    }
}

const a1 = new Animal("Dom");
a1.makeSound();

const a2 = new Dog("Jeff");
a2.makeSound();

// classes in practice

