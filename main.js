
let trabajadores = 5;

for(let i = 1; i <= trabajadores; i++) {
    let tiemposervicio = Number(prompt("Hola trabajador # " + i + ", ingrese el tiempo que lleva trabajando en esta empresa"));
    if (tiemposervicio < 5) {
        alert("Gracias por su responder de manera sincera, debido a que usted lleva con nostros " + tiemposervicio + " años, recibirá un aumento de 100 pesos en su salario");
    }
    else if (tiemposervicio >= 5 && tiemposervicio <= 9) {
        alert("Gracias por su responder de manera sincera, debido a que usted lleva con nostros " + tiemposervicio + " años, recibirá un aumento de 250 pesos en su salario");
    }
    else if (tiemposervicio >= 10 && tiemposervicio <= 19) {
        alert("Gracias por su responder de manera sincera, debido a que usted lleva con nostros " + tiemposervicio + " años, recibirá un aumento de 400 pesos en su salario");
    }
    else {
        alert("Gracias por su responder de manera sincera, debido a que usted lleva con nostros " + tiemposervicio + " años, recibirá un aumento de 550 pesos en su salario");
    }
}



    