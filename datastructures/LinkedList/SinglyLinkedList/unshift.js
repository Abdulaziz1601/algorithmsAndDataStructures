// Unshifting

// Adding a new node to the beginning of the list

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
	// This function should accept a value
	// Create a new node using the value passed to the function
	// If there is no head property on the list,
	// set the head and tail to be the newly created node
	// Otherwise set the newly created node's next property
	// to be the current head property on the list
	// Set the head property on the list to be that newly created node
	// Increment the length of the list by 1
	// Return the linked list
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
}

const list = new SinglyLinkedList();
list.unshift(200);
console.log(JSON.stringify(list, null, 4));
