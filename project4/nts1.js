function intro() {
    let loy = 0;
    let startBtn = { x: 0, y: 0, w: 120, h: 40 };

this.setup = function () {
    console.log("We are at setup for intro");
    outputVolume(0.15);
    startBtn.x = width / 2 - 70;
    startBtn.y = height /2 + 40;
}

this.enter = function () {
    console.log("We are at entering intro");
    if (typeof nt1 !== 'undefined') nt1.stop();
}

 this.draw = function () {
  background("rgb(135, 206, 235)");

    fill("rgb(0, 187, 255)");
    ellipse(width / 2, height -500, 150, 100);
       
   fill("rgb(242, 242, 242)");
 ellipse(-5, height - 70, width + 5,800);
   noStroke();
     
  fill("rgb(224, 17, 95)")  ;
    textSize(67);
    textAlign(CENTER);
    textFont(font1);
    text("TickTock", width / 2, height -500);
        text("TickTock", width / 2-2, height -500);
  fill("rgb(0, 0, 139)")  ;
        textSize(50);    
    text("Unlocked", width/2, height - 450);
  fill("rgb(255, 105, 180)") ;
    textSize(40);
    text("What time is it?", width/2, height - 325);
//object
if(img5){ 
let c = 620;
let d = 420;
let cc = width / 2 ; 
let cd = 550;
  push();
  translate(cc, cd);      
  imageMode(CENTER);      
  image(img5, 0, 0, c, d);  
  pop();  

//clock
  if(img3){ 
let w = 550;
let h = 520;
let cx = width / 2 + 350; 
let cy = 520;
  push();
  translate(cx, cy);      
  rotate(20);       
  imageMode(CENTER);      
  image(img3, 0, 0, w, h);  
  pop();
}

//numbers
if(img4){
  let a = 550; //width
  let b = 350; //height
  let ca =-20; //cx
  let cb = 300;  // cy
   push();
  translate(ca, cb);      
  rotate(65);       
  imageMode(CENTER);      
  image(img4, 0, 0, a, b);  
  pop();

}
if(img4){
  let e = 550; //width
  let f = 350; //height
  let ce =270 ; //cx
  let cf = 690;  // cy
   push();
  translate(ce, cf);      
  rotate(10);       
  imageMode(CENTER);      
  image(img4, 0, 0, e, f);  
  pop();

}
 

}

    // Draw Start button
    checkButtonPress("It's math-thirty!", startBtn.x, startBtn.y, startBtn.w+30, startBtn.h,
         color("rgb(222, 49, 99)"), color("rgb(255, 182, 193)"), color(0));
   
   
  }

    this.mousePressed = () => {
        if (mouseX > startBtn.x && mouseX < startBtn.x + startBtn.w &&
            mouseY > startBtn.y && mouseY < startBtn.y + startBtn.h) {
            if (typeof nt1 !== 'undefined' && !nt1.isPlaying()) nt1.play();
            this.sceneManager.showNextScene();
        }
    }
  }

/////////////////////////////// MATH SCENE ////////////////////////////////////


function Maths() {
  this.btHelp = { x: 750, y: 635, w: 100, h: 40 };

  this.input = null;
  this.button = null;
  this.question = "";
  this.correctAnswer = 0;
  this.startTime = 0;
  this.timeLimit = 10;
  this.cryingFace = null;

  //pencil
  this.hovered = false;
  this.clicked = false;

  this.setup = function () {
    let centerX = width / 2;
    let centerY = 300;

    this.input = createInput();
    this.input.position(centerX + 147, centerY + 235 ); // input under the question
    this.input.size(100,50);
    this.input.style('font-size', '24px'); 
    this.input.hide();

    this.button = createButton('Check');
    this.button.position(centerX + 150, centerY + 300);
    this.button.mousePressed(() => this.checkAnswer());
    this.button.hide();

    this.hovered = false;
    this.clicked = false;
  }

  this.enter = function () {
    this.result = "";
    this.input.show();
    this.button.show();
    this.generateQuestion();
    this.startTime = millis();

    pencil.visible = true;
    pencil.changeAnimation("normal");

    this.input.value(""); 
    stopAllSounds();   
    if (!nt2.isPlaying()) nt2.loop();
  }

  this.exit = function () {
    if (this.input) {
      this.input.hide();
      this.input.remove(); 
      this.input = null;
    }

    if (this.button) {
      this.button.hide();
      this.button.remove();
      this.button = null;
    }

    pencil.visible = false;

    if(nt2 && nt2.isPlaying()) {
      nt2.stop();
    }
  }

  this.draw = function () {
    if (img1) {
      image(img1, 0, 0, width, height+9);
    } else {
      background(255);
    }

    pencil.position.set(mouseX, mouseY);

    push();
    textSize(45);
    fill(0);
    textAlign(CENTER, CENTER);
    textFont(font2);
    noStroke();
    let centerX = width / 2;
    let centerY = 300;

    text("Let's calculate it", centerX, centerY - 50);
    text(this.question, centerX, centerY + 20);

    // Countdown clock
    drawCountdownCircle(centerX + 200, centerY + 40, this.startTime, this.timeLimit);
    pop();
    
    // Help button
    if (checkButtonPress("Help", this.btHelp.x, this.btHelp.y, this.btHelp.w, this.btHelp.h,
        color(203, 110, 153), color(150,120,120), color(220))) {
             pencil.visible = false;
          this.sceneManager.showScene(help);
    }
    // Check timer
    let elapsed = (millis() - this.startTime) / 1000;
    if (elapsed >= this.timeLimit) {
      this.input.hide();
      this.button.hide();
      this.sceneManager.showScene(CryingFaceScene);
    }

  }

  this.checkAnswer = function () {
    let answer = this.input.value().trim();
    stopAllSounds(); 
    if (nt1) nt1.play();
    if (parseInt(answer) === this.correctAnswer) {
      this.input.hide();
      this.button.hide();
      this.sceneManager.showScene(ClockScene);
    } else {
      this.input.hide();
      this.button.hide();
      this.sceneManager.showScene(CryingFaceScene);
    }
  }

  this.generateQuestion = function () {
    let a = floor(random(1, 10));
    let b = floor(random(1, 10));
    let operations = ["+", "-"];
    let op = random(operations);

    if (op === "+") this.correctAnswer = a + b;
    else if (op === "-") this.correctAnswer = a - b;
   else if (op === "*") this.correctAnswer = a * b; // it's too hard to do T.T

    this.question = `${a} ${op} ${b} = ` ;
  }
  

  this.mousePressed = function () {
    // Help button check
    if (
      mouseX > this.btHelp.x &&
      mouseX < this.btHelp.x + this.btHelp.w &&
      mouseY > this.btHelp.y &&
      mouseY < this.btHelp.y + this.btHelp.h
    ) {
      stopAllSounds();
      if (this.input) this.input.hide();
      if (this.button) this.button.hide();
        pencil.visible = false;
      this.sceneManager.showScene(help);
    }

    // Pencil animation on click
    if (pencil.visible && pencil.overlapPoint(mouseX, mouseY)) {
      pencil.changeAnimation("clicked");
      if (nt5 && !nt5.isPlaying()) {
        
        nt5.play();
        nt2.stop();
      } else {
        console.log("nt2 already playing");
    }
  }
}
  this.mouseReleased = function () {
    if (pencil.visible) {
      pencil.changeAnimation("normal");
    }
  }
}




