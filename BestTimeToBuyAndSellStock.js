/*
author: Keith Ginoel Gabinete
created: 7 June 2024 23:34:32
*/
/*
Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

 

Constraints:

    1 <= prices.length <= 105
    0 <= prices[i] <= 104
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // find the index of the minimum price
    let indexOfMin = 0;
    for (let i=1; i<prices.length; i++) {
        if (prices[i] < prices[indexOfMin]) {
            indexOfMin = i;
        }
    }

    // find the index of the maximum price starting from the index of the minimum price
    let indexOfMax = indexOfMin;
    for (let i=indexOfMin; i<prices.length; i++) {
        if (prices[i] > prices[indexOfMax]) {
            indexOfMax = i;
        }
    }

    // calculate the maximum profit
    const maxProfit = prices[indexOfMax] - prices[indexOfMin];

    // return the result
    return maxProfit;
};

// sample run
const prices = [7,1,5,3,6,4]; 
console.log('Input: prices = ' + prices);
console.log('Output: ' + maxProfit(prices)); // expected output: 5