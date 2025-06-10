//Q2. Create a class Shape with properties width and height and methods getArea(). Create two classes Rectangle 
// and Triangle that inherit from the Shape class and implement the getArea() method for their respective shapes.

class shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea(){
    console.log("Method will be used in the child class");
  }
}

class Rectangle extends shape{
  getArea(){
    return `The area of the rectangle is ${this.width*this.height}`;
  }
}

class Triangle extends shape{
  getArea(){
    return `The area of the triangle is ${0.5*(this.width*this.height)}`;
  }
}

const shapeRectangle  = new Rectangle(23,2);
console.log(shapeRectangle.getArea());

const shapeTriangle = new Triangle(43,21);
console.log(shapeTriangle.getArea());