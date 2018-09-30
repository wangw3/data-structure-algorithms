/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const arr = [];
    for(let i=0;i<nums.length;i++) {
        if (!nums.includes(i+1)) {
            arr.push(i+1);
        }
    }
    return arr;
};

// var findDisappearedNumbers = function(nums) {
//     for (let i = 0; i < nums.length; i++) {
//       nums[Math.abs(nums[i])-1] = -Math.abs(nums[Math.abs(nums[i])-1]) 
//     }
    
//     let ans = [];
//     nums.forEach((val, i) => {
//       if (val > 0) {
//         ans.push(i+1);
//       }
//     })
    
//     return ans;
// };