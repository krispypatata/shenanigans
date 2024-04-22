/*
@author Keith Ginoel S. Gabinete
@date 2024-04-23 00:41:50
 */
/*
Given an integer num, repeatedly add all its digits until the 
result has only one digit, and return it.

Example 1:
Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.

Example 2:
Input: num = 0
Output: 0

Constraints:
    0 <= num <= 231 - 1
*/


/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let sum = 10; // initialize sum to 10 to enter the loop

    // loop until the sume is only one digit (0-9)
    while (sum>9) {
        // convert the number to a string and split it
        num = num.toString().split('');

        // get the sum of the digits
        sum = 0;
        for (let i=0; i<num.length; i++) {
            sum += parseInt(num[i]); // convert the string to an integer
        }
    
        // the new number is the sum of the digits
        num = sum;
    }

    // return the final value of sum
    return sum;
};


// sample run
const sampleNum1 = 38; // 3 + 8 = 11, 1 + 1 = 2
const sampleNum2 = 0; // 0

console.log(addDigits(sampleNum1));
console.log(addDigits(sampleNum2));
