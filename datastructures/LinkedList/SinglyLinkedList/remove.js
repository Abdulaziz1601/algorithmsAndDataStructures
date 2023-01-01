// Remove
// Remove a node from the
// Linked List at a specific position

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
	// Remove pseudocode
	// If the index is less than zero or greater than or equal to the length, return undefined
	// If the index is the same as (length - 1), pop
	// If the index is 0, shift
	// Otherwise, using the get method, access the node at the (index - 1)
	// Set the next property on that node to be the next of the next node
	// Decrement the length
	// Return the value of the node removed
	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		const previousNode = this.get(index - 1);
		const removedNode = previousNode.next;
		previousNode.next = removedNode.next;

		this.length--;
		return removedNode.val;
	}
}

const list = new SinglyLinkedList();
list.push(100);
list.push(201);
list.push(250);
list.push(350);
console.log(list.remove(3));
console.log(JSON.stringify(list, null, 4));
