const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

var backgroundImg;
var platformA, platformB, platformImg, flag, flagImg;
var rocket, rocketImg;

function preload() {
  backgroundImg = loadImage("assets/background.jpg");
  platformImg = loadImage("assets/platform.png");
  flagImg = loadImage("assets/flag.png");
  rocketImg = loadImage("assets/rocket.png");
}

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;

  platformA = new Body(200, 300, 200, 200, platformImg);
  platformB = new Body(600, 300, 200, 200, platformImg);
  flag = createSprite(680, 240, 20, 20);
  flag.addImage(flagImg);
  flag.scale = 0.2;

  rocket = new Body(200, 200, 50, 80, rocketImg);
  rocket.options = {
    isStatic: false
  };
}

function draw() {
  background(40);
  Engine.update(engine);
  image(backgroundImg, 0, 0, 800, 600);
  platformA.display();
  platformB.display();
  rocket.display();

  drawSprites();
}