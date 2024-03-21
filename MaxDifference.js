/**
 * 
 * Problem: 
 *      Given an array of integers, find the maximum difference between any two 
 * elements such that the larger element appears after the smaller element.
 * 
 * Example:
 * 
 * max_profit([7, 1, 5, 3, 6, 4])  # Output should be 5 (since buying at 1 and selling at 6 gives the maximum profit)
 * max_profit([7, 6, 4, 3, 1])  # Output should be 0 (since no transaction is possible)
 * 
 */


function getMaxDifference(arr) {
    let maxDiff = 0;    // holds the max difference

    // loop through the elements of the array
    for (let i=0; i<arr.length; i++) {
        // determine whether there are larger values at the right side of the currently traversed element or not
        for (let j=i; j<arr.length; j++) {
            if (arr[i]<arr[j]) {
                // subtract the currently traversed element from the larger value
                let diff = arr[j] - arr[i];

                // check if the computed difference is greater than the current value of the maxDiff variable
                if (maxDiff < diff) {
                    maxDiff = diff;
                }
            }
        }
    }

    // return the desired output
    return maxDiff;
}

// SAMPLE RUN
sampleArray1 = [7, 1, 5, 3, 6, 4];
sampleArray2 = [7, 6, 4, 3, 1];
sampleArray3 = [6, 10, 3, 4, 1];

console.log(getMaxDifference(sampleArray1));
console.log(getMaxDifference(sampleArray2));
console.log(getMaxDifference(sampleArray3));