'use strict';

/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */

// algo
// 1. create empty obj
// 2. iterate keyslist
// 3. add key/value to the obj
// 4. return obj

// draft
// function buildObject(keysList, valuesList) {
//   const obj = {};

//   for (let index = 0; index < keysList.length; index += 1) {
//     obj[keysList[index]] = valuesList[index];
//   }
//   console.log(obj);
//   return obj;
// }

// final
function buildObject(keysList, valuesList) {
  return keysList.reduce((obj, key, index) => ({...obj, [key]: valuesList[index]}), {});
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
console.log(result);

const keys1 = ['name', 'address', 'age', 'name', 'city name', 'start', 'trans'];
const values1 = [
  'Bob',
  'Ukraine',
  34,
  'Jann',
  'New York',
  () => {
    console.log('i am starting');
  },
  [1, 2, 3, 5],
];
const result1 = buildObject(keys1, values1);
result1.start();
console.log(result1);
