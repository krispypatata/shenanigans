/* 
author: Keith Ginoel Gabinete
created: 24 June 2024 00:06:08
*/
/* 
392. Is Subsequence
Easy

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false

Constraints:
    0 <= s.length <= 100
    0 <= t.length <= 104
    s and t consist only of lowercase English letters.
*/


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    /* 
    To solve this problem, we need to iterate through the characters of t and check if the characters of s are present in t.
    If the characters of s are present in t in the same order as they appear in s, then s is a subsequence of t.
    */
    // initialize the iterator for s
    let sIterator = 0;

    // iterate through the characters of t
    for (let tIterator=0; tIterator<t.length; tIterator++) {
        // if the character at the current index of s is equal to the character at the current index of t, increment the iterator of s
        if (t[tIterator]===s[sIterator]) sIterator++;
    }

    // if the iterator of s reaches the length of s, then s is a subsequence of t
    // Note: we perform this check outside the loop in case s is an empty string
    if (sIterator===s.length) return true;

    // else, s is not a subsequence of t
    return false;
};


// sample run
console.log('Input: s = "abc", t = "ahbgdc"'); // expected: true
console.log('Output:', isSubsequence("abc", "ahbgdc"));
console.log();
console.log('Input: s = "axc", t = "ahbgdc"'); // expected: false
console.log('Output:', isSubsequence("axc", "ahbgdc"));
