class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {}
  	this.count = 0
  }

  enqueue(value) {
  	this.count++
  	this.storage[this.count] = value
  }

  dequeue() {
  	if(this.storage[this.count] === undefined) {
  		return undefined
  	}
  	var remove = this.storage[1]
  	delete this.storage[1]
  	var copy = this.storage
  	var n = 1
  	while (n < this.count) {
  		copy[n] = this.storage[this.count]
  		n++
  	}
  	this.storage = copy
  	this.count--
  	return remove
  }

  size() {
  	return this.count
  }

}
