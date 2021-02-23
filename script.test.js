const puppeteer = require('puppeteer');
const { expect } = require('@jest/globals');
const checkWinner = require('./check');
const rollDice = require('./script');

// test('dice should be more than 0 and less than 7', async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('http://127.0.0.1:8080/');

//   expect(rollDice()).toBeGreaterThan(0);
//   expect(rollDice()).toBeLessThan(7);
// });

test('should return true for score 100 or more', () => {
  const player = { hold: 101 };
  expect(checkWinner(player)).toBeTruthy();
  expect(checkWinner({ hold: 99 })).toBeFalsy();
});

test('should return false for score less than 100', () => {
  const player = { hold: 99 };
  expect(checkWinner(player)).toBeFalsy();
});
