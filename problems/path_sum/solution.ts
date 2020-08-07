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

function hasPathSum(root: TreeNode | null, sum: number): boolean {
    let exist = false;

    function checkSumm(node: TreeNode | null, value: number) {
        
        if (!node) return;
        
        const sumValue = value + node.val;

        if (!node.left && !node.right && sum === sumValue) {
            exist = true;
        }
        checkSumm(node.left, value + node.val);
        checkSumm(node.right, value + node.val);
    }

    if (root) checkSumm(root, 0);

    return exist;
}
