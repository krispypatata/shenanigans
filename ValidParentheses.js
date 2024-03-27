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

// function to determine if the input string is valid given the rules defined above
var isValid = function(s) {
    let n = s.length; // to define the number of iterations statically

    for (let i=0; i<n; i++) {
        // remove an instance of a pair of parentheses, bracket, or curley brackets
        for (let j=0; j<s.length-1; j++) {
            if ( (s[j]=='(' && s[j+1]==')')  
                || (s[j]=='[' && s[j+1]==']')
                || (s[j]=='{' && s[j+1]=='}') ) 
            {
                s = remmoveChar(s, j+1);
                s = remmoveChar(s, j);
            }
        } 
    }

    // since all pairs of parentheses are already exhausted,
    // check if the updated string is empty
    // empty = valid; else invalid
    return s.length==0;
};

let sampleInput1 = "()[]{}";
let sampleInput2 = "([)]";
let sampleInput3 = "(([]){})";

console.log(isValid(sampleInput3));