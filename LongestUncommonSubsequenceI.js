/*
author: Keith Ginoel Gabinete
created: 21 July 2024 20:18:14
*/
/*
https://leetcode.com/problems/longest-uncommon-subsequence-i/

521. Longest Uncommon Subsequence I
Easy

Given two strings a and b, return the length of the longest uncommon subsequence between a and b. If no such uncommon subsequence exists, return -1.

An uncommon subsequence between two strings is a string that is a subsequence of exactly one of them.

Example 1:
Input: a = "aba", b = "cdc"
Output: 3
Explanation: One longest uncommon subsequence is "aba" because "aba" is a subsequence of "aba" but not "cdc".
Note that "cdc" is also a longest uncommon subsequence.

Example 2:
Input: a = "aaa", b = "bbb"
Output: 3
Explanation: The longest uncommon subsequences are "aaa" and "bbb".

Example 3:
Input: a = "aaa", b = "aaa"
Output: -1
Explanation: Every subsequence of string a is also a subsequence of string b. Similarly, every subsequence of string b is also a subsequence of string a. So the answer would be -1.

Constraints:
    1 <= a.length, b.length <= 100
    a and b consist of lower-case English letters.
*/


/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    // if both strings are equal, then obviously there is no uncommon subsequence
    // just return -1 as per the problem statement
    if (a===b) return -1;

    // if the lengths of the strings are different, then the longer string is the longest uncommon subsequence since it is not a subsequence of the shorter string
    // for example, if a = "abc" and b = "abcd", then the longest uncommon subsequence is "abcd"
    return a.length > b.length ? a.length : b.length;
};


// sample run
console.log('Input: a = "aba", b = "cdc"'); // expected output: 3
console.log('Output: ', findLUSlength("aba", "cdc"));
console.log();
console.log('Input: a = "aaa", b = "bbb"'); // expected output: 3
console.log('Output: ', findLUSlength("aaa", "bbb"));
console.log();
console.log('Input: a = "aaa", b = "aaa"'); // expected output: -1
console.log('Output: ', findLUSlength("aaa", "aaa"));
