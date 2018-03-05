import { config, ui } from "./config.js";
import { storageAvailable } from "./storageAvailable";

function App() {
    const tables = {
        timeResults: [],
        effectResults: []
    };
    firebase.initializeApp(config); //eslint-disable-line
    const db = firebase.database(); //eslint-disable-line
    

}


// function initPage(ui, storageBool, tables) {
//     if (storageBool) {
//         //caching exists
//     } else {
//         //caching doesn't exist
//     }
// }

function getData(db, location, tablesKey) {
    db.ref(location) // db.ref("/room2").on("child-added").then(here we update chat) db.ref("/time").off("child-added")
        .once("value")
        .then(snapshot => {
            snapshot.forEach(x => {
                let text = x.val().effect;
                tables[tablesKey].push(text);
            });
        })
        .then(function () {
            ui.length.text(
                tables[tablesKey][getRandomInt(tables[tablesKey].length)]
                    .toLowerCase()); //eslint-disable-line
        })
        .then(function () {
            console.log("This happened!");
        });
}




getData(db, "/time", "timeResults");
getData(db, "/effect", "effectResults");

// var userId = firebase.auth().currentUser.uid;
// return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
//   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//   // ...
// });

// Keep it together, boys.
// db.ref("/time").on("value", snapshot => {
//     snapshot.forEach(x => {
//         let text = x.val().effect;
//         tables.timeResults.push(text);
//     });
//     ui.length.text(tables.timeResults[getRandomInt(100)].toLowerCase()); //eslint-disable-line
// });

$(document).on("click", ui.length, function () { 
    ui.length.text(tables.timeResults[getRandomInt(100)].toLowerCase());
});

// Let's not get confused.
// db.ref("/effect").on("value", snapshot => {
//     snapshot.forEach(x => {
//         tables.effectResults.push(x.val().effect);
//     });
//     $("#eff").text(tables.effectResults[getRandomInt(10000)].replace('"', "") + "."); //eslint-disable-line
//     shutDown();
// });
// $(document).on("click", "#effect", function () { //eslint-disable-line
//     $("#eff").text(tables.effectResults[getRandomInt(10000)].replace('"', "") + "."); //eslint-disable-line
// });

function getRandomInt(max) {
    // up to but not including max
    return Math.floor(Math.random() * Math.floor(max));
}

function shutDown() {
    if (tables.effectResults.length === 10000) {
        firebase.database().goOffline(); //eslint-disable-line
    }
}

$("#time").hide();

$("#ask").on("click", function () {
    $("#time").show("fast");
    $(this).hide();
});