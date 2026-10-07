let mgr;
let nt1, nt2, nt3, nt4;
let moving, b, n;
let img1, img2, img3, img4, img5, imgtr, imgw;
let font1, font2;
let maths;
let cryingFace;
let clock;
let p1, f1;
let pencil;

// fireworks
let fireworks = [];
let gravity;
let fireworksLaunched = false;

function preload() {
  nt1 = loadSound("assets/bell.mp3"); // press
  nt2 = loadSound("assets/ticktock.mp3"); //math
  nt3 = loadSound("assets/fireworks.mp3"); //clock
  nt4 = loadSound("assets/uhoh.mp3");     //wrong answer
  //nt5 = loadSound("assets/break.mp3");  //break
  nt6 = loadSound("assets/wrong.mp3");    //check 2
moving = loadSound("assets/moving.mp3");
b = loadSound("assets/background.mp3");
n = loadSound("assets/treasure.mp3");


  img1 = loadImage("assets/paper.png");
  img2 = loadImage("assets/crying.png");
  img3 = loadImage("assets/clock.png");
  img4 = loadImage ("assets/numbers.png");
  img5 = loadImage ("assets/objects.png");
  imgtr = loadImage("assets/apple.png");
imgw = loadImage("assets/worms-13.png");

  font1 = loadFont("assets/sketchpaper.otf");
  font2 = loadFont("assets/spring.ttf");

}

function setup() {
  createCanvas(900, 700);

  colorMode(HSB);
  gravity = createVector(0, 0.2); // fireworks

pencil = createSprite(0, 0, 50, 50); //0,0,-100,-110
  //pencil.addAnimation("clicked", "assets/pencilb-01.png", "assets/pencilb-05.png");
  pencil.addAnimation("normal", "assets/pencilb-01.png", "assets/pencilb-12.png");
  pencil.visible = false;
  pencil.scale = 0.08; 



  mgr = new SceneManager();
  introScene = new intro();
  mathsScene = new Maths();
  clockScene = new ClockScene();
  helpScene = new help();
  helpScene2 = new help2();


  introScene.sceneManager = mgr;
  mathsScene.sceneManager = mgr;
  clockScene.sceneManager = mgr;
  helpScene.sceneManager = mgr;
    helpScene2.sceneManager = mgr;


 maths = mathsScene; 
 mathsScene.setup(); 

  mgr.addScene(intro);
  mgr.addScene(Maths);
  mgr.addScene(ClockScene);
  mgr.addScene(help);
    mgr.addScene(help2);

  mgr.addScene(CryingFaceScene);

  mgr.showScene(intro);



}

function draw() {
 mgr.draw();

}

function keyPressed() {
  mgr.handleEvent("keyPressed");
}

function mousePressed() {
  mgr.handleEvent("mousePressed");
}
//   if (pencil.visible && pencil.mouse.pressed()) {
//     pencil.changeAnimation("clicked");
//     if (!nt5.isPlaying()) {
//       nt5.play();
//     }
//   }



function stopAllSounds() {
  // if (nt1 && nt1.isPlaying()) nt1.stop();
  if (nt2 && nt2.isPlaying()) nt2.stop();
  if (nt3 && nt3.isPlaying()) nt3.stop();
  if (nt4 && nt4.isPlaying()) nt4.stop();
  // if (nt5 && nt5.isPlaying()) nt5.stop();
  // if (nt6 && nt6.isPlaying()) nt6.stop();
  if (b && b.isPlaying()) b.stop();
}
