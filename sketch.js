var player;
var playerMoving;
var track;
var trackImage;
var boundary1;
var boundary2;
var edges;
function preload(){
  //pre-load images
  playerMoving = loadAnimation("Runner-1.png","Runner-2.png");
  trackImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200,200,800,800);
  track.addImage(trackImage);
  edges = createEdgeSprites();
  player = createSprite(100,150,20,50);
  player.addAnimation("running",playerMoving);
  player.scale = 0.075;
  player.y = 350;
  boundary1 = createSprite(0,200,50,400);
  boundary1.visible = false;
  boundary2 = createSprite(400,200,50,400);
  boundary2.visible = false;
}

function draw() {
  background(0);
  console.log(player.x);
  player.x = World.mouseX;
  player.collide(boundary1);
  player.collide(boundary2);
  track.velocityY = 3;
  if(track.y > 400) {
    track.y = track.height / 3;
  }
  player.collide(edges[3]);
 drawSprites();

}
