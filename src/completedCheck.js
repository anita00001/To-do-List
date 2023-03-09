// completedCheck.js
const toggleCompleted = (index, tasks) => {
  const newTasks = [...tasks];
  newTasks[index] = {
    ...newTasks[index],
    completed: !newTasks[index].completed,
  };
  return newTasks;
};

export default toggleCompleted;