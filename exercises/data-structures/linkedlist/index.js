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

  clear = () => {
    this.head = null;
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

  insertAt = (data, index) => {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();

    const node = new Node(data, previous.next);
    previous.next = node;
  };

  insertFirst = data => {
    // this.head = new Node(data, this.head);
    this.insertAt(data, 0); // Reusability option.
  };

  insertLast = data => {
    // const lastNode = this.getLast();

    // if (lastNode) {
    //   lastNode.next = new Node(data);
    // } else {
    //   this.head = new Node(data);
    // }
    this.insertAt(data, this.size());
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

  getFirst = () => {
    // return this.head;
    return this.getAt(0);
  };

  getLast = () => {
    // let node = this.head;
    // if (!this.head) {
    //   return null;
    // }
    // while (node.next) {
    //   node = node.next;
    // }
    // return node;
    return this.getAt(this.size() - 1);
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

  removeFirst = () => {
    // if (!this.head) {
    //   return;
    // }
    // this.head = this.head.next;
    this.removeAt(0);
  };

  removeLast = () => {
    // if (!this.head) {
    //   return;
    // }
    // if (!this.head.next) {
    //   return (this.head = null);
    // }
    // let node = this.head.next;
    // let previous = this.head;
    // while (node.next) {
    //   previous = node;
    //   node = node.next;
    // }
    // previous.next = null;
    this.removeAt(this.size() - 1);
  };

  forEach = callback => {
    let node = this.head;
    let counter = 0;
    while (node) {
      callback(node, counter);
      node = node.next;
      counter++;
    }
  };

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
