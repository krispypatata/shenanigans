/*
author: Keith Ginoel Gabinete
created: 05 July 2024 23:15:18
*/
/*
https://leetcode.com/problems/reverse-words-in-a-string-iii/

557. Reverse Words in a String III
Easy

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:
Input: s = "Mr Ding"
Output: "rM gniD"

Constraints:
    1 <= s.length <= 5 * 104
    s contains printable ASCII characters.
    s does not contain any leading or trailing spaces.
    There is at least one word in s.
    All the words in s are separated by a single space.
*/


/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // convert the string s to a list of words
    const sAsList = s.split(' ');

    // reverse each word/element in the list
    const sAsListWithReversedElements = sAsList.map(
        element => element.split('').reverse().join('')
    );

    // transform the list with reversed elements to a string and return it
    return sAsListWithReversedElements.join(' ');
};


// sample run
console.log('Input: s = "Let\'s take LeetCode contest"'); // expected output: "s'teL ekat edoCteeL tsetnoc"
console.log('Output:', reverseWords("Let's take LeetCode contest"));
console.log();
console.log('Input: s = "Mr Ding"'); // expected output: "rM gniD"
console.log('Output:', reverseWords("Mr Ding"));