// Countdown Clock
function drawCountdownCircle(x, y, startTime, timeLimit) {
  let elapsed = (millis() - startTime) / 1000;
  let remaining = max(0, timeLimit - elapsed);
  let angle = map(remaining, 0, timeLimit, 0, TWO_PI);

  stroke(0);
  noFill();
  ellipse(x, y, 50, 50);

  noStroke();
  fill(100, 150, 255, 200);
  arc(x, y, 50, 50, -HALF_PI, -HALF_PI + angle, PIE);

  fill(0);
  textSize(16);
  textAlign(CENTER, CENTER);
  text(floor(remaining), x, y);
}



///////////////////////// HELP 1 /////////////////
function help() {
  this.setup = function () {
    console.log("We are at setup for help");
  }

  this.enter = function () {
    console.log("We are at entering for help");
    if (typeof math !== 'undefined') math.visible = false;
  }

  this.draw = function () {
    background("lightblue");
    fill(200, 150, 0);

    fill("black");
    textAlign(CENTER);
    textSize(35);
    text("How to work", width/2, 100);
    text("Type your answer in the blank", width/2, 150);
    text("Click 'Check' button to check it", width/2, 200);
    text("Good luck!!!", width/2, 250);

    // Let's go button draw
    drawButton("Let's go!", width / 2 - 70, height - 70, 140, 40,
      color(190, 190, 220), color(220, 100, 220), color(250));
  }

  // mouse pressed for  let's go button
  this.mousePressed = function () {
    
    if (mouseX > width / 2 - 70 && mouseX < width / 2 - 70 + 140 &&
        mouseY > height - 70 && mouseY < height - 70 + 40) {
      this.sceneManager.showScene(Maths);
    }
  }
}

function drawButton(str, bx, by, boxW, boxH, upcolor, ovcolor, dncolor) {
  let overBox = (mouseX > bx && mouseX < bx + boxW && mouseY > by && mouseY < by + boxH);
  let btnc = overBox ? ovcolor : upcolor;

  push();
  translate(bx, by);
  fill(btnc);
  rect(0, 0, boxW, boxH, 10);
  fill(20);
  noStroke();
  textSize(25);
  textAlign(CENTER);
  text(str, boxW / 2, 28);
  pop();
}

let buttonPressed = false; 

function checkButtonPress(str, bx, by, boxW, boxH, upcolor, ovcolor, dncolor) {
    let btnc = "";
    let btnstate = false;

    let overBox = (mouseX > bx && mouseX < bx + boxW && mouseY > by && mouseY < by + boxH);

    if (overBox) {
        if (mouseIsPressed) {
            console.log(str + " pressed");
            btnc = dncolor;
            btnstate = true;
        } else {
            btnc = ovcolor;
        }
    } else {
        btnc = upcolor;
    }

    push();
    translate(bx, by);
    fill(btnc);
    rect(0, 0, boxW, boxH, 10);
    fill(20);
    noStroke();
    textSize(25);
    textAlign(CENTER);
    text(str, boxW / 2, 28);
    pop();

    return btnstate;
}
