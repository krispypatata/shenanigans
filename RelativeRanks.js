/*
author: Keith Ginoel Gabinete
created: 06 July 2024 00:09:05
*/
/*
https://leetcode.com/problems/relative-ranks/

506. Relative Ranks
Easy

You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.

The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:
    The 1st place athlete's rank is "Gold Medal".
    The 2nd place athlete's rank is "Silver Medal".
    The 3rd place athlete's rank is "Bronze Medal".
    For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").

Return an array answer of size n where answer[i] is the rank of the ith athlete.

Example 1:
Input: score = [5,4,3,2,1]
Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].

Example 2:
Input: score = [10,3,8,9,4]
Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].

Constraints:
    n == score.length
    1 <= n <= 10^4
    0 <= score[i] <= 10^6
    All the values in score are unique.
*/


/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    // copy the score array into a new array to avoid modifying the original array
    let sortedScore = [...score];

    // sort the new array in descending order by value
    sortedScore.sort((a, b) => b-a)

    let ranks = []; // will store the ranks of the athletes

    // iterate through the score array
    for (let i=0; i<score.length; i++) {
        // get the index of the current score in the sortedScore array
        const rank = sortedScore.indexOf(score[i]);

        // if the index is greater than 2, then the rank is just the index plus 1
        if (rank>2) {
            ranks.push((rank+1).toString());
            continue;
        }

        // else if the index is less than or equal to 2, then the rank is either "Gold Medal", "Silver Medal", or "Bronze Medal"
        if (rank===0) {
            ranks.push("Gold Medal");
        } else if (rank===1) {
            ranks.push("Silver Medal");
        } else {
            ranks.push("Bronze Medal");
        }
    }

    // return the resulting array
    return ranks;
};


// sample run
console.log('Input: score = [5,4,3,2,1]'); // expected output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
console.log('Output:', findRelativeRanks([5,4,3,2,1]));
console.log();
console.log('Input: score = [10,3,8,9,4]'); // expected output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
console.log('Output:', findRelativeRanks([10,3,8,9,4]));
