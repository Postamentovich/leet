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
    let reversedHead = null;
    let tempHead = head;

    while (tempHead) {
        const newNode = { ...tempHead };

        newNode.next = reversedHead;
        
        reversedHead = newNode;

        tempHead = tempHead.next;
    }

    return reversedHead;
};