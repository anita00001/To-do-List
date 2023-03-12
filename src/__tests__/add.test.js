const addToDo = require('../modules/add.js');

const oldTask = [
  { description: 'Task1', completed: false, index: 1 },
  { description: 'Task2', completed: false, index: 2 },
];

const AddedTask = [
  { description: 'Task1', completed: false, index: 1 },
  { description: 'Task2', completed: false, index: 2 },
  { description: 'newtask', completed: false, index: 3 },
];

describe('Remove a task given by the index from To-Do List', () => {
  test('Add a newtask', () => {
    expect(
      addToDo(oldTask, 'newtask'),
    ).toEqual(AddedTask);
  });
});