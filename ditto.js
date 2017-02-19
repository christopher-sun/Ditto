stillWaiting = true; // when room is created
setLimit = 4; //arbitrary number for room size limit

function Player(name) = {
    this.name = name;

    this.getWord = function() {
        //get the word from Andrew
    }
}

function GameStart() {
    return true;
}

function lockoutSubmit(button) {
    var oldValue = button.value;

    button.setAttribute('disabled', true);
    button.value = '...processing...';

    setTimeout(function(){
        button.value = oldValue;
        button.removeAttribute('disabled');
    }, 10000)
}

// ==== Waiting For Players to Join ====
while (stillWaiting) {
    size = 0;
    var players = []; // backing array of all players

    someoneEnters = //boolean received from server
    if (someoneEnters) {
        name = //get the name from Andrew's server

        var newPlayer = new Player(name);
        players.push(newPlayer); // creates new player
        size++;
        continue; // breaks and reloops while-loop as players enter
    }
    if (size == setLimit || GameStart()) {
        stillWaiting = false; //breaks while loop of waiting room->enter game
        // or if they choose to start with less than limit # of players
    }
}

// way to enter only one word

// ==== Start of game ====
var match = false;
var curRound = 1;
var allWords = //whatevre andrew gives us
while (!match) { // for the whole game
    var wordList = []; // words used in this round
    var word = //word from Andrew
    word = word.toUpperCase();
    var repeat = false; //word has been used before
    while (!repeat) {
        for (var i = 0; i < allWords.length; i++) {
            if (allWords[i] == word) {
                repeat = true;
                word = // ask for new word (Andrew's job)
            }
        }
    }
    wordList.push(word);
    allWords.push(word);

    //check for words matching in the round

    var numMatches = 0;
    for (var i = 0; i < size - 1; i++) {
        if (wordList[i] == wordList[i+1])
            numMatches++;
    }
    if (numMatches == size - 1)
        match = true;
    else {
        curRound++;
    }
}

console.log("congration");
