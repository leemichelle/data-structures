var Queue = function() {
  var obj = {}
  obj.storage = {}
  obj.count = 0
  _.extend(obj, queueMethods)
  return obj
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
	this.count++
	this.storage[this.count] = value
}

queueMethods.dequeue = function () {
	if (this.storage[this.count] === undefined) {
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

queueMethods.size = function() {
	return this.count
}
