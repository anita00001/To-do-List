const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>');
const { window } = dom;

const localStorageMock = (() => {
  let store = {};

  return {
    getItem(key) {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

const updateStorage = (data) => {
  window.localStorage.setItem('ToDo-storage', JSON.stringify(data));
};

const getFromStorage = () => {
  let storedData = JSON.parse(window.localStorage.getItem('ToDo-storage'));
  storedData = Array.isArray(storedData) ? storedData : [];
  return storedData;
};

export { updateStorage, getFromStorage, window };