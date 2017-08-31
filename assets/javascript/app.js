// firebase config

// Initialize Firebase

var config = {
    apiKey: "AIzaSyBwtPkjyssrcQKKXrj6SfNcuLIjUJmpqVk",
    authDomain: "hw-rps-fcbad.firebaseapp.com",
    databaseURL: "https://hw-rps-fcbad.firebaseio.com",
    projectId: "hw-rps-fcbad",
    storageBucket: "",
    messagingSenderId: "718165725125"
};

firebase.initializeApp(config);
// Create a variable to reference the database.
var database = firebase.database();

// connectionsRef references a specific location in our database.
// All of our connections will be stored in this directory.
var connectionsRef = database.ref("/connections");
// '.info/connected' is a special location provided by Firebase that is updated
// every time the client's connection state changes.
// '.info/connected' is a boolean value, true if the client is connected and false if they are not.
var connectedRef = database.ref(".info/connected");
console.log(connectedRef + " connectedRef var");

// When the client's connection state changes...
connectedRef.on("value", function(snap) {

    // If they are connected..
    if (snap.val()) {

        // Add user to the connections list.
        var con = connectionsRef.push(true);
        // Remove user from the connection list when they disconnect.
        con.onDisconnect().remove();
        $("#connected-players").html(snap.numChildren());
        console.log(snap);
    }
});


// At the page load and subsequent value changes, get a snapshot of the local data.
// This function allows you to update your page in real-time when the values within the firebase node players changes

database.ref("/players").on("value", function(snapshot) {

    // If Firebase has a player 1 and player 2 both players connected!!!
    if (snapshot.child("/1").exists() && snapshot.child("/2").exists()) {

        // Set the local variables for playerName equal to the stored values in firebase.
        player1Name = snapshot.child("/1").val().playerName;
        player2Name = snapshot.child("/2").val().playerName;
        // console.log(snapshot.val());
        console.log(player1Name);
        console.log(player2Name);
        highPrice = parseInt(snapshot.val().highPrice);

        // change the HTML to reflect the newly updated local values (most recent information from firebase)
        $("#p1-name").html(player1Name);
        $("#p2-name").html(player2Name);
    }

    // Else Firebase doesn't have a highPrice/playerName, so use the initial local values.
    else {
        // Change the HTML to reflect the local value in firebase
        $("#p1-name").html("playerName text");
        database.ref("/players/1").set({
            playerName: "Player 1 Name",
            wins: "wins var",
            losses: "loss var",
            choice: "choice var"
        });

        database.ref("/players/2").set({
            playerName: "Player 2 Name",
            wins: "wins var",
            losses: "loss var",
            choice: "choice var"
        });

    }

    // If any errors are experienced, log them to console.
}, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
});


// track connected users


// restrict game to only 2 players?


//chat logic
// show chat from correct player

// first player to join is player 1 2nd is player 2, then have waitlist or not allow any more players



// game logic

// initialize var's

//track if players have chosen
var p1HasPicked = 0;
var p2HasPicked = 0
//counts wins and losses
var p1Wins = 0;
var p1Losses = 0;
var p2Wins = 0;
var p2Losses = 0;


// populate from html
var p1Choice = "rock";
var p2Choice = "scissor";



function determineWin(p1Choice, p2Choice) {

    if (p1Choice === 'rock' && p2Choice === 'scissor' ||
        p1Choice === 'scissor' && p2Choice === 'paper' ||
        p1Choice === 'paper' && p2Choice === 'rock') {

        // p1 wins
        console.log("P1 wins");
        p1Wins++;

    } else if (p1Choice === p2Choice) {

        // tie
        console.log("tie");
    } else {

        // p1 loses
        console.log("p1 loses");
        p2Wins++;
    }

}
// new game
function resetGame() {
    var p1Wins = 0;
    var p1Losses = 0;
    var p2Wins = 0;
    var p2Losses = 0;

}

// next round
function playAgain() {

}


//for testing 
determineWin(p1Choice, p2Choice);

$('#p1-wins').html("Player 1 wins: " + p1Wins);
$('#p2-wins').html("Player 2 wins: " + p2Wins);

$('.btn').on('click', function() {
    event.preventDefault();

    var text = $("#text").val().trim();
    // alert("bttpm");
    $('#chat-box').append(text);
    $('#text').empty();


});
// capture inpput from name button submit
$('.name-input').on('click', function() {
    event.preventDefault();
    console.log("button");

    var playerName = $("#name-text").val().trim();
    // alert("bttpm");

    console.log(PlayerName);
    // $('#chat-box').append(text);
    // $('#text').empty();


});