/*
author: Keith Ginoel Gabinete
date created: March 27, 2024

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]

Constraints:

    The number of nodes in both lists is in the range [0, 50].
    -100 <= Node.val <= 100
    Both list1 and list2 are sorted in non-decreasing order.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


//  Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 
// for printing the contents of a linked list
function displayList(linkedList, title) {
    console.log(title);
    let temp = linkedList;
    while (temp!=null) {
        console.log(temp.val);
        temp = temp.next;
    }
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let mergedList = new ListNode(-101); // resulting merged list; set the first node's value to minimum-1
    let currentNode = mergedList; // pointer that will be used to traverse through the nodes of the mergedList

    // copy contents of list1 to mergedList
    while (list1!=null) {
        currentNode.next = new ListNode(list1.val);
        
        currentNode = currentNode.next;
        list1 = list1.next;
    }

    // reset pointer
    currentNode = mergedList;

    // traverse through the nodes of list2
    while (list2!=null) {
        // determine the position to insert the value of the current node from list2 into the mergedList
        while (currentNode.next!=null && list2.val>currentNode.next.val) {
            currentNode = currentNode.next;
        }
        
        // for debugging
        // console.log(currentNode.val, list2.val, currentNode.next==null?-1:currentNode.next.val);

        // insert a new node in the merged list
        let temp = new ListNode(list2.val, currentNode.next);
        currentNode.next = temp;

        // reset the pointer for merged list
        currentNode = mergedList;

        // move to the next node in list2
        list2 = list2.next;
    }

    // return the head of the merged linked list
    // disregard the first node (the one with value set to minimum-1)
    return mergedList.next;
};


sampleList1 = new ListNode(1, new ListNode(2, new ListNode(4)));
sampleList2 = new ListNode(1, new ListNode(3, new ListNode(4)));

displayList(sampleList1, "List 1");
console.log();
displayList(sampleList2, "List 2");
console.log();
displayList(mergeTwoLists(sampleList1, sampleList2), "Merged List");
