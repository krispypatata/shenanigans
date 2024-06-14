/*
author: Keith Ginoel Gabinete
created: 14 June 2024 02:20:38
*/
/*
You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:
    "a->b" if a != b
    "a" if a == b

Example 1:
Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"

Example 2:
Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"


Constraints:
    0 <= nums.length <= 20
    -231 <= nums[i] <= 231 - 1
    All the values of nums are unique.
    nums is sorted in ascending order.
*/


/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let listOfSummaryRanges = []; // will store the summary ranges

    let range = []; // will store the current range being processed in the loop
    // loop until the nums array is empty
    while (nums.length!=0) {
        // if the range is empty, push the first element of nums
        if (range.length===0) range = [nums.shift()];

        // check if the difference of the last element of the range and the first element of nums is 1
        // if it is, push the first element of nums to the range
        if (range[range.length-1]-nums[0] === -1) {
            range.push(nums.shift());

            // reset the loop if the nums array is still not empty
            if (nums.length!=0) continue;
        }

        // if the difference is not 1, push the range to the listOfSummaryRanges
        // check first if the range has only one element
        let toPush = '' + range[0];
        if (range.length!=1) toPush += '->' + range[range.length-1];
        listOfSummaryRanges.push(toPush);

        // reset the range for the next iteration
        range = [];
    }

    // return the result
    return listOfSummaryRanges;
};


// sample run
console.log('Input: nums = [0,1,2,4,5,7]'); // Expected output: ["0->2","4->5","7"]
console.log('Output:', summaryRanges([0,1,2,4,5,7]));
console.log();
console.log('Input: nums = [0,2,3,4,6,8,9]'); // Expected output: ["0","2->4","6","8->9"]
console.log('Output:', summaryRanges([0,2,3,4,6,8,9]));
