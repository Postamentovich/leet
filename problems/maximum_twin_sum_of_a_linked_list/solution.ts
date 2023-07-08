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

function pairSum(head: ListNode | null): number {
    const nodes = [];
    let maxSum = -Infinity;
    let current = head;

    while (current) {
        nodes.push(current.val);
        current = current.next;
    }

    let left = 0;
    let right = nodes.length - 1;

    while (left < right) {
        maxSum = Math.max(maxSum, nodes[left] + nodes[right]);
        left++;
        right--;
    }

    return maxSum;
};