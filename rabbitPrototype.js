
function Rabbit(type) {
    this.type = type;
}

let rabbit = new Rabbit("White");

console.log(Object.getPrototypeOf(Rabbit) === Function.prototype);
console.log(Object.getPrototypeOf(rabbit) === Rabbit.prototype);
