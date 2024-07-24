/*
author: Keith Ginoel Gabinete
created: 24 July 2024 20:25:07
*/
/*
https://leetcode.com/problems/jewels-and-stones/

771. Jewels and Stones
Easy

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:
Input: jewels = "z", stones = "ZZ"
Output: 0

Constraints:
    1 <= jewels.length, stones.length <= 50
    jewels and stones consist of only English letters.
    All the characters of jewels are unique.
*/


/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    // convert the string of jewels into a set of characters
    // we use set instead of array to make the search faster since set has O(1) time complexity for search operations while array has O(n)
    let jewelTypes = new Set(jewels.split(''));

    // count the number of stones that are jewels
    let nStonesThatAreJewels = 0;
    for (let i=0; i<stones.length; i++) {
        if (jewelTypes.has(stones[i])) nStonesThatAreJewels++;
    }

    // return the result
    return nStonesThatAreJewels;
};


// sample run
console.log('Input: jewels = "aA", stones = "aAAbbbb"'); // expected output: 3
console.log('Output:', numJewelsInStones("aA", "aAAbbbb"));
console.log();
console.log('Input: jewels = "z", stones = "ZZ"'); // expected output: 0
console.log('Output:', numJewelsInStones("z", "ZZ"));
