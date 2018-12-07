function Circle(radius) {
    this.radius = radius;
    this.draw = () => {
            console.log('draw');
    }
}

const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = () => {
        console.log('draw');
}`);

const circle = new Circle1(1);

circle.draw();