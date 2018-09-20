var Stack = function() {
  var obj = {};
  obj.storage = {}
  obj.count = 0
  _.extend(obj, stackMethods)
  return obj;
}


var stackMethods = {};


stackMethods.push = function(value) {
	this.count++;
	this.storage[this.count] = value;
}
stackMethods.pop = function() {
	if (this.count <= 0) {
	  return undefined;
	}
	var remove = this.storage[this.count]
	delete this.storage[this.count];
	this.count--;
	return remove;
}
stackMethods.size = function() {
	return this.count;
}


