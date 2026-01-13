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
    'other-name-band': 'AudioSlave'
};

console.log(character);

console.log('Name', character.name);
console.log('Name', character["name"]);
console.log('Age', character.age);

console.log('Coords', [character.coords.lat, character.coords.lng]);

console.log('Song count', character.songs.length);
console.log('The last song', character.songs[character.songs.length - 1]);

const x = 'alive';
console.log('Alive?', character[x]);

console.log('Other name', character["other-name-band"]);



// delete properties
delete character.age;
console.log(character);


character.married = true;


// Returns an array of key/values of the enumerable own properties of an object
const entriesPairs = Object.entries(character);
console.log(entriesPairs);

// Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
Object.freeze(character);
