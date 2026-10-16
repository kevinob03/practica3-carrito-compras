const ProductoClase = typeof require === 'function'
  ? require('./Producto')
  : window.Producto;
const CarritoDeComprasClase = typeof require === 'function'
  ? require('./CarritoDeCompras')
  : window.CarritoDeCompras;

const laptop = new ProductoClase('Laptop', 850, 5);
const mouse = new ProductoClase('Mouse inalámbrico', 25, 10);
const teclado = new ProductoClase('Teclado mecánico', 70, 4);
const audifonos = new ProductoClase('Audífonos', 45, 8);

const carrito = new CarritoDeComprasClase();

carrito.agregarProducto(laptop, 1);
carrito.agregarProducto(mouse, 2);
carrito.agregarProducto(teclado, 1);
carrito.agregarProducto(audifonos, 3);

try {
  carrito.agregarProducto(teclado, 4);
} catch (error) {
  console.log(`No se pudo agregar el producto: ${error.message}\n`);
}

carrito.aplicarCupon(10);
console.log(carrito.mostrarResumen());
