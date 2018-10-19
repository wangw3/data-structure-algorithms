/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    let arr = [];
    for (let num of nums) {
        arr = [...arr, ...num];
    }
    if (arr.length === r * c) {
        let solution = [];
        for (let i=0;i<r;i++) {
            let column = [];
            for (let j=0;j<c;j++) {
                column.push(arr[i*c+j]);
            }
            solution.push(column);
        }
        return solution;
    }
    else {
        return nums;
    }
};