// business logic

function Player(name, score) {
  this.name = name;
  this.score = score;
}

function roll() {
  return Math.floor(Math.random()*6)+1;
}

// user interface logic
$(function() {
})
