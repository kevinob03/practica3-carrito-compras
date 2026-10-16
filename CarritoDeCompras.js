class CarritoDeCompras {
  #productos = [];

  constructor() {
    this.descuentoPorcentaje = 0;
  }

  agregarProducto(producto, cantidad) {
    if (!Number.isInteger(cantidad) || cantidad <= 0) {
      throw new Error('La cantidad debe ser un número entero mayor que cero.');
    }

    if (producto.cantidadDisponible < cantidad) {
      throw new Error(
        `Stock insuficiente de ${producto.nombre}. Disponible: ${producto.cantidadDisponible}.`
      );
    }

    const productoEnCarrito = this.#productos.find(
      (item) => item.producto === producto
    );

    if (productoEnCarrito) {
      productoEnCarrito.cantidad += cantidad;
    } else {
      this.#productos.push({ producto, cantidad });
    }

    producto.cantidadDisponible -= cantidad;
  }

  calcularTotal() {
    return this.#productos.reduce(
      (total, item) => total + item.producto.precio * item.cantidad,
      0
    );
  }

  aplicarCupon(porcentaje) {
    if (typeof porcentaje !== 'number' || porcentaje < 0 || porcentaje > 100) {
      throw new Error('El cupón debe ser un porcentaje entre 0 y 100.');
    }

    this.descuentoPorcentaje = porcentaje;
  }

  mostrarResumen() {
    const total = this.calcularTotal();
    const descuento = total * (this.descuentoPorcentaje / 100);
    const totalFinal = total - descuento;

    const lineasProductos = this.#productos.map((item) => {
      const subtotal = item.producto.precio * item.cantidad;
      return `- ${item.producto.nombre}: ${item.cantidad} x $${item.producto.precio.toFixed(2)} = $${subtotal.toFixed(2)}`;
    });

    return [
      '--- RESUMEN DEL CARRITO ---',
      ...lineasProductos,
      `Subtotal: $${total.toFixed(2)}`,
      `Descuento (${this.descuentoPorcentaje}%): -$${descuento.toFixed(2)}`,
      `Total final: $${totalFinal.toFixed(2)}`,
    ].join('\n');
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CarritoDeCompras;
} else {
  window.CarritoDeCompras = CarritoDeCompras;
}
