/*
author: Keith Ginoel Gabinete
created: 12.04.2024 04:44:04
*/
/*
Write a function that takes the binary representation of a positive integer and 
returns the number of set bits it has (also known as the Hamming weight).

Example 1:
Input: n = 11
Output: 3
Explanation:
The input binary string 1011 has a total of three set bits.

Example 2:
Input: n = 128
Output: 1
Explanation:
The input binary string 10000000 has a total of one set bit.

Example 3:
Input: n = 2147483645
Output: 30
Explanation:
The input binary string 1111111111111111111111111111101 has a total of thirty set bits.

Constraints:

    1 <= n <= 231 - 1

*/


/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    // will store the converted binary representation of the given number n
    let binaryRepresentation = "";

    // convert the number n to binary
    while (n/2 != 0) {
        // get the remainder and append it to the binary representation variable
        binaryRepresentation += n%2;

        // integer division
        n = Math.floor(n/2);
    }

    // count the number of 1s in the binary representation
    let count = 0;
    for (let i = 0; i<binaryRepresentation.length; i++) {
        if (binaryRepresentation[i]==='1') {
            count++;
        }
    }

    return count;
};


// sample run
const sampleInput1 = 11;
const sampleInput2 = 128;
const sampleInput3 = 2147483645;

console.log(hammingWeight(sampleInput1)); // 3
console.log(hammingWeight(sampleInput2)); // 1
console.log(hammingWeight(sampleInput3)); // 30
