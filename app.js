function startGame(){
    for(var i = 1; i <= 9; i = i + 1){
        clearBox(i);
}
    document.turn = "𝕩";
    if(Math.random() < 0.5) {
        document.turn = "𝕠";
    }
    document.winner = null;
    setMessage(document.turn + " gets to start.");
}

function setMessage(msg){
    document.getElementById("message").innerText = msg;
}

function nextMove(square){
    if(document.winner != null){
        setMessage(document.winner + " already won the game sorry..");
    }else if(square.innerText == "") {
    square.innerText = document.turn;
    switchTurn();
    }else{
        setMessage("oops try another square lol")
    }
}

function switchTurn(){

    if(checkForWinner(document.turn)) {
        setMessage("congrats, " + document.turn + " ! you win ayy");
        document.winner = document.turn;
    } else if(document.turn == "𝕩"){
        document.turn = "𝕠";
        setMessage("Its " + document.turn + "'s turn girl..")
    } else{
        document.turn = "𝕩";
        setMessage("Its " + document.turn + "'s turn girl..")

    }
}

function checkForWinner(move){
    var result = false;
    if (checkRow(1, 2, 3, move) || 
        checkRow(4, 5, 6, move) ||
        checkRow(7, 8, 9, move) ||

        checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) ||
        checkRow(3, 6, 9, move) ||

        checkRow(1, 5, 9, move) ||
        checkRow(3, 5, 7, move)) {

            result = true;
    }
    return result;
}

function checkRow(a, b, c, move){
    var result = false;
    if(getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;
    } 
    return result;
}
function getBox(number){
    return document.getElementById("s" + number).innerText;
}

function clearBox(number){
    document.getElementById("s" + number).innerText = "";
}
