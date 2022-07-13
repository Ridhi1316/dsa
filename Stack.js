const list = require('../dsa/list')
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null; //return top value of stack
        this.size=0;
        this.tail=null;
    }
    pushback(data){
        const node = new Node(data);
        node.next = this.head;
        this.head = node;
        if(this.size==0){
            this.tail=node;
        }
        this.size++;
    }
    popback(){
        if(!this.size){
            throw Error('Stack is empty');
        }
        let cur = this.head;
        this.head = this.head.next;
        this.size--;
        cur.next=null;
        return cur.data;
    }
}
class Stack{
    constructor(){
        this.top=null;
    }
    //Append at end
    push(val){
        this.list.pushback(val);

    }

    //remove from end
    pop(){
        this.list.popback();
    }

    //return last element value
    peek(){
    return this.list.head;
    }

    //return the size of stack
    getSize(){
        return this.list.size;
    }

    isEmpty(){
        return this.list.size===0;
    }
}

const st = new Stack();
st.push(10);
st.push(20);
st.push(30);
st.push(40);
st.pop();
st.getTop();

while(!st.isEmpty){
    console.log(st.pop(),"===",st.getSize);
}