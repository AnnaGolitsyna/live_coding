const numbersList = [5, 0, 8, 10, -4, 50, 220];
// MAP
// input - callback f
// output - new arr

// callback
// input - (el, index /optional/, arr /optional/)
// output - new element

// var 1
// const mapRes = numbersList.map(el => {
//   if (el > 0) {
//     return el ** 2;
//   }
//   return el;
// });

// var 2
const mapRes = numbersList.map(el => (el > 0 ? el ** 2 : el));
console.log(mapRes);

// FIND
// input - callback f
// output - first test el || undefind

// callback
// input - (el, index /optional/, arr /optional/)
// output - boolean

const findRes = numbersList.find(el => el > 100);
console.log(findRes);

// forEach
// input - callback f
// output - undefind

// callback
// input - (el, index /optional/, arr /optional/)
// output - undefind

const resForEach = numbersList.forEach(el => {
  if (el > 0) {
    console.log(el);
  }

  // don't use -  return 'error';
  // or only - console.log(el > 0 ? el : 'Error');
});
console.log(resForEach);

// ternary
// condition ? value A : value B

// REDUCE
// input - callback f, accInitValue /optional/
// output - result /any type/ - acc

// callback
// input - (acc, el, index /optional/, arr /optional/)
// output - result /any type/ - acc
const transactions = [5, 0, -50, 8, -100, 10, -4, 50, 220, 1203, 556, 41];

// var 1
// const sumReduce = transactions.reduce((acc, el) =>  {
//    if (el < 0) {
//     acc += el;
//    }
//    return acc;
// }, 0);

// var 2
const sumReduce = transactions.reduce((acc, el) =>  el < 0 ? acc + el : acc, 0);
console.log(sumReduce);
