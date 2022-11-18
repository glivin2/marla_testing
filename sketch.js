function preload() {
    sisterhood = loadImage('images/sisterhood.jpg');
  }

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    rectMode(CENTER);
  }
  
function draw() {
    frameRate(6);
    if (mousePressed){
      fill(mouseY/3,0,0);
      ellipse(pmouseX,pmouseY,mouseX,mouseY);
     
    }else{
       imageMode(CENTER);
    image(sisterhood, mouseX,mouseY,200,200);
    }
  }


