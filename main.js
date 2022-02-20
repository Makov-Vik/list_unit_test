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
      this.tail.next = newNode;
      return this;
    }
  
    this.tail.next = newNode;
    this.tail = newNode;
    this.tail.next = this.head;
    return this;
  }

  toArray() {
    const nodes = [];
    let currentNode = this.head;
  
    do {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    } while (currentNode != this.head);

    return nodes;
  }

  toString(callback) {
      return this.toArray()
      .map(node => node.toString(callback))
      .join('');
    }

  length() {
    return this.toArray().length;
  }

  insert(value, index) {
    if(index < 0 || this.toArray().length < index) {
      throw new Error('Invalid index');
    }

    let currentNode = this.head;
    let currentItem = 0;
    let nextNode;
    const newNode = new LinkedListNode(value);

    if(index === 0) {
      nextNode = currentNode;
      newNode.next = nextNode;
      this.head = newNode;
    }
    else {
      // stop at the element that comes before the insertion point. it's why use 'index - 1'
      while (currentItem != index - 1) {
        currentNode = currentNode.next;
        currentItem++;
      }
      nextNode = currentNode.next;
      currentNode.next = newNode;
      newNode.next = nextNode;
    }
  }

  delete(index) {
    if(index < 0 || this.toArray().length <= index) {
      throw new Error('Invalid index');
    }

    let currentNode = this.head;
    let currentItem = 0;
    let nextNode;
    let deleteNode;

    if(index === 0) {
      nextNode = currentNode.next;
      currentNode.next = null;
      this.head = nextNode;
      return currentNode;
    }
    else {
      // stop at the element that comes before the insertion point. it's why use 'index - 1'
      while (currentItem != index - 1) {
        currentNode = currentNode.next;
        currentItem++;
      }
      deleteNode = currentNode.next;
      nextNode = deleteNode.next;

      deleteNode.next = null;
      currentNode.next = nextNode;
    }
    return deleteNode;
  }
}

// Use case
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
console.log('List in string: ' + allList);

const length = list.length();
console.log('Length: ' + length);

console.log('Insert "p"');
list.insert('p', 9);
const allList2 = list.toString(nodeStringifier)
console.log('List in string: ' + allList2);

const deleteNode = list.delete(9);
console.log('Delete Node: ', deleteNode);
const allList3 = list.toString(nodeStringifier)
console.log('List in string: ' + allList3);

