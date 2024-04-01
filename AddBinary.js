/*
author: Keith Ginoel Gabinete
created: 01.04.2024 00:29:18
*/
/*
Given two binary strings a and b, return their sum as a binary string.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"

Constraints:
    1 <= a.length, b.length <= 104
    a and b consist only of '0' or '1' characters.
    Each string does not contain leading zeros except for the zero itself.
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // identify the larger and smaller binary numbers
    let smallerBinary, largerBinary = 0;
    if (a.length<b.length) {
        smallerBinary = a;
        largerBinary = b;
    } else {
        smallerBinary = b;
        largerBinary = a;
    }

    // will contain the sum of the two binary numbers
    let sum = Array(largerBinary.length).fill(0);
    
    //  make the lengths of both binary numbers equal by adding leading zeros to the smaller one
    differeceInLength = largerBinary.length - smallerBinary.length;
    for (let i=0; i<differeceInLength; i++) {
        smallerBinary = '0' + smallerBinary;
    }

    // convert the String into an integer array (each element is a digit of the binary)
    largerBinary = largerBinary.split("").map(Number);
    smallerBinary = smallerBinary.split("").map(Number);

    // perform binary addition
    for (let i=largerBinary.length-1; i>=0; i--) {
        sum[i] += largerBinary[i] + smallerBinary[i];
        // check for carry-ins
        if (sum[i]>1) {
            sum[i] = sum[i]%2;
            if (i==0) {
                sum.splice(0,0,1);
            } else {
                sum[i-1] += 1;
            }
        }
    }

    // convert the sum array back to a string
    return sum.join("");
};

let sampleInputA = "1010";
let sampleInputB = "1011";
console.log(sampleInputA + " + " + sampleInputB);
console.log(addBinary(sampleInputA, sampleInputB));