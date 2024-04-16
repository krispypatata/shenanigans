/*
author: Keith Ginoel Gabinete
created: 17.04.2024 01:33:14
*/
/*
Given an integer n, return an array ans of length n + 1 such that 
for each i (0 <= i <= n), ans[i] is the number of 1's in the 
binary representation of i.

Example 1:
Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10

Example 2:
Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101

Constraints:

    0 <= n <= 105
*/


/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let numberOfOnes = []; // will store the number of 1s in the binary representation of the numbers from 0 to n

    // traverse the numbers from 0 to n
    for (let i=0; i<=n; i++) {
        // get the binary representation of the current number
        let binaryRepresentation = i;
        binaryRepresentation = binaryRepresentation.toString(2);

        // count the number of 1s in the binary representation
        let oneCount = 0;
        for (let j=0; j<binaryRepresentation.length; j++) {
            if (binaryRepresentation[j]==1) {
                oneCount ++;
            }
        }

        // push the number of 1s counted to our storage array
        numberOfOnes.push(oneCount);
    }

    // return the result
    return numberOfOnes;
};


// sample run
const inputSampleN = 5; // [0,1,1,2,1,2]
console.log(inputSampleN + ' -> ' + countBits(inputSampleN));
