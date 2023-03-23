

// Get intersection of 2 arrays

// input: ([1, 2, 3], [2, 7, 9]);
// output: [2]

// input: ([], [2, 6, 1])
// output: []

// const getIntersection = (arr1, arr2) => {
//     const arrRes = [];
//     for (let index = 0; index < arr1.length; index++) {
//         const element = array[index];

//     }

//     return arrRes;
// }
const arr = [1, 2].reduce((acc, value) => {
  console.log('acc:', acc, 'val:', value);
  return value;
});
console.log(arr);