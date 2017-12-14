'use strict'

const cards = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H'];

const fetchBoard = document.getElementById('memory_board');

function onClick(event) {
  console.log(event);
  event.target.classList.add('flipped');

  //comparison
  pairing.push(event.target);
  if (pairing.length===2) {
    if (pairing[0].dataset.letter===pairing[1].dataset.letter) {
      pairing = [];
      console.log('matching');

    } else {
      console.log('not matching');
      pairing.forEach(function(oneCard){
        setTimeout(function() {
              oneCard.classList.remove('flipped');
            }, 700);
      });

      pairing=[];
      console.log('emptied');
    }
  }
}

function resetAll() {
  fetchBoard.innerHTML="";
  //calls shuffle function
  shuffle(cards);

  //creates and displays each card div
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

pickOne.forEach(function(card) {
  console.log(typeof(pickOne));
  //console.log(card);
  card.addEventListener('click', onClick);

});

//click to reset board
const restart = document.querySelector('button');
restart.addEventListener('click', function(event) {
  resetAll();
});
