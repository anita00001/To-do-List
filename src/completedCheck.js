const toggleCompleted = (index, tasks) => {
  tasks.taskList[index].completed = !tasks.taskList[index].completed;
};

export default toggleCompleted;