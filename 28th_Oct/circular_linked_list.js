class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  // 1️⃣ Insert at the end
  insertAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head; // points to itself
      return;
    }

    let current = this.head;
    while (current.next !== this.head) {
      current = current.next;
    }

    current.next = newNode;
    newNode.next = this.head;
  }

  // 2️⃣ Insert at the beginning
  insertAtBeginning(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
      return;
    }

    let current = this.head;
    while (current.next !== this.head) {
      current = current.next;
    }

    current.next = newNode;
    newNode.next = this.head;
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
    let prev = null;

    // Case 1: Single node list
    if (current.data === key && current.next === this.head) {
      this.head = null;
      return;
    }

    // Case 2: Head node to be deleted
    if (current.data === key) {
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = this.head.next;
      this.head = this.head.next;
      return;
    }

    // Case 3: Non-head node
    do {
      prev = current;
      current = current.next;
      if (current.data === key) {
        prev.next = current.next;
        return;
      }
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

  // 6️⃣ Display the list
  display() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }
    let result = "";
    let current = this.head;
    do {
      result += current.data + " ";
      current = current.next;
    } while (current !== this.head);
    console.log(result.trim());
  }

  // 7️⃣ Count number of nodes
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

  // 8️⃣ Reverse the circular linked list
  reverse() {
    if (!this.head || this.head.next === this.head) return;

    let prev = null;
    let current = this.head;
    let nextNode = null;
    const headNode = this.head;

    do {
      nextNode = current.next;
      current.next = prev || this.head; // reassign next pointer
      prev = current;
      current = nextNode;
    } while (current !== this.head);

    this.head.next = prev;
    this.head = prev;
  }
}
const cll = new CircularLinkedList();

cll.insertAtEnd(10);
cll.insertAtEnd(20);
cll.insertAtEnd(30);
cll.insertAtBeginning(5);
cll.insertAfter(20, 25);

cll.display(); // Output: 5 10 20 25 30

console.log("Search 25:", cll.search(25)); // true
console.log("Node count:", cll.countNodes()); // 5

cll.deleteNode(10);
cll.display(); // Output: 5 20 25 30

cll.reverse();
cll.display(); // Output: 30 25 20 5
// | Operation           | Time | Space | Notes                                     |
// | ------------------- | ---- | ----- | ----------------------------------------- |
// | Insert at beginning | O(n) | O(1)  | Needs traversal to fix last node’s `next` |
// | Insert at end       | O(n) | O(1)  | Traversal to find last node               |
// | Delete node         | O(n) | O(1)  | May need full traversal                   |
// | Search              | O(n) | O(1)  | Must loop until back to head              |
// | Display             | O(n) | O(1)  | Full traversal                            |
// | Reverse             | O(n) | O(1)  | In-place                                  |
