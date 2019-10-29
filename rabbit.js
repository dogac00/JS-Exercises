
class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`Rabbit of type ${this.type} says ${line}`);
    }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.speak("Hello");
