var WIDTH = 600;
var HEIGHT = 400;

var result;
var myCanvas;

var rects = [];
var N = 20;
var M = 4;

function setup() {
    result = select('#result');
    var myCanvas = createCanvas(WIDTH, HEIGHT);
    myCanvas.parent('myCanvas');
    for (var i = 0; i < N; i++) {
        addRect();
    }
}

function addRect() {
    rects.push(new Rect());
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
        for (var j = 0; j < M; j++) {
          addRect();
        }
    }
}
