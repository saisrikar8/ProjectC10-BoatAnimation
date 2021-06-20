var ship, sea, seaimg, ship_animation, start_button, stop_button, sea2, newSea;
var start = false;
function preload(){
  ship_animation = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  seaimg = loadImage("sea.png");
}

function setup(){
  createCanvas(3000,1000);
  sea = createSprite(1500, 500);
  sea.addImage(seaimg);
  sea.x = sea.width/2;
  sea.velocityX = -5;

  ship = createSprite(200,600);
  ship.addAnimation("ship", ship_animation);
  ship.scale = 0.5;
}

function draw() {
  if (sea.x < 0){
    sea.x = sea.width/2;
  }
  drawSprites();
}