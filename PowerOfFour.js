/*
@author Keith Ginoel S. Gabinete
@date 2024-04-18 12:36:40
*/
/*
Given an integer n, return true if it is a power of four. Otherwise, return false.

An integer n is a power of four, if there exists an integer x such that n == 4x.

Example 1:
Input: n = 16
Output: true

Example 2:
Input: n = 5
Output: false

Example 3:
Input: n = 1
Output: true

Constraints:
    -231 <= n <= 231 - 1
*/


/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    // compute for the logarithm of n to the base 4
    // round it to 10 decimal places (to avoid floating point errors)
    const exponent = (Math.log(n)/Math.log(4)).toFixed(10);

    // if the computed exponent is not an integer, then n is not a power of four
    if (exponent%1!=0) {
        return false;
    }

    // if test passes, then n is a power of four
    return true;
};


// sample run
const sampleInput1 = 16; // 
const sampleInput2 = 5;
const sampleInput3 = 1;

console.log(`Is ${sampleInput1} a power of four? ${isPowerOfFour(sampleInput1)?'Yes':'No'}`); // Yes
console.log(`Is ${sampleInput2} a power of four? ${isPowerOfFour(sampleInput2)?'Yes':'No'}`); // No
console.log(`Is ${sampleInput3} a power of four? ${isPowerOfFour(sampleInput3)?'Yes':'No'}`); // No
