const { describe, it } = require('node:test')
const { deepStrictEqual } = require('assert');
const { Food } = require('../src/food');


describe('new Food', function () {
    it('Should generate food with given position.', function () {
        const actual = new Food(0, 0, 1).position();
        const expected = { x: 0, y: 0 }
        deepStrictEqual(actual, expected);
    });

    it('Should generate food with specified weigtage.', function () {
        const actual = new Food(2, 3, 3).getFoodValue();
        const expected = 3;
        deepStrictEqual(actual, expected);
    });

});