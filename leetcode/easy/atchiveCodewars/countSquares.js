// input - number (times)
// output - number (smaller cubes)

// 1 times - 4*2=8 - 12/2/8
// 2 times - 9*2 + 8=26 12/3/26
// 3 t       12*2 + 8=56    12/4
// 4t -   = 98          12/5/98

const counrSquares = times => {
  const sideFaces = times + 1;
  const innerFaces = times - 1;
  const countSideFaces = 2;
  const countInnerFaces = 4;
  const numOfCubes = sideFaces ** 2 * countSideFaces + times * countInnerFaces * innerFaces;
  return numOfCubes;
};
console.log(counrSquares(1)); // 8
console.log(counrSquares(2)); // 26
console.log(counrSquares(3)); // 56
console.log(counrSquares(4)); // 98
console.log(counrSquares(5)); // 152
console.log(counrSquares(16)); // 1538
console.log(counrSquares(23)); // 3176
