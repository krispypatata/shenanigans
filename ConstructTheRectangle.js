/*
authpr: Keith Ginoel Gabinete
created: 08 July 2024 16:31:47
*/
/*
https://leetcode.com/problems/construct-the-rectangle/

492. Construct the Rectangle
Easy

A web developer needs to know how to design a web page's size. So, given a specific rectangular web page’s area, your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements:

    The area of the rectangular web page you designed must equal to the given target area.
    The width W should not be larger than the length L, which means L >= W.
    The difference between length L and width W should be as small as possible.

Return an array [L, W] where L and W are the length and width of the web page you designed in sequence.

Example 1:
Input: area = 4
Output: [2,2]
Explanation: The target area is 4, and all the possible ways to construct it are [1,4], [2,2], [4,1]. 
But according to requirement 2, [1,4] is illegal; according to requirement 3,  [4,1] is not optimal compared to [2,2]. So the length L is 2, and the width W is 2.

Example 2:
Input: area = 37
Output: [37,1]

Example 3:
Input: area = 122122
Output: [427,286]

Constraints:
    1 <= area <= 10^7
*/


/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    // calculate the initial possible value of the rectangle's width
    // we'll start from the square root of the area (since sqrt(area) - sqrt(area) = 0; which is the smallest possible difference between the length and width of the rectangle) 
    let width = Math.floor(Math.sqrt(area));

    // we'll decrement the width until we find a width that divides the area evenly
    // the found width will be the width of the rectangle since the difference between the length and width should be as small as possible
    while (area%width!==0) width--;

    // calculate the length of the rectangle
    const length = area/width;

    // return the dimensions of the rectangle
    return [length, width];
};


// sample run
console.log('Input: area = 4'); // expected output: [2,2]
console.log('Output:', constructRectangle(4));
console.log();
console.log('Input: area = 37'); // expected output: [37,1]
console.log('Output:', constructRectangle(37));
console.log();
console.log('Input: area = 122122'); // expected output: [427,286]
console.log('Output:', constructRectangle(122122));
