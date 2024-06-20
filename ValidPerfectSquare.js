/*
author: Keith Ginoel Gabinete
created: 21 June 2024 01:55:17
*/
/*
367. Valid Perfect Square
Easy

Given a positive integer num, return true if num is a perfect square or false otherwise.

A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

You must not use any built-in library function, such as sqrt.

Example 1:
Input: num = 16
Output: true
Explanation: We return true because 4 * 4 = 16 and 4 is an integer.

Example 2:
Input: num = 14
Output: false
Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.

Constraints:
    1 <= num <= 2^31 - 1
*/


/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let integer = 0;        // will store the integer to be squared; we'll start from 0
    let squaredInteger = 0; // will store the square of the current integer; we'll start from 0
    
    // keep squaring the integer until the squared integer is greater than or equal to num
    while (squaredInteger<num) {
        squaredInteger = integer * integer;
        integer ++;
    }

    // if the squared integer is greater than num, then num is not a perfect square
    if (squaredInteger>num) return false;

    // else, num is a perfect square
    return true;
};


// sample run
console.log('Input: num = 16'); // Expected output: true
console.log('Output:', isPerfectSquare(16));
console.log();
console.log('Input: num = 14'); // Expected output: false
console.log('Output:', isPerfectSquare(14));
