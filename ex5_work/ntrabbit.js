class RabbitScene {
  constructor() {
    this.sceneManager = null;
    this.hovered = false;
    this.clicked = false;
    this.nt2Set = false; 
  }

  setup() {
    console.log("Setup RabbitScene");
  }

  enter() {
    console.log("Enter RabbitScene");
    carrot.visible = true;
    carrot.changeAnimation("idle");
    this.hovered = false;
    this.clicked = false;

    // sound play
    if (!nt3.isPlaying()) {
      nt3.loop();
    }

    
    if (!this.nt2Set) {
      nt2.onended(() => {
        console.log("nt2 ended");
        if (this.clicked) {
          this.clicked = false;
          this.sceneManager.showScene(Crab);
        }
      });
      this.nt2Set = true;
    }
  }

  draw() {
    background(240, 220, 200);
    imageMode(CENTER);
    image(imgrab, width / 2, height / 2, 170, 170);

    //stuff
    fill(128, 128, 128);
    rect(215, 270, 170, 170);
    fill(54, 69, 79);
    rect(150, 270, 300, 35);

    


    carrot.position.x = mouseX;
    carrot.position.y = mouseY;

    // Hover detection
    if (carrot.mouse && carrot.mouse.hovering()) {
      if (!this.hovered && !this.clicked) {
        carrot.changeAnimation("clicked");
        this.hovered = true;
      }
    } else {
      if (this.hovered && !this.clicked) {
        carrot.changeAnimation("idle");
        this.hovered = false;
      }
    }

    // guide
    fill(255, 95, 31);
    textSize(50);
    textAlign(CENTER);
    textFont(font1);
    text("Click carrot to feed me!", width / 2, height - 300);
  }

  mousePressed() {
    if (carrot.visible && !this.clicked) {
      this.clicked = true;
      carrot.changeAnimation("clicked");

      if (!nt2.isPlaying()) {
        console.log("nt2 play");
        nt2.play();
        nt3.stop(); 
      } else {
        console.log("nt2 already playing");
      }
    }
  }

  exit() {
    console.log("Exit RabbitScene");
    nt3.stop(); // sound stop
  }
}
