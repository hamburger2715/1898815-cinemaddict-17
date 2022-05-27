const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a,b));
  const upper = Math.floor(Math.max(a,b));

  return Math.floor(lower + Math.random() * (upper - lower +1));
};

const getRandomElements = (array, amount) => {
  const arr = [];
  const cycles = getRandomInteger(1, amount);

  for (let i = 0; i < cycles; i++) {
    const element = array[getRandomInteger(0, array.length -1)];
    if (!arr.includes(element)) {
      arr.push(element);
    }
  }
  return arr;
};

export {getRandomInteger, getRandomElements};
