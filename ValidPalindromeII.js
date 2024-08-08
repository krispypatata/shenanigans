/*
author: Keith Ginoel Gabinete
created: 02 August 2024 00:04:54
revised: 09 August 2024 00:58:03
*/
/*
https://leetcode.com/problems/valid-palindrome-ii/

680. Valid Palindrome II
Easy

Given a string s, return true if the s can be palindrome after deleting at most one character from it.

Example 1:

Input: s = "aba"
Output: true

Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.

Example 3:

Input: s = "abc"
Output: false

Constraints:
    1 <= s.length <= 10^5
    s consists of lowercase English letters.
*/


/**
 * Check if a given string is a palindrome given a start(normalPointer) and end (reversePointer) index
 * @param {string} s 
 * @return {boolean}
 */
var isPalindrome = function(s, normalPointer, reversePointer) {
    // behavior here is similar to the validPalindrome function, the only difference is that if we find a pair of characters that are not equal, we directly return false
    while (normalPointer < reversePointer) {
        if (s[normalPointer] !== s[reversePointer]) 
            return false;
        
        normalPointer++;
        reversePointer--;
    }

    return true;
}


/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    /*
        To solve this problem, we can use two pointers
        
        One pointer will point at the start of the string
        and the other pointer will point at the end of the string

        We will compare the characters of the string that the pointers are pointing to

        If we find a character that is not equal, we'll try to remove one of the characters and check if the remaining string is a palindrome
    */
   
    // Initialize pointers
    let normalPointer = 0;
    let reversePointer = s.length - 1;

    // Loop until the pointers meet
    while (normalPointer < reversePointer) {
        // Check if there's a mismatch
        if (s[normalPointer] !== s[reversePointer]) {
            // If there's a mismatch, we'll try to remove one of the characters and check if the remaining string is a palindrome
            // Fist, we'll try to remove the character pointed by the normalPointer  and check if the remaining string is a palindrome
            // Then, for the second scenario, we'll now try to remove the character pointed by the reversePointer and check if the remaining string is a palindrome
            // If either of the two scenarios return true, then the string is a palindrome
            // otherwise, it's not a palindrome
            return isPalindrome(s, normalPointer+1, reversePointer) || isPalindrome(s, normalPointer, reversePointer-1);
        }

        // Update the pointers
        normalPointer++;
        reversePointer--;
    }

    // No mismatch found, then the string is a palindrome
    return true;
};


// sample run
console.log('Input: s = "aba"'); // expected output: true
console.log('Output:', validPalindrome("aba"));
console.log();
console.log('Input: s = "abca"'); // expected output: true
console.log('Output:', validPalindrome("abca"));
console.log();
console.log('Input: s = "abc"'); // expected output: false
console.log('Output:', validPalindrome("abc"));
