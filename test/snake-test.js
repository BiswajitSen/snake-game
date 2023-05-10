const { describe, it } = require('node:test')
const { deepStrictEqual, strictEqual } = require('assert');
const { Snake } = require('../src/snake');


describe('new Snake', function () {
  it('Should generate a snake at the origin', function () {
    const snake = new Snake();
    const actual = snake.position();
    const expected = { x: 0, y: 0 };
    deepStrictEqual(actual, expected);
  });

  it('Should move the snake by unit distance.', function () {
    const snake = new Snake();
    snake.moveRight();
    const actual = snake.position();
    const expected = { x: 1, y: 0 };

    deepStrictEqual(actual, expected);
  });

  if ('Should increase the length of the snake by weigtage given', function () {
    const snake = new Snake();
    snake.increaseLength(4);
    const actual = snake.getLength();
    const expected = 5;
    strictEqual(actual, expected);
  });

  if ('Should increase the spped of the snake by 1 unit', function () {
    const snake = new Snake();
    snake.increaseSpeed();
    const actual = snake.getSpeed();
    const expected = 2;
    strictEqual(actual, expected);
  });

});