// Set
// Changing the value of a node based on it's position in the Linked List

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        newTail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        const oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }

        return oldHead;
    }
    unshift(newHeadValue) {
        const newNode = new Node(newHeadValue);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;

        let current = this.head;
        let counter = 0;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
    // This function should accept an index and a value
    // Use your get function to find the specific node
    // If the node is not found, return false
    // If the node is found, set the value of that node 
    // to be the value passed to the function and return true 
    set(index, val) {
        const foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
}

const list = new SinglyLinkedList();
list.push("Hi");
list.push("How");
list.push("!");
list.push("What");
list.push("This");

list.set(2, 'YiiHaaa');
console.log(list.get(2));