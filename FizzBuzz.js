/*
@author Keith Ginoel S. Gabinete
@date 2024-04-24 04:26:05
 */
/*
Given an integer n, return a string array answer (1-indexed) where:
    answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
    answer[i] == "Fizz" if i is divisible by 3.
    answer[i] == "Buzz" if i is divisible by 5.
    answer[i] == i (as a string) if none of the above conditions are true.

Example 1:
Input: n = 3
Output: ["1","2","Fizz"]

Example 2:
Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]

Example 3:
Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

Constraints:
    1 <= n <= 10^4
*/


/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    // initialize an empty string array that will hold the return values
    let stringArray = [];

    // loop from 1 to n
    for (let i=1; i<=n; i++) {
        // check if the number is divisible by 3 and 5
        if (i%3===0 && i%5===0) {
            stringArray.push("FizzBuzz");
        } 
        // by 3 only
        else if (i%3===0) {
            stringArray.push("Fizz");
        } 
        // by 5 only
        else if (i%5===0) {
            stringArray.push("Buzz");
        } 
        // not divisible by 3 or 5
        else {
            stringArray.push(i.toString());
        }   
    }

    // return the string array
    return stringArray;
};


// sample run
const sampleNum1 = 3; // ["1","2","Fizz"]
const sampleNum2 = 5; // ["1","2","Fizz","4","Buzz"]
const sampleNum3 = 15; // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

console.log(fizzBuzz(sampleNum1));
console.log(fizzBuzz(sampleNum2));
console.log(fizzBuzz(sampleNum3));
