/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  const arrRes = [];
  for (let index = 0; index < nums.length; index += 1) {
    for (let ind = index + 1; ind < nums.length; ind += 1) {
      if (nums[index] + nums[ind] === target) {
        arrRes.push(index, ind);
        return arrRes;
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]
