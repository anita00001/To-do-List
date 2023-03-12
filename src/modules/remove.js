// remove.js
const removeFunction = (tasks, index) => {
  const updatedToDo = tasks.filter((it) => it.index !== index + 1);
  for (let i = 0; i < updatedToDo.length; i += 1) {
    updatedToDo[i].index = i + 1;
  }
  return updatedToDo;
};

module.exports = removeFunction;