const { buscarProducto } = require("./producto");
const { calcularTotalConIGV } = require("./igv");

const ventas = [];

// Registra una venta. items = [{ productoId, cantidad }]
function registrarVenta(cliente, items) {
  let subtotal = 0;
  for (const item of items) {
    const producto = buscarProducto(item.productoId);
    if (!producto) {
      throw new Error("Producto no existe");
    }
    producto.stock -= item.cantidad;
    subtotal += producto.precio;
  }
  const venta = {
    id: ventas.length + 1,
    cliente: cliente.nombre,
    subtotal,
    total: calcularTotalConIGV(subtotal)
  };
  ventas.push(venta);
  return venta;
}

function listarVentas() {
  return ventas;
}

module.exports = { registrarVenta, listarVentas };