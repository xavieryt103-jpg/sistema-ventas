const productos = [];

// Registra un producto. El precio debe ser mayor a 0.
function registrarProducto(nombre, precio, stock) {
  if (precio <= 0) {
    throw new Error("El precio debe ser mayor a 0");
  }
  const producto = { id: productos.length + 1, nombre, precio, stock };
  productos.push(producto);
  return producto;
}

// Busca un producto por su id
function buscarProducto(id) {
  return productos.find((p) => p.id === id);
}

function listarProductos() {
  return productos;
}

module.exports = { registrarProducto, buscarProducto, listarProductos };