/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let diff = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if ((prices[j] - prices[i]) > 0 && prices[i] < prices[i + 1]) {
                diff = diff + prices[j] - prices[i];
                j = prices.length - 1;
            }
        }
    }
    return diff;
};

// var maxProfit = function(prices) {
//     let profit = 0
    
//     for (let i = 0; i < prices.length; i++) {
//         if (prices[i+1] > prices[i]) {
//             profit += prices[i + 1] - prices[i]
//         }
//     }
    
//     return profit
// };