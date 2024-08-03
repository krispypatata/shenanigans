/*
author: Keith Ginoel Gabinete
created: 03 August 2024 23:35:41
*/
/*
https://leetcode.com/problems/largest-perimeter-triangle/

976. Largest Perimeter Triangle
Easy

Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

Example 1:

Input: nums = [2,1,2]
Output: 5
Explanation: You can form a triangle with three side lengths: 1, 2, and 2.

Example 2:

Input: nums = [1,2,1,10]
Output: 0
Explanation: 
You cannot use the side lengths 1, 1, and 2 to form a triangle.
You cannot use the side lengths 1, 1, and 10 to form a triangle.
You cannot use the side lengths 1, 2, and 10 to form a triangle.
As we cannot use any three side lengths to form a triangle of non-zero area, we return 0.

Constraints:
    3 <= nums.length <= 10^4
    1 <= nums[i] <= 10^6
*/



/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    
    const possibleSideLengths = [];

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k ++) {
                possibleSideLengths.push([nums[i], nums[j], nums[k]]);
            }
        }
    }

    // console.log(possibleSideLengths);


    let maxPerimeter = 0;
    possibleSideLengths.forEach((sublist) => {
        let isValid = true;

        [a, b, c] = sublist;
        
        if ( (a + b) <= c || (a + c) <= b || (b + c) <= a) {
            // console.log(a + ' + ' + b + ' <= ' + c);
            isValid = false;
        }

        if (isValid) {
            const perimeter = a + b + c;
            if (perimeter > maxPerimeter)
                maxPerimeter = perimeter;
        }


    });

    return maxPerimeter;


};


// sample run
console.log('Input: nums = [2,1,2]'); // expected output: 5
console.log('Output:', largestPerimeter([2,1,2]));
console.log();
console.log('Input: nums = [1,2,1,10]'); // expected output: 0
console.log('Output:', largestPerimeter([1,2,1,10]));
