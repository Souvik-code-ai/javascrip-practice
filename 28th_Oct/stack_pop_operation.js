class Stack {
  constructor() {
    this.stack = [];
  }
    push(data) {
    this.stack.push(data);
  }
  
  pop() { //pop takes no arguments and automatically removes the top elements
    this.stack.pop();
  }
  
  printStack()
  {
    let str = "";
    for (let i = 0; i < this.stack.length; i++)
        str += this.stack[i] + "\n";
    return str;
  }
}
let myStack = new Stack(); //create item of type stack
//push elements to a stack
myStack.push(2);
myStack.push(3);
myStack.push(9);
myStack.push(1);
console.log("Your stack is:\n"+ myStack.printStack()); 

myStack.pop();
//print stack
console.log("Your stack is:\n"+ myStack.printStack());
//Time complexity:O(1)[for pop & constructor class]+O(n)[for printstack method]=O(n);
//space complexity:O(1)[for pop & constructor class]+O(n)[for printstack method]=O(n)

// // OUTPUT will be 
// Your stack is:
// 2
// 3
// 9
// 1

// Your stack is:
// 2
// 3