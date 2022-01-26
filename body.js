class Body {
    constructor(x, y, width, height, image, angle) {
        this.options = {
            isStatic: true
        };
        this.body = Bodies.rectangle(x, y, width, height, this.options);
        this.width = width;
        this.height = height;
        this.image = image;
        this.angle = angle;
        World.add(world, this.body)
    }

    display() {
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop();
    }

    rotate(degree) {
        Matter.Body.rotate(this.body, degree)
    }
}