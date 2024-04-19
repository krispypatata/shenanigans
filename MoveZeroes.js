/*
@author Keith Ginoel S. Gabinete
@date 2024-04-20 01:18:06
*/
/*
Given an integer array nums, move all 0's to the end of it while maintaining 
the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

Constraints:
    1 <= nums.length <= 104
    -231 <= nums[i] <= 231 - 1
*/


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // iterate through the array starting from the last element
    for (let i=nums.length-1; i>=0; i--) {
        // if the current element is 0, move it to the end of the array
        if (nums[i]===0) {
            // swap the current element with its right neighbor until it reaches the end of the array
            for (let j=i; j<nums.length-1; j++) {
                let temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
            } 
        }
    }
};


// sample run
const sampleNums1 = [0,1,0,3,12]; // [1,3,12,0,0]
const sampleNums2 = [0];             // [0]

console.log("Before moving zeroes:");
console.log(sampleNums1);
console.log(sampleNums2);

moveZeroes(sampleNums1);
moveZeroes(sampleNums2);

console.log("\nAfter moving zeroes:");
console.log(sampleNums1);
console.log(sampleNums2);
