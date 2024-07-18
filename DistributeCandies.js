/*
author: Keith Ginoel Gabinete
created: 18 July 2024 00:44:24
*/
/*
https://leetcode.com/problems/distribute-candies/

575. Distribute Candies
Easy

Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.

The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.

Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them. 

Example 1:
Input: candyType = [1,1,2,2,3,3]
Output: 3
Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.

Example 2:
Input: candyType = [1,1,2,3]
Output: 2
Explanation: Alice can only eat 4 / 2 = 2 candies. Whether she eats types [1,2], [1,3], or [2,3], she still can only eat 2 different types.

Example 3:
Input: candyType = [6,6,6,6]
Output: 1
Explanation: Alice can only eat 4 / 2 = 2 candies. Even though she can eat 2 candies, she only has 1 type.

Constraints:
    n == candyType.length
    2 <= n <= 10^4
    n is even.
    -10^5 <= candyType[i] <= 10^5
*/


/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    // to solve this problem, we need to determine the number of unique candies Alice can eat
    // a simpler way to do this is to instantiate a Set object and pass the candyType array to it
    // Set objects only store unique values, so we can get the number of unique candies by getting the size of the Set object
    const typesOfCandy = new Set(candyType);

    // the maximum number of different types of candies Alice can eat is the minimum of the number of unique candies and n/2
    // if the number of unique candies is less than n/2, then Alice can eat all the unique candies
    // else if the number of unique candies is greater than or equal to n/2, then Alice can only eat n/2 unique candies
    return typesOfCandy.size < candyType.length/2 ? typesOfCandy.size : candyType.length/2;
};


// sample run
console.log('Input: candyType = [1,1,2,2,3,3]'); // expected output: 3
console.log('Output: ', distributeCandies([1,1,2,2,3,3]));
console.log();
console.log('Input: candyType = [1,1,2,3]'); // expected output: 2
console.log('Output: ', distributeCandies([1,1,2,3]));
console.log();
console.log('Input: candyType = [6,6,6,6]'); // expected output: 1
console.log('Output: ', distributeCandies([6,6,6,6]));
