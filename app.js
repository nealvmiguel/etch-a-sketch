'use strict';

const btnContainer = document.querySelector('.btn-container');
const container = document.getElementById('grid');
const clearBtn = document.querySelector('.clear-btn');

clearBtn.addEventListener('click', () => {
  container.innerHTML = '';
});

btnContainer.addEventListener('click', (e) => {
  const numberOfTimes = e.target.dataset.grid;

  generateGridBox(numberOfTimes);
});

function generateGridBox(size) {
  container.innerHTML = ''; // clear previous grid

  const totalBoxes = size * size;

  for (let i = 0; i < totalBoxes; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('grid-box');
    newDiv.style.border = '1px solid #3da9fc';
    container.appendChild(newDiv);
  }

  container.style.display = 'grid';
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}
