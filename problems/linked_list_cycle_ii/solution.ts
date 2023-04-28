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

function detectCycle(head: ListNode | null): ListNode | null {
    const visitedNodes = [];

    let currentNode = head;

    while (currentNode) {
        if (visitedNodes.includes(currentNode)) {
            return currentNode;
        }

        visitedNodes.push(currentNode);

        currentNode = currentNode.next;
    }

    return null;
};