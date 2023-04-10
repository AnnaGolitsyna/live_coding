// input - number
// output - boolean

const isPowerOfTwo = n => {
    if (n === 1 || n === 2) {
      return true;
    }
    if (n < 1) {
      return false;
    }
    return isPowerOfTwo(n / 2);
  // return Number.isInteger(Math.log2(n));
};

console.log(isPowerOfTwo(1024)); // true
console.log(isPowerOfTwo(4096)); // true
console.log(isPowerOfTwo(0)); // true
console.log(isPowerOfTwo(68));
