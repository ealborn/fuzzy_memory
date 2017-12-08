// const cards = document.querySelector('.card')
// const button =document.querySelector('button')

const cards = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H'];

const fetchBoard = document.getElementById("memory_board");

cards.forEach(function(card) {
  const newElement = document.createElement('div');
  newElement.classList.add('kort');
  newElement.dataset.letter = card;
  fetchBoard.appendChild(newElement);

})
