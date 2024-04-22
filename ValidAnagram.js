/*
@author Keith Ginoel S. Gabinete
@date 2024-04-23 00:33:36
*/
/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word 
or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false


Constraints:
    1 <= s.length, t.length <= 5 * 104
    s and t consist of lowercase English letters.
*/


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // if the lengths of the two strings are not equal, then it's automatically not an anagram
    if (s.length !== t.length) {
        return false;
    }

    // convert the strings to arrays and sort them
    s = s.split('').sort();
    t = t.split('').sort();

    // compare the elements of the two arrays
    for (let i=0; i<s.length; i++) {
        // if the elements are not equal, then it's not an anagram
        if (s[i] !== t[i]) {
            return false;
        }
    }

    // if all tests passed, then it's an anagram
    return true;
};


// sample run
// expected output: true
const sampleS1 = "anagram";
const sampleT1 = "nagaram";

// expected output: false
const sampleS2 = "rat";
const sampleT2 = "car";

console.log(isAnagram(sampleS1, sampleT1));
console.log(isAnagram(sampleS2, sampleT2));
