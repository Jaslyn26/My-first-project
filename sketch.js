var ball;
function setup() {
  createCanvas(400,400);
  ball=createSprite(100,100,20,20)
}

function draw() 
{
  background(30);
if (keyDown("right")){
ball.x = ball.x+5
}
if (keyDown("left")){
  ball.x = ball.x-5
  }
  if (keyDown("up")){
    ball.y = ball.y-5
    }
    if (keyDown("down")){
      ball.y = ball.y+5
      }
  
  
drawSprites();
}




