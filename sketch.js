const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine,myWorld;
var groundBody,ground;
var leftBodyGround,leftGround;
var rightBodyGround,rightGround;
var gift,gift_img,giftBody;
var heli,heli_img;

function preload(){
  gift_img = loadImage("package.png");
  heli_img = loadImage("helicopter.png");
}

function setup(){
  createCanvas(800,700);

  myEngine = Engine.create();
  myWorld = myEngine.world; 

  rectMode(CENTER);

var ground_options =  {
  isStatic: true
}

  groundBody = Bodies.rectangle(width/2,height-10,275,10,ground_options);
  World.add(myWorld,groundBody);

  ground = createSprite(width/2,height-10,275,10);
  ground.shapeColor = "red";

  leftBodyGround = Bodies.rectangle(255,600,13,190,ground_options);
  World.add(myWorld,leftBodyGround);

  leftGround  = createSprite(265,600,13,190);
  leftGround.shapeColor = "red";

  rightBodyGround = Bodies.rectangle(535,600,13,190,ground_options);
  World.add(myWorld,rightBodyGround);

  rightGround  = createSprite(535,600,13,190);
  rightGround.shapeColor = "red";

  
var giftBody_options = {
  isStatic: false
}
  
  giftBody = Bodies.rectangle(400,150,10,10,giftBody_options);
  World.add(myWorld,giftBody);

  gift = createSprite(400,200,10,10);
  gift.addImage("gift",gift_img);
  gift.scale = 0.17;

  heli = createSprite(width/2,150,20,20);
  heli.addImage("heli",heli_img);
  heli.scale = 0.5;
}

function draw(){
  background(0);

  if(keyDown("DOWN_ARROW")){
    Matter.Body.setStatic(giftBody,false)
  }
  
  if(keyDown("LEFT_ARROW")){
    heli.x = heli.x-10;
  }
  
  if(keyDown("RIGHT_ARROW")){
    heli.x = heli.x+10;
  }

  giftBody.position.x = heli.x;

  gift.y = giftBody.position.y;
  gift.x = giftBody.position.x;
 
  
 console.log(giftBody.position.y);
  Engine.update(myEngine);
  drawSprites();
}