const heroes = ["Flash", "Arrow", "Superman", "Batman", "Mia khalifa"];

console.warn("**** For tradicional");

for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

console.warn("**** For in");

for (let i in heroes) {
  console.log(heroes[i]);
}

console.warn("**** For of");
for (const hero of heroes) {
  console.log(hero);
}
