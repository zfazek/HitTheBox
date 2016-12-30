var WIDTH = 600;
var HEIGHT = 400;

var result;
var myCanvas;

var rects = [];
var N = 10;

function setup() {
    result = select('#result');
    var myCanvas = createCanvas(WIDTH, HEIGHT);
    myCanvas.parent('myCanvas');
    for (var i = 0; i < N; i++) {
        addRect();
    }
}

function addRect() {
    var size = random(40, 80);
    rects.push(new Rect(random(size, width - size),
                random(size, height - size),
                random(255),
                size));
}

function draw() {
    background(51);
    for (var i = 0; i < rects.length; i++) {
        rects[i].update();
    }
    for (var i = 0; i < rects.length; i++) {
        rects[i].draw();
    }
}

function mousePressed() {
    var hit = false;
    for (var i = rects.length - 1; i >= 0; i--) {
        var rect = rects[i];
        if (mouseX > rect.x &&
                mouseX < rect.x + rect.size &&
                mouseY > rect.y &&
                mouseY < rect.y + rect.size) {
            rects.splice(i, 1);
            hit = true;
        }
    }
    if (!hit) {
        addRect();
    }
}
