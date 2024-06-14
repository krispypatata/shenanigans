/*
author: Keith Ginoel Gabinete
created: 15 June 2024 00:46:40
*/
/*
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Example 2:
Input: nums = [1,1]
Output: [2]

Constraints:
    n == nums.length
    1 <= n <= 105
    1 <= nums[i] <= n
*/


// a sorter function for sorting numbers
// to fix the issue of sorting numbers as strings using the default sort function
function sorter(a, b) {
    return a-b;
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const n = nums.length;  // get the value of n (simply the length of the nums array)

    // get the unique numbers in the nums array then sort them
    const uniqueNums = [...new Set(nums)].sort(sorter);

    let disappearedNums = []; // will store the disappeared numbers

    // determine the numbers that are missing in the uniqueNums array by comparing each element to the values in the range [1, n]
    let i = 1;
    while (i!=n+1) {
        // if there is a missing number, add it to the disappearedNums array
        // also add it to the uniqueNums array to correctly compare the next number
        if (i!=uniqueNums[i-1]) {
            disappearedNums.push(i);
            uniqueNums.splice(i-1, 0, i);
        }

        i++; // update the value of i
    }

    // return the result
    return disappearedNums;
};


// sample run
console.log('Input: nums = [4,3,2,7,8,2,3,1]'); // Expected output: [5,6]'
console.log('Output:', findDisappearedNumbers([4,3,2,7,8,2,3,1]));
console.log();
console.log('Input: nums = [1,1]') // Expected output: [2]
console.log('Output:', findDisappearedNumbers([1,1]));
console.log();
console.log('Input: nums = [10,2,5,10,9,1,1,4,3,7]');
console.log('Output:', findDisappearedNumbers([10,2,5,10,9,1,1,4,3,7]));
