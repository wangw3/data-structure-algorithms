/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    const n = nums.length/2;
    const temp = nums.slice();
    temp.sort((a,b) => a-b);
    return temp.reduce((a,c,i) => {
        if (i%2 === 0){
            a += c;
        }
        return a;
    },0)
};