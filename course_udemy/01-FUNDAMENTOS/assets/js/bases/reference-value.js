let a = 10;
let b = a;
a = 30;

console.log({ a, b });

let juan = { name: "Yuan" };
let ana = { ...juan };
ana.name = "Ana";

console.log({ juan, ana });

const changeName = ({ ...person }) => {
  person.name = "CHild";
  return person;
};

let peter = { name: "Peter" };
let child = changeName(peter);

console.log({ peter, child });

//arrays
const fruits = ["Apple", "Banana", "Orange"];

console.time("slice");
const otherFruits = fruits.slice();
console.timeEnd("slice");

console.time("spread");
const otherFruits2 = [...fruits];
console.timeEnd("spread");

otherFruits.push("Mango");

console.table({ fruits, otherFruits });
