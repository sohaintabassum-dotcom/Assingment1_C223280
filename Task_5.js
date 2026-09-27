const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

rl.question("Enter numbers separated by spaces: ", function(input) {

    let arr = input.split(" ").map(Number);

    let result = removeDuplicates(arr);

    console.log("Array without duplicates:", result);

    rl.close();
});