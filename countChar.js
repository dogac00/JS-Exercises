
function countChar(str, ch) {
    let length = str.length;
    let count = 0;

    for (let i = 0; i < length; i++) {
        if (str[i] === ch) {
            count++;
        }
    }

    return count;
}

const result = countChar("abcdefaa", 'a');

console.log(result);
