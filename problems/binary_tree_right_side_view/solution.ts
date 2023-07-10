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

function rightSideView(root: TreeNode | null): number[] {
    if (!root) {
        return [];
    }

    const levels = new Map();

    function bfs(node: TreeNode, level: number) {
        const levelNodes = levels.get(level) || [];
        levels.set(level, [...levelNodes, node.val]);
        
        if (node.left) {
            bfs(node.left, level + 1);
        }
        if (node.right) {
            bfs(node.right, level + 1);
        }
    }

    bfs(root, 0);

    return Array.from(levels.values()).map(level => level.pop())
};