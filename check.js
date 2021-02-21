const checkWinner = currentPlayer => {
  if (currentPlayer.hold >= 100) {
    return true;
  }
};

module.exports = checkWinner;
