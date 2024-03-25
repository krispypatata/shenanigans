/*

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

 

Constraints:

    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lowercase English letters.
*/




/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // will hold the return value
    let commonPrefix = "";

    // traverse through the elements/characters of the first String in the array
    for (let i=0; i<strs[0].length; i++) {
        let currentChar = strs[0][i];
        let isAllSame = true;   // to check whether all characters in each String is similar at the specified index

        // traverse through the elements/characters of the other Strings
        for (let j=1; j<strs.length; j++) {
            // character mismatch
            if (currentChar != strs[j][i]) {
                isAllSame = false;
                break;
            } else {
                // continue
            }
        }

        // all Strings have the same character at the specified index
        if (isAllSame==true) {
            commonPrefix += currentChar;
        } else {
            break;
        }
    }

    return commonPrefix;
};

sampleInput1 = ["flower","flow","flight"];
sampleInput2 = ["programming","program","progress"];
sampleInput3 = ["cir", "car"];

console.log("Given String array: " + "[" + sampleInput3.join(", ") + "]");
console.log("Longest Common Prefix: " + longestCommonPrefix(sampleInput3));