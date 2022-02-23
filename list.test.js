const LinkedList = require("./main.js");

const clearLIst = { head: null, tail: null };

const node = {
  "next": {},
  "value": "a",
}
node.next = node;

const object = {
  head: node,
  tail: node
};

test('start with empty List', () => {
  const list = new LinkedList();
  expect(list).toEqual(clearLIst);
});

test('add first item string "a"', () => {
  const list = new LinkedList();

  expect(list.append('a')).toBe();
  expect(list).toEqual(object);
});

test('parse list to array', () => {
  const list = new LinkedList();

  expect(list.append('a')).toBe();
  expect(list.toArray()).toEqual([node]);
});

test('parse values of list to type string', () => {
  const list = new LinkedList();
  const nodeStringifier = value => `${value}`;

  expect(list.append('a')).toBe();
  expect(list.append('b')).toBe();
  expect(list.append('c')).toBe();
  expect(list.toString(nodeStringifier)).toEqual('abc');
});

test('determine the length of List', () => {
  const list = new LinkedList();

  expect(list.append('a')).toBe();
  expect(list.append('b')).toBe();
  expect(list.append('c')).toBe();
  expect(list.length()).toEqual(3);
});

test('insert value "Q" at position 2 on list "abcde"', () => {
  const list = new LinkedList();

  expect(list.append('a')).toBe();
  expect(list.append('b')).toBe();
  expect(list.append('c')).toBe();
  expect(list.append('d')).toBe();
  expect(list.append('e')).toBe();

  expect(list.insert('Q', 2)).toBe();
  expect(`${list}`).toEqual('abQcde');
});

test('delete value "C" at position 2 on list "abCde"', () => {
  const list = new LinkedList();

  expect(list.append('a')).toBe();
  expect(list.append('b')).toBe();
  expect(list.append('C')).toBe();
  expect(list.append('d')).toBe();
  expect(list.append('e')).toBe();

  expect(list.delete(2)).toBe('C');
  expect(`${list}`).toEqual('abde');
});

test('delete all values "C" on list "CabCdeC"', () => {
  const list = new LinkedList();

  expect(list.append('C')).toBe();
  expect(list.append('a')).toBe();
  expect(list.append('b')).toBe();
  expect(list.append('C')).toBe();
  expect(list.append('d')).toBe();
  expect(list.append('e')).toBe();
  expect(list.append('C')).toBe();

  expect(list.deleteAll('C')).toBe();
  expect(`${list}`).toEqual('abde');
});

test('get value from list by index "2"', () => {
  const list = new LinkedList();

  expect(list.append('a')).toBe();
  expect(list.append('b')).toBe();
  expect(list.append('c')).toBe();
  expect(list.append('d')).toBe();
  expect(list.append('e')).toBe();

  expect(list.get(2)).toBe('c');
});

test('get value from list by index "2"', () => {
  const list = new LinkedList();

  expect(list.append('a')).toBe();
  expect(list.append('b')).toBe();
  expect(list.append('c')).toBe();
  expect(list.append('d')).toBe();
  expect(list.append('e')).toBe();

  expect(`${list.clone()}`).toBe('abcde');
  const listClone = list.clone();

  expect(list.append('NEW_ITEM')).toBe();
  expect(`${listClone}`).toEqual('abcde');
});

test('reverse Nodes from list', () => {
  const list = new LinkedList();

  expect(list.append('a')).toBe();
  expect(list.append('b')).toBe();
  expect(list.append('c')).toBe();
  expect(list.append('d')).toBe();
  expect(list.append('e')).toBe();

  expect(list.reverse()).toBe();
  expect(`${list}`).toEqual('edcba');
});

test('find position of the first matching element', () => {
  const list = new LinkedList();

  expect(list.append('a')).toBe();
  expect(list.append('b')).toBe();
  expect(list.append('C')).toBe();
  expect(list.append('d')).toBe();
  expect(list.append('C')).toBe();
  expect(list.append('e')).toBe();

  expect(list.findFirst('C')).toBe(2);
});

test('find position of the last matching element', () => {
  const list = new LinkedList();

  expect(list.append('a')).toBe();
  expect(list.append('b')).toBe();
  expect(list.append('C')).toBe();
  expect(list.append('d')).toBe();
  expect(list.append('C')).toBe();
  expect(list.append('e')).toBe();

  expect(list.findLast('C')).toBe(4);
});

test('clear - delete all items from list', () => {
  const list = new LinkedList();

  expect(list.append('a')).toBe();
  expect(list.append('b')).toBe();
  expect(list.append('C')).toBe();
  expect(list.append('d')).toBe();
  expect(list.append('C')).toBe();
  expect(list.append('e')).toBe();

  expect(list.clear()).toBe();
  expect(list).toEqual(clearLIst);
});

test('extend list1 by list 2', () => {
  const list = new LinkedList();
  const list2 = new LinkedList();

  expect(list.append('a')).toBe();
  expect(list.append('b')).toBe();
  expect(list.append('c')).toBe();

  expect(list2.append('d')).toBe();
  expect(list2.append('e')).toBe();

  expect(list.extend(list2)).toBe();
  expect(`${list}`).toEqual('abcde');
});
