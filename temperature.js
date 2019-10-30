
class Temparature {
    constructor(celsius) {
        this.celsius = celsius;
    }

    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8;
    }

    static fromFahrenheit(celcius) {
        return new Temparature((celcius - 32) / 1.8);
    }
}
