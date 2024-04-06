/*

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
function traverseThroughNodes(root, storage) {
    let tempStack = [];


    tempStack.push(root);

    // while stack is not empty
    while(tempStack.length!=0) {
        let node = tempStack.pop();

        
        if (node.left!=null) {
            tempStack.push(node.left);
        }

        storage.push(node.val);

        if (node.right!=null) {
            tempStack.push(node.right);
        }
    }
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


let sampleRoot = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));

console.log(inorderTraversal(sampleRoot));