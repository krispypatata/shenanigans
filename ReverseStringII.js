/*
author: Keith Ginoel Gabinete
created: 22 July 2024 00:04:32
*/
/*
https://leetcode.com/problems/reverse-string-ii/

541. Reverse String II
Easy

Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

Example 1:
Input: s = "abcdefg", k = 2
Output: "bacdfeg"

Example 2:
Input: s = "abcd", k = 2
Output: "bacd"

Constraints:
    1 <= s.length <= 10^4
    s consists of only lowercase English letters.
    1 <= k <= 10^4
*/


/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let customReversedString = ''; // will store the resulting string

    let shouldReverseSubstring = true;  // toggle for reversing the substring
    let customSubstring = '';           // will store the current substring given the value of k
    for (let i=0; i<s.length; i++) {
        // if the toggle is on/true, then add the current character to the beginning of the substring
        if (shouldReverseSubstring) customSubstring = s[i] + customSubstring;
        // else, add the current character to the end of the substring
        else customSubstring += s[i];

        // if the current substring is already of length k (i+1 because i is 0-based and we've already added the current character to the substring in the previous if-else block), then reverse the substring and add it to the resulting string
        if ((i+1)%k ===0 || i===s.length-1) {
            shouldReverseSubstring = !shouldReverseSubstring;
            customReversedString += customSubstring;
            customSubstring = '';
        }
    }

    // return the resulting string
    return customReversedString;
};


// sample run
console.log('Input: s = "abcdefg", k = 2'); // expected output: "bacdfeg"
console.log('Output: ', reverseStr("abcdefg", 2));
console.log();
console.log('Input: s = "abcd", k = 2'); // expected output: "bacd"
console.log('Output: ', reverseStr("abcd", 2));
