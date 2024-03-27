/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.


Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Constraints:

    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.

*/

/**
 * @param {string} s
 * @return {boolean}
 */

// remove a certain character from a given String at the specified index
var remmoveChar = function(s, indexToRemove) {
    // transform the string into an array
    let sArray = s.split("");

    // remove the character at the specified index
    sArray.splice(indexToRemove, 1);
    
    // convert the array back to a string
    return sArray.join("");
}

// remove instances of a pair of characters from a given string 
var removePair = function(s, firstChar, secondChar) {
    // find an instance of the first character in the given pair
    for (let i=0; i<s.length; i++) {
        if (s[i] == firstChar) {
            // find its paired counterpart
            for (let j=i+1; j<s.length; j++) {
                if (s[j] == secondChar) {
                    // remove the pair
                    s = remmoveChar(s, j);
                    s = remmoveChar(s, i);
                    break;
                }
            }
        }
    }

    // return the updated string
    return s;
}

// function to determine if the input string is valid given the rules defined above
var isValid = function(s) {
    // removing instances of '()' 
    s = removePair(s, '(', ')');

    // removing instances of '[]' 
    s = removePair(s, '[', ']');

    // removing instances of '{}' 
    s = removePair(s, '{', '}');

    // since all pairs of parentheses are already exhausted,
    // check if the updated string is empty
    // empty = valid; else invalid
    return s.length==0;
};

let sampleInput1 = "([)]";

console.log(isValid(sampleInput1));