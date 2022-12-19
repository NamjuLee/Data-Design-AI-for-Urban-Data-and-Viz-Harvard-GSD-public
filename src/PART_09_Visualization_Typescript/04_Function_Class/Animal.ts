export class Solution {
    constructor(view: any) {

        // Codepen: https://codepen.io/NJStudio/details/OJyGJKd

        let myDog0 = new Dog();
        myDog0.run()
        myDog0.print();

        let myCat0 = new Cat();
        myCat0.run()
        myCat0.print();

        let myDog1 = new Dog();
        myDog1.print();

        let myCat1 = new Cat();
        myCat1.run()
        myCat1.run()
        myCat1.run()
        myCat1.print();

        console.log(listAnimal);
        // print the best runner
        let theBest = listAnimal[0];
        for (let i = 1; i < listAnimal.length; ++i) {
            if (theBest.distance > listAnimal[i].distance) {
                theBest = listAnimal[i];
            }
        }
        console.log('the best runner is  :')
        theBest.print();

    }
    public destroy() {

    }
}

let numAnimal = 0;
let listAnimal = [];

class AnimalBase {
    id: number = 0
    name: string;
    distance: number = 0;
    constructor() {
        listAnimal.push(this);
        this.id = numAnimal++
    }
    print() {

    }
    run() {
        this.distance++;
    }
}

class Dog extends AnimalBase {
    constructor() {
        super();
        this.name = 'dog'
    }
    public print() {
        console.log(`this is ${this.name}, id: ${this.id}, distance: ${this.distance}`);
    }
    run() {
        this.distance += 2;
    }
}

class Cat extends AnimalBase {
    constructor() {
        super();
        this.name = 'cat'
    }
    public print() {
        console.log("this is " + this.name + ", id: " + this.id + ", distance: " + this.distance);
    }
}

