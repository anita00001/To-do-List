const toggleCompleted = require('./completedCheck.js');

describe('toggleCompleted', () => {
  test('Toggle the completed status of a task at a given index', () => {
    const tasks = [
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'Task 2', completed: true, index: 2 },
      { description: 'Task 3', completed: false, index: 3 },
    ];

    const result = toggleCompleted(2 - 1, tasks);

    expect(result).toEqual([
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'Task 2', completed: false, index: 2 },
      { description: 'Task 3', completed: false, index: 3 },
    ]);
  });
});