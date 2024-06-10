/*
author: Keith Ginoel Gabinete
created: 11 June 2024 00:33:32
*/
/*
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.

Return true if n is a happy number, and false if not.

Example 1:
Input: n = 19
Output: true
Explanation:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1

Example 2:
Input: n = 2
Output: false

Constraints:
    1 <= n <= 231 - 1
*/


/**
 * @param {number} n 
 * @return {number}
 */
var getSumOfSquaredDigits = function(n) {
    let sum = 0;    // will store the sum of the squares of the digits of n

    // get the sum of the squares of the digits of n
    while (n>0) {
        const digit = n%10;
        sum += digit*digit;
        n = Math.floor(n/10);   // remove the last digit of n
    }

    // return the result
    return sum;
}
    

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let sumofSquaredDigits = new Set(); // will store the sum of the squares of the digits of n

    // check if n is a happy number
    // loop until n is 1 or the sum of the squares of the digits of n is already in the set
    while (!sumofSquaredDigits.has(n)) {
        // if the current value of n is 1, then n is a happy number
        if (n===1) return true; 

        // add the current value of n to the set
        sumofSquaredDigits.add(n);

        // set the new value of n to the sum of the squares of its digits 
        n = getSumOfSquaredDigits(n);
    }

    // else n is not a happy number
    return false;
};


// sample run
console.log("Input: 19"); // Expected output: true
console.log("Output: " + isHappy(19));
console.log();
console.log("Input: 2"); // Expected output: false
console.log("Output: " + isHappy(2));
console.log();
console.log("Input: 7"); // Expected output: true
console.log("Output: " + isHappy(7));
