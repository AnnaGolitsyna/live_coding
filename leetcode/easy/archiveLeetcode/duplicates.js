/**
 * @param {number[]} nums
 * @return {number}
 */
// const removeDuplicates = nums => [...new Set(nums)].length;
const removeDuplicates = nums => {
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i -= 1;
    }
  }
  return nums.length;
};

console.log('res:', removeDuplicates([1, 1, 2, 3, 3])); // 2
console.log('res:', removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 3, 4])); // 5
