/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  let solution = [];
  nums.forEach((num, i) => {
    let a = nums.indexOf(target - num);
    if (a !== 0 && a !== i && solution.length !== 2) {
      solution.push(i);
      solution.push(a);
    }
  });
  return solution;
}
// var twoSum = function(nums, target) {
//     let seen = {};
//     for (let i = 0; i < nums.length; i++) {
//       if (seen[target - nums[i]] || seen[target - nums[i]] === 0) {
//         return [seen[target - nums[i]], i];
//       } else {
//         seen[nums[i]] = i;
//       }
//     }
// };