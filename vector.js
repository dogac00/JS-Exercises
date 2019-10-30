
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vector) {
        let x = this.x + vector.x;
        let y = this.y + vector.y;

        return new Vector(x, y);
    }

    minus(vector) {
        let x = this.x - vector.x;
        let y = this.y - vector.y;

        return new Vector(x, y);
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

var t0 = performance.now();

for (let i = 0; i < 100000000; i++) {
    let vector = new Vector(3, 4);

    let length = vector.length;
}

var t1 = performance.now();

console.log(t1 - t0);
