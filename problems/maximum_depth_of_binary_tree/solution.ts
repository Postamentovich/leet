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

function maxDepth(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    let maxDepth = 1;

    function traverse(node: TreeNode | null, depth: number) {
        maxDepth = Math.max(maxDepth, depth);
        if (node.left) {
            traverse(node.left, depth + 1);
        }
        if (node.right) {
            traverse(node.right, depth + 1);
        }
    }


    traverse(root, 1);
    
    return maxDepth;
};