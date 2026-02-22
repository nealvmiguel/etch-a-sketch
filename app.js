'use strict';

const btnContainer = document.querySelector('.btn-container');
const container = document.getElementById('grid');
const clearBtn = document.querySelector('.clear-btn');

const btns = document.querySelectorAll('.btn');

clearBtn.addEventListener('click', () => {
  container.innerHTML = '';
});

btnContainer.addEventListener('click', (e) => {
  const numberOfTimes = e.target.dataset.grid;

  generateGridBox(numberOfTimes);

  container.addEventListener('mouseover', (e) => {
    const box = e.target.closest('.box');
    if (box) {
      box.style.backgroundColor = randomColor();
    }
  });
});

function generateGridBox(size) {
  container.innerHTML = ''; // clear previous grid

  const totalBoxes = size * size;

  for (let i = 0; i < totalBoxes; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('box');
    newDiv.style.border = '1px solid #3da9fc';
    container.appendChild(newDiv);
  }

  container.style.display = 'grid';
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

function randomColor() {
  const randomColors = [
    '#f54242',
    '#42f554',
    '#426ef5',
    '#f5e642',
    '#f57ff5',
    '#42f5e4',
    '#f58b42',
    '#8bf542',
    '#f542d4',
    '#42a7f5',
    '#f54291',
    '#42f5a1',
    '#d442f5',
    '#f5b342',
    '#42f5f0',
    '#f5425b',
    '#42f574',
    '#a142f5',
    '#f5e042',
    '#42f5b7',
    '#f57f42',
    '#42f5e9',
    '#f5427a',
    '#42b2f5',
    '#f5d142',
    '#42f58b',
    '#f542c3',
    '#42f5d4',
    '#f59c42',
    '#42f5ff',
  ];

  const randomColor =
    randomColors[Math.floor(Math.random() * randomColors.length)];

  return randomColor;
}
