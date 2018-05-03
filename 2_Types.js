const q1 = prompt('Сколько у вас с собой есть денег?');
const a1 = prompt('Сколько вы купили яблок?');
const b1 = prompt('Сколько вы купили батонов хлеба?');
const ca = parseInt(prompt('Сколько стоит одно яблоко?'))*parseInt(a1, 10);
const cb = parseInt(prompt('Сколько стоит один батон хлеба?'))*parseInt(b1,10);
const sum = parseInt(q1,10) >= parseInt(ca, 10)+parseInt(cb, 10);
document.body.innerHTML = sum;
