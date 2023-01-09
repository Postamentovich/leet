/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function preorderTraversal(root: TreeNode | null): number[] {
    const result = [];
    
    function getNodeValue(node) {
        if (node?.val) {
            result.push(node.val);
        }
        if (node?.left) {
            getNodeValue(node.left);
        }
        if (node?.right) {
            getNodeValue(node.right);
        }
    }
    
    getNodeValue(root);
    
    return result;
};