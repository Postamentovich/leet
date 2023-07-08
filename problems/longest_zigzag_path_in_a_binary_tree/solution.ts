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

function longestZigZag(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    let maxLength = 0;

    function dfs(node: TreeNode, lastDirection: 'left' | 'right', currentCount: number) {
        maxLength = Math.max(currentCount, maxLength);
        if (node.left) {
            const newCounter = lastDirection === 'right' ? currentCount + 1 : 1;
            dfs(node.left, 'left', newCounter)
        }
        if (node.right) {
            const newCounter = lastDirection === 'left' ? currentCount + 1 : 1;
            dfs(node.right, 'right', newCounter)
        }
    }

    if (root.left) {
        dfs(root.left, 'left', 1);
    }
    if (root.right) {
        dfs(root.right, 'right', 1);
    }

    return maxLength;
};