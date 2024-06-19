class Stack {

    // Array is used to implement stack
    constructor() {
        this.items = [];
    }

    // Functions to be implemented
    // push(item)
    // pop()
    // peek()
    // isEmpty()
    // printStack()

    // push function
    push(element) {
        // push element into the items
        this.items.push(element);
    }

    // pop function
    pop() {
        // return top most element in the stack
        // and removes it from the stack
        if (this.items.length == 0)
            return 'nope'
        return this.items.pop();
    }

    // peek function
    peek() {
        // return the top most element from the stack
        // but does'nt delete it.
        return this.items[this.items.length - 1];
    }

    // isEmpty function
    isEmpty() {
        // return true if stack is empty
        return this.items.length == 0;
    }
}