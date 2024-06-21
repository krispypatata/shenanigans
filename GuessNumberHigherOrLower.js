/*
author: Keith Ginoel Gabinete
created: 22 June 2024 00:22:45
*/
/*
374. Guess Number Higher or Lower
Easy

We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:
    -1: Your guess is higher than the number I picked (i.e. num > pick).
    1: Your guess is lower than the number I picked (i.e. num < pick).
    0: your guess is equal to the number I picked (i.e. num == pick).

Return the number that I picked.

Example 1:
Input: n = 10, pick = 6
Output: 6

Example 2:
Input: n = 1, pick = 1
Output: 1

Example 3:
Input: n = 2, pick = 1
Output: 1

Constraints:
    1 <= n <= 2^31 - 1
    1 <= pick <= n
*/


/**
 * Forward declaration of guess API.
 * @param {number} num  your guess
 * @param {number} pickedNum the number that needs to be guessed
 * @return {number}     -1 if num is higher than the picked number
 *                       1 if num is lower than the picked number
 *                       otherwise return 0
 */
 var guess = function(num, pickedNum) {
    if (num>pickedNum) return -1;
    else if (num<pickedNum) return 1;
    
    return 0;
 }


/**
 * @param {number} n
 * @param {number} pickedNum
 * @return {number}
 */
var guessNumber = function(n, pickedNum) {
    /*     
    the solution I came up with is similar to the binary search algorithm
    the algorithm will keep guessing the number in the middle of the current range [lowerBound, higherBound]
    the range will be updated based on the hint given by the guess function
    the algorithm will stop when the guess function returns 0, which means the number has been found 
    */

    // initialize the lower and higher bounds of the range
    let lowerBound = 1, higherBound = n;

    // initialize the number to be guessed
    // we'll start with the value of n in case the number to be guessed is simply n
    let num = n;

    // start the binary search algorithm
    while (true) {
        // get the hint from the guess function
        const hint = guess(num, pickedNum);

        // update the range based on the hint
        if (hint===-1) higherBound = num;       // if the number is higher than the picked number
        else if (hint===1) lowerBound = num;    // if the number is lower than the picked number
        else break;                             // the number has been found

        // update the number to be guessed
        num = Math.floor((lowerBound+higherBound)/2);
    }

    // at last, return the number that was picked
    return num;
};  


// sample run
console.log('Input: n = 10, pick = 6'); // expected output: 6
console.log('Output:', guessNumber(10, 6));
console.log();
console.log('Input: n = 1, pick = 1'); // expected output: 1
console.log('Output:', guessNumber(1, 1));
console.log();
console.log('Input: n = 2, pick = 1'); // expected output: 1
console.log('Output:', guessNumber(2, 1));
console.log();
console.log('Input: n = 1000, pick = 50'); // expected output: 50
console.log('Output:', guessNumber(1000, 50));
console.log();
console.log('Input: n = 2, pick = 2'); // expected output: 2
console.log('Output:', guessNumber(2, 2));
