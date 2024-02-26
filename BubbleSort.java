// Bubble sort

public class BubbleSort {
    public static void main(String[] args) {
        int[] sampleList = {3,1,2,5,4};
        
        int index = 0;
        System.out.print("Unsorted list: [");
        for (int x : sampleList) {
            System.out.print(x);
            
            index++;
            if (index != sampleList.length)  System.out.print(", ");
        }
        System.out.println("]");
        
        index = 0;
        System.out.print("Sorted list: [");
        for (int y : applyBubbleSort(sampleList) ) {
            System.out.print(y);
            
            index++;
            if (index != sampleList.length)  System.out.print(", ");
        }
        System.out.println("]");
    }
    
    private static int[] applyBubbleSort(int[] toSortList) {
        // System.out.println("TEST");
        for (int i=0; i<toSortList.length; i++) {
            for (int j=0; j<toSortList.length-1; j++) {
                int temp = toSortList[j];
                if (toSortList[j] > toSortList[j+1]) {
                    toSortList[j] = toSortList[j+1];
                    toSortList[j+1] = temp;
                }
            }
        }
        return toSortList;
    }
}