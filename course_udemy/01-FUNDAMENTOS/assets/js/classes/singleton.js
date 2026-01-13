class Person {
  static _conteo = 0;

  constructor(
    name = "no hay",
    code = "no hay",
    age = "no hay",
    phrase = "no hay",
    food = "no hay"
  ) {
    if (!name) throw Error("no hay nombre weu");
    Person._conteo++;

    this.name = name;
    this.code = code;
    this.age = age;
    this.phrase = phrase;
    this.food = food;
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


