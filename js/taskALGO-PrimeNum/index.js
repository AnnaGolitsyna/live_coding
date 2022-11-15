// How to work on tech tasks. Step by step guide

// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?)
// 3. Write draft solution & testing --- COD
// 4. Refactoring & final testing -> final solution

// input - number
// output - undefined

// algo
// 1. iterate 1 ... num +++
// 2. check if number is prime +++
// 2.0 create counter +++
// 2.1 iterate 1 ... number +++
// 2.2 if number % index === 0 -> count + 1 +++
// 2.3 if counter === 1 => is not prime
// 3. if prime => console

/**
 * @param {number} num
 * @return {undefined}
 */
// var 1
// const isPrime = number => {
//   let count = 0;
//   for (let index = 1; index <= number; index += 1) {
//     if (number % index === 0) {
//       count += 1;
//     }
//   }
//   return count === 2;
// };

// var 2
const isPrime = number => {
  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(13));
console.log(isPrime(10));

function getPrimes(num) {
  for (let number = 2; number <= num; number += 1) {
    if (isPrime(number)) {
      console.log(number);
    }
  }
}

getPrimes(10); // num 10 => 2,3,5,7
getPrimes(11);
getPrimes(15);
getPrimes(null);

