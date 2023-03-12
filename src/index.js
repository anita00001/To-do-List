// index.js
import './style.css';
import {
  getFromStorage,
  updateStorage,
} from './modules/localstorage.js';

import toggleCompleted from './modules/completedCheck.js';
import clearCompleted from './modules/deleteAll.js';
import removeFunction from './modules/remove.js';
import addToDo from './modules/add.js';
import editTask from './modules/edit.js';

const description = document.getElementById('my-task');
const targetPressEnter = document.getElementById('press-enter');

let todos = getFromStorage();

const showToDo = () => {
  const ul = document.getElementById('tasks-list');
  ul.innerHTML = '';

  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.className = 'task-row';
    const isChecked = todo.completed ? 'checked' : '';

    li.innerHTML = `
      <input id="checkbox" type="checkbox" ${isChecked}>
      <p id="task-description" contenteditable="true">${todo.description}</p>
      <div class="options">
        <button class="dots"><i class="fa-solid fa-ellipsis-vertical"></i></button>
        <span class="trash" onclick="removeTask(${index})"><i class="fa-solid fa-trash-can"></i></span>
      </div>
      `;
    ul.appendChild(li);

    // Call toggleCompleted function on checkbox change
    const checkbox = li.querySelector('#checkbox');
    checkbox.addEventListener('change', () => {
      todos = toggleCompleted(index, todos);
      updateStorage(todos);
      showToDo();
    });

    // Edit task description
    const editInputTask = li.querySelector('#task-description');

    editInputTask.addEventListener('blur', () => {
      const editTaskContent = editInputTask.textContent.trim();
      todos = editTask(todos, index, editTaskContent);
      updateStorage(todos);
    });

    editInputTask.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        editInputTask.blur();
      }
    });

    // Visibility for options: dots/trash when editing the task
    const dots = li.querySelector('.dots');
    const trash = li.querySelector('.trash');

    editInputTask.addEventListener('click', () => {
      dots.style.display = 'none';
      trash.style.display = 'inline-block';
    });
  });
  updateStorage(todos);
};

// Add task given by user when clicked on 'Enter' icon
targetPressEnter.addEventListener('click', (e) => {
  e.preventDefault();
  addToDo(todos, description.value);
  showToDo();
  description.value = '';
});

// Add task given by user when pressed on 'Enter' key on keyboard
targetPressEnter.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    addToDo(todos, description.value);
    showToDo();
    description.value = '';
  }
});

// Removing a task
window.removeTask = (index) => {
  todos = removeFunction(todos, index);
  updateStorage(todos);
  showToDo();
};

// Clear All Completed
const clearButton = document.getElementById('clear-button');

clearButton.addEventListener('click', () => {
  todos = clearCompleted(todos);
  updateStorage(todos);
  showToDo();
});

showToDo();