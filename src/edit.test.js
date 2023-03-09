const editTask = require('./edit.js');

const previousTask = [
  { description: 'Task1', completed: false, index: 1 },
  { description: 'Task2', completed: false, index: 2 },
  { description: 'Task3', completed: false, index: 3 },
];

const newTask = [
  { description: 'Task1', completed: false, index: 1 },
  { description: 'Update GitHub Profile', completed: false, index: 2 },
  { description: 'Task3', completed: false, index: 3 },
];

describe('Edit the task in To-Do List', () => {
  test('Update ToDo item', () => {
    expect(
      editTask(previousTask, 2 - 1, 'Update GitHub Profile'),
    ).toEqual(newTask);
  });
});