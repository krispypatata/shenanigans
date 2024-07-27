/*
author: Keith Ginoel Gabinete
created: 27 July 2024 15:46:13
*/
/*
https://leetcode.com/problems/shortest-distance-to-a-character/

821. Shortest Distance to a Character
Easy

Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the distance from index i to the closest occurrence of character c in s.

The distance between two indices i and j is abs(i - j), where abs is the absolute value function.

Example 1:
Input: s = "loveleetcode", c = "e"
Output: [3,2,1,0,1,0,0,1,2,2,1,0]
Explanation: The character 'e' appears at indices 3, 5, 6, and 11 (0-indexed).
The closest occurrence of 'e' for index 0 is at index 3, so the distance is abs(0 - 3) = 3.
The closest occurrence of 'e' for index 1 is at index 3, so the distance is abs(1 - 3) = 2.
For index 4, there is a tie between the 'e' at index 3 and the 'e' at index 5, but the distance is still the same: abs(4 - 3) == abs(4 - 5) = 1.
The closest occurrence of 'e' for index 8 is at index 6, so the distance is abs(8 - 6) = 2.

Example 2:
Input: s = "aaab", c = "b"
Output: [3,2,1,0]

Constraints:
    1 <= s.length <= 10^4
    s[i] and c are lowercase English letters.
    It is guaranteed that c occurs at least once in s.
*/


/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    const indicesOfC = []; // will store the indices of the character c in the string s
    const distances = [];  // will store the shortest distance of each character in the string s to an occurrence of the character c

    // get the indices of the character c in the string s
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) indicesOfC.push(i);
    }

    // iterate through the string s and get the shortest distance of each character to an occurrence of the character c
    for (let i = 0; i < s.length; i++) {
        // initialize the shortest distance to the absolute difference of the current index and the first occurrence of the character c
        let shortestDistance = Math.abs(i-indicesOfC[0]);

        // iterate through the rest of the occurrences of the character c and get the shortest distance
        for (let j = 1; j < indicesOfC.length; j++) {
            // if the current distance is shorter than the current shortest distance, update the shortest distance
            const distance = Math.abs(i-indicesOfC[j]);
            if ( distance < shortestDistance)  
                shortestDistance = distance;
        }

        // push the shortest distance for the current character to the distances array
        distances.push(shortestDistance);
    }

    // return the array of shortest distances
    return distances;
};


// sample run
console.log('Input: s = "loveleetcode", c = "e"'); // expected output: [3,2,1,0,1,0,0,1,2,2,1,0]
console.log('Output:', shortestToChar("loveleetcode", "e"));
console.log();
console.log('Input: s = "aaab", c = "b"'); // expected output: [3,2,1,0]
console.log('Output:', shortestToChar("aaab", "b"));
