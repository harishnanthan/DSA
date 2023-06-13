class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0; 
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    if (this.first === this.last) this.last === null;
    let temp = this.first;
    this.first = this.first.next;
    this.size--;
    return temp;
  }
}

const queue = new Queue();
queue.enqueue(4);
queue.enqueue(5);
queue.dequeue();
console.log(queue);