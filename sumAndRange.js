
const arr = range(1, 15);

console.log(sum(arr));

function range(start, end) {
    let arr = [];

    for (let i = start; i <= end; i++) {
        arr.push(i);
    }

    return arr;
}

function sum(arr) {
    let total = 0;

    arr.forEach(item => total += item);

    return total;
}
