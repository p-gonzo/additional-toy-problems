var Tree = function(value) {
  this.value = value;
  this.children = [];
}

Tree.prototype.addChild = function(value) {
  this.children.push(new Tree(value));
  return this.children[this.children.length - 1];
}

Tree.prototype.breadthFirstSearch = function(cb) {

  var queue = [this];
  var pointer = 0;

  while (pointer < queue.length) {
      var node = queue[pointer];
      cb(node.value);
      node.children.forEach((child) => {
        queue.push(child); 
      });
      pointer ++;
  }
}





var myTree = new Tree(1);
var branch1 = myTree.addChild(2);
var branch2 = myTree.addChild(3);
branch1.addChild(4)
branch1.addChild(5)
branch2.addChild(6)
branch2.addChild(7)

var treeVals = [];

var callback = function(value) {
  console.log(value);
} 