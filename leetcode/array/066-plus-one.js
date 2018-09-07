/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    const len = digits.length;

    let i = 1;
    while (digits[digits.length - i] === 9) {
        if (i === len) {
            digits.unshift(0);
        }
        digits[digits.length - i] = 0;
        i++;
    }
    digits[digits.length - i]++;
    return digits;
};

// const plusOne = (nums) => {
//     let r = [];
//     let carry = 1;

//     for (let i = nums.length - 1; i >= 0; i--) {
//         if (nums[i] + carry >= 10) {
//             carry = 1;
//             r.unshift((nums[i] + carry) % 10);
//         } else {
//             r.unshift(nums[i] + carry);
//             carry = 0;
//         }
//     }

//     if (carry) {
//         r.unshift(carry);
//     }

//     return r;
// };