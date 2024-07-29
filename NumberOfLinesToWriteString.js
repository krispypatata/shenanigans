/*
author: Keith Ginoel Gabinete
created: 29 July 2024 11:19:41
*/
/*
https://leetcode.com/problems/number-of-lines-to-write-string/

806. Number of Lines To Write String
Easy

You are given a string s of lowercase English letters and an array widths denoting how many pixels wide each lowercase English letter is. Specifically, widths[0] is the width of 'a', widths[1] is the width of 'b', and so on.

You are trying to write s across several lines, where each line is no longer than 100 pixels. Starting at the beginning of s, write as many letters on the first line such that the total width does not exceed 100 pixels. Then, from where you stopped in s, continue writing as many letters as you can on the second line. Continue this process until you have written all of s.

Return an array result of length 2 where:

    result[0] is the total number of lines.
    result[1] is the width of the last line in pixels.

Example 1:

Input: widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "abcdefghijklmnopqrstuvwxyz"
Output: [3,60]
Explanation: You can write s as follows:
abcdefghij  // 100 pixels wide
klmnopqrst  // 100 pixels wide
uvwxyz      // 60 pixels wide
There are a total of 3 lines, and the last line is 60 pixels wide.

Example 2:

Input: widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "bbbcccdddaaa"
Output: [2,4]
Explanation: You can write s as follows:
bbbcccdddaa  // 98 pixels wide
a            // 4 pixels wide
There are a total of 2 lines, and the last line is 4 pixels wide.

Constraints:
    widths.length == 26
    2 <= widths[i] <= 10
    1 <= s.length <= 1000
    s contains only lowercase English letters.
*/


/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    // we'll use a map to store the width of each alphabet
    // this way we'll have an O(1) time complexity when getting the width of an alphabet
    const widthOfEachAlphabet = new Map();

    // define a variable to store the alphabet letters in lowercase and in order
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    // store the width of each alphabet in the map
    for (let i = 0; i < alphabet.length; i++) {
        widthOfEachAlphabet.set(alphabet[i], widths[i])
    }

    // will store the output needed by the problem
    let numberOfLines = 0;
    let lengthOfLastLine = 0;

    let currentLengthOfLine = 0; // will track the current length of the line in the loop
    for (let i = 0; i < s.length; i++) {
        // get the width of the current alphabet and add it to the current length of the line
        currentLengthOfLine += widthOfEachAlphabet.get(s[i]);

        // if the current length of the line exceeds 100, increment the number of lines and reset the current length of the line
        if (currentLengthOfLine > 100) {
            numberOfLines++;
            currentLengthOfLine = widthOfEachAlphabet.get(s[i]);
        }

        // if we reach the end of the string, increment the number of lines if the current length of the line is not 0
        if (i === s.length - 1) {
            if (currentLengthOfLine !== 0) {
                numberOfLines++;
            }
            lengthOfLastLine += currentLengthOfLine; // update the value of the length of the last line
        }
    }

    // return the result
    return [numberOfLines, lengthOfLastLine];
};


// sample run
console.log('Input: widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "abcdefghijklmnopqrstuvwxyz"'); // expected output: [3,60]
console.log('Output: ', numberOfLines([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "abcdefghijklmnopqrstuvwxyz"));
console.log();
console.log('Input: widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "bbbcccdddaaa"'); // expected output: [2,4]
console.log('Output: ', numberOfLines([4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "bbbcccdddaaa")); 
console.log();