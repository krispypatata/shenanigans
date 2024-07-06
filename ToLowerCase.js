/*
author: Keith Ginoel Gabinete
created: 07 July 2024 00:33:34
*/
/*
https://leetcode.com/problems/to-lower-case/

709. To Lower Case
Easy

Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

Example 1:
Input: s = "Hello"
Output: "hello"

Example 2:
Input: s = "here"
Output: "here"

Example 3:
Input: s = "LOVELY"
Output: "lovely"

Constraints:
    1 <= s.length <= 100
    s consists of printable ASCII characters.
*/


/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    return s.toLowerCase();
};


// sample run
console.log('Input: s = "Hello"'); // expected output: "hello"
console.log('Output:', toLowerCase("Hello"));
console.log();
console.log('Input: s = "here"'); // expected output: "here"
console.log('Output:', toLowerCase("here"));
console.log();
console.log('Input: s = "LOVELY"'); // expected output: "lovely"
console.log('Output:', toLowerCase("LOVELY"));
