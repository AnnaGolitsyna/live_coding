/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = digits => {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (carry === 0) {
      break;
    }
    const sum = digits[i] + carry;
    digits[i] = sum;
    carry = Math.floor(sum / 10);
    // console.log(sum % 10, sum / 10, sum, digits[i], carry);
  }
  // if (carry !== 0) {
  //   console.log(digits[i], carry);
  //   digits.unshift(carry);

  // }
  return digits;
};

console.log(plusOne([1, 2, 3])); // [1,2,4] 123+1 = 124
console.log(plusOne([4, 3, 2, 1])); // [4,3,2,2] 4321+1=4322
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
