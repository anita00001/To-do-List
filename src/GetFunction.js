const getFromStorage = () => {
  let taskList = JSON.parse(localStorage.getItem('todos'));
  if (!taskList) {
    taskList = [];
  }
  return taskList;
};

export default getFromStorage;