import './style.css';

const pressEnter = document.getElementById('press-enter');
const hoverText = document.getElementById('button-hover');

const showToDo = document.getElementById('task-list');
const myTask = document.getElementById('my-task');
const form = document.getElementById('form');
const error = document.getElementById('error');

// Hover message when hover over enter icon
pressEnter.addEventListener('mouseover', () => {
  hoverText.style.display = 'block';
});

pressEnter.addEventListener('mouseout', () => {
  hoverText.style.display = 'none';
});

// Local Storage
class ToDo {
  constructor() {
    this.taskList = JSON.parse(localStorage.getItem('storage-task')) || [];
  }

  addTask(description) {
    const updateTask = [
      ...this.taskList,
      { description },
    ];
    this.updateStorage(updateTask);
  }

  getFromStorage() {
    return this.taskList;
  }

  updateStorage(data) {
    localStorage.setItem('storage-task', JSON.stringify(data));
    this.taskList = data;
  }
}

const tasks = new ToDo();
let taskListArray = tasks.getFromStorage();

const showTask = () => {
  showToDo.innerHTML = '';
  taskListArray.forEach((element) => showToDo.insertAdjacentHTML('beforeend',
    `<ul>
    <li><input type="checkbox" class="checkbox" ${element.completed ? 'checked' : ''}></li>
    <li>${element.description}</li>
    <li id="verticle-dot" class="verticle-dot"><i class="fas fa-ellipsis-v"></i></li>
  </ul>`));
};

showTask();

myTask.addEventListener('click', (e) => {
  e.preventDefault();
  error.innerHTML = '';
});

pressEnter.addEventListener('click', (e) => {
  e.preventDefault();
  const duplicate = taskListArray.find((task) => task.description === myTask.value);
  if (myTask.value.length === 0) {
    error.innerText = 'Fields cannot be empty!';
  } else if (duplicate) {
    error.innerText = 'Task already added to the To-Do!!';
  } else {
    error.innerHTML = '';
    tasks.addTask(myTask.value);
    taskListArray = tasks.getFromStorage();
    showTask();
  }
  form.reset();
});
