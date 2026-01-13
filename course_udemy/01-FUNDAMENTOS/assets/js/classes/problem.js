const er = {
  name: "Ermilion",
  age: 32,
  print() {
    console.log({ name: this.name, age: this.age });
  },
};

const yuan = {
  name: "YUan",
  age: 23,
  print() {
    console.log({ name: this.name, age: this.age });
  },
};

// er.print();
// yuan.print();

function Person(name, age) {
  console.log("ejecutao");
  this.name = name;
  this.age = age;

  this.print = function () {
    console.log({ name, age });
  };
}

const maria = new Person("Maria", 18);
const melissa = new Person("Melissa", 20);
console.log({ maria });
maria.print();
console.log({ melissa });
melissa.print();
