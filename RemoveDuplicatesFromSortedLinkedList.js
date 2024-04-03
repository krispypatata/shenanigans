/*
author: Keith Ginoel Gabinete
created: 03.04.2024 13:15:23
*/
/*
Given the head of a sorted linked list, delete all duplicates such that each element 
appears only once. Return the linked list sorted as well.

Example 1:
Input: head = [1,1,2]
Output: [1,2]

Example 2:
Input: head = [1,1,2,3,3]
Output: [1,2,3]


Constraints:
    The number of nodes in the list is in the range [0, 300].
    -100 <= Node.val <= 100
    The list is guaranteed to be sorted in ascending order.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// function definition for singly-linked list
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function displayContents(head) {
    console.log("=".repeat(20));
    console.log("Linked List Contents:");
    nodes = "";
    let temp = head;
    while (temp!=null) {
        nodes += temp.val;
        if (temp.next!=null) nodes += " -> ";
        temp = temp.next;
    }
    console.log(nodes);
    console.log("=".repeat(20));
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let currentNode = head;
    // traverse through the contents of the linked list
    while (currentNode!=null) {
        // delete the next node if the values of the current node and the next node are the same
        while (currentNode.next!=null && currentNode.val == currentNode.next.val) {
            currentNode.next = currentNode.next.next;
        }

        // move to the next node
        currentNode = currentNode.next;
    }

    return head;
};

let sampleLinkedList1 = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))));
let sampleLinkedList2 = new ListNode(1, new ListNode(1, new ListNode(1)));

displayContents(sampleLinkedList1);
console.log("\nAfter removing duplicate values:")
displayContents(deleteDuplicates(sampleLinkedList1));
