var maxSubArray = function (nums) {
    let currentMax = nums[0];
    let max = nums[0];

    for (let i = 1; i < nums.length; i += 1) {
        currentMax = Math.max(currentMax + nums[i], nums[i]);
        max = Math.max(currentMax, max);
    }

    return max;
};

//   var maxSubArray = function(nums) {
//     if(nums.length == 0) return 0;
//     if(nums.length == 1) return nums[0];

//     let maxSoFar = nums[0], maxPostFix = nums[0];
//     for(let i=1; i<nums.length; i++) {
//         maxPostFix = Math.max(maxPostFix+nums[i], nums[i]);
//         maxSoFar = Math.max(maxSoFar, maxPostFix);
//     }

//     return maxSoFar;
// };