
let canNum = Number(prompt("Cuantos numeros desea ingresar"));
let suma = 0;
let resta = 0;
let multi = 1;
let divi = 1;
let nums;
for(let i1 = 1; i1 <= 5; i1++) {
    for(let i = 1; i <= canNum; i++) {
    nums = Number(prompt("Ingrese el # " + i )); 
    suma += nums;
    resta -= nums;
    multi *= nums;
    divi /= nums;

}
alert("La suma de los números es: " + suma);
alert("La resta de los números es: " + resta);
alert("La multiplicación de los números es: " + multi);
alert("La división de los números es: " + divi);

}



    