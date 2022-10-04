
let ventasdia = Number(prompt("Ingrese el número de ventas que hizo al día"));

let monto1 = 0;
let monto2 = 0;
let monto3 = 0;
let total = 0;

for(let i = 1; i <= ventasdia; i++) {
    let montoventa = Number(prompt("Ingrese el monto de la venta # " + i));
    if (montoventa > 1000) {
        monto1 += montoventa;
        alert("El monto vendido en la categoría > mil es de: $" + monto1 + " pesos");
    }
    else if (montoventa <= 1000 && montoventa > 500) {
        monto2 += montoventa;
        alert("El monto vendido en la categoría > a 500 y menor a mil es de: $" + monto2 + " pesos");
    }
    else if (montoventa <= 500) {
        monto3 += montoventa;
        alert("El monto vendido en la categoría < a 500: $" + monto3 + " pesos");
    }
    total += montoventa;
}
    alert("El total de las ventas al día es de: $" + total + " pesos ");



    