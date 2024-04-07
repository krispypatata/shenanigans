
/*
author: Keith Ginoel Gabinete
created: 07.04.2024 20:25:24
*/
/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the 
longest path from the root node down to the farthest leaf node.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2

Constraints:

    The number of nodes in the tree is in the range [0, 104].
    -100 <= Node.val <= 100
*/


// definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// var maxDepth = function(root) {
//     if (root==null) {
//         return 0;
//     } else {
//         if (maxDepth(root.left) > maxDepth(root.right)) {
//             return maxDepth(root.left)+1;
//         } else {
//             return maxDepth(root.right)+1;
//         }
//     }
// };


/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root==null) {
        return 0;
    } else {
        let depthOfLeftSubtree = maxDepth(root.left);
        let depthOfRigthSubtree = maxDepth(root.right);

        if (depthOfLeftSubtree>depthOfRigthSubtree) {
            return depthOfLeftSubtree+1;
        } else {
            return depthOfRigthSubtree+1;
        }
    }
};




/**
 * @param {TreeNode} node
 * @param {number[]} values
 * @return {void}
 */
function performPreorderTraversal(node, values) {
    let depth = 0;

    if (node==null) {
        values.push('null');
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


// sample run
let sampleTree = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3)));

console.log("Contents of the sample tree")
console.log("[" + getTreeValues(sampleTree) + "]");

console.log("\nMaximum depth of the tree");
console.log(maxDepth(sampleTree));