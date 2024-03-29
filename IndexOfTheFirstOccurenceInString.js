/*
author: Keith Ginoel Gabinete
created: 29.03.2024 19:30:37
*/
/*
Given two strings needle and haystack, return the index of the first occurrence of 
needle in haystack, or -1 if needle is not part of haystack.

Example 1:
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.

Constraints:

    1 <= haystack.length, needle.length <= 104
    haystack and needle consist of only lowercase English characters.
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // returns the index of the first occurence of the substring in the string
    // returns -1 if the substring does not found in the given string
    return haystack.indexOf(needle);
};

let sampleHaystack = "sadbutsad";
let sampleNeedle = "sad";

console.log(strStr(sampleHaystack, sampleNeedle));