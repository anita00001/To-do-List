const clearCompleted = require('./deleteAll.js');

const oldList = [
  { description: 'Task1', completed: true, index: 1 },
  { description: 'Task2', completed: false, index: 2 },
  { description: 'Task3', completed: true, index: 3 },
];

const remainingList = [
  { description: 'Task2', completed: false, index: 1 },
];

test('Delete All Completed ToDo items', () => {
  expect(
    clearCompleted(oldList),
  ).toEqual(remainingList);
});