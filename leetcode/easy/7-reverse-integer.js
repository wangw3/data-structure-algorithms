/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function(x) {
//     let solution;
//     if(x < 0) {
//         solution = String(x).split('').reverse();
//         solution.pop();
//         solution = 0 - Number(solution.join(''));
//     }
//     else {
//         solution = Number(String(x).split('').reverse().join(''));
//     }
    
//     return solution;
// };

var reverse = function(x) {
    var res = 0;
    while(x){
        res = res*10 +x%10;
        x = parseInt(x/10);  
    }
    return res;
}