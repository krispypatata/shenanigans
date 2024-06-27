/*
author: Keith Ginoel Gabinete
created: 28 June 2024 00:00:02
*/
/*
500. Keyboard Row
Easy

Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard.

In the American keyboard:
    the first row consists of the characters "qwertyuiop",
    the second row consists of the characters "asdfghjkl", and
    the third row consists of the characters "zxcvbnm".

Example 1:
Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]

Example 2:
Input: words = ["omk"]
Output: []

Example 3:
Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"]

Constraints:
    1 <= words.length <= 20
    1 <= words[i].length <= 100
    words[i] consists of English letters (both lowercase and uppercase). 
*/


/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    // define sets for each row of the American keyboard
    // we use sets since operations in sets are more efficient than arrays
    const firstRow = new Set("qwertyuiop".split(''));
    const secondRow = new Set("asdfghjkl".split(''));
    const thirdRow = new Set("zxcvbnm".split(''));

    let outputArray = []; // will store the words that can be typed using letters of the alphabet on only one row of American keyboard

    // iterate through each word in the input array
    words.forEach((str, index, arr) => {
        // convert the word to lowercase and into an array of characters
        const charsInStr = str.toLowerCase().split('');

        // check if all characters in the word are in the same row of the American keyboard
        // if so, add the word to the output array
        if (charsInStr.every(element => firstRow.has(element)) 
            || charsInStr.every(element => secondRow.has(element)) 
            || charsInStr.every(element => thirdRow.has(element)) 
        ) outputArray.push(str);
    });

    // return the resulting array
    return outputArray;
};


// sample run
console.log('Input: words = ["Hello","Alaska","Dad","Peace"]'); // expected output: ["Alaska","Dad"]
console.log('Output: ', findWords(["Hello","Alaska","Dad","Peace"]));
console.log();
console.log('Input: words = ["omk"]'); // expected output: []
console.log('Output: ', findWords(["omk"]));
console.log();
console.log('Input: words = ["adsdf","sfd"]'); // expected output: ["adsdf","sfd"]
console.log('Output: ', findWords(["adsdf","sfd"]));
