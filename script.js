const descuento = x => x * 0.90
const recargo = x => x * 1.15
let productos = [
{idProducto: 1, nombre: "Picada para 3", presentacion: " ", precio: 3000, categoria: "Picadas"},
{idProducto: 2, nombre: "Picada para 6", presentacion: " ", precio: 3000, categoria: "Picadas"},
{idProducto: 3, nombre: "Picada para 10", presentacion: " ", precio: 3000, categoria: "Picadas"},
{idProducto: 4, nombre: "Picada para 15", presentacion: " ", precio: 3000, categoria: "Picadas"},
{idProducto: 5, nombre: "Pack de 6: Cerveza Lata Quilmes", presentacion: "Pack de 6 Lata", precio: 861, categoria: "Cerveza"},
{idProducto: 6, nombre: "Pack de 6: Cerveza Lata Antares", presentacion: "Pack de 6 Lata", precio: 861, categoria: "Cerveza"},
{idProducto: 7, nombre: "Pack de 6: Cerveza Lata Patagonia",  presentacion: "Pack de 6 Lata", precio: 861, categoria: "Cerveza"},
{idProducto: 8, nombre: "Pack de 6: Cerveza Lata Andes", presentacion: "Pack de 6 Lata", precio: 861, categoria: "Cerveza"},
{idProducto: 9, nombre: "Pack de 6: Lata Coca-Cola", precio: 861, presentacion: "Pack de 6 Lata", categoria: "Bebidas sin alcohol"},
{idProducto: 10, nombre: "Pack de 6: Botella 500cc Aquarius Naranja", presentacion: "Pack de 6 Botella", precio: 861, categoria: "Bebidas sin alcohol"},
{idProducto: 11, nombre: "Pack Lata Coca-Cola", precio: 861, presentacion: "Pack de 6 Botella", categoria: "Bebidas sin alcohol"}
]
let opcionCompra = ""
let productosFiltrados = []
let carrito = []

alert("Bienvenido a Camino al Mundial: Picadas")
let nombre = prompt("Ingrese su nombre").trim().toUpperCase()
let edad = Number(prompt("Ingrese su edad"))

if (edad >= 18) {
  alert("Bienvenido " + nombre)
  alert("A continuación Usted podrá realizar la compra. \nRecuerde que comprando tres o más unidades se realizará un descuento de 10%.")
  do {
    opcionCompra = prompt("Ingrese la categoria a comprar: \n1-Picadas\n2-Cerveza\n3-Bebidas sin alcohol\n0-Para finalizar compra")
    switch (opcionCompra) {
      case "1":
        productosFiltrados = productos.filter(producto => producto.categoria.includes("Picadas"))
        productosFiltrados.forEach(producto =>
          producto.venta = Number(prompt("Ingrese la cantidad de " + producto.nombre + " " + producto.presentacion + "\nPrecio: $ " + producto.precio))
          )
          carrito.concat(productosFiltrados.filter(producto => producto.venta > 0))
      
        break
      case "2":
        productosFiltrados = productos.filter(producto => producto.categoria.includes("Cerveza"))
        productosFiltrados.forEach(producto =>
          producto.venta = Number(prompt("Ingrese la cantidad de " + producto.nombre + " " + producto.presentacion + "\nPrecio: $ " + producto.precio))
          )
          carrito.concat(productosFiltrados.filter(producto => producto.venta > 0))
        break
      case "3":
        productosFiltrados = productos.filter(producto => producto.categoria.includes("Bebidas sin alcohol"))
        productosFiltrados.forEach(producto =>
          producto.venta = Number(prompt("Ingrese la cantidad de " + producto.nombre + " " + producto.presentacion + "\nPrecio: $ " + producto.precio))
          )
          
          carrito.concat(productosFiltrados.filter(producto => producto.venta > 0))
        
        break
      case "0":
        break
      default:
        alert("Por favor ingrese alguna de las opciones válidas")
        break
    }
  } while (opcionCompra != 0)
  console.log(carrito)
  let cantidadTotalComprada = carrito.reduce((acumulador, producto) => acumulador + producto.venta, 0)
  console.log(cantidadTotalComprada)
  if (cantidadTotalComprada < 3) {
    let subtotal =
    
  
    alert("El subtotal a pagar es $ " + subtotal)
    if (carrito.venta.reduce(acumulador + cantidad, 0) >= 3) {
        descuento = (subtotal * 0.10).toFixed(2)
        alert("Se ha aplicado un descuento de 10% \nSu descuento ha sido de: $ " + descuento)
        
    } else {
        descuento = 0
        alert ("No ha tenido descuentos")
            }
    let subtotalDescuento = subtotal - descuento          
    alert("Neto a pagar: $ "+ subtotalDescuento)
    let totalAPagar = (iva(subtotalDescuento)).toFixed(2)
    alert("Total a pagar con Impuestos: $ " + totalAPagar)
    cantidadCuotas = Number(prompt("Por favor ingrese la cantidad de cuotas"))
    for (let i = 0; i < cantidadCuotas; i++) {
        let salidaCuotas = "Pagará en " + cantidadCuotas + " cuotas de $" + (totalAPagar / cantidadCuotas) +"\n Cuota " + (i+1) + " de $ " + (totalAPagar / cantidadCuotas)
        alert(salidaCuotas)   
            }
            alert("Muchas gracias " + nombre + " por comprar en Camino al Mundial: Picadas \nEsperamos que disfrute de nuestros productos")
        } else {
            alert("Usted no ha comprado nada. Vuelva cuando lo desee")
        }
    }
    else{
  alert(nombre + "Debe ser mayor de edad para realizar la compra")
}
