// import LinkNode from './LinkedNode';
const LinkNode = require('./LinkedNode');

class SinglyLinkedList {
  constructor() {
    //链表带头——不存储具体数据
    this.head = new LinkNode('head');
  }

  findByValue(value) {
    let p = this.head.next;
    while (p !== null && p.value !== value) {
      p = p.next;
    }

    return p === null ? null : p;
  }

  findByIndex(index) {
    let pos = 0;
    let p = this.head.next;
    while (p !== null && pos !== index) {
      p = p.next;
      ++pos;
    }

    return p === null ? -1 : pos;
  }

  //逆序插入
  insert(node) {
    node.next = this.head.next;
    this.head.next = node;
  }

  insertTo() {}

  deleteByNode(node) {
    if (node === null || this.isEmpty()) {
      return;
    }

    if (this.head.next === node) {
      this.head.next = null;
      return;
    }

    let tmpNode = this.head.next;
    while (tmpNode !== null && tmpNode.next !== node) {
      tmpNode = tmpNode.next;
    }
    if (tmpNode === null) {
      return;
    }
    tmpNode.next = tmpNode.next.next;
  }

  isEmpty() {
    return this.head.next === null;
  }

  revers() {
    let p = this.head.next;
  }

  length() {
    let len = 0;
    let p = this.head.next;
    while (p !== null) {
      len += 1;
      p = p.next;
    }
    return len;
  }

  display() {
    if (this.isEmpty()) {
      return '';
    }

    let rst = '{';
    let p = this.head.next;
    while (p !== null) {
      if (p.next === null) {
        rst += p.value + '}';
      } else {
        rst += p.value + ',';
      }
      p = p.next;
    }
    return rst;
  }
}

// export default SinglyLinkedList;
module.exports = SinglyLinkedList;
