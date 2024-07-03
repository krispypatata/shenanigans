/*
author: Keith Ginoel Gabinete
created: 03 July 2024 13:00:39
*/
/*
https://leetcode.com/problems/license-key-formatting/

482. License Key Formatting
Easy

You are given a license key represented as a string s that consists of only alphanumeric characters and dashes. The string is separated into n + 1 groups by n dashes. You are also given an integer k.

We want to reformat the string s such that each group contains exactly k characters, except for the first group, which could be shorter than k but still must contain at least one character. Furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase.

Return the reformatted license key.

Example 1:
Input: s = "5F3Z-2e-9-w", k = 4
Output: "5F3Z-2E9W"
Explanation: The string s has been split into two parts, each part has 4 characters.
Note that the two extra dashes are not needed and can be removed.

Example 2:
Input: s = "2-5g-3-J", k = 2
Output: "2-5G-3J"
Explanation: The string s has been split into three parts, each part has 2 characters except the first part as it could be shorter as mentioned above.

Constraints:
    1 <= s.length <= 105
    s consists of English letters, digits, and dashes '-'.
    1 <= k <= 104
*/


/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    let sAsArr = [];   // will store the reformatted license key with correct groupings and uppercase letters
    let charCount = 0; // will track the number of characters in the current group

    // we will loop through the string s in reverse order to easily group the characters since the only group that could be shorter than k is the group with the first few characters
    for (let i=s.length-1; i>=0; i--) {
        if (s[i]==='-') continue;  // skip when the current character is a dash

        // convert the current character to uppercase and push it to the array
        // also increment the character count for the current group
        sAsArr.push(s[i].toUpperCase());
        charCount ++;

        // if the character count is equal to k, reset the character count to 0 and push a dash to the array
        if (charCount===k) {
            charCount = 0;
            sAsArr.push('-');
        }
    }

    // by now, the array sAsArr contains the reformatted license key in reverse order
    // check if the last character is a dash, if so, remove it
    if (sAsArr[sAsArr.length-1]==='-') sAsArr.pop();

    // convert the array to a string and reverse it to get the correct order
    return sAsArr.reverse().join('');
};


// sample run
console.log('Input: s = "5F3Z-2e-9-w", k = 4'); // expected output: "5F3Z-2E9W"
console.log('Output:', licenseKeyFormatting("5F3Z-2e-9-w", 4));
console.log();
console.log('Input: s = "2-5g-3-J", k = 2'); // expected output: "2-5G-3J"
console.log('Output:', licenseKeyFormatting("2-5g-3-J", 2));
console.log();
console.log('Input: s = "--a-a-a-a--", k = 2'); // expected output: "AA-AA"
console.log('Output:', licenseKeyFormatting("--a-a-a-a--", 2));
