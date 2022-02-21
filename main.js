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
    if (index < 0 || this.toArray().length < index) {
      throw new Error('Invalid index');
    }

    let currentNode = this.head;
    let currentItem = 0;
    let nextNode;
    const newNode = new LinkedListNode(value);

    if (index === 0) {
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
    if (index < 0 || this.toArray().length <= index) {
      throw new Error('Invalid index');
    }

    let currentNode = this.head;
    let currentItem = 0;
    let nextNode;
    let deleteNode;

    if (index === 0) {
      nextNode = currentNode.next;
      currentNode.next = null;
      this.head = nextNode;
      this.tail.next = nextNode;
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

  deleteAll(value) {
    let currentNode = this.head;
    let nextNode;

    if (currentNode.value == value) {
      nextNode = currentNode.next;
      this.head.next = null;
      this.head = nextNode
      this.tail.next = nextNode;
      currentNode = this.head;
    }

    do {
      if (currentNode.next.value == value) {
        const deleteItem = currentNode.next;
        nextNode = deleteItem.next;
        deleteItem.next = null;
        currentNode.next = nextNode;

      }
      currentNode = currentNode.next;
    } while (currentNode != this.head);
  }

  get(index) {
    const arrayList = this.toArray();
    if (index < 0 || arrayList.length <= index) {
      throw new Error('Invalid index');
    }
    return arrayList[index].value;
  }

  clone() {
    let clone = new LinkedListNode;
    let currentNode = this.head;

    const list2 = new LinkedList;

    do {
      list2.append(currentNode.value);
      currentNode = currentNode.next;
    } while (currentNode != this.head);

    return list2;
    // const fnClone = (currNode, cl) => {
    //   if (currNode == this.tail) { 
    //     return { value: currNode.value, next: currNode.next };
    //   }
      
    //   cl.next = new LinkedListNode(currNode.next.value, fnClone(currNode.next, cl));
    //   return { value: currNode.value, next: cl.next.next };
    // }
    
    // const result = fnClone(currentNode, clone);

    // let nodes = [];
    // let curNode = result;
    // let i = 0;
    // while(i < 9) {
    //   nodes.push(curNode.value);
    //   curNode = curNode.next;
    //   i++;
    // }
    // console.log(nodes);
    // //console.log(result);
    //return result;
  }

  reverse() {
    let currNode = this.head;
    let prevNode = this.tail;
    let nextNode = null;

    do {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    } while (currNode != this.head);
  
    this.tail = this.head;
    this.head = prevNode;
  
    return this;
  }

  findFirst(value) {
    const arrayList = this.toArray().map(node => node.value);
    return arrayList.indexOf(value);
  }

  findLast(value) {
    const arrayList = this.toArray().map(node => node.value);
    arrayList.reverse();
    const indexFirst = arrayList.indexOf(value);
    if (indexFirst < 0) return indexFirst;

    // completoin of the element index
    const index = arrayList.length - arrayList.indexOf(value) - 1;
    return index;
  }

  clear() {
    let currentNode = this.head;
    let nextNode = currentNode.next;
    while (nextNode != null) {
      currentNode.next = null;
      currentNode = nextNode;
      nextNode = currentNode.next;
    }

    this.head = null;
    this.tail = null;
    return this;

  }

  extend(list2) {
    const list2Clone = list2.clone();
    const lastItemOf1List = this.tail;

    const firstItem2List = list2Clone.head;
    const lastIitem2List = list2Clone.tail;

    lastItemOf1List.next = firstItem2List;
    lastIitem2List.next = this.head;

    return this;
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

const allList2 = list.toString(nodeStringifier)
console.log('List in string: ' + allList2);

const length = list.length();
console.log('Length: ' + length);

list.insert('p', 9);
console.log('Insert "p". List in string: ' + list);

const deleteNode = list.delete(9);
console.log('Delete Node: ', deleteNode);
console.log('List in string: ' + list);

const deleteAll = 'c';
list.deleteAll(deleteAll);
console.log(`Delete all '${deleteAll}'. List in string: ' + ${list}`);

const index = 0;
const getByIndex = list.get(index);
console.log(`Get value '${getByIndex}', by index ${index}`);

const clone = list.clone();
console.log('Clone list in string: ' + list);

list.reverse();
console.log('Revers list in string: ' + list);

const elFirst = 'c';
const findFirst = list.findFirst(elFirst);
console.log(`Find first index ${elFirst}: ${findFirst}`);

const elLast = 'r';
const findLast = list.findLast(elLast);
console.log(`Find last index ${elLast}: ${findLast}`);

const list2 = new LinkedList;
list2.append('s');
list2.append('m');
list2.append('t');
list2.append('h');
list2.append('n');
list2.append('e');
list2.append('w');
list.extend(list2);
console.log('Extend list in string: ' + list);

list2.append('L');
list2.append('O');
list2.append('L');
console.log('Extend list1 in string after append to list2: ' + list);

list.clear();
console.log('Clear list: ', list);
