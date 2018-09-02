/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {

    const i = nums.indexOf(target);
    if (i !== -1) {
        return i
    }
    else {
        let sol;
        let j = 0;
        while (j < nums.length) {
            console.log(nums[j])
            if (j === 0 && nums[j] > target) {
                sol = 0
            }
            if (nums[j] < target && j === nums.length - 1) {
                sol = nums.length;
            }
            if (nums[j] < target && nums[j + 1] > target) {
                sol = j + 1;
            }

            j++;
        }
        return sol;
    }

}
// var searchInsert = function(nums, target) {
//     var out =nums.indexOf(target);
//        if (out == -1){
//            var i = 0
//            for (; target > nums[i] ; i++){};
//            out = i;
//        }
//        return out ;
//    };