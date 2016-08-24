// business logic

function Game(currentPlayer, gameOver) {
  this.currentPlayer = currentPlayer;
  this.gameOver = gameOver;
}

function Player(score) {
  this.score = score;
}

var turnTotal, game, player1, player2, winner;

function startGame() {
  player1 = new Player(0);
  player2 = new Player(0);
  game = new Game(player1, false);
  turnTotal = 0;
}

function endGame() {
  game.gameOver = true;
  if (game.currentPlayer === player2) {
    winner = "Player 1";
  } else {
    winner = "Player 2";
  }
}

function endTurn() {
  game.currentPlayer.score += turnTotal;
  var currentScore = game.currentPlayer.score;

  if (game.currentPlayer === player1) {
    game.currentPlayer = player2;
    $("#die1").hide();
    $("#die2").show();
  } else {
    game.currentPlayer = player1;
    $("#die1").show();
    $("#die2").hide();
  }

  if (currentScore >= 10) {
    endGame();
  }

  turnTotal = 0;
  return currentScore;
}

function roll() {
  var number = Math.floor(Math.random()*6)+1;
  if (number > 1) {
    turnTotal += number;
  } else {
    turnTotal = 0;
    endTurn();
  }
  return number;
}

// user interface logic

$(function() {
  startGame();

  $("#roll").click(function() {
    var rollValue = roll();
    $("#rollValue").text(rollValue);
    $("#turnTotal").text(turnTotal);
  });

  $("#hold").click(function() {
    var currentScore = endTurn();

    if (game.currentPlayer === player2) {
      $("#score1").text(currentScore);
    } else {
      $("#score2").text(currentScore);
    }

    if (game.gameOver) {
      $("#winner").text(winner + " wins!")
    }
  });

  $("#restart").click(function() {
    startGame();
    $("#score1").text(player1.score);
    $("#score2").text(player2.score);
    $("#turnTotal").text(turnTotal);
    $("#rollValue").text("");
    $("#winner").text("");
  });

  $("#oink").click(function() {
    $("#oink").toggleClass("falling");
  });

});
