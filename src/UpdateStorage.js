import saveToStorage from './SaveFunction.js';

const updateToDo = (todotask, index, boolvalue) => {
  todotask[index].description = boolvalue;
  saveToStorage(todotask);
};

export default updateToDo;