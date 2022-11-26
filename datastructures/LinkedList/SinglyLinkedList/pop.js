// Popping

// Removing a node from the end of the Linked List!

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
	// traverse() {
	//     let current = this.head;
	//     while(current) {
	//         console.log(current.val);
	//         current = current.next;
	//     }
	// }

	//  If there are no nodes in the list, return undefined
	//  Loop through the list until you reach the tail
	//  Set the next property of the 2ND to last node to be null
	//  Set the tail to be the 2ND to last node
	//  Decrement the length of the list by 1
	//  Return the value of the node removed
	pop() {
		if (!this.head) return;
		let current = this.head,
			pre;
		while (current.next !== null) {
			pre = current;
			current = current.next;
		}
		pre.next = null;
		this.tail = pre;
		this.length--;
		return current.val;
	}
}

const list = new SinglyLinkedList();
list.push('First');
list.push('Second');
list.push('Last');

console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
