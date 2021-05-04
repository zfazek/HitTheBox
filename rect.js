function Rect() {
    this.size = random(70, 100);
    this.x = random(0, WIDTH - this.size);
    this.y = random(0, HEIGHT - this.size);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.dx = random(-1, 1);
    this.dy = random(-1, 1);

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
            this.y = HEIGHT - this.size;
        }
    }

    this.draw = function() {
        stroke(0);
        strokeWeight(2);
        fill(this.r, this.g, this.b);
        rect(this.x, this.y, this.size, this.size);
    }
}
