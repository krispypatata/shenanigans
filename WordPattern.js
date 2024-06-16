/*
author: Keith Ginoel Gabinete
created: 17 June 2024 00:13:11
*/
/*
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

Example 1:
Input: pattern = "abba", s = "dog cat cat dog"
Output: true

Example 2:
Input: pattern = "abba", s = "dog cat cat fish"
Output: false

Example 3:
Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false

Constraints:
    1 <= pattern.length <= 300
    pattern contains only lower-case English letters.
    1 <= s.length <= 3000
    s contains only lowercase English letters and spaces ' '.
    s does not contain any leading or trailing spaces.
    All the words in s are separated by a single space.
*/


/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    // The solution here is kind of similar to the solution in IsomorphicStrings problem.

    // first, transform the string s into an array of words
    s = s.split(' ');

    // get the unique characters in pattern and s
    const uniqueCharsInPattern = [...new Set(pattern.split(''))];
    const uniqueCharsInS = [...new Set(s)];

    // if the number of unique characters in pattern and s are not equal, then they do not follow the same pattern
    if (uniqueCharsInPattern.length!=uniqueCharsInS.length) return false;

    // to check if the words in s follow the same pattern as the characters in pattern, we will replace the words in s with the characters in pattern
    let newS = '';  // will store the new string s
    for (let i=0; i<s.length; i++) {
        // to replace the word in s with the character in pattern, we need to follow some steps:
        // 1. get the index of the currently traversed word in s from its list of unique words
        // 2. get the character in the list of unique characters in pattern with the same index
        // 3. append the character to the new string s
        newS += uniqueCharsInPattern[uniqueCharsInS.indexOf(s[i])];
    }

    // if the new string s is equal to the original string pattern, then they follow the same pattern
    return pattern === newS;
};


// sample run
console.log('Input: pattern = "abba", s = "dog cat cat dog"'); // Expected output: true
console.log('Output: ' + wordPattern('abba', 'dog cat cat dog'));
console.log();
console.log('Input: pattern = "abba", s = "dog cat cat fish"'); // Expected output: false
console.log('Output: ' + wordPattern('abba', 'dog cat cat fish'));
console.log();
console.log('Input: pattern = "aaaa", s = "dog cat cat dog"'); // Expected output: false
console.log('Output: ' + wordPattern('aaaa', 'dog cat cat dog'));
