'use strict';

const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const keepBtn = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const pl0 = document.querySelector('.player--0');
const pl1 = document.querySelector('.player--1');

dice.classList.add('hidden');

class Player {
  constructor(name) {
    this.current = 0;
    this.hold = 0;
    this.name = name;
  }

  updateScore(num) {
    this.current += num;
  }
}

let p1 = new Player('player--0');
let p2 = new Player('player--1');
let currentPlayer = p1;
let playing;

const newGame = () => {
  playing = true;
  pl0.classList.remove('player--winner');
  pl1.classList.remove('player--winner');
  pl0.classList.add('player--active');
  score0.innerText = '0';
  score1.innerText = '0';
  current0.innerText = '0';
  current1.innerText = '0';
  p1.hold = 0;
  p2.hold = 0;
};

const rollDice = () => {
  if (playing) {
    let dice = (Math.random() * 6 + 1) | 0;
    displayDice(dice);
    checkDice(dice);
  }
};

const displayDice = num => {
  dice.classList.remove('hidden');
  dice.src = `dice-${num}.png`;
};

const checkDice = num => {
  if (num === 1) {
    resetScore();
    switchPlayer();
  } else {
    updateScore(num);
  }
};

const resetScore = () => {
  currentPlayer == p1 ? (p1.current = 0) : (p2.current = 0);
  updateScore(0);
};

const updateScore = num => {
  currentPlayer.updateScore(num);
  currentPlayer == p1
    ? (current0.innerText = p1.current)
    : (current1.innerText = p2.current);
};

const holdScore = () => {
  if (playing) {
    currentPlayer.hold += currentPlayer.current;
    currentPlayer == p1
      ? (score0.innerText = p1.hold)
      : (score1.innerText = p2.hold);
    if (checkWinner(currentPlayer)) displayWinner();
    resetScore();
    switchPlayer();
  }
};

const checkWinner = currentPlayer => {
  if (currentPlayer.hold >= 100) {
    return true;
  }
  return false;
};

const switchPlayer = () => {
  currentPlayer == p1 ? (currentPlayer = p2) : (currentPlayer = p1);
  pl0.classList.toggle('player--active');
  pl1.classList.toggle('player--active');
};

const displayWinner = () => {
  document
    .querySelector(`.${currentPlayer.name}`)
    .classList.add('player--winner');
  dice.classList.add('hidden');
  playing = false;
};

newBtn.addEventListener('click', newGame);
keepBtn.addEventListener('click', holdScore);
rollBtn.addEventListener('click', rollDice);

module.exports = checkWinner;
