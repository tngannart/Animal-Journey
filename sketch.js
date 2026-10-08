let mgr;
let imgcrab, imgtr, imgrab;
let nt1, nt2, nt3, nt4, nt5, nt6;
let carrot;
let crab;
let font1;

function preload() {
  // nt1 = loadSound("bell.mp3");
  // nt2 = loadSound("chewing.mp3");
  // nt3 = loadSound("srabbit.mp3");
  // nt4 = loadSound("ocean.mp3");
  // nt5 = loadSound("treasure.mp3");
  // nt6 = loadSound("moving.mp3");

  imgcrab = loadImage("crab.png");
  imgtr = loadImage("treasure.png");
  imgrab = loadImage("rabbit.png");

  font1 = loadFont("carrot.otf");
}

function setup() {
nt1 = loadSound("bell.mp3");
  nt2 = loadSound("chewing.mp3");
  nt3 = loadSound("srabbit.mp3");
  nt4 = loadSound("ocean.mp3");
  nt5 = loadSound("treasure.mp3");
  nt6 = loadSound("moving.mp3");
  
  createCanvas(600, 400);

  carrot = createSprite(0, 0, -100, -110); //0,0,-100,-110
  carrot.addAnimation("idle", "carrot.05.png", "carrot.11.png");
  carrot.addAnimation("clicked", "carrot.01.png", "carrot.04.png");
  carrot.visible = false;
  carrot.scale = 0.03; 

  mgr = new SceneManager();
  mgr.addScene(intro);
  mgr.addScene(Crab);
  mgr.addScene(RabbitScene);
  mgr.addScene(help);
  mgr.wire();
  mgr.showScene(intro);
}

function draw() {
  mgr.draw();
  drawSprites();
}

function keyPressed() {
  mgr.handleEvent("keyPressed");
}

function mousePressed() {
   mgr.handleEvent("mousePressed");
  
    
  if (carrot.visible) {
    carrot.changeAnimation("clicked");
    if (!nt2.isPlaying()) {
      nt2.play(); 
    }
  }
}
