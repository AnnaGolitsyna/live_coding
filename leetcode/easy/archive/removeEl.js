/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  for (let index = 0; index < nums.length; index += 1) {
    if (nums[index] === val) {
      nums.splice(index, 1);
      nums.push('_');
      index -= 1;
    }
  }
  return nums.filter(el => el !== '_').length;
};
console.log(removeElement([3, 2, 2, 3], 3)); // 2, nums[2,2,_,_]
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5, nums[0,1,4,0,3,_,_,_]
