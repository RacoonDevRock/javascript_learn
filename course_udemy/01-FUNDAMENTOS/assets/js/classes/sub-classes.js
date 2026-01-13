class Person {
  static _conteo = 0;
  food = "";

  constructor(
    name = "no hay",
    code = "no hay",
    age = "no hay",
    phrase = "no hay"
  ) {
    if (!name) throw Error("no hay nombre weu");
    Person._conteo++;

    this.name = name;
    this.code = code;
    this.age = age;
    this.phrase = phrase;
  }

  set setFavouriteFood(food) {
    this.food = food;
  }

  get getFavouriteFood() {
    return this.food;
  }

  static get conteo() {
    return Person._conteo;
  }

  whoIAm() {
    console.log(`Soy ${this.name} y mi identidad secreta es ${this.code} `);
  }

  myPhrase() {
    console.log(`${this.code.toUpperCase()}: ${this.phrase}`);
  }
}

class Hero extends Person {
  clan = "";

  constructor(
    name = "no hay",
    code = "no hay",
    age = "no hay",
    phrase = "no hay",
    clan = "no hay"
  ) {
    super(name, code, age, phrase);
    this.clan = clan;
  }
}

const spiderman = new Person("Peter", "Spider-man", "23", "hey guys");
const ironman = new Person("Tony", "IronMan", "39", "i'm iron man");

const alalu = new Hero("Peter", "Spider-man", "23", "hey guys", "alalu");
console.log(alalu);
