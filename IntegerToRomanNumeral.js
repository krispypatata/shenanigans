/*
Coding Problem: Integer to Roman

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.

Given an integer, convert it to a roman numeral.

Example 1:

Input: num = 3
Output: "III"
Explanation: 3 is represented as 3 ones.


Example 2:

Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.


Example 3:

Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


Constraints:
    1 <= num <= 3999
*/

// a function to convert a given integer into a Roman Numeral
function intToRoman(n) {
    let romanNumerals = dictionary = {
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M",
    };

    // so the elements of the object can be accessed by this order
    let keyList = [1000, 500, 100, 50, 10, 5, 1];

    // will store the resulting Roman Numeral
    let romanNumeralEquivalent = "";

    for (let i=0; i<keyList.length; i++) {
        // 900%1000 = 900
        if (n%keyList[i]!=n) {
            substring = "";

            // roman numerals should only be repeated consecutively a maximum of three times
            let count = 0;
            while (n%keyList[i]!=n) {
                if (count<3) {
                    substring+= dictionary[keyList[i]];
                    count++;
                } else {
                    // IV
                    if (romanNumeralEquivalent.length==0 && romanNumeralEquivalent[romanNumeralEquivalent.length-1]!=dictionary[keyList[i-1]]) {
                        substring = dictionary[keyList[i]] + dictionary[keyList[i-1]];
                    } 
                    // IX
                    else {
                        romanNumeralEquivalent = romanNumeralEquivalent.substring(0,romanNumeralEquivalent.length-1);
                        substring = substring = dictionary[keyList[i]] + dictionary[keyList[i-2]];
                    }   
                }

                // update the value of n
                n -= keyList[i];
            }

            romanNumeralEquivalent += substring;
        }
    }

    // return the result    
    return romanNumeralEquivalent;

}

// start of the main program
let n = 0;

// https://stackoverflow.com/questions/61394928/get-user-input-through-node-js-console
// required: npm install prompt-sync
const prompt = require("prompt-sync")({ sigint: true });

// Constraints: 1 <= num <= 3999
while (n<1 || n>3999) {
    n = prompt("Please enter a number: ");
}

// convert to Roman Numeral
console.log(intToRoman(n));