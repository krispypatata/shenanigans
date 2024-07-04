/*
author: Keith Ginoel Gabinete
created: 04 July 2024 21:40:19
*/
/*
https://leetcode.com/problems/max-consecutive-ones/

485. Max Consecutive Ones
Easy

Given a binary array nums, return the maximum number of consecutive 1's in the array.

Example 1:
Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

Example 2:
Input: nums = [1,0,1,1,0,1]
Output: 2

Constraints:
    1 <= nums.length <= 105
    nums[i] is either 0 or 1.
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxConsecutiveOnes = 0; // will store the maximum number of consecutive 1's
    let nConsecutiveOnes = 0;   // will store the current number of consecutive 1's encountered in the loop

    // loop through the array nums until it is empty
    while (nums.length>0) {
        const poppedElement = nums.pop(); // remove the last element of the array

        // if the popped element is 0, reset the number of consecutive 1's to 0 and continue to the next iteration
        if (poppedElement===0) {
            nConsecutiveOnes = 0;
            continue;
        }

        // at this point, the popped element is 1
        // increment the number of consecutive 1's
        nConsecutiveOnes ++;
        
        // check if the current number of consecutive 1's is greater than the maximum number of consecutive 1's
        // if so, update the maximum number of consecutive 1's
        if (nConsecutiveOnes>maxConsecutiveOnes) maxConsecutiveOnes = nConsecutiveOnes;
    }

    // return the result
    return maxConsecutiveOnes;
};


// sample run
console.log('Input: nums = [1,1,0,1,1,1]'); // expected output: 3
console.log('Output:', findMaxConsecutiveOnes([1,1,0,1,1,1]));
console.log();
console.log('Input: nums = [1,0,1,1,0,1]'); // expected output: 2
console.log('Output:', findMaxConsecutiveOnes([1,0,1,1,0,1]));
