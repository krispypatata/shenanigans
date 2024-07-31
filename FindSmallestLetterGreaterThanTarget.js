/*
author: Keith Ginoel Gabinete
created: 01 August 2024 00:46:18
*/
/*
https://leetcode.com/problems/find-smallest-letter-greater-than-target/

744. Find Smallest Letter Greater Than Target
Easy

You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

Example 1:

Input: letters = ["c","f","j"], target = "a"
Output: "c"
Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.

Example 2:

Input: letters = ["c","f","j"], target = "c"
Output: "f"
Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.

Example 3:

Input: letters = ["x","x","y","y"], target = "z"
Output: "x"
Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].

Constraints:
    2 <= letters.length <= 10^4
    letters[i] is a lowercase English letter.
    letters is sorted in non-decreasing order.
    letters contains at least two different characters.
    target is a lowercase English letter.
*/


/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    // initialize the smallest letter greater than target to '{' which is the next character after 'z' based on ASCII table
    let smallestLetterGreaterThanTarget = '{';

    // traverse through the characters in the letters array
    letters.forEach((char) => {
        // if the character is greater than the target and less than the current smallest letter greater than target
        // then update the smallest letter greater than target
        if ((char > target) && (char < smallestLetterGreaterThanTarget))
            smallestLetterGreaterThanTarget = char;
    });

    // check if the value of smallest letter greater than remains the same
    // if it does, then that means there is no character greater than target (most probably 'z')
    // so just return the first character in the letters array
    if (smallestLetterGreaterThanTarget === '{')
        return letters[0];

    // return the result
    return smallestLetterGreaterThanTarget;
};


// sample run
console.log('Input: letters = ["c","f","j"], target = "a"'); // expected output: "c"
console.log('Output:', nextGreatestLetter(["c","f","j"], "a"));
console.log();
console.log('Input: letters = ["c","f","j"], target = "c"'); // expected output: "f"
console.log('Output:', nextGreatestLetter(["c","f","j"], "c"));
console.log();
console.log('Input: letters = ["x","x","y","y"], target = "z"'); // expected output: "x"
console.log('Output:', nextGreatestLetter(["x","x","y","y"], "z"));
