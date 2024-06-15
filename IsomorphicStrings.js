/*
author: Keith Ginoel Gabinete
created: 16 June 2024 00:18:12
*/
/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:
Input: s = "egg", t = "add"
Output: true

Example 2:
Input: s = "foo", t = "bar"
Output: false

Example 3:
Input: s = "paper", t = "title"
Output: true

Constraints:
    1 <= s.length <= 5 * 104
    t.length == s.length
    s and t consist of any valid ascii character.
*/


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    // get the unique characters in s and t
    const uniqueCharsInS = [...new Set(s)];
    const uniqueCharsInT = [...new Set(t)];

    // if the number of unique characters in s and t are not equal, then they are not isomorphic
    if (uniqueCharsInS.length!=uniqueCharsInT.length) return false;

    // to check if the characters in s can be replaced to get t, we will replace the characters in t with the characters in s
    let newT = '';  // will store the new string t
    for (let i=0; i<s.length; i++) {
        // get the index of the currently traversed character in t from its list of unique characters
        // then get the character in the list of unique characters in s with the same index
        // with this, we can replace the character in t with the character in s
        newT += uniqueCharsInS[uniqueCharsInT.indexOf(t[i])];
    }

    // if the new string t is equal to the original string s, then they are isomorphic
    return s===newT;
};


// sample run
console.log('Input: s = "egg", t = "add"'); // Expected output: true
console.log('Output: ' + isIsomorphic('egg', 'add'));
console.log();
console.log('Input: s = "foo", t = "bar"'); // Expected output: false
console.log('Output: ' + isIsomorphic('foo', 'bar'));
console.log();
console.log('Input: s = "paper", t = "title"'); // Expected output: true
console.log('Output: ' + isIsomorphic('paper', 'title'));
