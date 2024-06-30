/*
author: Keith Ginoel Gabinete
created: 30 June 2024 19:12:59
*/
/*
https://leetcode.com/problems/next-greater-element-i/

496. Next Greater Element I
Easy

The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

Example 1:
Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

Example 2:
Input: nums1 = [2,4], nums2 = [1,2,3,4]
Output: [3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
- 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.

Constraints:
    1 <= nums1.length <= nums2.length <= 1000
    0 <= nums1[i], nums2[i] <= 104
    All integers in nums1 and nums2 are unique.
    All the integers of nums1 also appear in nums2.
*/


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let nexGreaterElements = []; // will store the next greater element of each element in nums1

    // loop through each element in nums1
    while (nums1.length>0) {
        const currElement = nums1.shift();               // pop the current element at head of nums1
        const indexInNums2 = nums2.indexOf(currElement); // get the index of the current element in nums2
        let nextGreaterElementOfCurrent = -1;            // will store the next greater element of the current element
                                                         // initialize it to -1 since it is the default value if there is no next greater element

        // loop through the elements in nums2 starting from the index of the current element in nums2
        for (let i=indexInNums2+1; i<nums2.length; i++) {
            // if the current element in nums2 is greater than the current element in nums1, set the next greater element of the current element
            if (nums2[i]>currElement) {
                nextGreaterElementOfCurrent = nums2[i];
                break; // break the for loop since the next greater element is already found
            }
        }

        // push the final value of the next greater element of the current element to the nextGreaterElements array
        nexGreaterElements.push(nextGreaterElementOfCurrent);
    }

    // return the result
    return nexGreaterElements;
};


// sample run
console.log('Input: nums1 = [4,1,2], nums2 = [1,3,4,2]'); // expected output: [-1,3,-1]
console.log('Output:', nextGreaterElement([4,1,2], [1,3,4,2]));
console.log();
console.log('Input: nums1 = [2,4], nums2 = [1,2,3,4]'); // expected output: [3,-1]
console.log('Output:', nextGreaterElement([2,4], [1,2,3,4]));
