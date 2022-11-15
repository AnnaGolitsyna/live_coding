// filterArray
// input - arr, callback
// output - new arr

// callback
// input - arrElement, index, entireArr
// output - boolean

// algo
// 0. create result arr
// 1. iterate arr => loop
// 2. call f callback() for each el
// 3. if f callback true => push el in new arr
// 4. after iteration return resArr

const filterArray = (arr, callback) => {
  const resultArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    const el = arr[index];
    if (callback(el, index, arr)) {
      resultArr.push(el);
    }
  }
  return resultArr;
};

const numbers = [1, 222, 5, 10, 77, 4, -1, 7];
// test
const func = (el, index) => index > 2 && el > 5;

console.log(filterArray(numbers, func));
console.log(
  filterArray(['Andrew', 'Ivan', 'Jack', 'Jane', 'Mortal'], el => el.toLowerCase().includes('an')),
);

// mapArrayElements
// input - arr, callback
// output - new arr

// callback
// input - arrElement, index, entireArr
// output - new arrElement

// algo
// 0. create result arr
// 1. iterate arr => loop
// 2. call f callback() for each el
// 3. change el => push el in new arr
// 4. after iteration return resArr

const mapArrayElements = (arr, callback) => {
  const resultArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    const el = arr[index];
    resultArr.push(callback(el, index, arr));
  }
  return resultArr;
};

const nums = [1, 2, 3, 4, 5];
const funcMap = (el, index) => el * 2;
console.log(mapArrayElements(nums, funcMap));
console.log(nums);
console.log(mapArrayElements([3, 5, 10], el => el * el));
