let readline = require("readline");
let fs = require("fs");
let firebase = require("firebase");
let rl = readline.createInterface({
    input: fs.createReadStream("./effects.csv")
});

rl.on("line", function (line) {
    let text = line;
    text.replace('"', ""); //eslint-disable-line
    db.ref("/effect/").push(
        {
            effect: text
        }
    );
});

firebase.initializeApp(config);
let db = firebase.database();

// db.ref("/time").on("value", snapshot => {
//     snapshot.forEach(x => {
//         let id = x.val().id;
//         let text = x.val().effect;
//         console.log("id: ", id, text);
//     });
// });