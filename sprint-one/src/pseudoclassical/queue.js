var Queue = function() {
  this.storage = {}
  this.count = 0
};

Queue.prototype.enqueue = function(value) {
	this.count++
	this.storage[this.count] = value
}

Queue.prototype.dequeue = function() {
	if (this.storage[this.count] === undefined) {
		return undefined;
	}
	var remove = this.storage[1]
	delete this.storage[1]
	var copy = this.storage
	var n = 1
	while (n < this.count) {
		copy[n] = this.storage[this.count]
		n++
	}
	this.storage = copy;
	this.count--;
	return remove;
}

Queue.prototype.size = function() {
	return this.count;
}


