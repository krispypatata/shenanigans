/*
author: Keith Ginoel Gabinete
created: 23 July 2024 17:56:32
*/
/*
https://leetcode.com/problems/self-dividing-numbers/

728. Self Dividing Numbers
Easy

A self-dividing number is a number that is divisible by every digit it contains.

    For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

A self-dividing number is not allowed to contain the digit zero.

Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].

Example 1:
Input: left = 1, right = 22
Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]

Example 2:
Input: left = 47, right = 85
Output: [48,55,66,77]

Constraints:
    1 <= left <= right <= 10^4
*/


/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let listOfSelfDividingNumbers = []; // will store the list of self-dividing numbers

    // iterate through the range [left, right] (this is inclusive)
    for (let i=left; i<=right; i++) {
        let num = i;    // let's store the current number in a variable so we can manipulate it
        let isSelfDividing = true;  // will determine if the current number is self-dividing
                                    // we will assume that the number is self-dividing until proven otherwise

        // iterate through the digits of the current number
        while (num > 0) {
            const digit = num%10;   // get the last digit of the number
    
            // if the original value of the number is not divisible by the current digit, then it is not self-dividing
            if (i%digit !== 0) {
                isSelfDividing = false;
                break; // no need to check the other digits
            }

            num = Math.floor(num/10); // update the number by removing the last digit
        }

        // if the number is self-dividing, then add it to our list of self-dividing numbers
        if (isSelfDividing) listOfSelfDividingNumbers.push(i);
    }

    // return the resulting list
    return listOfSelfDividingNumbers;
};


// sample run
console.log('Input: left = 1, right = 22'); // expected output: [1,2,3,4,5,6,7,8,9,11,12,15,22]
console.log('Output: ', selfDividingNumbers(1, 22));
console.log();
console.log('Input: left = 47, right = 85'); // expected output: [48,55,66,77]
console.log('Output: ', selfDividingNumbers(47, 85));
