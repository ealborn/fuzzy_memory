'use strict'

const cards = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H'];

const fetchBoard = document.getElementById('memory_board');

function onClick(event) {
  //console.log(event);
  event.target.classList.add('flipped');

  //compare two cards and checks if they match
  pairing.push(event.target);
  if (pairing.length===2) {
    if (pairing[0].dataset.letter===pairing[1].dataset.letter) {
      pairing = [];
      //console.log('matching');

    } else {
      //if the two cards do not match, turn them back over.
      //console.log('not matching');
      pairing.forEach(function(oneCard){
        setTimeout(function() {
          oneCard.classList.remove('flipped');
        }, 800);
      });

      pairing=[];
      //console.log('emptied');
    }
  }
}

//resets and reshuffles cards
function resetAll() {
  fetchBoard.innerHTML="";
  //calls shuffle function
  shuffle(cards);

  //creates and displays each card div, adds a class and dataset to each,
  //then make them clickable and append them to the div memory_board.
  cards.forEach(function(card) {
    const newElement = document.createElement('div');
    newElement.classList.add('cardClass');
    newElement.dataset.letter = card;
    newElement.textContent = card;
    newElement.addEventListener('click', onClick);
    fetchBoard.appendChild(newElement);
  })

  //shuffle function
  function shuffle(cards) {
    let j, x, i;
    for (i = cards.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = cards[i];
      cards[i] = cards[j];
      cards[j] = x;
    }
  }
}
resetAll();

//this is now an array with all the cards.
const pickOne = document.querySelectorAll('.cardClass');
let pairing = [];

//loops through all cards and makes them clickable
pickOne.forEach(function(card) {
  card.addEventListener('click', onClick);

});

//click to reset board
const restart = document.querySelector('button');
restart.addEventListener('click', function(event) {
  resetAll();
});
