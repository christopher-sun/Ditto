stillWaiting = true; // when room is created
setLimit = 4; //arbitrary number for room size limit
while(stillWaiting) {
size = 0;
Players[] backing = new Players[setLimit]; // backing array of all players
if (someoneEnters()) {
    backing[size] = new Player("Player " + (size+1)); // creates new player
    size++;
    continue; // breaks and reloops while-loop as players enter
}
if (size + 1 = setLimit || gameStart()) {
    stillWaiting = false; //breaks while loop of waiting room->enter game
    // or if they choose to start with less than limit # of players
}
}
