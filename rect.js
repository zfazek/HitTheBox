function Rect(x, y, colour, size) {
    this.x = x;
    this.y = y;
    this.colour = colour;
    this.size = size;
    this.dx = random(1, 5);
    this.dy = random(1, 5);

    this.update = function() {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x < 0) {
            this.dx *= -1;
            this.x = 0;
        } else if (this.x + this.size > WIDTH) {
            this.dx *= -1;
            this.x = WIDTH - this.size;
        } else if (this.y < 0) {
            this.dy *= -1;
            this.y = 0;
        } else if (this.y + this.size > HEIGHT) {
            this.dy *= -1;
            y = HEIGHT - this.size;
        }
    }

    this.draw = function() {
        stroke(255 - this.colour);
        strokeWeight(2);
        fill(this.colour);
        rect(this.x, this.y, this.size, this.size);
    }
}
