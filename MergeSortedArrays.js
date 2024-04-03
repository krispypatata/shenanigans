/*
author: Keith Ginoel Gabinete
created: 03.04.2024 19:01:38
*/
/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and 
two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored 
inside the array nums1. To accommodate this, nums1 has a length of m + n, where the 
first m elements denote the elements that should be merged, and the last n elements 
are set to 0 and should be ignored. nums2 has a length of n.

Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Example 2:
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Example 3:
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. 
The 0 is only there to ensure the merge result can fit in nums1.

Constraints:
    nums1.length == m + n
    nums2.length == n
    0 <= m, n <= 200
    1 <= m + n <= 200
    -109 <= nums1[i], nums2[j] <= 109

*/

/**
 * @param {number[]} toSort
 * @return {void} Do not return anything, modify toSort in-place instead.
*/
function peformInsertionSort (toSort) {
    // traverse through the elements of the toSort array
    for (let i=0; i<toSort.length; i++) {
        let j=i;
    // compare the current traversed element with the elements to its left
    // swap if the current traversed element is less than the one on its left
    // continue until the current traversed element is in the correct position.
        while (j>0 && toSort[j]<toSort[j-1]) {
            let temp = toSort[j];
            toSort[j] = toSort[j-1];
            toSort[j-1] = temp;
            j--;
        }
    }
}

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // copy the contents of the nums2 array to the nums1 array
    for (let i=m, j=0; i<m+n; i++, j++) {
        nums1[i] = nums2[j];
    }

    // sort the merged array using insertion sort
    peformInsertionSort(nums1);
};

// sample run
let sampleArray1 = [1,2,3,0,0,0];
let sampleArray2 = [2,5,6];

console.log("First array:")
console.log(sampleArray1);
console.log("\nSecond array:")
console.log(sampleArray2);
merge(sampleArray1, 3, sampleArray2, 3);
console.log("\nMerged Sorted Array:")
console.log(sampleArray1);