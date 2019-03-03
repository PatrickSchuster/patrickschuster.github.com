let canvas;
let stars = [];
let numberOfStars = 300;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    numberOfStars = 50;
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');

    for(let i = 0; i < numberOfStars; i++){
        stars[i] = new Star();
    }
}

class Star {

    constructor() {
        this.x = random(-windowWidth, windowWidth);
        this.y = random(-windowHeight, windowHeight);
        this.z = random(windowWidth);
    }

    update(){
        this.z -= 10;
        if(this.z < 0){
            this.x = random(-width, width);
            this.y = random(-height, height);
            this.z = random(500, 800);
        }
    }
    
    show(){
        noStroke();
        const sx = map(this.x / this.z, 0, 1, 0, width);
        const sy = map(this.y / this.z, 0, 1, 0, height);
        // stars with smaller z are smaller, stars with larger z are larger 
        const size = map(this.z, 0, width, 10, 0);
        fill(255);
        //drawStar(sx, sy, 1, size, size);
        ellipse(sx, sy, size, size);
    }
}

// experimental
function drawStar(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius2;
        let sy = y + sin(a) * radius2;
        vertex(sx, sy);
        sx = x + cos(a + halfAngle) * radius1;
        sy = y + sin(a + halfAngle) * radius1;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}

function draw() {
    background(0);
    translate(width/2, height/2);
    for(let i = 0; i < stars.length; i++){
        stars[i].update();
        stars[i].show();
    }
}