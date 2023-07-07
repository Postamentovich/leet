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

function reverseList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }
    
    let current = head;
    let previous = null;

    while (current) {
        const next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }

    return previous;

};