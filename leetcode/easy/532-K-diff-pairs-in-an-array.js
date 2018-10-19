/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    let count = 0;
    let obj = {};
    if (k < 0) {
        return count;
    }
    for (let i=0;i<nums.length;i++) {
        const ele = nums.indexOf(nums[i] - k);
        if (!obj[nums[ele]] && ele !==i ) {
           if (ele !== -1) {
             count++;
             obj[nums[ele]] = true;
           } 
        }   
    }
    return count;
};