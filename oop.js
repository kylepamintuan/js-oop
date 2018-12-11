class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    draw(){
        console.log(`draw circle with radius: ${this.radius}`);
    }
}

const circle1 = new Circle(1);
const circle2 = new Circle(10);

circle1.draw();
circle2.draw();