// input - number (below)
// output - number (sum)

// if arg < 0 - return 0
// create for => i: = 0, < num
// iterate
// if i mult 3, 5 => += sum
// if i mult of both 3, 5 => count once

const multiples = number => {
  // if (num < 0) {
  //   return 0;
  // }
  // let sum = 0;
  // for (let index = 0; index < num; index += 1) {
  //   if (index % 3 === 0) {
  //     sum += index;
  //   }
  //   if (index % 5 === 0 && index % 3 !== 0) {
  //     sum += index;
  //   }
  // }
  // return sum;
  let sum = 0;
  for (let index = 1; index < number; index += 1) {
    if (index % 3 === 0 || index % 5 === 0) {
      sum += index;
    }
  }
  return sum;
};

console.log(multiples(-10)); // 0
console.log(multiples(10)); // 23
console.log(multiples(15)); // 45
