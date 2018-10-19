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

  //base case for leaf values
  if (currentNode === null) {
    return null;
  }
  //finding of nodes to return up the call stack
  if (currentNode === node1 || currentNode === node2) {
    return currentNode;
  }
  //left and right recursion calls
  var left = Tree.prototype.commonAncestor(node1, node2, currentNode.left);
  var right = Tree.prototype.commonAncestor(node1, node2, currentNode.right);
  
  //if the left and right recursive calls each find a node
  //return the current node as the common ancestor
  if (left !== null && right !== null) {
    return currentNode;
    //otherwise return whichever value is not equal to null
  } else {
    return left !== null ? left : right;
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