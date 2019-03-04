let canvas;
let stars = [];

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    console.log('windowWidth = ', windowWidth);
    setup();
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');

    stars = [];
    numberOfStars = Math.floor(windowWidth / 3);

    for(let i = 0; i < numberOfStars; i++){
        stars[i] = new Star();
    }
}

class Star {

    constructor() {
        this.x = random(-windowWidth, windowWidth);
        this.y = random(-windowHeight, windowHeight);
        this.z = random(windowWidth);
        this.col = color(random(255), random(255), random(255));
    }

    update(){
        this.z -= 10;
        if(this.z < 0){
            this.x = random(-windowWidth, windowWidth);
            this.y = random(-windowHeight, windowHeight);
            this.z = random(500, 800);
        }
    }
    
    show(){
        noStroke();
        const sx = map(this.x / this.z, 0, 1, 0, windowWidth);
        const sy = map(this.y / this.z, 0, 1, 0, windowHeight);
        stroke(this.col);
        ellipse(sx, sy, 3, 3);
    }
}

function draw() {
    background(0);
    translate(windowWidth/2, windowHeight/2);
    for(let i = 0; i < stars.length; i++){
        stars[i].update();
        stars[i].show();
    }
}