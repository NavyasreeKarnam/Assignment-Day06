class Circle {
    constructor(radius, color) {
      this._radius = radius;
      this._color = color;
    }
  
    getInfo() {
      return `Circle with radius ${this._radius} and color ${this._color}`;
    }
  
    setRadius(radius) {
      this._radius = radius;
    }
  
    getRadius() {
      return this._radius;
    }
  
    getColor() {
      return this._color;
    }
  
    setColor(color) {
      this._color = color;
    }

    getArea() {
      return Math.PI * this._radius ** 2;
    }
  
    getCircumference() {
      return 2 * Math.PI * this._radius;
    }
  }
  
  const myCircle = new Circle(5, "red");
  console.log(myCircle.getInfo()); 
  console.log("Area:", myCircle.getArea()); 
  console.log("Circumference:", myCircle.getCircumference()); 
  
  myCircle.setRadius(7);
  console.log("New radius:", myCircle.getRadius()); 
  
  myCircle.setColor("blue");
  console.log("New color:", myCircle.getColor()); 