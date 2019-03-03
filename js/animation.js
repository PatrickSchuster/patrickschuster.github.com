let canvas;
let stars = [];

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
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
        ellipse(sx, sy, size, size);
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