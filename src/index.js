const { registrarCliente } = require("./clientes");
const { registrarProducto } = require("./producto");
const { registrarVenta } = require("./ventas");
const { reporteDelDia } = require("./reporte");

const cliente = registrarCliente("Ana Torres", "45678912");
const hamburguesa = registrarProducto("Hamburguesa", 15, 10);
const gaseosa = registrarProducto("Gaseosa", 5, 2);

try {
  const venta = registrarVenta(cliente, [
    { productoId: hamburguesa.id, cantidad: 1 },
    { productoId: gaseosa.id, cantidad: 3 }
  ]);
  console.log("Venta registrada:", venta);
} catch (error) {
  console.log("Error:", error.message);
}

console.log("Stock de gaseosa:", gaseosa.stock);
console.log("Reporte:", reporteDelDia());