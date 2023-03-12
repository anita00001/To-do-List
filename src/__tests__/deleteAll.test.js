const clearCompleted = require('../modules/deleteAll.js');

const oldList = [
  { description: 'Task1', completed: true, index: 1 },
  { description: 'Task2', completed: false, index: 2 },
  { description: 'Task3', completed: true, index: 3 },
];

const remainingList = [
  { description: 'Task2', completed: false, index: 1 },
];

describe('Delete All tasks that are checked to completed in To-Do List', () => {
  test('Delete All Completed ToDo items', () => {
    expect(
      clearCompleted(oldList),
    ).toEqual(remainingList);
  });
});