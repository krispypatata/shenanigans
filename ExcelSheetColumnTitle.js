/*
author: Keith Ginoel Gabinete
created: 10.04.2024 10:32:34
*/
/*
Given an integer columnNumber, return its corresponding column 
title as it appears in an Excel sheet.

For example:
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...

Example 1:
Input: columnNumber = 1
Output: "A"

Example 2:
Input: columnNumber = 28
Output: "AB"

Example 3:
Input: columnNumber = 701
Output: "ZY"

Constraints:
    1 <= columnNumber <= 2^31 - 1
*/

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    // defina a variable for the alphabet letters (A-Z)
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let columnTitle = '';   // will store the column title

    // loop while columnNumber is greater than 0
    while (columnNumber>0 ) {
        columnNumber-=1;    // decrement by 1 to match the 0 index

        // get the remainder of columnNumber divided by 26
        // then get the letter from the alphabet using the remainder
        columnTitle = alphabet[columnNumber%26] + columnTitle;

        // divide the columnNumber by 26 to get the next letter
        columnNumber = Math.floor(columnNumber/26);
    }

    // return the result
    return(columnTitle);
};


// sample run
const sampleColumnNumber1 = 1;      // A
const sampleColumnNumber2 = 27;     // AA
const sampleColumnNumber3 = 701;    // ZY
const sampleColumnNumber4 = 1001;   // ALM

console.log(convertToTitle(sampleColumnNumber1) + ` -> ${sampleColumnNumber1}`);
console.log(convertToTitle(sampleColumnNumber2) + ` -> ${sampleColumnNumber2}`);
console.log(convertToTitle(sampleColumnNumber3) + ` -> ${sampleColumnNumber3}`);
console.log(convertToTitle(sampleColumnNumber4) + ` -> ${sampleColumnNumber4}`);
