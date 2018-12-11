
// prototype constructor
function Shape(type, color, length, width) {
        this.type = type;
        this.color = color;
        this.length = length;
        this.width = width;
        this.getArea = function() {
                return `Area of ${this.type} = ${this.length * this.width}`;
        };
        this.draw = function() {
                console.log(`Render: ${this.type} in ${this.color}`);
        }
}

function Circle(type, color, radius) {
        Shape.call(this, type, color); //use constructor of Shape
        this.radius = radius;
        this.pi = 3.14159;
        this.getArea = function() {
                return `Area of ${this.type} = ${Number(Math.pow(this.radius, 2) * this.pi).toFixed(2)}`;
        }
}

// Circle inherits Shape functions
Circle.prototype = new Shape();

const square = new Shape('square', 'red', 2, 2);
const rectangle = new Shape('rectangle', 'green', 2, 4);

console.log(square.getArea());
console.log(rectangle.getArea());
square.draw();
rectangle.draw();

console.log('\n');

const small_circle = new Circle('small circle', 'yellow', 2);
const big_circle = new Circle('big circle', 'blue', 8);

// notice that getArea has overriden its parent getArea function
console.log(small_circle.getArea());
console.log(big_circle.getArea());

// notice that draw was inherited from its parent prototype
small_circle.draw();
big_circle.draw();