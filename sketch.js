var fixedRect, movingRect,rectone,recttwo;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  rectone= createSprite(800, 100, 50, 80);
  recttwo = createSprite(1000, 550, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (watch(movingRect,rectone)){
    rectone.shapeColor = "blue";
    movingRect.shapeColor = "red"; 
  }
  else {
    movingRect.shapeColor = "green";
    rectone.shapeColor = "green";
  }

  drawSprites();
}