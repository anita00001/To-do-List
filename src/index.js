// index.js
import './style.css';
import ToDo from './localstorage.js';
import toggleCompleted from './completedCheck.js';
import clearCompleted from './deleteAll.js';

const ul = document.getElementById('tasks-list');
const description = document.getElementById('my-task');
const targetPressEnter = document.getElementById('press-enter');

const tasks = new ToDo();

const showToDo = () => {
  ul.innerHTML = '';

  for (let i = 0; i < tasks.taskList.length; i += 1) {
    const li = document.createElement('li');
    li.className = 'task-row';
    const isChecked = tasks.taskList[i].completed ? 'checked' : '';

    li.innerHTML = `
      <input id="checkbox" type="checkbox" ${isChecked}>
      <p id="task-description" contenteditable="true">${tasks.taskList[i].description}</p>
      <div class="options">
        <button class="dots"><i class="fa-solid fa-ellipsis-vertical"></i></button>
        <span class="trash" onclick="removeTask(${i})"><i class="fa-solid fa-trash-can"></i></span>
      </div>
      `;
    ul.appendChild(li);

    // Call toggleCompleted function on checkbox change
    const checkbox = li.querySelector('#checkbox');
    checkbox.addEventListener('change', () => {
      toggleCompleted(i, tasks);
      tasks.updateStorage(tasks.taskList);
      showToDo();
    });

    // Edit task description
    const editTask = li.querySelector('#task-description');

    editTask.addEventListener('blur', () => {
      tasks.taskList[i].description = editTask.textContent;
      tasks.updateStorage(tasks.taskList);
    });

    editTask.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        editTask.blur();
      }
    });

    // Visibility for options: dots/trash when editing the task
    const dots = li.querySelector('.dots');
    const trash = li.querySelector('.trash');

    editTask.addEventListener('click', () => {
      dots.style.display = 'none';
      trash.style.display = 'inline-block';
    });
  }
  tasks.updateStorage(tasks.taskList);
};

// Add task given by user when clicked on 'Enter' icon
targetPressEnter.addEventListener('click', (e) => {
  e.preventDefault();
  tasks.addToDo(description.value);
  showToDo();
  description.value = '';
});

// Add task given by user when pressed on 'Enter' key on keyboard
targetPressEnter.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    tasks.addToDo(description.value);
    showToDo();
    description.value = '';
  }
});

// Removing a task
window.removeTask = (index) => {
  tasks.removeFunction(index);
  tasks.updateStorage(tasks.taskList);
  showToDo();
};

// Clear All Completed
const clearButton = document.getElementById('clear-button');

clearButton.addEventListener('click', () => {
  clearCompleted(tasks);
  tasks.updateStorage(tasks.taskList);
  showToDo();
});

showToDo();
