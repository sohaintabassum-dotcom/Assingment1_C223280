const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findMax(arr) {
    return Math.max(...arr);
}

rl.question("Enter numbers separated by spaces: ", function(input) {

    let arr = input.split(" ").map(Number);

    let result = findMax(arr);

    console.log("Largest number is:", result);

    rl.close();
});