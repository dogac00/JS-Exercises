
const PI = 3.14;

class Circle {
    constructor(x, y, r) {
        this._x = x;
        this._y = y;
        this._r = r;
    }

    get Radius() {return this._r;}
    set Radius(r) {this._r = r;}
    get Area() {return this._r ** 2 * PI}
    get Circumference() {return this._r * 2 * PI}
}

let c = new Circle(3, 5, 6);

console.log(c.Area);
