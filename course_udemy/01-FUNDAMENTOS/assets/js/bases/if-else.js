let a = 15;

if (a >= 10) {
  console.log("a es mayor a 10");
} else {
  console.log("a es menor a 10");
}

console.log("Fin de programa");

const today = new Date();

let day = today.getDay();
console.log(day);

if (day === 0) {
  console.log("Domingo");
} else if (day === 1) {
  console.log("Lunes");
  //   if (day === 1) {
  //     console.log("Lunes");
  //   } else {
  //     console.log("No es Lunes ni Domingo");
  //   } else if (day === 2) {
} else {
  console.log("No es Lunes ni Domingo");
}

const week = {
  0: "Domingo",
  1: "Lunes",
  2: "Martes",
  3: "Miércoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sábado",
};

console.log(week[day]);

const weekArr = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

console.log(weekArr[day] || "Día no válido");
