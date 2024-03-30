/*
author: Keith Ginoel Gabinete
created: 31.03.2024 00:09:12
*/
/*
Given a string s consisting of words and spaces, return the length 
of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

Constraints:

    1 <= s.length <= 104
    s consists of only English letters and spaces ' '.
    There will be at least one word in s.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let listOfWords = [];

    // remove whitespaces using regex
    listOfWords = s.split(/\s+/);

    // find the last element and determine its length
    for (let i=listOfWords.length-1; i>=0; i--) {
        if (listOfWords[i].length>0) 
            return listOfWords[i].length;
    }
    
    return 0;
};

let sampleStr = "   fly me   to   the moon  ";

console.log(lengthOfLastWord(sampleStr));