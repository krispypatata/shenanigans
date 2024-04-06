
/*
author: Keith Ginoel Gabinete
created: 06.04.2024 00:08:18
*/
/*
Given the root of a binary tree, check whether it is a mirror 
of itself (i.e., symmetric around its center).

Example 1:
Input: root = [1,2,2,3,4,4,3]
Output: true

Example 2:
Input: root = [1,2,2,null,3,null,3]
Output: false

Constraints:

    The number of nodes in the tree is in the range [1, 1000].
    -100 <= Node.val <= 100
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
    let depth = 0;

    if (node==null) {
        values.push(null);
        return;
    }

    values.push(node.val);
    performPreorderTraversal(node.left, values);
    performPreorderTraversal(node.right, values);
}


/**
 * @param {TreeNode} node
 * @param {number[]} values
 * @return {void}
 */
function performPostorderTraversal(node, values) {
    if (node==null) {
        values.push(null);
        return;
    }

    performPostorderTraversal(node.left, values);
    performPostorderTraversal(node.right, values);
    values.push(node.val);
}


/**
 * @param {TreeNode} root
 * @return {string} 
 */
function getTreeValues(root, traversalType) {
    let values = [];

    // get the values of the binary tree nodes using Preorder or Postorder Traversal
    if (traversalType==1) performPreorderTraversal(root, values);
    else if (traversalType==2) {
        performPostorderTraversal(root, values);
        values.reverse();
    }

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
    let pValues = getTreeValues(p, 1), qValues = getTreeValues(q, 2);

    // check if the string representations of the two binary trees are the same
    return pValues==qValues;
};


/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // check if the root or its children are null
    if (root==null || root.left==null || root.right==null) {
        // if both children are null, then it is symmetric
        if (root.left==null && root.right==null) {
            return true;
        }

        return false;
    }

    // check if the left and right subtrees of the given tree are identical or not
    return isSameTree(root.left, root.right);
};


// sample run
let sampleTree = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3)));

console.log("Contents of the sample tree")
console.log(getTreeValues(sampleTree, 1));
console.log("\nIs the tree symmteric?");
console.log(isSymmetric(sampleTree));
