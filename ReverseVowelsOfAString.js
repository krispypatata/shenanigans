/*
author: Keith Ginoel Gabinete
created: 18 June 2024 01:44:35
*/
/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:
Input: s = "hello"
Output: "holle"

Example 2:
Input: s = "leetcode"
Output: "leotcede"

Constraints:
    1 <= s.length <= 3 * 105
    s consist of printable ASCII characters.
*/


/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    // for easier element manipulation, we can convert the string s into an array of characters
    const sAsList = s.split('');

    // define a variable that contains all the vowels (both lower and upper case variants)
    const vowels = 'AaEeIiOoUu';

    let reversedVowels = []; // will store the reversed vowels
    for (let i=0; i<sAsList.length; i++) {
        const currentChar = sAsList[i]; // get the currently traversed character in sAsList

        // if the current character is a vowel, then push it to the reversedVowels array and replace the current character in sAsList with 0
        if (vowels.includes(currentChar)) {
            reversedVowels.push(currentChar);
            sAsList[i] = 0;
        }
    }

    // instead of reversing the reversedVowels array with the reverse() method, we can just use the pop() method to get the last element in the array then use each popped element to replace the 0s in sAsList
    // with this, the resulting sAsList will have the vowels reversed
    for (let i=0; i<sAsList.length; i++) {
        if (sAsList[i]===0) {
            sAsList[i] = reversedVowels.pop();
        }
    }

    // convert sAsList back to a string and return it
    return sAsList.join('');
};


// sample run
console.log('Input: s = "hello"'); // expected output: "holle"
console.log('Output:', reverseVowels("hello"));
console.log();
console.log('Input: s = "leetcode"'); // expected output: "leotcede"
console.log('Output:', reverseVowels("leetcode"));
