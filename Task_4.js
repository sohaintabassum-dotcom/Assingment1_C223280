const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countVowels(str) {
    let vowels = str.match(/[aeiou]/gi);

    if (vowels == null) {
        return 0;
    }

    return vowels.length;
}

rl.question("Enter a text: ", function(input) {

    let result = countVowels(input);

    console.log("Number of vowels:", result);

    rl.close();
});