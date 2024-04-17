/*
@author Keith Ginoel S. Gabinete
@date 2024-04-18 01:33:14
*/
/*
Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3^x.

Example 1:
Input: n = 27
Output: true
Explanation: 27 = 3^3

Example 2:
Input: n = 0
Output: false
Explanation: There is no x where 3x = 0.

Example 3:
Input: n = -1
Output: false
Explanation: There is no x where 3x = (-1).

Constraints:
    -231 <= n <= 231 - 1
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    // special case, 3^0 = 1
    if (n===1) {
        return true;
    }

    // generate numbers that are powers of three until we go beyond the absolute value of n
    let powerOfThree = 3;
    while (powerOfThree<=Math.abs(n)) {
        // if the power of three generated is equal to n
        if (powerOfThree===n) {
            return true;
        }

        // generate the next power of three
        powerOfThree *= 3;
    }

    // if test fails, then n is not a power of three
    return false;
}

// sample run
const sampleInput1 = 27; // 
const sampleInput2 = 0;
const sampleInput3 = -1;

console.log(`Is ${sampleInput1} a power of three? ${isPowerOfThree(sampleInput1)?'Yes':'No'}`); // Yes
console.log(`Is ${sampleInput2} a power of three? ${isPowerOfThree(sampleInput2)?'Yes':'No'}`); // No
console.log(`Is ${sampleInput3} a power of three? ${isPowerOfThree(sampleInput3)?'Yes':'No'}`); // No
