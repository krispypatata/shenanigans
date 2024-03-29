/*
author: Keith Ginoel Gabinete
created: 30.03.2024 00:44:01
*/
/*
Given a sorted array of distinct integers and a target value, 
return the index if the target is found. If not, return the index 
where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4

Constraints:

    1 <= nums.length <= 104
    -104 <= nums[i] <= 104
    nums contains distinct values sorted in ascending order.
    -104 <= target <= 104

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // find the position where the target value is found or, 
    // if not found, the perfect position it should be placed in
    for (let i=0; i<nums.length; i++) {
        if (nums[i]>=target) {
            return i;
        } 
    }

    // no position fits the target value; it needs to be appended
    return nums.length;
};

let sampleArray = [1, 3, 5, 6];
console.log(searchInsert(sampleArray, 4));
