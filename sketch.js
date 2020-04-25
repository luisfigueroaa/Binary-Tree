var Tree;
console.log("Binary Tree");

function setup() { 
    noCanvas();
    tree = new Tree();
    for (var i = 0; i < 10; i++){
        tree.addValue(floor(random(0, 100)));
    }
    console.log(tree);
    tree.traverse();

    var result = tree.search(10);   // intentar buscar el numero 10
    if (result == null) {
        console.log('not found');
    }else{
        console.log(result);
    }
}