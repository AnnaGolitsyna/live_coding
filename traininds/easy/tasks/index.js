// input - arr of num
// output - number => diff = max - min

// const diffMaxMin = arr => Math.max(...arr) - Math.min(...arr);
// console.log(diffMaxMin([23, 3, 19, 21, 16])); // 20 = 23-3
// console.log(diffMaxMin([1, 434, 555, 34, 112])); // 554 = 555-1

// input - arr
// output - sum of even nums

// const sumEvenNums = arr => arr.filter(el => el % 2 === 0).reduce((acc, el) => acc + el, 0);
// const sumEvenNums = numbers => numbers.reduce((acc, num) => acc + (num % 2 === 0 ? num : 0), 0);

// console.log(sumEvenNums([4, 3, 1, 2, 5, 10, 6, 7, 9, 8])); // 30
// console.log(sumEvenNums([])); // 0

const cubeChecker = function (volume, side) {
  //   if (volume <= 0 || side <= 0) {
  //     return false;
  //   }
  //   if (volume === side ** 3) {
  //     return true;
  //   }

  //   return false;
  return volume > 0 && side > 0 && volume === side ** 3;
};

console.log(cubeChecker(56.3, 1)); // f
console.log(cubeChecker(125, 5)); // t
console.log(cubeChecker(8, 3)); // f
console.log(cubeChecker(8, 2)); // t
