class Snake {
  #x
  #y
  #speed
  #length

  constructor() {
    this.#x = 0;
    this.#y = 0;
    this.#speed = 1;
    this.#length = 1;
  }

  position() {
    return { x: this.#x, y: this.#y }
  }

  moveRight() {
    this.#x += this.#speed;
  };

  moveLeft() {
    this.#x -= this.#speed;
  };

  moveUp() {
    this.#y += this.#speed;
  };

  moveDown() {
    this.#y -= this.#speed;
  };

  increaseLength(foodValue) {
    this.#length += foodValue;
  }

  getLength() {
    return this.#length;
  }

  getSpeed() {
    return this.#speed;
  }

  increaseSpeed() {
    this.#speed += 1;
  }
}

exports.Snake = Snake; 