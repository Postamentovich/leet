/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
    const nodes = [];

    function traverseNode(node: ListNode | null) {
        if (!node) {
            return;
        }
        nodes.push(node);
        traverseNode(node.next);
    }

    traverseNode(head);

    const middleIndex = Math.floor(nodes.length / 2);

    return nodes[middleIndex] || null;
};