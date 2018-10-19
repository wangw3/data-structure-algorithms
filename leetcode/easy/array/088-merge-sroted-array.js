/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    while (m + n !== 0) {
        if (nums1[m - 1] >= nums2[n - 1] || n === 0) {
            nums1[m + n - 1] = nums1[m - 1];
            m--;
        }
        else {
            nums1[m + n - 1] = nums2[n - 1];
            n--;
        }
    }
};

// var merge = function(nums1, m, nums2, n) {
//     let i = 0
//     for(let val of nums2) {
//         while(nums1[i] <= val && i < m) i++
//         nums1.pop()
//         nums1.splice(i, 0, val)
//         m++
//     }
// };