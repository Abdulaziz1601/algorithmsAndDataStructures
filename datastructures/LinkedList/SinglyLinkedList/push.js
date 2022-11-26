// piece of data stored - val
// reference to next node - next

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
	// Pushing pseudo code
	// This function should accept a value
	// Create a new node using the value passed to the function
	// If there is no head property on the list, set the head and tail to be the newly created node
	// Otherwise set the next property to be on the tail to be the new node
	// and set the tail property on the list to be the newly created node
	push(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = this.tail = newNode;
		} else {
			// we write this line, because we have to add newNode to the end of the list
			// so item before this will point to this item
			// Example:
			// we have Node with value 99
			// So here 99 will point to new node which is for instance is 104
			this.tail.next = newNode;
			// Then we label our newNode as tail
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
}

const list = new SinglyLinkedList();
list.push('Hello');
list.push('How');

console.log(list);
