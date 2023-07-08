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

function goodNodes(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    let counter = 0;

    function getGoodNodes(root: TreeNode | null, currentMax: number) {
        if (root.val >= currentMax) {
            counter++;
        }
        if (root.left) {
            getGoodNodes(root.left, Math.max(currentMax, root.val))
        }
        if (root.right) {
            getGoodNodes(root.right, Math.max(currentMax, root.val))
        }
    }

    getGoodNodes(root, root.val);

    return counter;
};