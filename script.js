// const card = document.querySelector('.card')
// const button =document.querySelector('button')

const card = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H'];

const allcards = card.length;
const fetchBoard = document.getElementById("memory_board");

for (var i = 0; i < card.length; i++) {
  const newElement = document.createElement('div');
  newElement.classList.add('kort');
  //kolla om det funkar/ska vara className istället?
  fetchBoard.appendChild(newElement);
}
