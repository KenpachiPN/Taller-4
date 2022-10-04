
let meses = 20;
let mes1 = 10;
let mensual = 0;
let total = 0;
for(let i = 1; i <= meses; i++) {
    if (i === 1) {
        mensual = 10;
    }
    else {
        mensual *= 2;
        alert("El total que deberá pagar en el mes " + i + " por el producto es de: $" +mensual);
    }
}
    total += mensual;
        alert("El total que pagó en los 20 meses es de: $" + total);
    
    