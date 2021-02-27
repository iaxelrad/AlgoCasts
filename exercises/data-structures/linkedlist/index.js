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

  insertFirst = data => {
    this.head = new Node(data, this.head);
  };

  size = () => {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  };

  getFirst = () => {
    return this.head;
  };

  getLast = () => {
    let node = this.head;
    if (!this.head) {
      return null;
    }
    while (node.next) {
      node = node.next;
    }
    return node;
  };

  clear = () => {
    this.head = null;
  };

  removeFirst = () => {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  };

  removeLast = () => {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      return (this.head = null);
    }
    let node = this.head.next;
    let previous = this.head;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  };

  insertLast = data => {
    const lastNode = this.getLast();

    if (lastNode) {
      lastNode.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  };

  getAt = index => {
    let counter = 0;
    let node = this.head;
    if (index > this.size) {
      return;
    }
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  };

  removeAt = index => {
    if (!this.head) {
      //Empty list edge case
      return;
    }
    if (index === 0) {
      // Removing first node case.
      return (this.head = this.head.next);
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      //Index out of bounds edge case.
      return;
    }
    previous.next = previous.next.next;
  };
}

module.exports = { Node, LinkedList };
