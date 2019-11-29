
let randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let Student = function(name, midterm, final) {
    this.Name = name;
    this.Midterm = midterm;
    this.Final = final;
    this.Result = midterm * 0.4 + final * 0.6;
    this.toString = () => `${this.Name} ${this.Result}${this.Result >= 50 ? "Gecti" : "Kaldi"}`;
}


let names = ["ali", "veli", "selami", "ayşe", "fatma", "taylan"]
let surnames = ["taran", "arısoy", "gürsoy", "öztürk", "karan", "aksoy", "mercan", "polat"]

let n = 10;
let students = new Array(10);

for (let i = 0; i < 10; i++) {
    let name = names[randomInt(0, names.length)];
    let surname = surnames[randomInt(0, surnames.length)];

    students.push(new Student(`${name} ${surname}`, randomInt(0, 101), randomInt(0, 101)));
}

students.sort((s1, s2) => s1.Result - s2.Result);

console.log(students);
