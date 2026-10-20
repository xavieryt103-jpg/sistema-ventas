const { listarVentas } = require("./ventas");

// Resume las ventas registradas
function reporteDelDia() {
  const ventas = listarVentas();
  const total = ventas.reduce((t, v) => t + v.total, 0);
  return {
    cantidadVentas: ventas.length,
    totalVendido: Math.round(total * 100) / 100
  };
}

module.exports = { reporteDelDia };