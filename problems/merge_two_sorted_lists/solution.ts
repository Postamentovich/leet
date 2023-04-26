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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const commonList = [];

    function traverseList(list: ListNode | null) {
        if (!list) {
            return;
        }
        commonList.push(list);
        traverseList(list.next);
    }

    traverseList(list1);
    traverseList(list2);

    const sortedItems = commonList.sort((a, b) => a.val - b.val);

    let head = sortedItems[0] || null;

    let lastValue = head;

    for (let i = 1; i <= sortedItems.length; i++) {
        const item = sortedItems[i];

        if (item) {
            lastValue.next = item;
        } else {
            lastValue.next = null;
        }

        lastValue = lastValue.next;
    }

    return head;
};