/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let a = x.toString().split('').reverse().join('');
    return x.toString() === a;
};

// function reverse(x) {
//     rev = 0;
//     for (var d = x % 10; d != 0 || x != 0; x = Math.floor(x / 10), d = x % 10) {
//         rev = rev * 10 + d;
//     }
//     return rev;
// }

// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function(x) {
//     if (x < 0) return false;
//     return x == reverse(x);
// };


