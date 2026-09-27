const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}

rl.question("Enter a number: ", function(input) {
    let n = Number(input);

    fizzBuzz(n);

    rl.close();
});