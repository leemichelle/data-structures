var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    count++;
    storage[count] = value;
  };

  someInstance.dequeue = function() {
    //find oldest item and delete
     //value needs to be reassigned after delete
    if (storage[count] === undefined) {
      return undefined
    }
    var remove = storage[1]; //removes first item in obj
    delete storage[1]; //deletes first item in obj
    // count--;
    var copy = storage;
    var n = 1;
    while (n < count) {
      copy[n] = storage[count]
      n++
    }
    storage = copy
    count--;
    return remove;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
