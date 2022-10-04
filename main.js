
let estudiantes = Number(prompt("Ingrese la cantidad de estudiantes que calificarán la comida"));
let suma = 0;
let promedio;
for(let i = 1; i <= estudiantes; i++){
    let nom = prompt("Ingrese su nombre");
    let calif = Number(prompt(nom + ", ingrese su calificación; 1 o 10"));
    if(calif === 1 ) {
        alert("La calificación de " + nom + " es horrible");
        suma += calif;
    }
    else if (calif === 10) {
        alert("La calificación de " + nom + " es excelente");
        suma += calif;
    }
    if (calif === 0 ) {
        break;
    }
    promedio = suma / estudiantes;
}
    
    alert("El promedio de calificación de los estudiantes sobre la comida es de: " + promedio );
    alert("Fueron encuestados " + estudiantes + " estudiantes");
    alert("La nota más alta fue de: 10");
    alert("La nota más baja fue de: 1");