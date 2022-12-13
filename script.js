const descuento = x => x * 0.10
const recargo = x => x * 0.15
let productos = [
{idProducto: 1, nombre: "Picada para 3", presentacion: "en bandeja", precio: 3000, categoria: "Picadas"},
{idProducto: 2, nombre: "Picada para 6", presentacion: "en bandeja", precio: 5000, categoria: "Picadas"},
{idProducto: 3, nombre: "Picada para 10", presentacion: "en bandeja", precio: 7000, categoria: "Picadas"},
{idProducto: 4, nombre: "Picada para 15", presentacion: "en bandeja", precio: 12000, categoria: "Picadas"},
{idProducto: 5, nombre: "Cerveza Lata Quilmes", presentacion: "Pack de 6 Lata", precio: 1280, categoria: "Cerveza"},
{idProducto: 6, nombre: "Cerveza Lata Antares Playa Grande", presentacion: "Pack de 6 Lata", precio: 2663, categoria: "Cerveza"},
{idProducto: 7, nombre: "Cerveza Lata Patagonia Weiss",  presentacion: "Pack de 6 Lata", precio: 1716, categoria: "Cerveza"},
{idProducto: 8, nombre: "Cerveza Lata Andes IPA", presentacion: "Pack de 6 Lata", precio: 1266, categoria: "Cerveza"},
{idProducto: 9, nombre: "Coca-Cola", precio: 1500, presentacion: "Pack de 6 Lata", categoria: "Bebidas sin alcohol"},
{idProducto: 10, nombre: "Aquarius Naranja", presentacion: "Pack de 6 Botella 500cc", precio: 1140, categoria: "Bebidas sin alcohol"},
{idProducto: 11, nombre: "Aquiarius Manzana", presentacion: "Pack de 6 Botella 500cc", precio: 1140, categoria: "Bebidas sin alcohol"}
]
let opcionCompra = ""
let productosFiltrados = []
let carrito = []
let salida =[]
let subtotal = 0
let totalAPagar = 0

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
         carrito = carrito.concat(productosFiltrados.filter(producto => producto.venta > 0))
      
        break
      case "2":
        productosFiltrados = productos.filter(producto => producto.categoria.includes("Cerveza"))
        productosFiltrados.forEach(producto =>
          producto.venta = Number(prompt("Ingrese la cantidad de " + producto.nombre + " " + producto.presentacion + "\nPrecio: $ " + producto.precio))
          )
          carrito = carrito.concat(productosFiltrados.filter(producto => producto.venta > 0))
        break
      case "3":
        productosFiltrados = productos.filter(producto => producto.categoria.includes("Bebidas sin alcohol"))
        productosFiltrados.forEach(producto =>
          producto.venta = Number(prompt("Ingrese la cantidad de " + producto.nombre + " " + producto.presentacion + "\nPrecio: $ " + producto.precio))
          )
          
          carrito = carrito.concat(productosFiltrados.filter(producto => producto.venta > 0))
        
        break
      case "0":
        break
      default:
        alert("Por favor ingrese alguna de las opciones válidas")
        break
    }
  } while (opcionCompra != 0)
    let cantidadTotalComprada = carrito.reduce((acumulador, producto) => acumulador + producto.venta, 0)
    let productosYpresentacion= carrito.forEach(producto =>{salida = salida + producto.venta + " unidades de " + producto.nombre + " " + producto.presentacion + " de la categoria " + producto.categoria +"\n"})
    alert(salida)
    if (cantidadTotalComprada < 3 && cantidadTotalComprada > 0) {
        let sumatoria = carrito.forEach(producto =>{subtotal = subtotal + (producto.venta * producto.precio)})
                totalAPagar = subtotal 
        alert("Usted ha comprado " + carrito.reduce((acumulador, producto) => acumulador + producto.venta, 0) + " unidades. \nNo posee descuento\nTotal a pagar: $ "+totalAPagar)
      }  
    if (cantidadTotalComprada >= 3) {
        sumatoria = carrito.forEach(producto =>{subtotal = subtotal + (producto.venta * producto.precio)})
        totalAPagar = subtotal + Number(descuento(subtotal).toFixed(2))
        alert("Usted ha comprado " + carrito.reduce((acumulador, producto) => acumulador + producto.venta, 0) + " unidades. \nHa sido beneficiado por un descuento de $ " + descuento(subtotal).toFixed(2) + "\nTotal a pagar: $ " + totalAPagar)
         
    cantidadCuotas = Number(prompt("Por favor ingrese la cantidad de cuotas en las que desea abonar"))
    if (cantidadCuotas === 1) {
      alert("Usted abonará en un pago el total de: $" + totalAPagar + "\nNo se han sumado cargos por financiación")
      
    } else {
      let totalAPagarFinanciado = totalAPagar + Number(recargo(totalAPagar).toFixed(2))
      alert("Usted abonará en un cuotas el total de: $" + totalAPagarFinanciado + "\nSe han sumado cargos por financiacion por $ "+recargo(totalAPagar).toFixed(2))
    for (let i = 0; i < cantidadCuotas; i++) {
        let salidaCuotas = "Pagará en " + cantidadCuotas + " cuotas de $" + (totalAPagarFinanciado / cantidadCuotas).toFixed(2) +"\n Cuota " + (i+1) + " de $ " + (totalAPagarFinanciado / cantidadCuotas).toFixed(2)
        alert(salidaCuotas)   
            }
          }
    alert("Muchas gracias " + nombre + " por comprar en Camino al Mundial: Picadas \nEsperamos que disfrute de nuestros productos")
        }     
      else {
        alert("Usted no ha comprado nada. Vuelva pronto")
      }
}
    else{
    alert("Para comprar debe ser mayor de edad")}
