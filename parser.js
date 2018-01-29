let readline = require("readline");
let fs = require("fs");

let rl = readline.createInterface({
    input: fs.createReadStream("./chaos-burst/timeeffect.csv")
});

rl.on("line", function(line) {
    console.log("Line from file: ", line);
});