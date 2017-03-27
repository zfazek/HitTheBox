var WIDTH = 800;
var HEIGHT = 450;

var myCanvas;
var initButton;

var rects;
var N;
var counter;
var M = 4;

function setup() {
    initButton = createInput('Start');
    initButton.mousePressed(init);
    var myCanvas = createCanvas(WIDTH, HEIGHT);
    myCanvas.mousePressed(mousePressedOnCanvas);
    myCanvas.parent('myCanvas');
    init();
}

function init() {
    N = select('#boxes').value();
    rects = [];
    counter = 0;
    for (var i = 0; i < N; i++) {
        addRect();
    }
}

function addRect() {
    rects.push(new Rect());
}

function draw() {
    background(51);
    textSize(20);
    if (rects.length > 0) {
        for (var i = 0; i < rects.length; i++) {
            rects[i].update();
        }
        for (var i = 0; i < rects.length; i++) {
            rects[i].draw();
        }
        stroke(0);
        fill(255, 0, 0);
        text(rects.length, 20, 20);
    } else {
        stroke(0);
        fill(255, 0, 0);
        text(counter, 300, 250);
    }
}

function mousePressedOnCanvas() {
    counter++;
    if (rects.length == 0) {
        init();
    } else {
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
}
