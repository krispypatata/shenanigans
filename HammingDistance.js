/*
author: Keith Ginoel Gabinete
created: 27 June 2024 00:38:24
*/
/*
461. Hamming Distance
Easy

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, return the Hamming distance between them.

Example 1:
Input: x = 1, y = 4
Output: 2
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different.

Example 2:
Input: x = 3, y = 1
Output: 1

Constraints:
    0 <= x, y <= 231 - 1
*/


/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    /*
    Hamming distance is just the number of 1s in the bitwise XOR of x and y
    Example:
    x = 1, y = 4
    x = 0001
    y = 0100
    x XOR y = 0101
    The number of 1s in 0101 is 2
    */
    const bitwiseXOR = (x^y).toString(2); // in JavaScript, the bitwise XOR operator is ^

    // traverse through the characters of the string representation of the bitwise XOR and count the number of 1s
    let occurencesOf1 = 0;
    for (let i=0; i<bitwiseXOR.length; i++) {
        if (bitwiseXOR[i] === '1') occurencesOf1++;
    }

    // return the result
    return occurencesOf1;
};


// sample run
console.log('Input: x = 1, y = 4'); // expected output: 2
console.log('Output: ', hammingDistance(1, 4));
console.log();
console.log('Input: x = 3, y = 1'); // expected output: 1
console.log('Output: ', hammingDistance(3, 1));
