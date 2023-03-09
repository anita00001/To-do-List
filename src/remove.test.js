const removeFunction = require('./remove');

const tasks = [
  { index: 1, description: 'Task 1', completed: true },
  { index: 2, description: 'Task 2', completed: false },
  { index: 3, description: 'Task 3', completed: true },
  { index: 4, description: 'Task 4', completed: false },
  { index: 5, description: 'Task 5', completed: false },
];

test('Remove one task from TO-DO-List', () => {
  const updatedTasks = removeFunction(tasks, 3 - 1);
  expect(updatedTasks).toEqual([
    { index: 1, description: 'Task 1', completed: true },
    { index: 2, description: 'Task 2', completed: false },
    { index: 3, description: 'Task 4', completed: false },
    { index: 4, description: 'Task 5', completed: false },
  ]);

  for (let i = 0; i < updatedTasks.length; i += 1) {
    expect(updatedTasks[i].index).toEqual(i + 1);
  }
});