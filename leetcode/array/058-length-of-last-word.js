/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    return s.length-1-s.lastIndexOf(' ');
};

// var lengthOfLastWord = function(s) {
//     let arr = s.trim().split(' ');
//     return arr[arr.length - 1].length;
// };