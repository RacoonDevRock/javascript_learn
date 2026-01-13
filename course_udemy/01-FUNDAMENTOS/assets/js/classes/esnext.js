class Rectangle {
  #area = 0;

  constructor(base = 0, height = 0) {
    this.base = base;
    this.height = height;
    this.#area = this.base * this.height;
  }

  calcArea() {
    console.log(this.#area * 2);
    
  }
}

const rectangle = new Rectangle(10, 15);
rectangle.calcArea()
console.log(rectangle);
