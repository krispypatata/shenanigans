/*
author: Keith Ginoel Gabinete
created: 11 June 2024 00:46:01
*/
/*
An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

Given an integer n, return true if n is an ugly number.

Example 1:
Input: n = 6
Output: true
Explanation: 6 = 2 × 3

Example 2:
Input: n = 1
Output: true
Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.

Example 3:
Input: n = 14
Output: false
Explanation: 14 is not ugly since it includes the prime factor 7.

Constraints:
    (-2)^31 <= n <= 2^31 - 1
*/


/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n==0) return false; // check first if n is 0 so that we can avoid an infinite loop

    // divide n by 2, 3, and 5 until n is no longer divisible by them
    while (n%2==0) n = n/2;
    while (n%3==0) n = n/3;
    while (n%5==0) n = n/5;

    // if the final value of n is not 1, then n is not an ugly number
    if (n!=1) return false;
    
    // otherwise, n is an ugly number
    return true;
};


// sample run
console.log('Input: n = 6'); // Expected output: true
console.log('Output:', isUgly(6));
console.log();
console.log('Input: n = 1'); // Expected output: true
console.log('Output:', isUgly(1));
console.log();
console.log('Input: n = 14'); // Expected output: false
console.log('Output:', isUgly(14));
