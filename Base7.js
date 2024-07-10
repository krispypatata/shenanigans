/*
author: Keith Ginoel Gabinete
created: 10 July 2024 15:35:44
*/
/*
https://leetcode.com/problems/base-7/

504. Base 7
Easy

Given an integer num, return a string of its base 7 representation.

Example 1:
Input: num = 100
Output: "202"

Example 2:
Input: num = -7
Output: "-10"

Constraints:
    -10^7 <= num <= 10^7
*/


/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    // EASY SOLUTION USING JAVASCRIPT BUILT-IN METHODS
    // use the built-in toString method of the number object to convert the number to base 7
    // return num.toString(7);

    // ANOTHER SOLUTION WITHOUT USING BUILT-IN METHODS
    // if num is 0, return "0"
    if (num===0) return '0';

    // initialize the base 7 representation of the number
    let base7Representation = '';
    let sign = '';

    // if num is negative, set the sign to negative and convert num to its absolute value
    if (num<0) {
        sign = '-';
        num = Math.abs(num);
    }

    // repeatedly divide num by 7 and prepend the remainder to the base7 string
    // repeat until num is 0
    while (num>0) {
        // we're prepending the remainder to the base7 string representation because this process requires us to reverse the order of the remainders to get the correct base 7 representation
        // so to save time, we can just prepend the remainder to the base7 string representation instead of appending it and then reversing the string
        base7Representation = num%7 + base7Representation;

        // update num
        num = Math.floor(num/7);
    }

    // return the result with the correct sign
    return sign + base7Representation;
};


// sample run
console.log('Input: num = 100'); // expected: "202"
console.log('Output:', convertToBase7(100));
console.log();
console.log('Input: num = -7'); // expected: "-10"
console.log('Output:', convertToBase7(-7));
