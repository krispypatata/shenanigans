/*
author: Keith Ginoel Gabinete
created: 03.04.2024 02:03:56
*/
/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways 
can you climb to the top?

Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Constraints:
    1 <= n <= 45
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // keep track of the number of ways to climb to the top given n steps 
    let steps = [];

    // the number of ways to climb to the top given n steps is 
    // just the sum of the number of ways for n-1 and n-2 steps
    for (let i=1; i<=n; i++) {
        if (i<3) {
            steps.push(i);
        } else {
            // for steps greater than 2, calculate the number of ways using
            // the sum of ways for the last two steps.
            steps.push(steps[steps.length-1] + steps[steps.length-2]);
        }
    }

    //  return the last item pushed to the steps array
    return steps.pop();
};

// sample run
let sampleInputN = 4;
console.log(climbStairs(sampleInputN));