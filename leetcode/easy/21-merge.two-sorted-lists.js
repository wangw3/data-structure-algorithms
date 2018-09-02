/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    var node = new ListNode(0);
    var pointer = node;

    while (l1 !== null && l2 !== null) {

        if (l1.val < l2.val) {
            pointer.next = l1;
            l1 = l1.next;
        }
        else {
            pointer.next = l2;
            l2 = l2.next;
        }
        pointer = pointer.next;
    }
    if (l1 === null) {
        pointer.next = l2;
    }
    if (l2 === null) {
        pointer.next = l1;
    }
    return node.next;
};

// var mergeTwoLists = function(l1, l2) {
//     let dummyHead = new ListNode(null);
//     let node = dummyHead;
//     while(l1 && l2) {
//         if(l1.val < l2.val) {
//             node.next = l1;
//             l1 = l1.next;
//         } else {      
//             node.next = l2;
//             l2 = l2.next;
//         }
//         node = node.next;
//     }

//     if(l1) {
//         node.next = l1;
//     } 
//     if(l2) {
//         node.next = l2;
//     }
//     return dummyHead.next;    
// };