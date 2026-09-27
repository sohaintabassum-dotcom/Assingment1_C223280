const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPalindrome(str) {

    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    let reverseStr = cleanStr.split("").reverse().join("");

    return cleanStr === reverseStr;
}

rl.question("Enter a word or phrase: ", function(input) {

    let result = isPalindrome(input);

    console.log("Palindrome:", result);

    rl.close();
});