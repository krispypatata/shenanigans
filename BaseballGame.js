/*
author: Keith Ginoel Gabinete
created: 17 July 2024 01:49:16
*/
/*
https://leetcode.com/problems/baseball-game/

682. Baseball Game
Easy

You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:
    An integer x.
        Record a new score of x.
    '+'.
        Record a new score that is the sum of the previous two scores.
    'D'.
        Record a new score that is the double of the previous score.
    'C'.
        Invalidate the previous score, removing it from the record.

Return the sum of all the scores on the record after applying all the operations.

The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.

Example 1:
Input: ops = ["5","2","C","D","+"]
Output: 30
Explanation:
"5" - Add 5 to the record, record is now [5].
"2" - Add 2 to the record, record is now [5, 2].
"C" - Invalidate and remove the previous score, record is now [5].
"D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
"+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
The total sum is 5 + 10 + 15 = 30.

Example 2:
Input: ops = ["5","-2","4","C","D","9","+","+"]
Output: 27
Explanation:
"5" - Add 5 to the record, record is now [5].
"-2" - Add -2 to the record, record is now [5, -2].
"4" - Add 4 to the record, record is now [5, -2, 4].
"C" - Invalidate and remove the previous score, record is now [5, -2].
"D" - Add 2 * -2 = -4 to the record, record is now [5, -2, -4].
"9" - Add 9 to the record, record is now [5, -2, -4, 9].
"+" - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].
"+" - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].
The total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.

Example 3:
Input: ops = ["1","C"]
Output: 0
Explanation:
"1" - Add 1 to the record, record is now [1].
"C" - Invalidate and remove the previous score, record is now [].
Since the record is empty, the total sum is 0.

Constraints:
    1 <= operations.length <= 1000
    operations[i] is "C", "D", "+", or a string representing an integer in the range [-3 * 104, 3 * 104].
    For operation "+", there will always be at least two previous scores on the record.
    For operations "C" and "D", there will always be at least one previous score on the record.
*/


/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    // reverse the array so that we can use pop() to get the last element of the array since pop() is more efficient than shift()
    operations = operations.reverse();

    let record = []; // will store the scores

    // iterate through the operations
    while (operations.length>0) {
        const operation = operations.pop(); // get the last element of the reversed array / first element of the original operations array

        // if the operation is 'C', remove the last score from the record
        if (operation === 'C') {
            record.pop();
            continue;
        }
        
        // if the operation is 'D', double the last score and add it to the record
        if (operation === 'D') {
            record.push(record[record.length-1] * 2);
            continue;
        }

        // if the operation is '+', add the sum of the last two scores to the record
        if (operation === '+') {
            record.push(record[record.length-1] + record[record.length-2]);
            continue;
        }

        // if current operation passed all the conditions above, then it is an integer
        // convert the operation to an integer and add it to the record
        record.push(+operation);
    }

    // calculate the sum of the scores in the record
    let sum = 0;
    record.forEach((num) => {
        sum += num;
    });

    // return the result
    return sum;
};


// sample run
console.log('Input: ops = ["5","2","C","D","+"]'); // Expected output: 30
console.log('Output:', calPoints(["5","2","C","D","+"]));
console.log();
console.log('Input: ops = ["5","-2","4","C","D","9","+","+"]'); // Expected output: 27
console.log('Output:', calPoints(["5","-2","4","C","D","9","+","+"]));
console.log();
console.log('Input: ops = ["1","C"]'); // Expected output: 0
console.log('Output:', calPoints(["1","C"]));
