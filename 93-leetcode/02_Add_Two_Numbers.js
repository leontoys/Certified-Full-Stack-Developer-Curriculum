// Definition of ListNode
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// Constructing the first linked list: [2,4,3] (which represents 342 in reverse)
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));

// Constructing the second linked list: [5,6,4] (which represents 465 in reverse)
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

// Printing the linked lists for verification
console.log(l1);
console.log(l2);  