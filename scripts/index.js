let itemId = 0; // Variable para almacenar el ID del item

const addButton = document.getElementById('add-btn');
const todoBoard = document.getElementById('todo-board');
const doingBoard = document.getElementById('doing-board');
const doneBoard = document.getElementById('done-board');

addButton.addEventListener('click', (e) => {
  const newTaskText = document.getElementById('new-task-text').value.trim();

  if (newTaskText !== '') {
    e.preventDefault();
    // Código para agregar el nuevo item a la lista
    const newTask = document.createElement('p');
    newTask.classList.add('item');
    newTask.innerText = newTaskText;
    newTask.draggable = true;
    newTask.id = `item-${itemId}`;
    todoBoard.appendChild(newTask);
    itemId++;
    document.getElementById('new-task-text').value = '';
  }
});

todoBoard.addEventListener('dragover', (e) => {
  e.preventDefault();
});

doingBoard.addEventListener('dragover', (e) => {
  e.preventDefault();
});

doneBoard.addEventListener('dragover', (e) => {
  e.preventDefault();
});

doingBoard.addEventListener('drop', (e) => {
  e.preventDefault();
  const itemId = e.dataTransfer.getData('text');
  const item = document.getElementById(itemId);
  doingBoard.appendChild(item);
  item.style.top = e.clientY + 'px';
  item.style.left = e.clientX + 'px';
});

doneBoard.addEventListener('drop', (e) => {
  e.preventDefault();
  const itemId = e.dataTransfer.getData('text');
  const item = document.getElementById(itemId);
  doneBoard.appendChild(item);
  item.style.top = e.clientY + 'px';
  item.style.left = e.clientX + 'px';
});

// Modo oscuro/claro
const modeBtn = document.getElementById('mode-btn');

modeBtn.addEventListener('click', () => {
  const currentMode = modeBtn.getAttribute('data-mode');
  const newMode = currentMode === 'light' ? 'dark' : 'light';

  modeBtn.setAttribute('data-mode', newMode);
  document.body.classList.toggle('dark-mode', newMode === 'dark');

  // Cambia el emoji según el modo
  const modeIcon = document.getElementById('mode-icon');
  if (newMode === 'dark') {
    modeIcon.textContent = '🌕'; // emoji de luna
  } else {
    modeIcon.textContent = '☀️'; // emoji de sol
  }
});