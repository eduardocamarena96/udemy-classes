// A static method is basically a method that is available on the class itself instead of an instance of a class

class Rectangle {
    constructor(name, height, width) {
      this.name = name;
      this.height = height;
      this.width = width;
    }
  
    area() {
      return this.height * this.width;
    }
  
    static getClass() {
      return 'Rectangle';
    }
  }
  
  const rect = new Rectangle('Rect', 10, 10);
  console.log(rect.area());
  console.log(Rectangle.getClass());