/*
author: Keith Ginoel Gabinete
created: 28 July 2024 02:42:48
*/
/*
https://leetcode.com/problems/goat-latin/

824. Goat Latin
Easy

You are given a string sentence that consist of words separated by spaces. Each word consists of lowercase and uppercase letters only.

We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.) The rules of Goat Latin are as follows:

    If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word.
        For example, the word "apple" becomes "applema".
    If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the end, then add "ma".
        For example, the word "goat" becomes "oatgma".
    Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
        For example, the first word gets "a" added to the end, the second word gets "aa" added to the end, and so on.

Return the final sentence representing the conversion from sentence to Goat Latin.

Example 1:
Input: sentence = "I speak Goat Latin"
Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"

Example 2:
Input: sentence = "The quick brown fox jumped over the lazy dog"
Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"

Constraints:
    1 <= sentence.length <= 150
    sentence consists of English letters and spaces.
    sentence has no leading or trailing spaces.
    All the words in sentence are separated by a single space.
*/


/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    // define a set of vowels
    // we use a set to make the lookup of vowels faster since the time complexity of searching an element in a set is O(1) while in an array it's O(n)
    const vowels = new Set('aAeEiIoOuU'.split(''));

    // extract the words from the sentence
    const words = sentence.split(' ');

    // iterate through the words and apply the rules of Goat Latin
    const goatLatinWords = words.map((word, index) => {
        // if the word starts with a consonant, move the first letter to the end
        if (!vowels.has(word[0])) {
            word += word[0];
            word = word.slice(1);
        }

        // append 'ma' to the end of the word
        // also, add 'a' to the end of the word based on its index in the sentence (1-based indexing)
        word += 'ma' + 'a'.repeat(index + 1);

        // return the modified word
        return word;
    });

    // since goatLatinWords is an array, we join the elements to form the Goat Latin sentence
    // then, just return the result
    return goatLatinWords.join(' ');
};


// sample run
console.log('Input: sentence = "I speak Goat Latin"'); // expected output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
console.log('Output: ', toGoatLatin('I speak Goat Latin'));
console.log();
console.log('Input: sentence = "The quick brown fox jumped over the lazy dog"'); // expected output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
console.log('Output: ', toGoatLatin('The quick brown fox jumped over the lazy dog'));
