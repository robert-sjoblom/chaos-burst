var config = {
    apiKey: "AIzaSyBxeb5QjCf-J4iv_r2qv-BRZRWGufYkmYw",
    authDomain: "chaos-burst.firebaseapp.com",
    databaseURL: "https://chaos-burst.firebaseio.com",
    projectId: "chaos-burst",
    storageBucket: "chaos-burst.appspot.com",
    messagingSenderId: "332063549155"
};



firebase.initializeApp(config); //eslint-disable-line
var db = firebase.database(); //eslint-disable-line



var tables = {
    timeResults: [],
    effectResults: []
};

function storageAvailable(type) {
    try {
        var storage = window[type],
            x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === "QuotaExceededError" ||
            // Firefox
            e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}

let ui = {
    length: $("#length")
};


function initPage(ui, storageBool, tables) {
    if (storageBool) {
        //caching exists
    } else {
        //caching doesn't exist
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
        .then(function () {
            
            ui.length
                .text(
                    tables[tablesKey][getRandomInt(tables[tablesKey].length)]
                    .toLowerCase()); //eslint-disable-line
        })
        .then(function() {
            console.log("This happened!");
        });
}

getData(db, "/time", "timeResults");

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

$(document).on("click", ui.length, function () { //eslint-disable-line
    ui.length.text(tables.timeResults[getRandomInt(100)].toLowerCase().replace('"', "")); //eslint-disable-line
});

// Let's not get confused.
db.ref("/effect").on("value", snapshot => {
    snapshot.forEach(x => {
        tables.effectResults.push(x.val().effect);
    });
    $("#eff").text(tables.effectResults[getRandomInt(10000)].replace('"', "") + "."); //eslint-disable-line
    shutDown();
});
$(document).on("click", "#effect", function () { //eslint-disable-line
    $("#eff").text(tables.effectResults[getRandomInt(10000)].replace('"', "") + "."); //eslint-disable-line
});

function getRandomInt(max) {
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