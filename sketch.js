
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";

  car = createSprite(100, 100, 50, 50);
  

  wall = createSprite(500, 100, 10, 300);
  wall.shapeColor = "cyan";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(car, wall)){
    
    car.velocityX = 0;

  }

 if(mousePressedOver(car)){

  car.velocityX = 4;

 }

//bounceOff(movingRect,fixedRect)
  drawSprites();
}


