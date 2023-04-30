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

function levelOrder(root: TreeNode | null): number[][] {
    const levelsMap = new Map<number, number[]>();

    function traverse(node: TreeNode | null, level: number) {
        if (!node) {
            return;
        }
        
        const nodeLevel = levelsMap.get(level);

        if (nodeLevel) {
            nodeLevel.push(node.val);
        } else {
            levelsMap.set(level, [node.val]);
        }

        traverse(node.left, level + 1);
        traverse(node.right, level + 1);
    }

    traverse(root, 0);

    return Array.from(levelsMap.values());
};