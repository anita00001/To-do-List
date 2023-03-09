import { updateStorage } from './localstorage.js';

const editTask = (todos, index, newDescription) => {
  todos[index].description = newDescription;
  updateStorage(todos);
  return todos;
};

export default editTask;