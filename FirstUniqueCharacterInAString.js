/*
author: Keith Ginoel Gabinete
created: 20 June 2024 00:10:00
*/
/*
387. First Unique Character in a String
Easy

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1

Constraints:
    1 <= s.length <= 105
    s consists of only lowercase English letters.
*/


/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // convert the string s into an array of characters for easier element manipulation
    const sAsList = s.split('');

    // create a map that will store the occurences of each element in s
    let occurencesOfElementinS = new Map();
    
    // iterate through each character in sAsList
    sAsList.forEach( (charAtS) => {
        // if the character is already in the map, increment its count
        if (occurencesOfElementinS.has(charAtS)) {
            const count = occurencesOfElementinS.get(charAtS);
            occurencesOfElementinS.set(charAtS, count+1);
        }
        // else, add the character to the map and initialize its count to 1
        else {
            occurencesOfElementinS.set(charAtS, 1);
        }
    });

    // iterate through the map and return the index of the first character with a count of 1
    for (const [charAtS, count] of occurencesOfElementinS.entries()) {
        if (count === 1) return sAsList.indexOf(charAtS);
    }
    
    // if the loop finishes, then there is no character with a count of 1 in s
    // return -1 to indicate that there is no non-repeating character in s
    return -1;
};


// sample run
console.log('Input: s = "leetcode"'); // expected output: 0
console.log('Output:', firstUniqChar('leetcode'));
console.log();
console.log('Input: s = "loveleetcode"'); // expected output: 2
console.log('Output:', firstUniqChar('loveleetcode'));
console.log();
console.log('Input: s = "aabb"'); // expected output: -1
console.log('Output:', firstUniqChar('aabb'));
