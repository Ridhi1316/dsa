
//Node of List
class Node {
    // constructor
     constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}
//Linked List 
class LinkedList {
   
    constructor()
    {
        this.head=null; //initially head of list is null
        this.size = 0;  //initially size of list is null
    }

    //Inserts at head
     insertAtHead(data){
        var new_node = new Node(data);
    // Make next of new Node as head 
        new_node.next = this.head;
    // Move the head to point to new Node 
        this.head = new_node;

         this.size++;
    
    }

    //Insert at Last in Linked List
    insertAtLast(data){
        var newNode  = new Node(data);
        let curr=this.head;
        while(curr.next){
            curr=curr.next;
        }
        curr.next=newNode
        newNode=null;
    }

    //Insert at given position
    insertAtPos(data,index){
        var newNode = new Node(data);
        let curr=this.head;let prev=curr;
        let count=0;
        while(count!=index){
            curr=curr.next;
            prev=curr;
            count++;
        }
        prev.next=newNode;
        newNode.next=curr;

    }

    //Detect loop in linked list
     detectLoop(head) {
        let slow = fast = head;
        while(fast && fast.next){
            fast=fast.next.next
            slow = slow.next
        if(slow==fast){
            return true
        }
        }
        return false
    }

    //Merge two sorted lists
     mergeTwoLists(list1, list2) {
        if(list1 == null){
            return list2;
        }
         if(list2==null){
             return list1;
         }
         if(list1.val<list2.val){
             list1.next = mergeTwoLists(list1.next , list2);
             return list1;
         }
         else{
             list2.next = mergeTwoLists(list2.next , list1);
         }
          return list2;
     };


    //print Linked List
    printList()
    {
        var curr = this.head;
        while (curr) {
            console.log(curr.data)
            curr = curr.next;
        }
        console.log('null');
    }

    //Size of Linked List
    size_of_list()
    {
        console.log(this.size);
    }

}
var ll = new LinkedList();
ll.insertAtHead(4);
ll.insertAtHead(3);
ll.insertAtHead(2);
ll.insertAtHead(1);
ll.insertAtLast(5);
ll.insertAtPos(6,3);
ll.printList();
ll.detectLoop(1);
ll.mergeTwoLists()
console.log('Size of List -> ')
ll.size_of_list();
