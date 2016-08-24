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
  } else {
    game.currentPlayer = player1;
  }

  if (currentScore >= 100) {
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

    if (rollValue === 1) {
      if (game.currentPlayer === player2) {
        $("#die1").hide();
        $("#die2").show();
        $("#player1").toggleClass("offset");
        $("#player2").toggleClass("offset");
      } else {
        $("#die1").show();
        $("#die2").hide();
        $("#player1").toggleClass("offset");
        $("#player2").toggleClass("offset");
      }
    }
  });

  $("#hold").click(function() {
    var currentScore = endTurn();

    if (game.currentPlayer === player2) {
      $("#score1").text(currentScore);
      $("#die1").hide();
      $("#die2").show();
      $("#player1").toggleClass("offset");
      $("#player2").toggleClass("offset");
    } else {
      $("#score2").text(currentScore);
      $("#die1").show();
      $("#die2").hide();
      $("#player1").toggleClass("offset");
      $("#player2").toggleClass("offset");
    }

    if (game.gameOver) {
      $("#rollValue").text(winner + " wins!");
      $("#die1").hide();
      $("#die2").hide();
      $("#player1").addClass("offset");
      $("#player2").addClass("offset");
    }
  });

  $("#restart").click(function() {
    startGame();
    $("#score1").text(player1.score);
    $("#score2").text(player2.score);
    $("#turnTotal").text(turnTotal);
    $("#rollValue").text("");
    $("#winner").text("");
    $("#die1").show();
    $("#die2").hide();
    $("#player1").removeClass("offset");
    $("#player2").addClass("offset");
  });

  $("#oink").click(function() {
    $("#oink").toggleClass("falling");
  });

});
