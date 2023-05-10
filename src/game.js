const exp = require("constants");
const { Food } = require("./food.js");

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

  #updateGameState() {
    this.#snake.increaseLength(this.#food.getFoodValue());
    this.#snake.increaseSpeed();
    this.#food = this.#generateNewFood();
  }

  #hasEatenFood() {
    const snakePos = this.#snake.position();
    const foodPos = this.#food.position();
    return (snakePos.x === foodPos.x) && (snakePos.y === foodPos.y);
  };

  controller() {
    this.#snake.moveRight();
    if (this.#hasEatenFood()) {
      this.#updateGameState();
    };
    this.#snake.moveRight();
    if (this.#hasEatenFood()) {
      this.#updateGameState();
    };
    this.#snake.moveUp();
    if (this.#hasEatenFood()) {
      this.#updateGameState();
    };
  }
};

exports.Game = Game;