createPerson = (name, surname) => ({ name, surname });

let person = createPerson("Guille", "Palacios");
console.log(person);

function printArgs() {
  console.log(arguments);
}

printArgs(10, true, "Angel");

const printArgs2 = (edad, ...args) => args;

const [married, name] = printArgs2(10, true, "Angel");
console.log({ married, name });

// al declarar indicas que retorna un objeto con name y surname o las variables especificas de retorno, sino renombras este con :
const { surname: mosita } = createPerson("Guille", "Palacios");
console.log({ mosita });

const character = {
  name: " Chris Cornell",
  codeName: "Soundgarden",
  alive: false,
  age: 52,
  coords: {
    lat: 34.0522,
    lng: -118.2437,
  },
  songs: ["Black Hole Sun", "Fell on Black Days", "Like a Stone"],
  adress: {
    zip: "90012",
    city: "Los Angeles",
  },
  "other-name-band": "AudioSlave",
};

const printProperties = ({
  name,
  codeName,
  alive,
  age = 15,
  coords,
  songs,
  adress,
  "other-name-band": band,
}) => {
  console.log({ name, codeName, alive, age, coords, songs, adress, band });
};

printProperties(character);
