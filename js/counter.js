const numero = document.getElementById("number");

let cantidad = 0;
let tiempo = setInterval(() => {
  cantidad += 1;
  numero.textContent = cantidad;
  if (cantidad === 100) {
    clearInterval(tiempo);
  }
}, 60);

const numero_2 = document.getElementById("number-2");

let cantidad_2 = 0;
let tiempo_2 = setInterval(() => {
  cantidad_2 += 1;
  numero_2.textContent = cantidad_2;
  if (cantidad_2 === 3) {
    clearInterval(tiempo_2);
  }
}, 150);

const numero_3 = document.getElementById("number-3");

let cantidad_3 = 0;
let tiempo_3 = setInterval(() => {
  cantidad_3 += 1;
  numero_3.textContent = cantidad_3;
  if (cantidad_3 === 16) {
    clearInterval(tiempo_3);
  }
}, 100);
