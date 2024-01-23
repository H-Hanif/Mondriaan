console.log("Mijn eerste Node code");

//setInterval(() => {
    // console.log("KoeKoek!");
// }, 3000);

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});


readline.question("Who are You?" , (name) => {
    console.log(`Hey there ${name}!`);
    readline.close();
})