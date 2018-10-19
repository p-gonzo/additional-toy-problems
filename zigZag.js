var Tree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

Tree.prototype.addChild = function(value) {
  if (this.left === null) {
    this.left = new Tree(value);
    return this.left;
  } else {
    this.right = new Tree(value);
    return this.right;
    }
}

Tree.prototype.commonAncestor = function(node1, node2, currentNode = this) {
  //leaf base case
  if (currentNode === null) {
    return null;
  }
  //identify a target node
  if (currentNode === node1 || currentNode === node2) {
    return currentNode;
  }
  //define two recursive variables
  var left = Tree.prototype.commonAncestor(node1, node2, currentNode.left);
  var right = Tree.prototype.commonAncestor(node1, node2, currentNode.right);
  //case where we have found the common ancestor
  if (left !== null && right !== null) {
    return currentNode;
  } else {
    return left !== null ? left : right;
  }
}

Tree.prototype.zigZagTraversal = function(cb) {

  var stack1 = [this];
  var stack2 = [];
  var poppedItem;

  while (stack1.length > 0 || stack2.length > 0) {

    while (stack1.length > 0) {
      poppedItem = stack1.pop();
      cb(poppedItem.value);

      if (poppedItem.left !== null) {
        stack2.push(poppedItem.left)
      }

      if (poppedItem.right !== null) {
        stack2.push(poppedItem.right)
      }
    }

    while (stack2.length > 0) {
      poppedItem = stack2.pop();
      cb(poppedItem.value);

      if (poppedItem.right !== null) {
        stack1.push(poppedItem.right)
      }

      if (poppedItem.left !== null) {
        stack1.push(poppedItem.left)
      }
    }

  }

}





var a = new Tree('A');
var b = a.addChild('B');
var c = a.addChild('C');
var d = b.addChild('D');
var e = b.addChild('E');
var f = c.addChild('F');
var g = c.addChild('G');
var h = d.addChild('H');
var i = d.addChild('I');
var j = f.addChild('J');
var k = f.addChild('K');
var l = g.addChild('L');

var solutionArr = [];

var callback = function(value) {
  solutionArr.push(value);
} 