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

function maxLevelSum(root: TreeNode | null): number {
    if (!root) {
        return;
    }

    const levels = new Map();

    function bfs(node: TreeNode, level: number) {
        const currentLevelSum = levels.get(level) || 0;
        levels.set(level, currentLevelSum + node.val);
        if (node.left) {
            bfs(node.left, level + 1);
        }
        if (node.right) {
            bfs(node.right, level + 1);
        }
    }

    bfs(root, 1);

    let levelWithMaxSum = 0;
    let maxLevelSum = -Infinity;

    for (const [level, sum] of levels.entries()) {
        if (sum > maxLevelSum) {
            maxLevelSum = sum;
            levelWithMaxSum = level;
        }
    }

    return levelWithMaxSum;
};