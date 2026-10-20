const TASA_IGV = 0.18;

// Devuelve el total con IGV, redondeado a 2 decimales
function calcularTotalConIGV(subtotal) {
  return Math.round(subtotal * (1 + TASA_IGV) * 100) / 100;
}

module.exports = { calcularTotalConIGV, TASA_IGV };