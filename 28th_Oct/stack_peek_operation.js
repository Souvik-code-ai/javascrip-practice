class Stack {
  constructor() {
    this.stack = [];
  }

  // Push an element onto the stack
  push(data) {
    this.stack.push(data);
  }

  // Peek the top element of the stack
  peek() {
    if (this.stack.length === 0) {
      return "Stack is empty";
    }
    return this.stack[this.stack.length - 1];
  }

  // Print all elements of the stack
  printStack() {
    let str = "";
    for (let i = 0; i < this.stack.length; i++)
      str += this.stack[i] + "\n";
    return str;
  }
}

// Example usage
let myStack = new Stack();
myStack.push(2);
myStack.push(3);
myStack.push(9);
myStack.push(1);

console.log("Your stack is:\n" + myStack.printStack());
console.log("Top element (peek):", myStack.peek());
//Time complexity:O(1)[for peek & constructor class]+O(n)[for printstack method]=O(n);
//space complexity:O(1)[for peek & constructor class]+O(n)[for printstack method]=O(n)
