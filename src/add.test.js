const addToDo = require('./add.js');

const oldTask = [
  { description: 'Task1', completed: false, index: 1 },
  { description: 'Task2', completed: false, index: 2 },
];

const AddedTask = [
  { description: 'Task1', completed: false, index: 1 },
  { description: 'Task2', completed: false, index: 2 },
  { description: 'newtask', completed: false, index: 3 },
];

test('Add a newtask', () => {
  expect(
    addToDo(oldTask, 'newtask'),
  ).toEqual(AddedTask);
});