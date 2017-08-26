// firebase config

// Initialize Firebase
// var config = {
//     apiKey: "AIzaSyBwtPkjyssrcQKKXrj6SfNcuLIjUJmpqVk",
//     authDomain: "hw-rps-fcbad.firebaseapp.com",
//     databaseURL: "https://hw-rps-fcbad.firebaseio.com",
//     projectId: "hw-rps-fcbad",
//     storageBucket: "",
//     messagingSenderId: "718165725125"
// };
// firebase.initializeApp(config);

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