class Stack{
    constructor(){
        this.items = [];
        this.count = 0;
    }

    //Add element to top of stack
    push(element){
        this.items[this.count] = element;
        console.log(`${element} is added at ${this.count}`);``
        this.count++;   
        return this.count-1;
    }

    // Return and remove element on top of stack
    // Return undefined if stack is empty
    pop(){
        if(this.count===0){
            return undefined;
        }
        let deleteItem = this.items[this.count-1];
        this.count--;
        console.log(`${deleteItem} is removed`);
        return deleteItem;
    }

    //Check top element in stack
    peek(){
        if(this.count===0){
            return undefined;
        }
        return this.items[this.count-1];
    }

    //Check if stack is empty
    isEmpty(){
        return this.count===0?true:false;
    }

    //Check size of stack
    size(){
        return this.count;
    }

    //Print elements in stack
    print(){
        let str = "";
        for(let i=0;i<this.count-1;i++){
            str+=this.items[i]+", "
        }
        str+=this.items[this.count-1];  //last element doesn't have comma
        console.log(str);
    }

    //Clear stack
    clear(){
        this.items=[];
        this.count=0;
        console.log("Stack cleared..");
        return this.items;
    }
}


// let stack = new Stack();

// stack.push(100);
// stack.push(200);
// stack.push(300);

// stack.print();

// stack.pop();
// stack.pop();

// console.log(stack.peek());
// stack.push(400);
// console.log(stack.peek());

// console.log(stack.items);

// stack.pop();
// stack.pop();
// console.log(stack.isEmpty());

// console.log(stack.size());

// console.log(stack.clear());
