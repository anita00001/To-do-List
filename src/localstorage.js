// localstorage.js
export default class ToDo {
  constructor() {
    const storedData = JSON.parse(localStorage.getItem('ToDo-storage'));
    this.taskList = Array.isArray(storedData) ? storedData : [];
  }

  // add function
  addToDo(description) {
    const completed = false;
    const index = this.taskList.length;
    const updatedToDo = [
      ...this.taskList,
      { completed, description, index },
    ];
    this.updateStorage(updatedToDo);
  }

  // remove function
  removeFunction(index) {
    const updatedToDo = this.taskList.filter((task) => task.index !== index);
    for (let i = 0; i < updatedToDo.length; i += 1) {
      updatedToDo[i].index = i;
    }
    this.updateStorage(updatedToDo);
  }

  // Get function
  getFromStorage() {
    return this.taskList;
  }

  // update storage
  updateStorage(data) {
    localStorage.setItem('ToDo-storage', JSON.stringify(data));
    this.taskList = data;
  }
}
