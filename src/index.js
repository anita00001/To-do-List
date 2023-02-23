// import './style.css';

import {
  addToDo,
  getFromStorage,
  saveToStorage,
} from './todo.js';

import updateToDo from './UpdateStorage.js';
import deleteToDo from './DeleteFunction.js';
import deleteAllCompleted from './DeleteAll.js';

const pressEnter = document.getElementById('press-enter');
const hoverText = document.getElementById('button-hover');

// Hover message when hover over enter icon
pressEnter.addEventListener('mouseover', () => {
  hoverText.style.display = 'block';
});

pressEnter.addEventListener('mouseout', () => {
  hoverText.style.display = 'none';
});

const showToDo = () => {
  const tasks = getFromStorage();
  const tasksList = document.getElementById('tasks-list');
  tasksList.innerHTML = '';
  tasks.forEach((todo, index) => {
    const li = document.createElement('li');
    li.className = 'new-task';

    const todoItemLeft = document.createElement('div');
    todoItemLeft.className = 'checkbox-and-task-description';

    const input = document.createElement('input');
    input.className = 'checkbox';
    input.type = 'checkbox';
    if (todo.completed) {
      input.setAttribute('checked', '');
    }

    input.onchange = (e) => {
      if (e.target.checked) {
        tasks[index].completed = true;
        e.target.parentNode.children[1].classList.add('strike-through');
      } else {
        tasks[index].completed = false;
        e.target.parentNode.children[1].classList.remove('strike-through');
      }
      saveToStorage(tasks);
    };

    todoItemLeft.appendChild(input);

    const taskDescription = document.createElement('p');
    taskDescription.classList.add('show');
    if (todo.completed) {
      taskDescription.classList.add('strike-through');
    } else {
      taskDescription.classList.remove('strike-through');
    }
    taskDescription.innerText = todo.description;
    todoItemLeft.appendChild(taskDescription);

    const editInput = document.createElement('input');
    editInput.className = 'hide';
    editInput.type = 'text';
    editInput.value = todo.description;
    editInput.addEventListener('focusout', (e) => {
      li.classList.toggle('edit-bg');
      updateToDo(tasks, index, e.target.value);
      showToDo();
    });
    todoItemLeft.appendChild(editInput);

    li.appendChild(todoItemLeft);

    const deleteIcon = document.createElement('span');
    deleteIcon.className = 'hide';
    deleteIcon.innerHTML = 'delete';
    deleteIcon.addEventListener('click', () => {
      deleteToDo(tasks, index);
      showToDo();
    });
    li.appendChild(deleteIcon);

    const moreVert = document.createElement('span');
    moreVert.className = 'material-symbols-outlined';
    moreVert.innerHTML = 'more_vert';
    moreVert.addEventListener('click', () => {
      moreVert.className = 'hide';
      deleteIcon.className = 'material-symbols-outlined';

      taskDescription.className = 'hide';
      editInput.className = 'show';
      li.classList.toggle('edit-bg');
      editInput.focus();
    });
    li.appendChild(moreVert);
    tasksList.appendChild(li);

    const clearList = document.getElementById('clear-button');
    clearList.addEventListener('click', () => {
      deleteAllCompleted(tasks);
      showToDo();
    });
  });
};

window.addEventListener('load', () => {
  const addNewTodo = document.getElementById('press-enter');
  addNewTodo.addEventListener('click', () => {
    // if condition
    addToDo();
    showToDo();
  });

  const todoInput = document.getElementById('my-task');
  todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addToDo();
      showToDo();
    }
  });

  showToDo();
});
