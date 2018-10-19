/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let solution = [];
    for (let i = 0; i < numRows; i++) {
        let arr = [];
        for (let j = 0; j < i + 1; j++) {
            if (j === 0 || j === i) {
                arr.push(1);
            }
            else {
                arr.push(solution[i - 1][j - 1] + solution[i - 1][j]);
            }

        }
        solution.push(arr);
    }
    return solution;
};

// var generate = function (numRows) {
//     const result = [];

//     if (numRows < 1) {
//         return result;
//     }

//     result.push([1]);

//     for (let i = 1; i < numRows; i++) {
//         let row = [];
//         row.push(1);
//         for (let j = 1; j < i; j++) {
//             row.push(result[i - 1][j - 1] + result[i - 1][j]);
//         }
//         row.push(1);
//         result.push(row);
//     }

//     return result;

// };