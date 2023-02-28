// deleteAll.js
const clearCompleted = (tasks) => {
  tasks.taskList = tasks.taskList.filter((task) => !task.completed);
  for (let i = 0; i < tasks.taskList.length; i += 1) {
    tasks.taskList[i].index = i + 1;
  }
};

export default clearCompleted;