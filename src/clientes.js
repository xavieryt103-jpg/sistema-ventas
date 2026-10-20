const clientes = [];

// Registra un cliente. Nombre y DNI son obligatorios.
function registrarCliente(nombre, dni) {
  if (!nombre || !dni) {
    throw new Error("Nombre y DNI son obligatorios");
  }
  const cliente = { id: clientes.length + 1, nombre, dni };
  clientes.push(cliente);
  return cliente;
}

// Devuelve todos los clientes registrados
function listarClientes() {
  return clientes;
}

module.exports = { registrarCliente, listarClientes };