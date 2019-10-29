
function reverseArray(arr) {
    let reversed = [];

    for (let index = arr.length - 1; index >= 0; index--) {
        reversed.push(arr[index]);
    }

    return reversed;
}

function reverseArrayInPlace(arr) {
    let length = arr.length;
    for (let index = 0; index < Math.floor(length / 2); index++) {
        const element = arr[index];
        arr[index] = arr[length - index - 1];
        arr[length - index - 1] = element;
    }
}

let arr = [1,3,5,7];

reverseArrayInPlace(arr);

let rev = reverseArray(arr);

console.log(rev);
console.log(arr);
