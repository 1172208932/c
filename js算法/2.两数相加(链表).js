/*
    给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

    请你将两个数相加，并以相同形式返回一个表示和的链表。

    你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

    输入：l1 = [2,4,3], l2 = [5,6,4]
    输出：[7,0,8]
    解释：342 + 465 = 807.
 */


 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = null, tail = null;
    let carry = 0;
    while(l1 || l2){
        let n1 = l1?l1.val : 0;
        let n2 = l2?l2.val : 0;
        let num = n1 + n2 + carry;
        if(!head){
            head = tail = new ListNode(num%10)
        }else{
            tail.next = new ListNode(num%10)
            tail = tail.next
        }

        carry = Math.floor(num/10)

        if(l1){
            l1 = l1.next
        }
        if(l2){
            l2 = l2.next
        }
    }
    if(carry){
        tail.next = new ListNode(carry)
    }
    return head
};