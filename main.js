
    alert("Generar la serie: 1, 5, 3, 7, 5, 9, 7, ..., 23");
let x = 0;
let y = 1;
for(let i = 1; i <= 13; i++ ){
    x = y + 4;
    y = x-2;
    alert("La serie es: " + y)
};

