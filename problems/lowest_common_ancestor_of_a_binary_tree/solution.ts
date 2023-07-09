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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (!root) {
        return null;
    }

    function traverse(node: TreeNode | null) {
        if (!node) {
            return null;
        }

        if (node.val === p.val || node.val === q.val) {
            return node;
        }
        
        const left = traverse(node.left);
        const right = traverse(node.right);

        if (left && right) {
            return node;
        }

        return left || right;
    }

    return traverse(root)
};