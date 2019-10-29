
function countChar(str, ch) {
    return str.split(ch).length - 1;
}

const result = countChar("abcdefaa", 'd');

console.log(result);
