function Rect() {
    this.size = random(40, 80);
    this.x = random(this.size, WIDTH - this.size);
    this.y = random(this.size, HEIGHT - this.size);
    this.colour = random(255);
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);

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
        if (this.colour < 127) {
            stroke(255);
        } else {
            stroke(0);
        }
        strokeWeight(2);
        fill(this.colour);
        rect(this.x, this.y, this.size, this.size);
    }
}
