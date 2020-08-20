/**
 * 1. 模板引擎
 * 
 * - 实现一个简单的模板引擎
 * - 插值语法只需要考虑单行的情况
 * - 不需要考虑安全问题
 * 
 */

// const str = "hello, i am <@=user@>, from <@=location@>, like <@=like.a@> and <@=like.b@>.";
// const want = "hello, i am jojo, from china, like apple and pencil.";

// function template(tpl, state = {}) {
//     // code here
//     let arr = [];
//     tpl.match(/<@=(\S*)@>/);
//     console.log(tpl.match(/<@=(\S*)@>/));
// }

// const result = template(str, { user: 'jojo', location: 'china', like: { a: 'apple', b: "pencil" } });

// console.log("====== 1.模板引擎 ======")
// console.log('result --> ' + result);
// console.log('want ----> ' + want);
// console.log('should --> ' + true);
// console.log('[equal] -> ' + result == want);



// console.log('====== 2. 数组扁平化 ======');
/**
 * 2.数组扁平化
 */

// const arr1 = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10 , [11, 12, 13], 14]], 15];
// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// console.log('current -> ' + JSON.stringify(arr1));

// function method(arr) {
//     while (arr.some(item => Array.isArray(item))) {
//         arr = [].concat(...arr);
//     }
//     return arr;
// }

// console.log('result --> ' + JSON.stringify(method(arr1)));
// console.log('should --> ' + true);
// console.log('[equal] -> ' + (JSON.stringify(arr2) === JSON.stringify(method(arr1))));



// console.log('====== 3. 删除链表的倒数第N个节点 ======');
// 示例：

// 给定一个链表: 1->2->3->4->5, 和 n = 2.

// 当删除了倒数第二个节点后，链表变为 1->2->3->5.
// 说明：

// 给定的 n 保证是有效的。

// 进阶：

// 你能尝试使用一趟扫描实现吗？

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: null
        }
    }
}
function fn(head, n) {
    let tar = head
    let temp = head
    while (temp.next) {
        console.log( temp.next)
        console.log(n)
        if (!n) {
            tar = tar.next
        }
        n = n ? n - 1 : n
        temp = temp.next
    }
    if (n) {
        head = head.next
    } else {
        if (tar.next)
            tar.next = tar.next.next
        else
            tar.next = null
    }
    console.log(head)
    return head
};

fn(head, 1);