// Insertion Sort in Javascript

// define a function that performs Insertion sort
// no need to return anything since arrays in javascript are mutable
function performInsertionSort(toSort) {
    for (let i=1; i<toSort.length; i++) {
        let j=i;
        while (j>0 && toSort[j-1]>toSort[j]) {
            // perform swapping of adjacent elements
            temp = toSort[j];
            toSort[j] = toSort[j-1];
            toSort[j-1] = temp

            // update the value of j
            j--;
        }
    }
}


sampleArr = [3,2,5,6,7,8,9,1,0,4];
console.log(sampleArr);
performInsertionSort(sampleArr);
console.log(sampleArr);