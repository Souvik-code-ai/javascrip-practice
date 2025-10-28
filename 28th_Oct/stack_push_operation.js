class Stack {
  constructor() {
    this.stack = [];
  }
  push(data) {
    this.stack.push(data);
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