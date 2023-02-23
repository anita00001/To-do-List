import saveToStorage from './SaveFunction.js';

const deleteAllCompleted = (tasks) => {
  const updateTodo = tasks.filter((it) => it.completed !== true);
  for (let i = 0; i < updateTodo.length; i += 1) {
    updateTodo[i].index = i;
  }
  saveToStorage(updateTodo);
};

export default deleteAllCompleted;