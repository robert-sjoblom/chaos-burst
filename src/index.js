var config = {
    apiKey: "AIzaSyBxeb5QjCf-J4iv_r2qv-BRZRWGufYkmYw",
    authDomain: "chaos-burst.firebaseapp.com",
    databaseURL: "https://chaos-burst.firebaseio.com",
    projectId: "chaos-burst",
    storageBucket: "chaos-burst.appspot.com",
    messagingSenderId: "332063549155"
};
firebase.initializeApp(config); //eslint-disable-line
var timeResults = [];
var effectResults = [];
var db = firebase.database(); //eslint-disable-line

// Keep it together, boys.
db.ref("/time").on("value", snapshot => {
    snapshot.forEach(x => {
        let text = x.val().effect;
        timeResults.push(text);
    });
    $("#length").text(timeResults[getRandomInt(100)].toLowerCase()); //eslint-disable-line
});
$(document).on("click", "#length", function() { //eslint-disable-line
    $("#length").text(timeResults[getRandomInt(100)].toLowerCase().replace('"', "")); //eslint-disable-line
});

// Let's not get confused.
db.ref("/effect").on("value", snapshot => {
    snapshot.forEach(x => {
        effectResults.push(x.val().effect);
    });
    $("#eff").text(effectResults[getRandomInt(10000)].replace('"', "") + "."); //eslint-disable-line
    shutDown();
});
$(document).on("click", "#effect", function() { //eslint-disable-line
    $("#eff").text(effectResults[getRandomInt(10000)].replace('"', "") + "."); //eslint-disable-line
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function shutDown() {
    if (effectResults.length === 10000) {
        firebase.database().goOffline(); //eslint-disable-line
    }
}

$("#time").hide();

$("#ask").on("click", function() {
    $("#time").show("fast");
    $(this).hide();
});