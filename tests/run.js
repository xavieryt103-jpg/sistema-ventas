const assert = require("assert");
const { calcularTotalConIGV } = require("../src/igv");
const { registrarCliente } = require("../src/clientes");
const { registrarProducto } = require("../src/producto");
const { registrarVenta } = require("../src/ventas");

// Prueba 1: IGV
assert.strictEqual(calcularTotalConIGV(100), 118);

// Prueba 2: venta de 1 unidad
const cliente = registrarCliente("Ana", "12345678");
const producto = registrarProducto("Hamburguesa", 10, 5);
const venta = registrarVenta(cliente, [{ productoId: producto.id, cantidad: 1 }]);
assert.strictEqual(venta.total, 11.8);
assert.strictEqual(producto.stock, 4);

// Prueba 3: venta de 2 unidades (hotfix)
const producto2 = registrarProducto("Pizza", 10, 5);
const venta2 = registrarVenta(cliente, [{ productoId: producto2.id, cantidad: 2 }]);
assert.strictEqual(venta2.subtotal, 20);
assert.strictEqual(venta2.total, 23.6);
console.log("Todas las pruebas pasaron");