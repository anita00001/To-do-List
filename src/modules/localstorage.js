// localstorage.js
const getFromStorage = () => {
  let storedData = JSON.parse(window.localStorage.getItem('ToDo-storage'));
  storedData = Array.isArray(storedData) ? storedData : [];
  return storedData;
};

const updateStorage = (data) => {
  window.localStorage.setItem('ToDo-storage', JSON.stringify(data));
};

module.exports = { getFromStorage, updateStorage };