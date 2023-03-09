import { updateStorage, getFromStorage, window } from '../__mocks__/mockLocalStorage.js';

describe('Set local storage item', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test('data is added into local storage', () => {
    const todo = [{ description: 'This is first todo' }];
    updateStorage(todo);
    expect(window.localStorage.getItem('ToDo-storage')).toEqual(JSON.stringify(todo));
  });

  test('data is fetched from local storage', () => {
    const todo = [{ description: 'This is first todo' }];
    updateStorage(todo);
    expect(getFromStorage()).toEqual(todo);
  });
});