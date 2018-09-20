var Stack = function() {
  this.storage = {}
  this.count = 0
};

Stack.prototype.push = function(value) {
	this.count++
	this.storage[this.count] = value;
}

Stack.prototype.pop = function() {
	if (this.count <= 0) {
		return undefined;
	}
	var remove = this.storage[this.count]
	delete this.storage[this.count]
	this.count--;
	return remove;
}


Stack.prototype.size = function() {
	return this.count;
}