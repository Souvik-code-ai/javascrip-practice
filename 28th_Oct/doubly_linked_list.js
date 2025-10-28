class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null; // keep track of last node for O(1) insertion
  }

  // ✅ Add node at the end
  add(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      // first node
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    // link new node at the end
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  // ✅ Remove a node by value
  remove(data) {
    if (this.head === null) return; // empty list

    let current = this.head;

    // traverse to find the node
    while (current !== null && current.data !== data) {
      current = current.next;
    }

    // node not found
    if (current === null) return;

    // case 1: removing head
    if (current === this.head) {
      this.head = current.next;
      if (this.head) this.head.prev = null;
      else this.tail = null; // list became empty
    }

    // case 2: removing tail
    else if (current === this.tail) {
      this.tail = current.prev;
      this.tail.next = null;
    }

    // case 3: middle node
    else {
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }
  }

  // ✅ Find a node
  find(data) {
    let current = this.head;
    while (current !== null) {
      if (current.data === data) return current;
      current = current.next;
    }
    return null;
  }

  // ✅ Print from head to tail
  printForward() {
    let current = this.head;
    let list = "";
    while (current !== null) {
      list += current.data + " <-> ";
      current = current.next;
    }
    list += "null";
    console.log("Forward:", list);
  }

  // ✅ Print from tail to head
  printBackward() {
    let current = this.tail;
    let list = "";
    while (current !== null) {
      list += current.data + " <-> ";
      current = current.prev;
    }
    list += "null";
    console.log("Backward:", list);
  }
}
// Create a new doubly linked list
let dll = new DoublyLinkedList();

// Add nodes
dll.add(10);
dll.add(20);
dll.add(30);
dll.add(40);

console.log("Initial list:");
dll.printForward();
dll.printBackward();

// Remove a node
dll.remove(20);
console.log("\nAfter removing 20:");
dll.printForward();
dll.printBackward();

// Find a node
let node = dll.find(30);
console.log("\nFound node:", node ? node.data : "Not found");
// | Operation         | Calls | Time                     | Space |
// | ----------------- | ----- | ------------------------ | ----- |
// | `add()`           | 4     | O(1) each → O(1) overall | O(1)  |
// | `printForward()`  | 2     | O(n)                     | O(n)  |
// | `printBackward()` | 2     | O(n)                     | O(n)  |
// | `remove()`        | 1     | O(n)                     | O(1)  |
// | `find()`          | 1     | O(n)                     | O(1)  |

