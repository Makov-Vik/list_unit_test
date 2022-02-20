class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new LinkedListNode(value);
  
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
  
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  toArray() {
    const nodes = [];
    let currentNode = this.head;
  
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  toString(callback) {
    return this.toArray()
    .map(node => node.toString(callback))
    .join('');
  }
}

const list = new LinkedList;
list.append("c");
list.append("h");
list.append("a");
list.append("r");
list.append("a");
list.append("c");
list.append("t");
list.append("e");
list.append("r");

const nodeStringifier = value => `${value}`;
const allList = list.toString(nodeStringifier)
console.log(allList);
