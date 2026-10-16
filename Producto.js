class Producto {
  constructor(nombre, precio, cantidadDisponible) {
    if (!nombre || precio < 0 || cantidadDisponible < 0) {
      throw new Error('Los datos del producto no son válidos.');
    }

    this.nombre = nombre;
    this.precio = precio;
    this.cantidadDisponible = cantidadDisponible;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Producto;
} else {
  window.Producto = Producto;
}
