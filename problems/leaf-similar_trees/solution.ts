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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    function getLeafValues(node: TreeNode | null, values: number[]) {
        if (!node.left && !node.right) {
            values.push(node.val);
            return values;
        }
        if (node.left) {
            getLeafValues(node.left, values);
        }
        if (node.right) {
            getLeafValues(node.right, values);
        }
        return values;
    }
    const root1Values = getLeafValues(root1, []);
    const root2Values = getLeafValues(root2, []);
    
    if (root1Values.length !== root2Values.length) {
        return false;
    }

    for (let i = 0; i < root1Values.length; i++) {
        const value1 = root1Values[i];
        const value2 = root2Values[i];
        if (value1 !== value2) {
            return false;
        }
    }

    return true
};