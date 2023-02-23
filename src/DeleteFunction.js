import saveToStorage from './SaveFunction.js';

const deleteToDo = (tasks, index) => {
  const updateTodo = tasks.filter((it) => index !== it);
  for (let i = 0; i < updateTodo.length; i += 1) {
    updateTodo[i].index = i;
  }
  saveToStorage(updateTodo);
};

export default deleteToDo;