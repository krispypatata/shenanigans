
// insertion sort in java
public class InsertionSort2 {
    public static void main (String[] args) {
        // create a list to perform insertion sort on
        int[] sampleList = {5,3,2,4,6,8,9,1,0};
        System.out.println("Unsorted:");
        for (int e : sampleList) System.out.println(e);

        // perform insertion sorting
        InsertionSort2.performInsertionSort(sampleList);

        // display the results
        System.out.println("Sorted:");
        for (int e : sampleList) System.out.println(e);
    }

    // algorithm for insertion sort
    private static void performInsertionSort(int[] toSort) {
        for (int i=1; i<toSort.length; i++) {
            int j = i;

            // find the correct position to place the current selected element
            while(j>0 && toSort[j-1] > toSort[j]) {
                // swap the values of adjacent elements
                int temp = toSort[j];
                toSort[j] = toSort[j-1];
                toSort[j-1] = temp;

                // decrement the value of j
                j--;
            }
        }
    }
}
