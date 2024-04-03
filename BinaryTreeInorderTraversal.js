/*
author: Keith Ginoel Gabinete
created: 04.04.2024 00:03:22
*/
/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [1,3,2]

Example 2:
Input: root = []
Output: []

Example 3:
Input: root = [1]
Output: [1]

Constraints:

    The number of nodes in the tree is in the range [0, 100].
    -100 <= Node.val <= 100
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


// definition for a binary tree node
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


/**
 * @param {TreeNode} node
 * @param {number[]} storage
 * @return {void}
 */
function traverseThroughNodes(node, storage) {
    if (node==null) {
        return;
    }

    // left
    traverseThroughNodes(node.left, storage);
    // middle
    storage.push(node.val);
    // right
    traverseThroughNodes(node.right, storage);

}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let inorderTraversalArray = [];

    traverseThroughNodes(root, inorderTraversalArray);

    return inorderTraversalArray;
};

// sample run
let sampleRoot = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
console.log(inorderTraversal(sampleRoot));