/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    const arr = new Array(rowIndex + 1);
    for (let i = 0; i < rowIndex + 1; i++) {
        arr[i] = new Array(i + 1).fill(1);
        if (i >= 2) {
            for (let j = 1; j < i; j++) {
                arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
            }
        }
    }
    return arr[rowIndex];
};

// var getRow = function(rowIndex) {
//     var result = [];
//     result[0] = 1;
//     for(var i = 1 ; i < rowIndex+1 ; i++){            
//         if(i > 1){
//             for(var j = i-1 ; j > 0 ; j--)
//                 result[j] = result[j]+result[j-1];
//         }
//         result.push(1);
//     }
//     return result;
// };