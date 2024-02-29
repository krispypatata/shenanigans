// Insertion sort in java

// class definition
public class InsertionSort {
	// main program
	public static void main(String[] args) {
		int[] sampleList = {4,3,6,2,1,9,8,7,5,0};
		InsertionSort.performInsertionSort(sampleList);

		for (int e: sampleList) System.out.println(e);

	}

	/*
		function to sort a given list using the insertion method

		arrays in Java are mutable, no need to return the sorted list
	*/
	private static void performInsertionSort(int[] toSort) {
		// traverse through the contents of the list to be sorted
		for (int i=0; i<toSort.length; i++) {
			for (int j=i; j>=0; j--) {
				if (toSort[i] < toSort[j]) {
					int temp = toSort[i];
					toSort[i] = toSort[j];
					toSort[j] = temp;
					i = j;
				}
			}
		}
	}
}