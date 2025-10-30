class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
class DoublyCircularLinkedList {
  constructor() {
    this.head = null;
  }

  // 1️⃣ Insert at the end
  insertAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      newNode.next = newNode;
      newNode.prev = newNode;
      return;
    }

    const last = this.head.prev;

    last.next = newNode;
    newNode.prev = last;
    newNode.next = this.head;
    this.head.prev = newNode;
  }

  // 2️⃣ Insert at the beginning
  insertAtBeginning(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      newNode.next = newNode;
      newNode.prev = newNode;
      return;
    }

    const last = this.head.prev;

    newNode.next = this.head;
    newNode.prev = last;
    last.next = newNode;
    this.head.prev = newNode;
    this.head = newNode;
  }

  // 3️⃣ Insert after a given node value
  insertAfter(key, data) {
    if (!this.head) return;
    let current = this.head;

    do {
      if (current.data === key) {
        const newNode = new Node(data);
        newNode.next = current.next;
        newNode.prev = current;
        current.next.prev = newNode;
        current.next = newNode;
        return;
      }
      current = current.next;
    } while (current !== this.head);
  }

  // 4️⃣ Delete a node by value
  deleteNode(key) {
    if (!this.head) return;

    let current = this.head;

    // Case 1: Only one node
    if (current.data === key && current.next === this.head) {
      this.head = null;
      return;
    }

    do {
      if (current.data === key) {
        const prevNode = current.prev;
        const nextNode = current.next;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;

        // if deleting the head
        if (current === this.head) {
          this.head = nextNode;
        }
        return;
      }
      current = current.next;
    } while (current !== this.head);
  }

  // 5️⃣ Search for a node
  search(key) {
    if (!this.head) return false;
    let current = this.head;
    do {
      if (current.data === key) return true;
      current = current.next;
    } while (current !== this.head);
    return false;
  }

  // 6️⃣ Display forward
  displayForward() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }

    let current = this.head;
    let result = "";
    do {
      result += current.data + " ";
      current = current.next;
    } while (current !== this.head);

    console.log("Forward:", result.trim());
  }

  // 7️⃣ Display backward
  displayBackward() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }

    let current = this.head.prev; // start from last
    let result = "";
    do {
      result += current.data + " ";
      current = current.prev;
    } while (current !== this.head.prev);

    console.log("Backward:", result.trim());
  }

  // 8️⃣ Count nodes
  countNodes() {
    if (!this.head) return 0;
    let count = 0;
    let current = this.head;
    do {
      count++;
      current = current.next;
    } while (current !== this.head);
    return count;
  }

  // 9️⃣ Reverse the list (in-place)
  reverse() {
    if (!this.head) return;

    let current = this.head;
    let temp = null;

    do {
      // swap next and prev for each node
      temp = current.next;
      current.next = current.prev;
      current.prev = temp;
      current = temp;
    } while (current !== this.head);

    // update head
    this.head = this.head.prev;
  }
}
const dcll = new DoublyCircularLinkedList();

dcll.insertAtEnd(10);
dcll.insertAtEnd(20);
dcll.insertAtEnd(30);
dcll.insertAtBeginning(5);
dcll.insertAfter(20, 25);

dcll.displayForward();   // Forward: 5 10 20 25 30
dcll.displayBackward();  // Backward: 30 25 20 10 5

console.log("Search 25:", dcll.search(25));  // true
console.log("Node count:", dcll.countNodes()); // 5

dcll.deleteNode(10);
dcll.displayForward();   // Forward: 5 20 25 30

dcll.reverse();
dcll.displayForward();   // Forward: 30 25 20 5
dcll.displayBackward();  // Backward: 5 20 25 30
// | Operation                 | Time Complexity | Space Complexity | Notes                      |
// | ------------------------- | --------------- | ---------------- | -------------------------- |
// | Insert at Beginning       | O(1)            | O(1)             | Head update only           |
// | Insert at End             | O(1)            | O(1)             | Uses head.prev (tail)      |
// | Insert After Node         | O(n)            | O(1)             | Must search for key        |
// | Delete Node               | O(n)            | O(1)             | Must find node first       |
// | Search                    | O(n)            | O(1)             | May loop through all nodes |
// | Traverse Forward/Backward | O(n)            | O(1)             | Visits all nodes once      |
// | Reverse                   | O(n)            | O(1)             | In-place pointer swapping  |
