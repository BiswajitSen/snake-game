class Food {
  #x
  #y
  #foodValue

  constructor(x, y, foodValue) {
    this.#x = x;
    this.#y = y;
    this.#foodValue = foodValue;
  }

  position() {
    return { x: this.#x, y: this.#y };
  }

  getFoodValue() {
    return this.#foodValue;
  }
}

exports.Food = Food;