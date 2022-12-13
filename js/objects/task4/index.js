// algo
// create arr with keys obj
// compare by length
// compare el firstObj with  el secondObj by key

/**
 * @param {object} firstObj
 * @param {object} secondObj
 * @return {boolean}
 */

// var6 -
// use another method => every

function compareObjects(firstObj, secondObj) {
  const firstArray = Object.keys(firstObj);
  if (firstArray.length !== Object.keys(secondObj).length) {
    return false;
  }
  return firstArray.reduce((acc, element) => {
    if (firstObj[element] !== secondObj[element]) {
      acc = false;
    };
    return acc;
  }, true);
};

// var1 ++
// function compareObjects(firstObj, secondObj) {
//   return Object.keys({ ...firstObj, ...secondObj }).every(key => firstObj[key] === secondObj[key]);
// }

// var2 +++
// function compareObjects(firstObj, secondObj) {
//   return !Object.keys({ ...firstObj, ...secondObj }).some(key => firstObj[key] !== secondObj[key]);
// }

// var3 -
// function compareObjects(firstObj, secondObj) {
//   const biggerObj =
//     JSON.stringify(firstObj).length > JSON.stringify(secondObj).length ? firstObj : secondObj;
//   return !Object.keys(biggerObj).some(key => firstObj[key] !== secondObj[key]);
// }

// var4 +
// const compareObjects = (firstObj, secondObj) => {
//   const firstArr = Object.keys(firstObj);
//   const secondArr = Object.keys(secondObj);
//   if (firstArr.length !== secondArr.length) {
//     return false;
//   }
//   return !firstArr.some(key => firstObj[key] !== secondObj[key]);
// };

// var5 -
// const compareObjects2 = (firstObj, secondObj) =>
//   JSON.stringify(Object.entries(firstObj).sort()) ===
//   JSON.stringify(Object.entries(secondObj).sort());



// var7 -
// const compareObjects = (firstObj, secondObj) =>
//   Object.keys(firstObj).reduce(
//     (acc, key, index) => (firstObj[key] === secondObj[key] && index === acc ? acc + 1 : -1),
//     0,
//   ) === Object.keys(secondObj).length;

// var9 -
// function compareObjects(firstObj, secondObj) {
//   const ordered = obj =>
//     Object.keys(obj)
//       .sort()
//       .reduce((acc, el) => {
//         acc[el] = obj[el];
//         console.log(acc);
//         return acc;
//       }, {});
//   const sortFirstObj = ordered(firstObj);
//   const sortSecondObj = ordered(secondObj);
//   return JSON.stringify(sortFirstObj) === JSON.stringify(sortSecondObj);
// }

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Bob',
  age: 17,
};

const obj5 = {
  age: 17,
  name: 'Bob',
};
console.log(compareObjects(obj1, obj2));
console.log(compareObjects(obj1, obj3));
console.log(compareObjects(obj2, obj3));
console.log(compareObjects(obj2, obj4));
console.log(compareObjects(obj2, obj5));
console.log(compareObjects(obj5, obj2));