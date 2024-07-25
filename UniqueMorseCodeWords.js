/*
author: Keith Ginoel Gabinete
created: 25 July 2024 13:39:34
*/
/*
https://leetcode.com/problems/unique-morse-code-words/

804. Unique Morse Code Words
Easy

International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

    'a' maps to ".-",
    'b' maps to "-...",
    'c' maps to "-.-.", and so on.

For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

    For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.

Return the number of different transformations among all words we have.

Example 1:
Input: words = ["gin","zen","gig","msg"]
Output: 2
Explanation: The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."
There are 2 different transformations: "--...-." and "--...--.".

Example 2:
Input: words = ["a"]
Output: 1

Constraints:
    1 <= words.length <= 100
    1 <= words[i].length <= 12
    words[i] consists of lowercase English letters.
*/


/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    // this is just the list of morse code representations given in the problem
    const morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

    // define an array for the alphabet letters
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    // we can use a map to store the morse code representation of each letter as this offers O(1) time complexity for search operations
    const morseCodeMap = {};

    // populate the map
    for (let i=0; i<alphabet.length; i++) {
        morseCodeMap[alphabet[i]] = morseCode[i];
    }

    // this set will store the unique transformations needed by the problem
    // since we're dealing with unique transformations, we can use a set to store the transformations instead of an array to avoid duplicates
    let uniqueTransformations = new Set();

    // iterate through the words and get the morse code representation of each word
    for (let i=0; i<words.length; i++) {
        let morseCodeRepresentation = '';

        // get the morse code representation of each letter in the word
        for (let j=0; j<words[i].length; j++) {
            morseCodeRepresentation += morseCodeMap[words[i][j]];
        }
            
        // add the morse code representation to the set
        uniqueTransformations.add(morseCodeRepresentation);
    }

    // return the number of unique transformations/number of elements in the set
    return uniqueTransformations.size;
};


// sample run
console.log('Input: words = ["gin","zen","gig","msg"]'); // expected output: 2
console.log('Output:', uniqueMorseRepresentations(["gin","zen","gig","msg"]));
console.log();
console.log('Input: words = ["a"]'); // expected output: 1
console.log('Output:', uniqueMorseRepresentations(["a"]));
