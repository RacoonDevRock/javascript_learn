let games = ["Zelda", "Metroid", "Halo", "God of War"];

console.log({ Length: games.length });

let first = games[0];

// games[games.length - 1]
// games.length - 1 = 4 - 1 = 3
// games[3]

let lastOneInGames = games[games.length - 1];
console.log({ first, lastOneInGames });

// el for each ejecuta una instruccion por cada elemento del array QUE ITERA
games.forEach((element, index, arr) => console.log({ element, index, arr }));

// add new element at the end
let newGame = games.push("F1");
console.log({ newGame, games });

// add new element at the start
let newGameStart = games.unshift("Pacman");
console.log({ newGameStart, games });

// remove the last element and return
let gameDeleted = games.pop();
console.log({ gameDeleted, games });

// remove the element at the specified index
let pos = 1;
let gamesDeleted = games.splice(pos, 2);
console.log({ gamesDeleted, games });

// find the index of an element
let haloIndex = games.indexOf("Halo"); // CaseSensitive
console.log({ haloIndex });
