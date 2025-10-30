class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(data) {
    this.queue.push(data);
  }
  dequeue() 
  {
    return this.queue.shift();
  }
	printQueue()
	{
    let str = "";
    for (let i = 0; i < this.queue.length; i++)
        str += this.queue[i] + " ";
    return str;
	}
}

//create an object of type queue
let myQueue = new Queue();

//insert items into the queue
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(9);
myQueue.enqueue(1);

//print the queue
console.log("Your queue is:\n"+myQueue.printQueue());

myQueue.dequeue();
console.log("Your queue after deletion is:\n"+myQueue.printQueue());
// | Method          | Time Complexity | Space Complexity | Explanation                  |
// | --------------- | --------------- | ---------------- | ---------------------------- |
// | `constructor()` | O(1)            | O(1)             | Initializes empty array      |
// | `enqueue()`     | O(1)            | O(1)             | Adds at end                  |
// | `dequeue()`     | O(n)            | O(1)             | Removes from front → reindex |
// | `printQueue()`  | O(n)            | O(n)             | Traverses and builds string  |
