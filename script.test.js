const { expect } = require('@jest/globals');
const checkWinner = require('./check');

test('should return true for score 100 or more', () => {
  const currentPlayer = { hold: 101 };
  expect(checkWinner()).toBeTruthy();
});
