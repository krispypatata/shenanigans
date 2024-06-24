/*
created: Keith Ginoel Gabinete
created: 25 June 2024 00:05:16
*/
/* 
350. Intersection of Two Arrays II
Easy

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.

Constraints:
    1 <= nums1.length, nums2.length <= 1000
    0 <= nums1[i], nums2[i] <= 1000
*/


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    // for easier comparison, we'll sort the arrays in ascending order
    nums1 = nums1.sort((a,b) => a-b);
    nums2 = nums2.sort((a,b) => a-b);

    // initialize iterators for both arrays
    let iteratorOfNums1 = 0;
    let iteratorOfNums2 = 0;

    // will store the intersection of the two arrays
    let intersection = [];

    // iterate through both arrays
    // loop ends when one of the arrays is fully traversed
    while (iteratorOfNums1<nums1.length && iteratorOfNums2<nums2.length) {
        // if the current elements of both arrays are equal, add it to the intersection array
        // also, increment the iterators of both arrays
        if (nums1[iteratorOfNums1]===nums2[iteratorOfNums2]) {
            intersection.push(nums1[iteratorOfNums1]);
            iteratorOfNums1 ++;
            iteratorOfNums2 ++;
            continue;
        } 
        
        // if the current element of nums1 is less than the current element of nums2, increment the iterator of nums1 so that we can compare the next element of nums1 to the current element of nums2
        if ((nums1[iteratorOfNums1]>nums2[iteratorOfNums2])) {
            iteratorOfNums2 ++;
            continue;
        } 

        // if both of the above conditions are not met, then the current element of nums1 is greater than the current element of nums2
        // so, increment the iterator of nums1 so that we can compare the next element of nums1 to the current element of nums2
        iteratorOfNums1 ++;
    }

    // return the resulting intersection array
    return intersection;
};


// sample run
console.log('Input: nums1 = [1,2,2,1], nums2 = [2,2]'); // expected output: [2,2]
console.log('Output: ', intersect([1,2,2,1], [2,2]), '\n');
console.log();
console.log('Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]'); // expected output: [4,9]
console.log('Output: ', intersect([4,9,5], [9,4,9,8,4]), '\n');
