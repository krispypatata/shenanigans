/*
author: Keith Ginoel Gabinete
created: 03 August 2024 23:35:41
revised: 09 August 2024 00:07:15
*/
/*
https://leetcode.com/problems/largest-perimeter-triangle/

976. Largest Perimeter Triangle
Easy

Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

Example 1:

Input: nums = [2,1,2]
Output: 5
Explanation: You can form a triangle with three side lengths: 1, 2, and 2.

Example 2:

Input: nums = [1,2,1,10]
Output: 0
Explanation: 
You cannot use the side lengths 1, 1, and 2 to form a triangle.
You cannot use the side lengths 1, 1, and 10 to form a triangle.
You cannot use the side lengths 1, 2, and 10 to form a triangle.
As we cannot use any three side lengths to form a triangle of non-zero area, we return 0.

Constraints:
    3 <= nums.length <= 10^4
    1 <= nums[i] <= 10^6
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    // sort the array in non-decreasing order
    // we do this so that we can easily find the largest perimeter by checking if the largest 3 consecutive elements of the array can form a triangle
    // if it can, then that means their sum is the largest possible perimeter of a triangle
    // however, it the largest 3 consecutive elements cannot form a triangle, then we can move to the next largest 3 consecutive elements
    // we do this until we find the largest possible perimeter of a triangle
    // if we cannot find any 3 consecutive elements that can form a triangle, then we can simply return 0 - indicating that it is impossible to form a triangle with the given array
    nums.sort((a, b) => a - b);

    let maxPerimeter = 0; // initialize the variable that will hold the largest perimeter of a triangle

    // loop through the array starting from the last element (largest possible side of a triangle)
    for (let i = nums.length - 1; i >= 2; i--) {
        // get the current largest 3 consecutive elements
        const a = nums[i - 2];
        const b = nums[i - 1];
        const c = nums[i];
        
        // check if the 3 consecutive elements can form a triangle
        // if it is, then we can just simply get their sum and that will be the largest perimeter of a triangle
        if ((a + b) > c) {
            maxPerimeter = a + b + c;
            break; // stop the loop since we already found the largest possible perimeter of a triangle (since, again, the array is sorted in non-decreasing order)
        }
    }

    // return the result
    return maxPerimeter;
};


// sample run
console.log('Input: nums = [2,1,2]'); // expected output: 5
console.log('Output:', largestPerimeter([2,1,2]));
console.log();
console.log('Input: nums = [1,2,1,10]'); // expected output: 0
console.log('Output:', largestPerimeter([1,2,1,10]));
console.log()
console.log('Input: nums = [2, 3, 3, 6]');; // expected output = 8
console.log('Output:', largestPerimeter([ 2,3,3,6 ]));
