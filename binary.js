var tree

function setup(){
  noCanvas();
  tree = new Tree();
  tree.addValue(3);
  console.console.log(tree);
}

function Tree(){
  this.root = null;
}

Tree.prototype.addValue = function(val){
  Node n  = new Node(val);
  if (this.root == null){
    this.root = n;
  } else {
    this.root.addNode(n);
  }
}

Node.prototype.addNode = function(n){
  if (n.value < this.value) {
    if (this.left == null) {
      this.left = n
    } else {
      this.left.addNode(n);
    }
  } else {
    if (this.right == null) {
      this.right = n;
    } else {
    this.right.addNode(n);
    }
  }
}

function addNode(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}
