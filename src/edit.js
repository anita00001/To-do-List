const editTask = (todos, index, newDescription) => {
  todos[index].description = newDescription;
  return todos;
};

module.exports = editTask;