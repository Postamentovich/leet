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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) return null;

    if (root.val == key) {
        if (!root.left) return root.right;
        if (!root.right) return root.left;
        const minNode = getMin(root.right);
        root.right = deleteNode(root.right, minNode.val);
        [minNode.left, minNode.right] = [root.left, root.right];
        root = minNode;
    } else if (root.val > key) {
        root.left = deleteNode(root.left, key);
    } else {
        root.right = deleteNode(root.right, key);
    }

    return root;
};

const getMin = (root: TreeNode | null): TreeNode | null => {
    while (root.left !== null) {
        root = root.left
    }
    return root;
}