/*
@author Keith Ginoel S. Gabinete
@date 2024-04-24 04:37:20
 */
/*
Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.

Example 1:
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 
2 is the missing number in the range since it does not appear in nums.

Example 2:
Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 
2 is the missing number in the range since it does not appear in nums.

Example 3:
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 
8 is the missing number in the range since it does not appear in nums.

Constraints:
    n == nums.length
    1 <= n <= 104
    0 <= nums[i] <= n
    All the numbers of nums are unique.
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // will store the missing number
    let missingNum = 0;

    // loop from 0 to n (length of nums + 1)
    for (let i=0; i<nums.length+1; i++) {
        // if the number is not in the array, it is the missing number
        if (!nums.includes(i)) {
            missingNum = i;
            break; // exit the loop
        }
    }

    // return the missing number
    return missingNum;
};


// sample run
const sampleNums1 = [3,0,1]; // 2
const sampleNums2 = [0,1]; // 2
const sampleNums3 = [9,6,4,2,3,5,7,0,1]; // 8

console.log(missingNumber(sampleNums1));
console.log(missingNumber(sampleNums2));
console.log(missingNumber(sampleNums3));
