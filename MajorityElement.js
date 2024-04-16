/*
author: Keith Ginoel Gabinete
created: 16.04.2024 22:09:10
*/
/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:

    n == nums.length
    1 <= n <= 5 * 104
    -109 <= nums[i] <= 109
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majorityElement = 0; // will store the majority element

    // traverse the array
    for (let i=0; i<nums.length; i++) {
        // count the number of times the current element appears in the array
        let count = 0;
        for (let j=0; j<nums.length; j++) {
            if (nums[j] === nums[i]) {
                count ++;
            }
        }

        // if the count is greater than half the length of the array then it is the majority element
        if (count>(nums.length/2)) {
            majorityElement = nums[i];
            break; // exit the loop
        }
    }

    // return the result
    return majorityElement;
};


// sample run
const sampleNums1 = [3,2,3];             // 3
const sampleNums2 = [2,2,1,1,1,2,2];     // 2

console.log(`${sampleNums1} -> ${majorityElement(sampleNums1)}`);
console.log(`${sampleNums2} -> ${majorityElement(sampleNums2)}`);
