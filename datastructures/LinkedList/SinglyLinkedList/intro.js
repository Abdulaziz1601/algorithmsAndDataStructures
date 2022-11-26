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
}

// let first = new Node('Hi');
// first.next = new Node('there');
// first.next.next = new Node('how');
// first.next.next.next = new Node('are');
// first.next.next.next.next = new Node('you');

const list = new SinglyLinkedList();
list.push('Hello');
list.push('Goodbye');
list.push('1');
list.push('2');
list.push('3');
console.log(list.head);
