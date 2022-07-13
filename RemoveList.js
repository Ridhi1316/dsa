// Remove duplicate elements from Linked List. Given sorted list

 /* Definition for singly-linked list.  */
  function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

/**
 * @param {ListNode} head
 * @return {ListNode}
**/
var deleteDuplicates = function(head) {
   //  if(head=null){ return null; }
    let dummy = new ListNode(-1);
    dummy.next=head;
    let prev=dummy;
    let curr=head;
    while(curr.next){
        if(curr.val===prev.val){
            prev.next=curr.next;
            curr=curr.next;
        } else{
            prev=curr;
            curr=curr.next;
        }
    }
    return head;
    
};

let val = deleteDuplicates(1,1,2,2,3);
console.log(val);
