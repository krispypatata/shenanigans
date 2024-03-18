/**
 * 
 * March 18, 2024
 * 
 * Problem: 
 *      Write a function that takes in a list of integers 
 * and returns the maximum product that can be obtained by 
 * multiplying any three integers from the list.
 * 
 * 
 * For example:
 * Input: [1, 2, 3, 4] 
 * Output: 24 (since 2 * 3 * 4 = 24)
 * 
 */

/**
 * a function that finds the max product that can be obtained by multiplying any three integers from the list.
 */
function findMaxProduct(passedList) {
    let listOfMaxValues = []

    while (listOfMaxValues.length!=3) {
        // find the current largest integer in the list
        let indexOfMax = 0;
        for (let i=0; i<passedList.length; i++) {
            if (passedList[indexOfMax]<passedList[i]) {
                indexOfMax = i;
            }
        }

        // remove the current largest integer from the and add it to our list of max values
        listOfMaxValues.push(passedList.splice(indexOfMax, 1));
    }

    // compute for the product of the three retrieved largest integers
    let maxProduct = 1;
    for (let i=0; i<listOfMaxValues.length; i++) {
        maxProduct *= listOfMaxValues[i];
    }

    // return the result
    return maxProduct;
}

// sample run
let sampleList1 = [-10, -7, 2, 3, 3, 5, 6, 8, 9, 10, 12, 12, 15];
console.log("Input: \n" + sampleList1);
console.log("\nOutput: \nThe maximum product that can be obtained by multiplying any three integers from the list is " + findMaxProduct(sampleList1) + ".");
