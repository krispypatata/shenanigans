/*
author: Keith Ginoel Gabinete
created: 14.04.2024 10:01:46
*/
/*
A phrase is a palindrome if, after converting all uppercase letters into
lowercase letters and removing all non-alphanumeric characters, it reads 
the same forward and backward. Alphanumeric characters include letters 
and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:
    1 <= s.length <= 2 * 105
    s consists only of printable ASCII characters.
*/


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // define variable for the alphanumeric characters
    const alphanumericCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let formattedS = '';    // will store the formatted string with only the alphanumeric characters

    // convert the string to lowercase and get all the alphanumeric characters
    s = s.toLowerCase();
    for (let i=0; i<s.length; i++) { 
        if (alphanumericCharacters.includes(s[i])) {
            formattedS += s[i];
        }
    }

    // compare each character of the formatted string with its corresponding character from its reversed version.
    for (let i=formattedS.length-1, j=0; i>=0; i--, j++) {
        // ff characters at the current positions are not equal, then the given string is not a palindrome.
        if (formattedS.charAt(i) !== formattedS.charAt(j)) {
            return false;
        }
    }

    // if the string passes all the tests
    return true;
};


// sample run
const sampleInput1 = "A man, a plan, a canal: Panama";
const sampleInput2 = "race a car";
const sampleInput3 = " ";

console.log(isPalindrome(sampleInput1));
console.log(isPalindrome(sampleInput2));
console.log(isPalindrome(sampleInput3));
