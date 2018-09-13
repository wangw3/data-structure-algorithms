/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let i = 0;
    while (1) {
        if (!nums.includes(i)) {
            return i
        }
        i++;
    }
};

// var missingNumber = function(nums) {
//     var sum = 0;
//     for( var i = 0 ; i < nums.length ; i++ ){
//         sum = sum + nums[i];
//     }
//     var expected = (nums.length + 1 ) * nums.length / 2 ;
//     return expected - sum;
// };