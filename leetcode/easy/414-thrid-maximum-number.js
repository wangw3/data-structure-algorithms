/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    const arr = [null, null, null];

    for (let num of nums) {
        if (arr[0] === null || arr[0] < num) {
            arr[2] = arr[1];
            arr[1] = arr[0];
            arr[0] = num;
        }
        else if ((arr[1] === null || arr[1] < num) && !arr.includes(num)) {
            arr[2] = arr[1];
            arr[1] = num;
        }
        else if ((arr[2] === null || arr[2] < num) && !arr.includes(num)) {
            arr[2] = num;
        }
    }
    if (arr[2] === null) {
        return arr[0];
    }
    else {
        return arr[2];
    }

};