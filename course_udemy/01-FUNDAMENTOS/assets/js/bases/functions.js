function saludar(name) {
  console.log(arguments);
  console.log("Hello " + name);
  return [1, 2, 3];
}

const functionReturn = saludar("guille");
console.log(functionReturn);

const saludar3 = (name) => console.log("Hello" + name);
saludar3("Mosita");

const sumar = (a, b) => a + b;
console.log(sumar(1, 2));

const getRandom = () => Math.random();

console.log(getRandom());
