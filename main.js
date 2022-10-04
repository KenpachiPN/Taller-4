
let iva = 0.16;
let total;
let precioIva;
let precioUnid;
let descuento;
for(let i = 1; i <= 2; i++) {
    let precio = Number(prompt("Ingrese el precio del articulo"));
    let unidades = Number(prompt("Ingrese las unidades que comprará del articulo"));
    alert("El precio del articulo es de: $" + precio + " pesos, luego de esto se le aplicara un iva del 16% y se le sumará las " + unidades + " unidades que usted pidió de ese producto");
    precioUnid = precio * unidades;
    precioIva = precioUnid * iva;
    total = precioUnid + iva;
    if (total > 500) {
        descuento = total * 0.15;
        descuento -= total;
        alert("Debido a que su compra excedió los $500 pesos, recibió un descuento del 15%, el total es de: $" + descuento + " pesos")
    } 
    else {
    alert("El valor a pagar es de: $" + total + " pesos");

    }
}



    