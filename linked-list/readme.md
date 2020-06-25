This is inspired from a [Traversy Media](https://youtu.be/ZBdE8DElQQU) video.  

* **Node** class is created and it has two properties - data and next. So, basically in JavaScript each node is an object with one property set to data and other set to the next node object. Therefore, linked list is objects within objects...    
* **Linked list** class is created and initiated with two properties - head and null. Methods are defined in this order - insertFirst, printListData, insertLast, etc.
* Special cases have to be considered - like empty list, inserting at the head or end, out of range, etc.
* while loop is used to traverse the linked list. Objects are passed by reference unlike primitives. Whenever we equate the objects, new reference is being created, but if we change the object both the objects are going to be effected as they point to same source.
