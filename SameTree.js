
/*
author: Keith Ginoel Gabinete
created: 05.04.2024 20:47:46
*/
/*
Given the roots of two binary trees p and q, write a function to 
check if they are the same or not.

Two binary trees are considered the same if they are structurally 
identical, and the nodes have the same value.

Example 1:
Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:
Input: p = [1,2], q = [1,null,2]
Output: false

Example 3:
Input: p = [1,2,1], q = [1,1,2]
Output: false

Constraints:

    The number of nodes in both trees is in the range [0, 100].
    -104 <= Node.val <= 104
*/


// definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


/**
 * @param {TreeNode} node
 * @param {number[]} values
 * @return {void}
 */
function performPreorderTraversal(node, values) {
    if (node==null) {
        values.push(null);
        return;
    }

    values.push(node.val);
    performPreorderTraversal(node.left, values);
    performPreorderTraversal(node.right, values);
}


/**
 * @param {TreeNode} root
 * @return {string} 
 */
function getTreeValues(root) {
    let values = [];

    // get the values of the binary tree nodes using Preorder Traversal
    performPreorderTraversal(root, values);

    // return the retrieved values
    return values.join();
}


/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // extract the node values of the two binary tress
    let pValues = getTreeValues(p), qValues = getTreeValues(q);

    // check if the string representations of the two binary trees are the same
    return pValues==qValues;
};


// sample run
// let sampleP = new TreeNode(1, new TreeNode(2), new TreeNode(3));
// let sampleQ = new TreeNode(1, new TreeNode(2), new TreeNode(4));
let sampleP = new TreeNode(1, new TreeNode(1), null);
let sampleQ = new TreeNode(1, null, new TreeNode(1));

console.log("Contents of two sample binary trees:")
console.log(getTreeValues(sampleP));
console.log(getTreeValues(sampleQ));
console.log("\nAre the two binary tress identical?")
isSameTree(sampleP, sampleQ)?console.log("YES!"):console.log("NO!");