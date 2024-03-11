// Selection Sort in Javascript

// define a function that performs selection sort
// no need to return anything since arrays in javascript are mutable
function performSelectionSort(toSort) {
    for (let i=0; i<toSort.length; i++) {
        // find the index with the minimum value
        indexOfMin = i;
        for (let j=i; j<toSort.length; j++) {
            if (toSort[indexOfMin]>toSort[j]) {
                indexOfMin = j;
            }
        }
        
        // perform swapping of elements
        temp = toSort[indexOfMin];
        toSort[indexOfMin] = toSort[i];
        toSort[i] = temp
    }
}


sampleArr = [3,2,5,6,7,8,9,1,0,4];
console.log(sampleArr);
performSelectionSort(sampleArr);
console.log(sampleArr);