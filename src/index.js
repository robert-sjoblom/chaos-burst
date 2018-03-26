import { config, ui } from "./config";
import { storageAvailable } from "./storageAvailable";
import { getRandomInt } from "./helpers";

const tables = {
    timeResults: [],
    effectResults: []
};


function App() {

    firebase.initializeApp(config); //eslint-disable-line
    const db = firebase.database(); //eslint-disable-line

    getData(db, "/effect", "effectResults");
    getData(db, "/time", "timeResults");
}

// function initPage(ui, storageBool, tables) {
//     if (storageBool) {
//         //caching exists
//     } else {
//         //caching doesn't exist
//     }
// }

function updateHTML(location, tablesKey) {
    const max = tables[tablesKey].length;
    const choice = getRandomInt(max);

    switch(location) {
    case "/time":
        ui["timeLength"].text(tables[tablesKey][choice].replace(/["]+/g, ""));
        break;
    case "/effect":
        ui["burstEffect"].text(tables[tablesKey][choice].replace(/["]+/g, ""));
        break;
    }
}

function getData(db, location, tablesKey) {
    db.ref(location)
        .once("value")
        .then(snapshot => {
            snapshot.forEach(x => {
                let text = x.val().effect;
                tables[tablesKey].push(text);
            });
        })
        .then(() => updateHTML(location, tablesKey));
}


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

// $(document).on("click", ui.length, function () { 
//     ui.length.text(tables.timeResults[getRandomInt(100)].toLowerCase());
// });


$("#time").hide();

$("#ask").on("click", function () {
    $("#time").show("fast");
    $(this).hide();
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



function shutDown() {
    if (tables.effectResults.length === 10000) {
        firebase.database().goOffline(); //eslint-disable-line
    }
}


App();