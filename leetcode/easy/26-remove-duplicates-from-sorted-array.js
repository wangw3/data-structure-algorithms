/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums.push(nums[i]);
    }
  }

  return nums.splice(0, len).length;
};

// var removeDuplicates = function(nums) {
//     if (nums.length === 0) {
//     return 0;
//   }

//   var i = 0;

//   for(var j = 1; j < nums.length; j++){
//     if(nums[j] !== nums[i]){
//       i++;
//       nums[i] = nums[j];
//     }
//   }

//   return i + 1;
// };