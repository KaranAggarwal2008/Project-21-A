var bullet,wall;
var weight,speed,thikness;
function setup() {
  createCanvas(1600,400);
  weight=random(30,52);
  speed=random(223,321);
  thikness=random(22,83);
  bullet = createSprite(50,200,50,50);
  wall=createSprite(1500,200,thikness,height/2);
  wall.shapeColor=color(80,80,80);
  bullet.velocityX=speed;
}
function draw() {
  background(220);  
tester();
  drawSprites();
}
function tester(){
  if(wall.x-bullet.x < (bullet.width+wall.width)/2) { 
    bullet.velocityX=0; 
    var deformation=0.5*weight*speed*speed/thikness*thikness*thikness;
    if(deformation>10){
      wall.shapeColor=color(255,0,0);
    }else if(deformation<10){
      wall.shapeColor=color(0,255,0);
    }
    } 
    }  