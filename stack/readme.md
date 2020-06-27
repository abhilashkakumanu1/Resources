This is inspired from [Traversy media](https://youtu.be/wtynhUwS5hI) video.

* Arrays in JS already have push and pop functionality which lets us use it as a stack. This implementation is just for the sake of understanding.
* _items_ and _count_ are properties of a stack. _count_ is similar to _length_ property in case of an Array.
* This implementation doen't bother about memory management. While popping we just reduce the count, the array remains the same. This doesn't effect the external behaviour cause all the methods are defined based on the count.