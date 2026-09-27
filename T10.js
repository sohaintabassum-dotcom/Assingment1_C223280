const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fetchWithTimeout(url, ms) {
    const fetchPromise = fetch(url);

    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Request Timed Out"));
        }, ms);
    });

    return Promise.race([fetchPromise, timeoutPromise]);
}

rl.question("Enter URL: ", function(url) {
    rl.question("Enter timeout in milliseconds: ", async function(input) {

        const ms = Number(input);

        try {
            const response = await fetchWithTimeout(url, ms);

            const data = await response.json();

            console.log("Request successful!");
            console.log(data);
        } 
        catch (error) {
            console.log("Error:", error.message);
        }

        rl.close();
    });
});