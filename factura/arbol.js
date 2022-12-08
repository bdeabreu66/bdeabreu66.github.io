function Node(val) {
  this.value = val; // valor del nodo
  this.children = []; // lista de referencias a los nodos hijos
}
function Tree() {
  this.root = null; // referencia al nodo raíz
}

Tree.prototype.findBFS = function (value) {
  var queue = [this.root];
  while (queue.length) {
    var node = queue.shift();
    if (node.value === value) {
      return node;
    }
    for (var i = 0; i < node.children.length; i++) {
      queue.push(node.children[i]);
    }
  }
  return null;
};


Tree.prototype.add = function (value, toNodeValue) {
  console.log(value + ' '+ toNodeValue  );
  if (toNodeValue=='' || this.findBFS(value)==null) {
      var node = new Node(value);
      var parent = toNodeValue ? this.findBFS(toNodeValue) : null;
      if (parent) {
         parent.children.push(node);
       }
       else if (!this.root) {
           this.root = node;
        }
         else {
          throw new Error('Root node is already assigned');
         }
    }
}
 

Tree.prototype.remove = function (value) {
  // caso especial: si el valor está en el
  // nodo raíz reseteamos el árbol
  if (this.root.value === value) {
    this.root = null;
  }
  var queue = [this.root];
  while (queue.length) {
    var node = queue.shift();
    for (var i = 0; i < node.children.length; i++) {
      if (node.children[i].value === value) {
        node.children.splice(i, 1);
      }
      else {
        queue.push(node.children[i]);
      }
    }
  }
};

Tree.prototype.traverseBFS = function (fn) {
  var queue = [this.root];
  while (queue.length) {
    var node = queue.shift();
    fn && fn(node);
    for (var i = 0; i < node.children.length; i++) {
      queue.push(node.children[i]);
    }
  }
};

Tree.prototype.traverseDFS = function (fn, method) {
  var current = this.root;
  if (method) {
    this['_' + method](current, fn);
  }
  else {
    this._preOrder(current, fn);
  }
};

Tree.prototype._preOrder = function (node, fn) {
  if (!node) {
    return;
  }
  fn && fn(node);
  for (var i = 0; i < node.children.length; i++) {
    this._preOrder(node.children[i], fn);
  }
};

Tree.prototype._postOrder = function (node, fn) {
  if (!node) {
    return;
  }
  for (var i = 0; i < node.children.length; i++) {
    this._postOrder(node.children[i], fn);
  }
  fn && fn(node);
};

// Fin funciones manejo de arbol
