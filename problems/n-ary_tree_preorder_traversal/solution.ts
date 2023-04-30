/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function preorder(root: Node | null): number[] {
    const result: number[] = [];

    function preorderTraverse(root) {
        if (!root) {
            return;
        }

        result.push(root.val);

        for (const node of root.children) {
            preorderTraverse(node);
        }
    }

    preorderTraverse(root);

    return result;
};