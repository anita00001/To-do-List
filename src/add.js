// add.js
const addToDo = (todos, description) => {
  const updatedToDo = {
    completed: false,
    description,
    index: todos.length + 1,
  };
  todos.push(updatedToDo);
  return todos;
};

module.exports = addToDo;