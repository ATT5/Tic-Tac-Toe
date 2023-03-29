'use strict';

const boxes = document.querySelectorAll('.box');
const currentPlayer = document.querySelector('.active');
const restart = document.querySelector('.restart');
const displayWinner = document.querySelector('.win');
const winnner = document.querySelector('.winner');
let activePlayer = 0;

//adding the x and o
boxes.forEach(box => {
  box.addEventListener('click', function () {
    if (activePlayer === 0 && box.innerHTML === '') {
      box.innerHTML = '<img src="x.png" class="cross" alt="x" />';
      currentPlayer.textContent = `Player 'O'`;
      activePlayer = 1;
      checkWinner();
    } else if (box.innerHTML === '') {
      box.innerHTML = '<img src="o.png" class="circle" alt="o" />';
      currentPlayer.textContent = `Player 'X'`;
      activePlayer = 0;
      checkWinner();
    }
  });
});

//reset game
restart.addEventListener('click', function () {
  boxes.forEach(box => {
    box.innerHTML = '';
  });
  displayWinner.classList.remove('active');
});

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winningCombinations.forEach(array => {
    const xWinning = array.every(box =>
      boxes[box].firstChild?.classList.contains('cross')
    );
    if (xWinning) {
      displayWinner.classList.add('active');
      winnner.textContent = 'X win';
    }
  });

  winningCombinations.forEach(array => {
    const oWinning = array.every(box =>
      boxes[box].firstChild?.classList.contains('circle')
    );
    if (oWinning) {
      displayWinner.classList.add('active');
      winnner.textContent = 'O win';
      someOneWins = true;
    }
  });
}
