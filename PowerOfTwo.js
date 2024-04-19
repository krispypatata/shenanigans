/*
@author Keith Ginoel S. Gabinete
@date 2024-04-20 01:06:22
*/
/*
Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x.

Example 1:
Input: n = 1
Output: true
Explanation: 20 = 1

Example 2:
Input: n = 16
Output: true
Explanation: 24 = 16

Example 3:
Input: n = 3
Output: false

Constraints:
    -231 <= n <= 231 - 1
*/


/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    // special case: if n is 1, then it is a power of two (2^0)
    if (n===1) {
        return true;
    }

    // generate the powers of two that are less than or equal to n
    let powerOfTwo = 2; // will store the generated powers of two
    while(powerOfTwo<=n) {
        // if the current power of two is equal to n, then n is a power of two
        if (powerOfTwo===n) {
            return true;
        }

        // generate the next power of two
        powerOfTwo *= 2;
    }

    // if test fails, then n is not a power of two
    return false;
};


// sample run
const sampleInput1 = 1;
const sampleInput2 = 16;
const sampleInput3 = 3;

console.log(`Is ${sampleInput1} a power of two? ${isPowerOfTwo(sampleInput1)?'Yes':'No'}`); // Yes
console.log(`Is ${sampleInput2} a power of two? ${isPowerOfTwo(sampleInput2)?'Yes':'No'}`); // Yes
console.log(`Is ${sampleInput3} a power of two? ${isPowerOfTwo(sampleInput3)?'Yes':'No'}`); // No
