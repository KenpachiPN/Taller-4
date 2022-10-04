
    alert("Tabla de multiplicar de un numero N positivo.");
let num = Number(prompt("Ingrese el número que se le sacará la tabla de multiplicar"));
let mul = 1;
for(let i = 1; i <= 10; i++ ){

    let result = num * mul;
    mul++;
        alert(num + " X " + i + " es: "  + result)
};
