import getFromStorage from './GetFunction.js';
import saveToStorage from './SaveFunction.js';

const addToDo = () => {
  const todoList = getFromStorage();
  const inputNewTask = document.getElementById('todo-input');
  const newTodo = {
    description: inputNewTask.value,
    completed: false,
    index: todoList.length,
  };
  inputNewTask.value = '';
  todoList.push(newTodo);
  saveToStorage();
};

export default addToDo;