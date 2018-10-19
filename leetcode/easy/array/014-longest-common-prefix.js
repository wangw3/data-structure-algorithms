/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let solution = '';
    let counter = 0;
    if (strs.length === 0) {
        return solution;
    }
    else {
        var firstStr = strs[0];
        while (strs.every((str) => str.slice(0, counter + 1) === solution + firstStr[counter])) {
            solution = solution + firstStr[counter];
            counter++;
            console.log(solution);
        }
        return solution;
    }
};

// var longestCommonPrefix = function(strs) {
//     if (strs === null || strs.length === 0) return "";
//     let commonPrefix = strs[0];

//     for(let index = 1; index < strs.length; index++){
//         let word = strs[index];
//         while(commonPrefix !== "" && word.indexOf(commonPrefix) !== 0){
//             commonPrefix = commonPrefix.substring(0, commonPrefix.length - 1);
//         }

//     }

//     return commonPrefix;
// };

