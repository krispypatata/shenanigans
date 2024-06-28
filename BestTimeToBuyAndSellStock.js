/*
author: Keith Ginoel Gabinete
created: 29 June 2024 00:04:11
*/
/*
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
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
    /*
    To solve this problem, two variables are necessary:
    1. minPrice = the current minimum price of the stock
    2. maxProfit = the maximum profit that can be achieved by subtracting the current price of the stock with the minimum price
    */
    let minPrice = prices[0]; // initialize minPrice to the first element in the prices array
    let maxProfit = 0;

    // loop through the prices array starting from the second element since the first element is already used to initialize minPrice
    for (let i=1; i<prices.length; i++) {
        // if the current price is less than the minPrice, update the minPrice
        if (prices[i]<minPrice) {
            minPrice = prices[i];
            continue; // skip the rest of the loop and proceed to the next iteration to avoid unnecessary operations
        }

        // calculate the current profit by subtracting the minimum price from the current price
        const currentProfit = prices[i] - minPrice;

        // if the calculated profit is greater than the maxProfit, update the maxProfit
        if (currentProfit>maxProfit) maxProfit = currentProfit;
    }

    // return the result
    return maxProfit;
};


// sample run
const prices = [7,1,5,3,6,4]; 
console.log('Input: prices = ' + prices); // expected output: 5
console.log('Output: ' + maxProfit(prices)); 
console.log();
console.log('Input: prices = [7,6,4,3,1]'); // expected output: 0
console.log('Output: ' + maxProfit([7,6,4,3,1]));
console.log();
console.log('Input: prices = [2,4,1]'); // expected output: 2
console.log('Output: ' + maxProfit([2,4,1]));
