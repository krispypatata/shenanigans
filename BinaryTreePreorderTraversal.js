/*
author: Keith Ginoel Gabinete
created: 11.04.2024 02:32:52
*/
/*
Given the root of a binary tree, return the preorder traversal of its nodes' values.

Example 1:

Input: root = [1,null,2,3]
Output: [1,2,3]

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

// Definition for a binary tree node.
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
const traverseThroughNodesUsingPreorderTraversal = function (node, storage) {
    if (node==null) {
        return;
    }

    storage.push(node.val);
    traverseThroughNodesUsingPreorderTraversal(node.left, storage);
    traverseThroughNodesUsingPreorderTraversal(node.right, storage);
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let contents = [];

    traverseThroughNodesUsingPreorderTraversal(root, contents);

    return contents;
};

// sample run
const sampleRoot = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
console.log(preorderTraversal(sampleRoot));