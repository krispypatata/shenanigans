/*
author: Keith Ginoel Gabinete
created: 19 June 2024 00:39:12
*/
/*
383. Ransom Note
Easy

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true

Constraints:
    1 <= ransomNote.length, magazine.length <= 105
    ransomNote and magazine consist of lowercase English letters.
*/


/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // convert the magazine string into an array of characters for easier element manipulation
    magazine = magazine.split('');

    // iterate through each character in ransomNote
    // if a charater is found in magazine, remove it from magazine
    // if the loop finishes, then ransomNote can be constructed from magazine
    // else, it is impossible to construct ransomNote from magazine
    for (let i=0; i<ransomNote.length; i++) {
        // get the index of the current character from ransomNote within the magazine array
        const indexOfCharInMagazine = magazine.indexOf(ransomNote[i]);

        // check if the retrived index is -1, if so, then the current character in ransomNote is not found in magazine
        if (indexOfCharInMagazine===-1) return false;

        // remove the current character from magazine
        magazine.splice(indexOfCharInMagazine, 1);
    }

    // loop finished, so ransomNote can be constructed from magazine
    return true;
};


// sample run
console.log('Input: ransomNote = "a", magazine = "b"'); // expected output: false
console.log('Output: ', canConstruct('a', 'b'));
console.log();
console.log('Input: ransomNote = "aa", magazine = "ab"'); // expected output: false
console.log('Output: ', canConstruct('aa', 'ab'));
console.log();
console.log('Input: ransomNote = "aa", magazine = "aab"'); // expected output: true
console.log('Output: ', canConstruct('aa', 'aab'));
