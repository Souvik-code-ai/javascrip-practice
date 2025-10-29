class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev=null;
  }
}
class LinkedList {
  constructor() {
    this.head = null; // start with empty list
  }

  // ✅ Add node at the end of the list
  add(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode; // first node
      return;
    }

    // traverse to the last node
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode; // link new node at the end
  }

  // ✅ Remove a node by value
  remove(data) {
    if (this.head === null) return; // list is empty

    // if head node is to be removed
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    // traverse the list to find the node before the one to remove
    let current = this.head;
    while (current.next !== null && current.next.data !== data) {
      current = current.next;
    }

    if (current.next !== null) {
      current.next = current.next.next; // unlink the node
    }
  }

  // ✅ Find a node by value
  find(data) {
    let current = this.head;
    while (current !== null) {
      if (current.data === data) return current;
      current = current.next;
    }
    return null;
  }

  // ✅ Print all nodes
  printList() {
    let current = this.head;
    let list = "";
    while (current !== null) {
      list += current.data + " -> ";
      current = current.next;
    }
    list += "null";
    console.log(list);
  }
  printListBackward() {
  if (!this.head) return "";

  let prev = null;
  let current = this.head;
  let next = null;

  // Reverse the list
  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  // Update head to new first node (previous tail)
  this.head = prev;

  // Build string of reversed list
  let list = "";
  let node = this.head;
  while (node !== null) {
    list += node.data + " ";
    node = node.next;
  }

  return list.trim();
}

}

// Create a new linked list
let myList = new LinkedList();

// Add nodes
myList.add(10);
myList.add(20);
myList.add(30);
myList.add(40);

// console.log("Initial Linked List:");
// myList.printList(); // 10 -> 20 -> 30 -> 40 -> null

// // Remove a node
// myList.remove(20);
// console.log("After removing 20:");
// myList.printList(); // 10 -> 30 -> 40 -> null

// // Find a node
// let node = myList.find(30);
// console.log("Found node:", node ? node.data : "Not found");


console.log( myList.printListBackward());









// | Operation         | Count                | Time | Dominant? |
// | ----------------- | -------------------- | ---- | --------- |
// | 4 × `add()`       | 4 × O(n) → O(n) each | O(n) |           |
// | 2 × `printList()` | O(n) each            | O(n) |           |
// | 1 × `remove()`    | O(n)                 | O(n) |           |
// | 1 × `find()`      | O(n)                 | O(n) |           |
