const iva = x => x * 1.21
let opcioncompra = 1
let cantidad1 = 0
let precio1 = 861
let cantidad2 = 0
let precio2 = 1625
let cantidad3 = 0
let precio3 = 1260
let cantidad4 = 0
let precio4 = 3000
let cantidad5 = 0
let precio5 = 6000
let cantidad6 = 0
let precio6= 10000
let cantidadCuotas = 1

alert("Bienvenido a Camino al Mundial: Picadas")
let nombre = prompt("Ingrese su nombre").trim().toUpperCase()
let edad = Number(prompt("Ingrese su edad"))

if (edad >= 18) {
  alert("Bienvenido " + nombre)
  alert(
    "A continuación Usted podrá realizar la compra. \nRecuerde que comprando tres o más unidades se realizará un descuento de 10%. \nLos precios no tienen IVA"
  )
  do {
    opcionCompra = prompt(
      "1- Pack de 6 Cerveza Quilmes: $861 \n2- Pack de 6 Cerveza Patagonia Amber Lager: $1625\n3- Pack de 6 Coca Cola Lata: $1260\n4- Picada para 3: $3000 \n5- Picada para 8 $6000 \n6- Picada para 15 $10.000\n0- Finalizar Compra"
    );
    switch (opcionCompra) {
      case "1":
        cantidad1 = Number(prompt("Ingrese la cantidad de Pack de Cerveza Quilmes a comprar"))
        break
      case "2":
        cantidad2 = Number(prompt("Ingrese la cantidad de Pack de Cerveza Patagonia a comprar"))
        break
      case "3":
        cantidad3 = Number(prompt("Ingrese la cantidad de Pack de Latas de Coca-Cola a comprar"))
        break
      case "4":
        cantidad4 = Number(prompt("Ingrese la cantidad de Picadas para 3 a comprar"))
        break
      case "5":
        cantidad5 = Number(prompt("Ingrese la cantidad de Picadas para 6 a comprar"))
        break
      case "6":
        cantidad6 = Number(prompt("Ingrese la cantidad de Picadas para 15 a comprar"))
        break
      case "0":
        break
      default:
        alert("Por favor ingrese alguna de las opciones válidas")
        break
    }
  } while (opcionCompra != 0)
  if (cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + cantidad6 > 0) {
    let subtotal = cantidad1 * precio1 + cantidad2 * precio2 +cantidad3 * precio3 + cantidad4 * precio4 + cantidad5 * precio5 + cantidad6 * precio6
    let descuento = 0
  
    alert("El subtotal a pagar es $ " + subtotal)
    if ((cantidad1 + cantidad2 + cantidad3 + cantidad4 + cantidad5 + cantidad6) >= 3) {
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
