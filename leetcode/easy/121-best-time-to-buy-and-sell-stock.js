/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let diff = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if ((prices[j] - prices[i]) > diff) {
                diff = prices[j] - prices[i];
            }
        }
    }
    return diff;
};

// var maxProfit = function (prices) {
//     if (prices.length <= 1) return 0;

//     let buy = prices[0];
//     let profit = 0;

//     for (let day = 0; day < prices.length; day++) {
//         const currentPrice = prices[day];

//         if (currentPrice < buy) buy = currentPrice;

//         profit = Math.max(profit, currentPrice - buy);
//     }

//     return profit;
// };