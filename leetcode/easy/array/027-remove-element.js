var removeElement = function (nums, val) {
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] !== val) {
            nums.push(nums[i])
        }
    }

    return nums.splice(0, len).length
};

// var removeElement = function(nums, val) {
//     let n = nums.length;
//     let i = 0;
//     while( i < n) {
//         if (nums[i] === val) {
//             n--;
//             nums.splice(i,1);
//         } else {
//             i++;
//         }
//     }
//     return nums.lentgh;
// };