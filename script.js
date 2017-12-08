// const cards = document.querySelector('.card')
// const button =document.querySelector('button')

const cards = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H'];

const fetchBoard = document.getElementById("memory_board");

//calls shuffle function
shuffle(cards);

cards.forEach(function(card) {
  const newElement = document.createElement('div');
  newElement.classList.add('kort');
  newElement.dataset.letter = card;
  newElement.textContent = card;
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

//this is now an array with all the cards.
  const pickOne = document.querySelectorAll('.kort');
  let pairing = [];

  pickOne.forEach(function(card) {
      card.addEventListener('click', function(event) {
      card.classList.add('flipped');

      //comparison
      pairing.push(card.dataset.letter);
        if (pairing.length===2) {
          if (pairing[0]===pairing[1]) {
            pairing = [];
          console.log('matching');
        } else {
          console.log('not matching');
          pairing = [];
          }
        }
    });

  });
