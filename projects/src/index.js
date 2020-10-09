/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
import './dnd.html';

const homeworkContainer = document.querySelector('#app');

let currentElem;
let startPointX = 0;
let startPointY = 0;

document.addEventListener('mousemove', (e) => {
  if (currentElem) {
    currentElem.style.top = e.clientY - startPointY + 'px';
    currentElem.style.left = e.clientX - startPointX + 'px';
  }
});

function randomNumber(start, finish) {
  return parseInt(start + Math.random() * finish - start);
}

export function createDiv() {
  const newDiv = document.createElement('div');
  newDiv.classList.add('draggable-div');

  newDiv.style.background = '#' + randomNumber(0, 0xffffff).toString(16);
  newDiv.style.width = randomNumber(0, 500) + 'px';
  newDiv.style.height = randomNumber(0, 500) + 'px';
  newDiv.style.top = randomNumber(0, window.innerHeight) + 'px';
  newDiv.style.left = randomNumber(0, window.innerWidth) + 'px';

  newDiv.addEventListener('mousedown', (e) => {
    currentElem = newDiv;
    startPointX = e.offsetX;
    startPointY = e.offsetY;
  });

  newDiv.addEventListener('mouseup', () => (currentElem = false));

  return newDiv;
}

const addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
  const newDiv = createDiv();
  homeworkContainer.append(newDiv);
});
