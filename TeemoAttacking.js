/*
author: Keith Ginoel Gabinete
created: 09 July 2024 16:01:11
*/
/*
https://leetcode.com/problems/teemo-attacking/

495. Teemo Attacking
Easy

Our hero Teemo is attacking an enemy Ashe with poison attacks! When Teemo attacks Ashe, Ashe gets poisoned for a exactly duration seconds. More formally, an attack at second t will mean Ashe is poisoned during the inclusive time interval [t, t + duration - 1]. If Teemo attacks again before the poison effect ends, the timer for it is reset, and the poison effect will end duration seconds after the new attack.

You are given a non-decreasing integer array timeSeries, where timeSeries[i] denotes that Teemo attacks Ashe at second timeSeries[i], and an integer duration.

Return the total number of seconds that Ashe is poisoned.

Example 1:
Input: timeSeries = [1,4], duration = 2
Output: 4
Explanation: Teemo's attacks on Ashe go as follows:
- At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
- At second 4, Teemo attacks, and Ashe is poisoned for seconds 4 and 5.
Ashe is poisoned for seconds 1, 2, 4, and 5, which is 4 seconds in total.

Example 2:
Input: timeSeries = [1,2], duration = 2
Output: 3
Explanation: Teemo's attacks on Ashe go as follows:
- At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
- At second 2 however, Teemo attacks again and resets the poison timer. Ashe is poisoned for seconds 2 and 3.
Ashe is poisoned for seconds 1, 2, and 3, which is 3 seconds in total.

Constraints:
    1 <= timeSeries.length <= 10^4
    0 <= timeSeries[i], duration <= 10^7
    timeSeries is sorted in non-decreasing order.
*/


/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let poisonedDuration = 0;       // will store the total number of seconds that Ashe is poisoned
    let previousUpperBound = -1;    // will store the previous upper bound/end of the poison effect
                                    // initialized to -1 since based on the problem constraints, timeSeries[i] >= 0

    // iterate through the timeSeries
    for (let i=0; i<timeSeries.length; i++) {
        // calculate the current upper bound/end of the poison effect
        const currentUpperBound = timeSeries[i] + duration - 1;

        // if the previous upper bound is less than the current timeSeries[i], then the poison effect is mutually exclusive with the previous poison effect
        // thus, we can simply add the duration to the poisonedDuration
        if (previousUpperBound<timeSeries[i]) {
            poisonedDuration+=duration;
        }
        // else if the previous upper bound is greater than or equal to the current timeSeries[i], then the previous poison effect overlaps with the current poison effect
        // thus, we need to get the difference between the current upper bound and the previous upper bound first before adding it to the poisonedDuration to avoid double counting
        else {
            poisonedDuration+=currentUpperBound-previousUpperBound;
        }

        // just update the previous upper bound with the current upper bound
        previousUpperBound = currentUpperBound;
    }

    // return the result
    return poisonedDuration;
};


// sample run
console.log('Input: timeSeries = [1,4], duration = 2'); // Expected output: 4
console.log('Output:', findPoisonedDuration([1,4], 2));
console.log();
console.log('Input: timeSeries = [1,2], duration = 2'); // Expected output: 3
console.log('Output:', findPoisonedDuration([1,2], 2));
console.log(findPoisonedDuration([1,2,3,4,5,6,7,8,9], 100000));

