/*
author: Keith Ginoel Gabinete
created: 13 June 2024 18:14:05
*/
/*
Given an integer array nums, handle multiple queries of the following type:
    Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.

Implement the NumArray class:
    NumArray(int[] nums) Initializes the object with the integer array nums.
    int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

Example 1:
Input
["NumArray", "sumRange", "sumRange", "sumRange"]
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
Output
[null, 1, -1, -3]

Explanation
NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3

Constraints:
    1 <= nums.length <= 104
    -105 <= nums[i] <= 105
    0 <= left <= right < nums.length
    At most 104 calls will be made to sumRange.
*/


/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums; // store the nums array as a property of the object
};


/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    let sum = 0; // will store the sum of the elemets of nums between indices left and right inclusive

    // calculate the sum of the elements of nums between indices left and right inclusive
    for (let i=left; i<=right; i++) {
        sum += this.nums[i];
    }

    // return the results
    return sum;
};


/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */


// sample run
const  numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log('NumArray: ' + numArray);

console.log('Sum Range: 0, 2'); // Expected output: 1
console.log(numArray.sumRange(0, 2));
console.log();
console.log('Sum Range: 2, 5'); // Expected output: -1
console.log(numArray.sumRange(2, 5));
console.log();
console.log('Sum Range: 0, 5'); // Expected output: -3
console.log(numArray.sumRange(0, 5));
