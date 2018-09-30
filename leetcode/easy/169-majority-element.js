/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {};
    for (let num of nums) {
        if (!obj[num]) {
            obj[num] = 1;
        }
        else {
            obj[num]++;
        }
    }
    for (let key in obj) {
        if (obj[key] >= nums.length/2) {
            return Number(key);
        }
    }
};

// var majorityElement = function(nums) {
//     if (!nums) return 0;
//     let curEl = nums[0];
//     let count = 1;
//     for (let i = 1; i < nums.length; i++) {
//         let ele = nums[i];
//         if (curEl === ele) count++;
//         else if (count === 0) {
//             curEl = ele;
//             count++;
//         } else count--;
//     }
//     return curEl;
// };