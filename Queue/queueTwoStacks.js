//Implement queue using two stacks
class MyQueue {
    constructor() {
        this.q = [];
    }
    
    push(e) {
        this.q.push(e);
    }
    
    pop() {
        return this.q.shift();
    }
    
    peek() {
        return this.q.at(0);
    }
    
    empty() {
        return this.q.length === 0;
    }
}
/*Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false] */