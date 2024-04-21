/*
@author Keith Ginoel S. Gabinete
@date 2024-04-21 14:04:30
*/
/*

Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must be unique and you may return the result in any order.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

Constraints:
    1 <= nums1.length, nums2.length <= 1000
    0 <= nums1[i], nums2[i] <= 1000
*/


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let intersection = []; // will store the intersection of the two arrays

    // iterate through the first array and check if the current element is in the second array
    nums1.forEach((element) => {
        // if the current element is in the second array and it is not yet in the intersection array, add it
        if (nums2.includes(element) && !intersection.includes(element)) {
            intersection.push(element);
        };
    }) 

    // return the intersection array
    return intersection;
};


// sample run
// expected output: [2]
const sampleNums1 = [1,2,2,1];
const sampleNums2 = [2,2];

// expected output: [9,4]
const sampleNums3 = [4,9,5];
const sampleNums4 = [9,4,9,8,4];

console.log(intersection(sampleNums1, sampleNums2));
console.log(intersection(sampleNums3, sampleNums4));
