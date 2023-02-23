const saveToStorage = (task) => {
  localStorage.setItem('todos', JSON.stringify(task));
};

export default saveToStorage;