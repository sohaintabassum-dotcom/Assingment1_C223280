const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", function(input) {
    function reverseString(str) {
        return str.split("").reverse().join("");
    }

    console.log("Reversed String:", reverseString(input));

    rl.close();
});