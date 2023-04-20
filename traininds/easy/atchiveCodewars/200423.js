// // input = nums (2)
// // output - num

// const quadrants = (x, y) => {
//   const first = x > 0 && y > 0;
//   const second = x < 0 && y > 0;
//   const third = x < 0 && y < 0;
//   const forth = x > 0 && y < 0;
//   switch (true) {
//     case first:
//       return 1;
//     case second:
//       return 2;
//     case third:
//       return 3;
//     case forth:
//       return 4;
//     default:
//       break;
//   }
// };

// console.log(quadrants(1, 2));
// console.log(quadrants(3, 5));
// console.log(quadrants(-10, 100));
// console.log(quadrants(-1, -9));
// console.log(quadrants(19, -56));

// ---------------------
// input => num, arr og funcs
// output => num (res)

const chain = (num, arr) => arr.reduce((acc, el) => el(acc), num);

function add(num) {
  return num + 1;
}

function mult(num) {
  return num * 30;
}

console.log(chain(2, [add, mult]));
