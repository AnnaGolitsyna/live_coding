/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  const indexNum = nums.indexOf(target);
  if (nums.indexOf(target) >= 0) {
    return indexNum;
  }
  for (let index = 0; index < nums.length; index += 1) {
    if (nums[index] > target) {
      return index;
    }
    if (index === nums.length - 1) {
      return index + 1;
    }
  }

};

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
