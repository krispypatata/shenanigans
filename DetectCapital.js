/*
author: Keith Ginoel Gabinete
created: 16 July 2024 17:15:49
*/
/*
https://leetcode.com/problems/detect-capital/

520. Detect Capital
Easy

We define the usage of capitals in a word to be right when one of the following cases holds:
    All letters in this word are capitals, like "USA".
    All letters in this word are not capitals, like "leetcode".
    Only the first letter in this word is capital, like "Google".

Given a string word, return true if the usage of capitals in it is right.

Example 1:
Input: word = "USA"
Output: true

Example 2:
Input: word = "FlaG"
Output: false

Constraints:
    1 <= word.length <= 100
    word consists of lowercase and uppercase English letters.
*/


/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    // Valid Case 1: All letters in the word are in uppercase
    if (word === word.toLowerCase()) return true;

    // Valid Case 2: All letters in the word are in lowercase
    if (word === word.toUpperCase()) return true;

    // Valid Case 3: Only the first letter in the word is in uppercase and the rest are in lowercase
    if (word[0] === word[0].toUpperCase() && word.substring(1) === word.substring(1).toLowerCase()) return true;

    // if the word does not satisfy any of the valid cases, then the usage of capitals in the word is incorrect
    return false;
};


// sample run
console.log('Input: word = "USA"'); // Expected output: true
console.log('Output:', detectCapitalUse('USA'));
console.log();
console.log('Input: word = "FlaG"'); // Expected output: false
console.log('Output:', detectCapitalUse('FlaG'));
