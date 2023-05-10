const { Food } = require("./food");
const { Game } = require("./game");
const { Snake } = require("./snake");

const main = function () {
  const snake = new Snake();
  const food = new Food(1, 0, 1);
  console.log(snake.position());
  const snakeGame = new Game(snake, food);
  snakeGame.controller();
  console.log(snake.position(), snake.getLength());
}

main();
