// input - string
// output - str reverce

// const reverceStr = str => str.split('').reverse().join('');

// console.log(reverceStr('abcd'));
// console.log(reverceStr('clever'));

// input - arr
// output - arr of sort number

// const customSort = arr => arr.filter(el => typeof el === 'number').sort((a, b) => a - b);

// console.log(customSort([0, { id: 10 }, 10, undefined, 'hello', () => {}, -7, 11, 2]));

// input - func, ms
// output - func

const sleep = (func, ms) => {
  return (...args) => {
    setTimeout(() => func(...args), ms);
  };
};

const log = str => {
  console.log(str);
};

const wrappedLog = sleep(log, 2000);
wrappedLog('This will be logged after 2 seconds');

const addNum = (a, b) => { console.log(a + b) };
const wrappedAddNum = sleep(addNum, 1000);
console.log(wrappedAddNum(5, 2));

