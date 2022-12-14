// Shifting

// Removing a node from the start of the Linked List!

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
	// If there are no nodes return undefined
	// Store the current head property in a variable
	// Set the head property to be the current head's next property
	// Decrement the length by 1
	// Return the value of the node removed

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
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);

list.shift()
list.shift()
list.push(100);
console.log(list);