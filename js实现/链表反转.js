var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr !== null) {
        let cnext = curr.next;
        if (prev === null) {
            curr.next = null;
        } else {
            curr.next = prev;
        }
        prev = curr;
        curr = cnext;
    }
    return prev
};