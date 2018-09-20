class Stack {

  constructor() {
  	this.storage = {}
  	this.count = 0
  }

  push(value) {
  	this.count++
  	this.storage[this.count] = value
  }

  pop() {
  	if (this.count <=0) {
  		return undefined
  	}
  	var remove = this.storage[this.count]
  	delete this.storage[this.count]
  	this.count--
  	return remove
  }

  size() {
  	return this.count
  }


}

