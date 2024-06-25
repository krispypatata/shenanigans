/*
author: Keith Ginoel Gabinete
created: 26 June 2024 01:38:09
*/
/*
476. Number Complement
Easy

The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

    For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.

Given an integer num, return its complement.

Example 1:
Input: num = 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.

Example 2:
Input: num = 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.

Constraints:
    1 <= num < 231
*/


/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    /*
    The solution involves three steps:
    1. Find the smallest power of two that is greater than num
    2. Subtract one from the smallest power of two that is greater than num to get a number with all bits set to 1
    3. Subtract num from the number with all bits set to 1 to get the complement of num
    */

    // define a variable to store the smallest power of two that is greater than num
    let ceilingPowerOfTwo = 2; // initialize to 2 since the smallest binary number can be represented by 2 bits

    // keep multiplying by 2 until we find the smallest power of two that is greater than num
    while (ceilingPowerOfTwo<=num) ceilingPowerOfTwo *= 2;

    // subtract 1 from the smallest power of two that is greater than num to get a number with all bits set to 1
    ceilingPowerOfTwo -= 1;

    // subtract num from the number with all bits set to 1 to get the complement of num
    return ceilingPowerOfTwo - num;
};


// sample run
console.log('Input: num = 5'); // expected output: 2
console.log('Output: ', findComplement(5));
console.log();
console.log('Input: num = 1'); // expected output: 0
console.log('Output: ', findComplement(1));