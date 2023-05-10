const exp = require("constants");
const { Food } = require("./food.js");
const { Snake } = require("./snake");

class Game {
  #snake
  #food
  constructor(snake, food) {
    this.#snake = snake;
    this.#food = food;
  };

  #getFoodPosition() {
    return [1, 2].map(function () {
      return Math.floor(Math.random() * 100);
    });
  };

  #getFoodValue() {
    return Math.floor(Math.random() * 10);
  };

  #generateNewFood() {
    const [x, y] = this.#getFoodPosition();
    const foodValue = this.#getFoodValue();
    return new Food(x, y, foodValue);
  };

  #hasEatenFood() {
    const snakePos = this.#snake.position();
    const foodPos = this.#food.position();
    console.log(snakePos, foodPos);
    const arePositionsSame = (snakePos.x === foodPos.x) && (snakePos.y === foodPos.y);
    if (arePositionsSame) {
      this.#snake.increaseLength(this.#food.getFoodValue());
      this.#snake.increaseSpeed();
      this.#food = this.#generateNewFood();
    }
  };

  controller() {
    this.#snake.moveRight();
    this.#hasEatenFood();
    this.#snake.moveRight();
    this.#hasEatenFood();
    this.#snake.moveUp();
    this.#hasEatenFood();
  }
};

exports.Game = Game;