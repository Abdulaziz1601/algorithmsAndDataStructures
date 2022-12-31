// Insert
// Adding a node to the Linked List
// at a specific position

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
	set(index, val) {
		const foundNode = this.get(index);
		if (foundNode) {
			foundNode.val = val;
			return true;
		}
		return false;
	}
	// Insert pseudocode
	// If the index is less then 0 or greater then the length return false
	// If the index is the same as the length, push a new node to the end of the list
	// If the index is 0, unshift a new node to the start of the list
	// Otherwise, using the get method, access the node at the (index - 1)
	// Set the next property on that node to be the new node 
	// Set the next property on the new node to point to the old next node
	// Increment the length 
	// Return true
	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) return !!this.push(val);
		if (index === 0) return !!this.unshift(val);

		const newNode = new Node(val);
		const prev = this.get(index - 1);
		const temp = prev.next;
		prev.next = newNode;
		newNode.next = temp;
		this.length++;
		return true;
	}
}

const list = new SinglyLinkedList();
list.push(100);
list.push(201);
list.push(250);
list.push(350);
console.log(JSON.stringify(list.insert(0, 224), null, 4));
console.log(list.get(0));