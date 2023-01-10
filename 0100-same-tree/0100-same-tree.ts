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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) {
        return true;
    }
    
    if (p?.val !== q?.val) {
        return false;
    }
    
    let leftEqual = false;
    let rightEqual = false;
    
    if (p?.left === null && q?.left == null) {
        leftEqual = true;
    } else {
        leftEqual = isSameTree(p?.left, q?.left);
    }
    
    if (p?.right === null && q?.right == null) {
        rightEqual = true;
    } else {
        rightEqual = isSameTree(p?.right, q?.right);
    }

    return leftEqual && rightEqual;
};