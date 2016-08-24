// business logic

function Game(currentPlayer, gameOver) {
  this.currentPlayer = currentPlayer;
  this.gameOver = gameOver;
}

function Player(score) {
  this.score = score;
}

var turnTotal = 0;

function startGame() {
  var game = new Game("player1", false);
  var player1 = new Player(0);
  var player2 = new Player(0);
}

function endGame() {

}

function roll() {
  var roll = Math.floor(Math.random()*6)+1;
  if (roll > 1) {
    turnTotal += roll;
  } else {
    turnTotal = 0;
    if (game.currentPlayer === "player1") {
      player1.score += turnTotal;
      if (player1.score >= 100) {
        endGame();
      }
      game.currentPlayer = "player2";
    } else {
      player2.score += turnTotal;
      game.currentPlayer = "player1";
      if (player2.score >= 100) {
        endGame();
      }
    }
  }
}

function updatePlayerScore() {

}

// user interface logic
$(function() {


})
