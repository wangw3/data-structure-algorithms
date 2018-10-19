/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let maxThree = [0,0,0];
    let minThree = [0,0,0];
    for (let num of nums) {
        if (num > 0) {
            if (num >= maxThree[0]) {
                maxThree[2] = maxThree[1];
                maxThree[1] = maxThree[0];
                maxThree[0] = num;
            } else if (num >= maxThree[1]) {
                maxThree[2] = maxThree[1];
                maxThree[1] = num;
            } else if (num >= maxThree[2]) {
                maxThree[2] = num;
            }
        }
        
        if (num < 0) {
            if (num <= minThree[0]) {
                minThree[2] = minThree[1];
                minThree[1] = minThree[0];
                minThree[0] = num;
            } else if (num <= minThree[1]) {
                minThree[2] = minThree[1];
                minThree[1] = num;
            } else if (num <= minThree[2]) {
                minThree[2] = num;
            }
        }
    }

    if (maxThree[0] === 0) {
        return minThree[0] * minThree[1] * minThree[2];
    }
    else if (minThree[0] * minThree[1] > maxThree[1] * maxThree [2]) {
        return minThree[0] * minThree[1] * maxThree[0];
    }
    else {
        return maxThree[1] * maxThree [2] * maxThree[0];
    }
};
