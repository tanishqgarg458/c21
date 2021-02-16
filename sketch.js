
//TANISHQ
var fixedRect,movingRect;
var r1,r2
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  r1=createSprite(20,200,50,80);
  r2=createSprite(300,200,80,30);
  r1.velocityX=5
  r2.velocityX=-5
  r1.shapeColor= "black"
  r2.shapeColor= "red"
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  //algo: if 2 rects are touching each other or not
if(algo1(movingRect,fixedRect) )
  {movingRect.shapeColor="red";
  fixedRect.shapeColor="red";

}
else{movingRect.shapeColor="green";
fixedRect.shapeColor="green";

}
//bounce off
algo2(r1,r2)

  drawSprites();
}


