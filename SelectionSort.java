// shenanigans
// February 28, 2024

// Selection sort in java:

public class SelectionSort {
    public static void main(String[] args) {
        int[] sampleList = {3,1,6,2,4};
        int[] sortedSampleList = performSelectionSort(sampleList);

        for (int e : sortedSampleList) System.out.println(e);
    }

    private static int[] performSelectionSort (int[] toSort) {
        
        for (int i=0; i<toSort.length; i++) {
            int indexOfMin = i;
            for (int j=i+1; j<toSort.length; j++) {
                if (toSort[j] < toSort[indexOfMin]) {
                    indexOfMin = j;
                }
            }

            // swapping
            int temp = toSort[i];
            toSort[i] = toSort[indexOfMin];
            toSort[indexOfMin] = temp;
        }

        return toSort;
    }
}