/*
author: Keith Ginoel Gabinete
created: 10 July 2024 15:48:46
*/
/*
https://leetcode.com/problems/array-partition/

561. Array Partition
Easy

Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

Example 1:
Input: nums = [1,4,3,2]
Output: 4
Explanation: All possible pairings (ignoring the ordering of elements) are:
1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
So the maximum possible sum is 4.

Example 2:
Input: nums = [6,2,6,5,1,2]
Output: 9
Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.

Constraints:
    1 <= n <= 10^4
    nums.length == 2 * n
    -10^4 <= nums[i] <= 10^4
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    // sort the array in non-decreasing order first for easier pairing
    nums.sort((a,b) => a-b);

    let sum = 0; // will store the maximized sum

    // loop through the array to get the sum of the minimum of each pair
    for (let i=0; i<nums.length; i++) {
        // since the array is sorted in non-decreasing order, the minimum of each pair will always be the first element of the pair
        // since javascript is 0-indexed, we can simply check if the index is even to get the minimum of each pair (e.g. 0, 2, 4, ...)
        // if the index is even, add the number to the sum
        if (i%2===0) sum += nums[i];
    }

    // alternatively, we can use the forEach method to loop through the array
    // however, this proves to be slower than the traditional for loop
    // nums.forEach((num, index) => {
    //     if (index%2===0) sum += num;
    // });

    // return the result
    return sum;
};


// sample run
console.log('Input: nums = [1,4,3,2]');
console.log('Output:', arrayPairSum([1,4,3,2])); // 4
console.log();
console.log('Input: nums = [6,2,6,5,1,2]');
console.log('Output:', arrayPairSum([6,2,6,5,1,2])); // 9
