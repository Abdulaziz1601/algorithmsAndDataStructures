// Get
// Retrieving a node by It's position in the Linked List

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
	// This function should accept an index
	// If the index is less than zero or greater
	// or equal to the length of the list, return null
	// Loop through the list until you reach the index and
	// return the node at that specific index
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
}

const list = new SinglyLinkedList();
list.push("Hi");
list.push("How");
list.push("!");
list.push("What");
list.push("This");
console.log(list.get(5));  
list.push("$");
console.log(list.get(5));  