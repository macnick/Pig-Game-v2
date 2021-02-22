const { expect } = require('@jest/globals');
const checkWinner = require('./check');

test('should return true for score 100 or more false otherwise', () => {
  const currentPlayer = { hold: 101 };
  expect(checkWinner(currentPlayer)).toBeTruthy();
  expect(checkWinner({ hold: 99 })).toBeFalsy();
});
