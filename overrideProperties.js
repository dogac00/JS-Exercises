
class Animal {
    speak() {
        console.log("Animal speaking...");
    }
}

class Rabbit extends Animal {
    speak() {
        console.log("Rabbit speaking...");
    }
}

class WhiteRabbit extends Rabbit {
    speak() {
        console.log("White rabbit speaking...");
    }
}

let rabbit = new Animal();

rabbit.speak();

rabbit = new WhiteRabbit();

rabbit.speak();
