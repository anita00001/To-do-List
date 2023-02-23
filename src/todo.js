const getFromStorage = () => {
  let data = JSON.parse(localStorage.getItem('todos'));
  if (!data) {
    data = [];
  }
  return data;
};

const saveToStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const addToDo = () => {
  const todos = getFromStorage();
  const newTodoDescription = document.getElementById('my-task');
  const error = document.getElementById('error');
  const duplicate = todos.find((task) => task.description === newTodoDescription.value);
  if (newTodoDescription.value.length === 0) {
    error.innerText = 'Fields cannot be empty!';
    error.style.display = 'block';
  } else if (duplicate) {
    error.innerText = 'Task already added to the To-Do!!';
    error.style.display = 'block';
  } else {
    error.style.display = 'none';
    const newTodo = {
      description: newTodoDescription.value,
      completed: false,
      index: todos.length,
    };
    newTodoDescription.value = '';
    todos.push(newTodo);
  }
  saveToStorage(todos);
};

export {
  addToDo,
  getFromStorage,
  saveToStorage,
};