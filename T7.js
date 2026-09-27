const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function titleCase(str) {
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}

rl.question("Enter a sentence: ", function(input) {
    console.log("Title Case:", titleCase(input));
    rl.close();
});