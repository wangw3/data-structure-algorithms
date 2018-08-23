// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  insertFirst(data) {
    this.head = new Node(data, this.head);
    // this.insertAt(data, 0);
  }
  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }
  getFirst() {
    return this.head;
    // return this.getAt(0);
  }
  getLast() {
    if (!this.head) {
      return null
    }
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
    // return this.getAt(this.size() - 1);
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;

    // this.removeAt(0);
  }
  removeLast() {
    if (!this.head) {
      return;
    }
    let node = this.head;
    if (!node.next) {
      this.head = null;
      return;
    }
    while (node.next.next) {
      node = node.next;
    }
    node.next = null;
    // this.removeAt(this.size() - 1)
  }
  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
    // this.insertAt(data, this.size() - 1);
  }
  getAt(index) {
    if (!this.head) {
      return null;
    }
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node
      }
      counter ++;
      node = node.next;
    }
    return null;
  }
  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const prev = this.getAt(index - 1);
    if (!prev || !prev.next) {
      return;
    }
    prev.next = prev.next.next;
  }
  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const prev = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, prev.next);
    prev.next = node;
  }
  forEach(fn) {
    let node = this.head;
    while (node) {
      fn(node);
      node = node.next;
    }
  }
  *[Symbol.iterator] () {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

export { Node, LinkedList };
