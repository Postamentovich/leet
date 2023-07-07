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

function oddEvenList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }

    let lastOdd = head;
    const headEven = head.next;
    let lastEven = headEven;

    while (lastEven && lastEven.next) {
        lastOdd.next = lastEven.next;
        lastOdd = lastOdd.next;
        lastEven.next = lastOdd.next;
        lastEven = lastOdd.next;
    }

    lastOdd.next = headEven;

    return head;
};