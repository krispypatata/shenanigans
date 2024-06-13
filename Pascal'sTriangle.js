/*
author: Keith Ginoel Gabinete
created: 13 June 2024 17:40:52
*/
/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]

Constraints:
    1 <= numRows <= 30
*/


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let pascalTriangle = [[1]]; // initialize the first row of the pascal's triangle

    // generate the rest of the rows
    for (let i=1; i<numRows; i++) {
        let listRow = [];   // will contain the elements of the current row

        // generate the elements of the current row
        for (let j=0; j<=i; j++) {
            // if the current element is at the edge of the triangle, then it is equal to 1
            if (j===0 || j===i) {
                listRow.push(1);
            } 
            // else, the current element is the sum of the two elements directly above it
            else {
                // parents of j = last row[j-1] and last row[j]
                listRow.push(pascalTriangle[i-1][j-1] + pascalTriangle[i-1][j]);
            }
        }

        // add the current row to the pascal's triangle
        pascalTriangle.push(listRow);
    }

    // return the results
    return pascalTriangle;
};


// sample run
console.log('Input: numRows = 5'); // Expected output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log('Output:', generate(5));
console.log();
console.log('Input: numRows = 1'); // Expected output: [[1]]
console.log('Output:', generate(1));
