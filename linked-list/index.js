class Node {
  constructor(data, next=null){
    this.data = data;
    this.next = next;
  }
}

// const n1 = new Node(100);
// const n2 = new Node(200);
// n1.next = n2;

// console.log(n1);

class LinkedList {
  constructor(){
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data){
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node
  insertLast(data){
    let node = new Node(data);
    let current;

    //If empty, make head
    if(!this.head) {
      this.head = node;
    } else{
      current = this.head;

      while(current.next){
        current = current.next;
      }

      current.next = node;
    }
    
    this.size++;
  }

  // Insert at index
  inserAt(data, index){
    //If index is out of range
    if(index < 0 || index > this.size){
      return;
    }

    
    //If first index
    if(index ===0){
      this.head = new Node(data, this.head);
      this.size++;
      return;
    }
    
    let current = this.head;
    for(let i=1; i<index; i++){
      current = current.next;
    }
    current.next = new Node(data, current.next);
    this.size++;
    return;
  }

  // Get at index
  getAt(index){
    if(index<0 || index>this.size-1){
      return;
    } else{
      let current = this.head;

      for(let i=0; i<index;i++){
        current = current.next;
      }
      return current.data;
    }
  }

  // Remove at index
  removeAt(index){
    if(index < 0 || index > this.size-1){
      return;
    }

    let current = this.head;
    let previous;

    //If first
    if(index === 0){
      this.head = cuurent.next;
      this.size--;
      return;
    } 

    for(let i=0;i<index;i++){
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
    this.size--;
    return;
  }

  // Clear list
  clearList(){
    this.head = null;
    this.size = 0;
  }

  // Print list data
  printListData(){
    let current = this.head;

    while(current){
      console.log(current.data);
      current = current.next;
    }
  }

}


// let ll = new LinkedList();
// ll.insertFirst(150);
// ll.insertFirst(200);
// ll.insertLast(100);
// ll.insertFirst(350);
// ll.inserAt(400, 4);
// ll.inserAt(800, 4);
// ll.removeAt(2);
// ll.printListData();
// console.log("-------------------");
// console.log(ll.size);
// console.log("-------------------");
// console.log(ll.getAt(3));
// console.log("-------------------");
// ll.clearList();
// console.log(ll);
