/*
@author Keith Ginoel S. Gabinete
@date 2024-04-25 12:55:38
*/
/*
Given an integer array nums, return true if any value appears at least 
twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

Constraints:
    1 <= nums.length <= 105
    -109 <= nums[i] <= 109
*/


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // get the unique numbers in the array
    // reference: https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
    const uniqueNums = [...new Set(nums)];

    // if the length of the original nums array is not equal to the length of the uniqueNums array, then there are duplicates
    if (nums.length!=uniqueNums.length) {
        return true;
    }

    // if test passes, then there are no duplicates
    return false;
};


// sample run
const sampleNums1 = [1,2,3,1]; // true
const sampleNums2 = [1,2,3,4]; // false

console.log(containsDuplicate(sampleNums1));
console.log(containsDuplicate(sampleNums2));
