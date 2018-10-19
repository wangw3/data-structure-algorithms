/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let max = 0;
    let c = 0;
    for (let num of nums) {
        if (num === 0) {
            if (c > max) {
                max = c;
            }
            c = 0;
        }
        else {
            c++;
        }
    }
    if (c > max) {
        max = c;
    }
    return max;
};
// var findMaxConsecutiveOnes = function(nums) {
//     let max = 0;
//     let currentCount = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 1) {
//             currentCount++;
//             max = Math.max(max, currentCount);
//         } else {
//             currentCount = 0;
//         }
//     }
//     return max;
// };