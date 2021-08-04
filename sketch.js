var astronaut;
var bath,brush,drink,eat,gym,move,sleep;
var bg,bgImg;

function preload() {
  bgImg = loadImage("images/iss.png");
}

function setup() {
  
  createCanvas(400, 400);
  
  bg=createSprite(300,300)
  bg.addImage("iss",bgImg);
  
}

function draw() {
  
  background(220);
  
  drawSprites();
}