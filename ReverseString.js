/*
@author Keith Ginoel S. Gabinete
@date 2024-04-19 02:57:54
*/
/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

Constraints:
    1 <= s.length <= 105
    s[i] is a printable ascii character.
*/


/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // swap characters from the start and end of the array until we reach the middle of the array
    for (let i=0, j=s.length-1; i<s.length/2; i++, j--) {
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    }
};

// sample run
// h e l l o
// o e l l h
// o l l e h

const sampleInputS1 = ["H","a","n","n","a","h"];
const sampleInputS2 = ["h","e","l","l","o"];

console.log("Before reversing:");
console.log(sampleInputS1);
console.log(sampleInputS2);

reverseString(sampleInputS1);
reverseString(sampleInputS2);

console.log("\nAfter reversing:");
console.log(sampleInputS1);
console.log(sampleInputS2);
