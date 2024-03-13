// Bubble Sort in Javascript

// define a function that performs bubble sort
// no need to return anything since arrays in javascript are mutable
function performBubbleSort(toSort) {
    for (let i=0; i<toSort.length; i++) {
        for (let j=1; j<toSort.length; j++) {
            if (toSort[j-1]>toSort[j]) {
                // perform swapping of adjacent elements
                temp = toSort[j];
                toSort[j] = toSort[j-1];
                toSort[j-1] = temp
            }
        }
    }
}


sampleArr = [3,2,5,6,7,8,9,1,0,4];
console.log(sampleArr);
performBubbleSort(sampleArr);
console.log(sampleArr);