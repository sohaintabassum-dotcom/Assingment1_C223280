const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }

    return [];
}

rl.question("Enter array elements separated by spaces: ", function(input) {
    const nums = input.split(" ").map(Number);

    rl.question("Enter target: ", function(targetInput) {
        const target = Number(targetInput);

        const result = twoSum(nums, target);

        if (result.length > 0) {
            console.log("Indices:", result);
        } else {
            console.log("No pair found.");
        }
        rl.close();
    });
});