/*
author: Keith Ginoel Gabinete
created: 15 July 2024 22:26:53
*/
/*
https://leetcode.com/problems/perfect-number/

507. Perfect Number
Easy

A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.

Given an integer n, return true if n is a perfect number, otherwise return false.

Example 1:
Input: num = 28
Output: true
Explanation: 28 = 1 + 2 + 4 + 7 + 14
1, 2, 4, 7, and 14 are all divisors of 28.

Example 2:
Input: num = 7
Output: false

Constraints:
    1 <= num <= 10^8
*/


/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let sum = 0;    // will store the sum of the divisors/factors of num

    // find the divisors of num
    // we only need to check up to num/2 since the divisors of num are at most num/2
    for (let integer=1; integer<=num/2; integer++) {
        // if integer is a divisor of num, add it to the sum
        if (num%integer===0) sum += integer;
    }

    // if the sum of the divisors is equal to num, then num is a perfect number
    // otherwise, num is not a perfect number
    return sum===num;
};


// sample run
console.log('Input: num = 28'); // Expected output: true
console.log('Output:', checkPerfectNumber(28));
console.log();
console.log('Input: num = 7'); // Expected output: false
console.log('Output:', checkPerfectNumber(7));
