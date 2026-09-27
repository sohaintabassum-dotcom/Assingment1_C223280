const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log("Result found in cache.");
            return cache.get(key);
        }

        console.log("Calculating result...");
        const result = fn(...args);

        cache.set(key, result);

        return result;
    };
}

function multiply(a, b) {
    return a * b;
}

const memoizedMultiply = memoize(multiply);

rl.question("Enter first number: ", function(input1) {
    rl.question("Enter second number: ", function(input2) {

        const a = Number(input1);
        const b = Number(input2);

        console.log("First call:", memoizedMultiply(a, b));
        console.log("Second call:", memoizedMultiply(a, b));

        rl.close();
    });
});