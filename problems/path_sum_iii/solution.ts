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

function pathSum(root: TreeNode | null, targetSum: number): number {
    if (!root) {
        return 0;
    }

    let result = 0;
    const map = new Map();
    map.set(0, 1);

    function dfs(node: TreeNode, currentSum: number) {
        const currentVal = currentSum + node.val;
        const requiredVal = currentVal - targetSum;

        result += map.get(requiredVal) ?? 0;

        map.set(currentVal, (map.get(currentVal) ?? 0) + 1);

        if (node.left) {
            dfs(node.left, currentVal);
        }
        if (node.right) {
            dfs(node.right, currentVal);
        }

        map.set(currentVal, map.get(currentVal) - 1);
    }

    dfs(root, 0);

    return result;
};

