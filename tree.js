function Tree() {
    this.root = null;   // Iniciamos la variable Raíz (inicia nuestro arbol) dentro de la función Tree
}

Tree.prototype.traverse = function(){  // asignar una propiedad traverse
    this.root.visit();
}

Tree.prototype.search = function(val) { //asignar el valor de buscar a la función Tree
    var found = this.root.search(val);
    return found;
}

Tree.prototype.addValue = function(val) {   //Añadir la propiedad  "Añadir Valor" y asignarle la función que evalua n dentro
    var n = new Node(val);      // inicia una variable n y su contenido es igual a una Rama que contiene un valor val 
    if (this.root == null){      // si la raíz esta vacia, entonces ....
        this.root = n;          // en esta rama llenar un valor n...
    } else {                    // si no lo está...
        this.root.addNode(n);   // agregar un nodo n a nuestra raíz creada.
    }
}