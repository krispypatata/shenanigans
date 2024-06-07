/*
author: Keith Ginoel Gabinete
created: 8 June 2024 00:21:08
*/
/*
Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

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
Input: columnTitle = "A"
Output: 1

Example 2:
Input: columnTitle = "AB"
Output: 28

Example 3:
Input: columnTitle = "ZY"
Output: 701

Constraints:
    1 <= columnTitle.length <= 7
    columnTitle consists only of uppercase English letters.
    columnTitle is in the range ["A", "FXSHRXW"].
*/


/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    const nCol = 26;                 // number of columns in Excel
    const asciiCodeForA = 65;        // ASCII code for 'A'

    let equivalentAsciiCodes = [];   // will store the equivalent ASCII codes of the characters in columnTitle

    // get the equivalent ASCII codes of the characters in columnTitle
    for (let i=0; i<columnTitle.length; i++) {
        equivalentAsciiCodes.splice(0, 0, columnTitle.charCodeAt(i)); // insert at head so that we won't have to reverse the array later
    }
    
    // calculate the column number
    let columnNumber = 0;
    for (let i=0; i<equivalentAsciiCodes.length; i++) {
        // example: for 'ZY'
        // Z = 26; Y = 25
        // column number of 'ZY':
        // 26 * (26^1) + 25 * (26^0) = 701
        columnNumber += (equivalentAsciiCodes[i] - asciiCodeForA + 1) * Math.pow(nCol, i);
    }

    // return the result
    return columnNumber;
};


// sample run
console.log('Input: columnTitle = "A"');
console.log('Output: ' + titleToNumber('A')); // expected output: 1
console.log();
console.log('Input: columnTitle = "AB"');
console.log('Output: ' + titleToNumber('AB')); // expected output: 28
console.log();
console.log('Input: columnTitle = "ZY"');
console.log('Output: ' + titleToNumber('ZY')); // expected output: 701
console.log();
console.log('Input: columnTitle = "FXSHRXW"');
console.log('Output: ' + titleToNumber('FXSHRXW')); // expected output: 2147483647
