// Definir las variables de la Rama
function Node(val) {
    this.value = val; // cada rama tiene un valor
    this.left = null; // cada rama tiene una izquierda
    this.right = null;// cada rama tiene una derecha
}

Node.prototype.search = function(val) {                 // una propiedad q da la funcion de visitar.
if (this.value == val){                                 // si el valor del nodo no es vacío ...
        return this;                                    // retornar el objeto que esta en el nodo
    } else if (val < this.value && this.left != null){  // pero si: el valor es menor a el valor del Nodo y el valor del Nodo izquierdo no esta vacio...
        return this.left.search(val);                          // retornar la busqueda en el Nodo el valor de la izquierda
    } else if (val > this.value && this.right != null) { // pero si: el valor es menor al valor del Nodo y el valor del Nodo derecho no esta vacío
        return this.right.search(val);                         // retornar la busqueda en el nodo el valor de la derecha
    }
    return null;                                        // retornar vacío si no encuentra
}

Node.prototype.visit = function() { // inicia la propiedad de visitar en el Nodo
    if (this.left != null) {        // si el Nodo de la izquierda esta vacio
      this.left.visit();            // visita el Nodo de la izquierda
    }
    console.log(this.value);        // imprime el valor de el nodo
    if (this.right != null) {       // si el Nodo de la derecha esta vacio
      this.right.visit();           // visita el nodo de la derecha
    }
}  

Node.prototype.addNode = function(n){   //Añade a la propiedad de "Añadir Rama" y asignarle la función que evalua n...
    if(n.value < this.value){       // si el valor n ingresado es menor que el valor de esta rama...
        if (this.left == null){     // evaluar si la rama derecha esta vacía...   
            this.left = n;          // si esta vacía entonces  el valor de la rama de la izquierda es n
        } else {                    // pero si no esta vacía...
            this.left.addNode(n);   // entonces agrego una rama a la izquierda...
        }
    } else if (n.value > this.value){                        // pero! si el valor n ingresado es MAYOR al valor de esta rama entonces evalúa...
        if(this.right == null){     // si la rama de la derecha esta vacía entonces..
            this.right = n;         // agrega un valor a la rama de la derecha de n
        } else {                    // pero si no lo está...
            this.right.addNode(n);  // entonces agregar una rama a la derecha de valor n.
        }
    }
}   
