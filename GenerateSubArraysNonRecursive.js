/*
author: Keith Ginoel Gabinete
created: 30.03.2024 01:22:45
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var generateSubArrays = function(nums) {
    // generate sub arrays using splicing
    let subArrays = [];

    // starting index of slicing
    for (let i=0;i<nums.length; i++) {
        // ending index of slicing
        // i+1 to avoid empty arrays
        // j<=nums.length since the slice method is not inclusive of the second parameter
        for (let j=i+1; j<=nums.length; j++) {
            let subArray = nums.slice(i, j);
            subArrays.push(subArray);
        }
    }

    return subArrays;        
}


// sample run
let sampleArray = [1, 2, 3, 4];

console.log("Sample array:")
console.log(sampleArray);
console.log("\nSub-arrays:");
sampleArraySubArrays = generateSubArrays(sampleArray);
for (let i=0; i<sampleArraySubArrays.length; i++)
    console.log(sampleArraySubArrays[i]);