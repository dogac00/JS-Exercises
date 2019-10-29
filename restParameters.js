
function myMax(... numbers) {
    let result = -Infinity;

    for (const number of numbers) {
        if (number > result)
            result = number;
    }

    return result;
}

const result = myMax(3,5,8,99,16346,3);

console.log(result);
