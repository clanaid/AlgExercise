const SinglyLinkedList = require('./SinglyLinkedList');
const Node = require('./LinkedNode');

const singlylist = new SinglyLinkedList();

singlylist.insert(new Node('1'));
singlylist.insert(new Node('2'));
singlylist.insert(new Node('3'));
console.log(singlylist.display());
console.log('length:', singlylist.length());
