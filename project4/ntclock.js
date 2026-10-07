//////////CORRECT ANSWER////////////////
function ClockScene() {
  this.digits = [];
  this.currentDigit = 0;
  this.finished = false;
  this.lastMinute = -1;
  this.btBack = { x: 20, y: 20, w: 120, h: 40 };

  //fireworks n congrats
  this.fireworks = [];
  this.gravity = createVector(0, 0.2);
  this.textSizeVal = 64;

  this.setup = function () {
    stroke(135, 206, 250);
    strokeWeight(4);
    noFill();
    textFont('Georgia');
  };

  this.enter = function () {
     stopAllSounds();  
       pencil.visible = false;

    if (nt3 && !nt3.isPlaying()) nt3.loop();

    this.fireworks = [];
    this.digits = [];
    this.currentDigit = 0;
    this.finished = false;
    this.textSizeVal = 64;
    this.lastMinute = -1;
    this.updateTimeDigits();
  };

  this.draw = function () {
    background(0, 0, 0, 25);

    // firework multiple times
    if (this.fireworks.length < 40) {
      this.fireworks.push(new Firework());
    }

    // Fireworks
    colorMode(RGB);
    for (let i = this.fireworks.length - 1; i >= 0; i--) {
      this.fireworks[i].applyForce(this.gravity);
      this.fireworks[i].update();
      this.fireworks[i].show();
      if (this.fireworks[i].done()) {
        this.fireworks.splice(i, 1);
      }
    }

    // "Congratulations"
    fill(255);
    textAlign(CENTER, CENTER);1
    textSize(this.textSizeVal);
    text("Congratulations!", width / 2, height / 2 - 200);
    this.textSizeVal -= 0.2;
    if (this.textSizeVal < 32) this.textSizeVal = 64;

    // clock
    this.drawClock();
  };

  this.drawClock = function () {
    // Back button
    fill(255);
    stroke(135, 206, 250);
    strokeWeight(4);
    rect(this.btBack.x, this.btBack.y, this.btBack.w, this.btBack.h, 10);
    noStroke();
    fill(0);
    textSize(16);
    textAlign(CENTER, CENTER);
    text("Math Again", this.btBack.x + this.btBack.w / 2, this.btBack.y + this.btBack.h / 2);

    let nowMin = minute();
    if (nowMin !== this.lastMinute) {
      this.updateTimeDigits();
    }

    this.drawColon(this.xStart + 2 * 100 - 10, 300);

    for (let i = 0; i < this.digits.length; i++) {
      if (i > this.currentDigit) break;
      let d = this.digits[i];
      if (!Array.isArray(d.shape) || d.shape.length < 2) continue;

      push();
      translate(d.x, d.y);
      scale(1.5);

      let totalSegments = d.shape.length - 1;
      let segToDraw = floor(map(d.progress, 0, 1, 0, totalSegments));

      for (let j = 0; j < segToDraw; j++) {
        let p1 = d.shape[j];
        let p2 = d.shape[j + 1];
        if (!p1 || !p2) continue;
        line(p1[0], p1[1], p2[0], p2[1]);
      }

      if (segToDraw < totalSegments) {
        let p1 = d.shape[segToDraw];
        let p2 = d.shape[segToDraw + 1];
        if (p1 && p2) {
          let t = map(d.progress * totalSegments - segToDraw, 0, 1, 0, 1);
          let x1 = lerp(p1[0], p2[0], t);
          let y1 = lerp(p1[1], p2[1], t);
          line(p1[0], p1[1], x1, y1);
        }
      }
      pop();

      d.progress += 0.02;

      if (d.progress >= 1 && i === this.currentDigit) {
        this.currentDigit++;
      }
    }

    if (this.currentDigit >= this.digits.length && !this.finished) {
      this.finished = true;
    }

    let h = hour();
    let m = minute();
    if (this.finished && (h >= 0 && h <= 24)  && (m === 0 || m === 15 || m === 30 || m === 45)) { ////////////////////////////////////check flowers
    //left 
      this.drawFlower(width / 4 - 10, height/2 - 100, 1.2);
    this.drawFlower(width / 4, height/2 + 20, 1);
        this.drawFlower(width / 4 - 20, height/2 - 30, 0.5);
        this.drawFlower(width / 4 + 60, height/2 + 45, 0.55);
        this.drawFlower(width / 4 + 100, height/2 + 35, 0.4);
        this.drawFlower(width / 4 - 60, height/2 + 5, 0.6);

    //right
      this.drawFlower(width / 4 + 430, height/2 - 125, 1);
        this.drawFlower(width / 4 + 450, height/2 - 60, 0.8);
        //this.drawFlower(width / 4 + 420, height/2 - 25, 0.65);
        this.drawFlower(width / 4 + 460, height/2 - 10, 0.5);
        this.drawFlower(width / 4 + 380, height/2 - 115, 0.35);
        this.drawFlower(width / 4 + 420, height/2 + 20, 0.4);
          this.drawFlower(width / 4 + 350, height/2 -135, 0.3);
        this.drawFlower(width -190 , height/2 -100, 0.65);
        this.drawFlower(width -170, height/2 - 50, 0.7);

    }
  }

  this.mousePressed = function () {
    if (
      mouseX > this.btBack.x &&
      mouseX < this.btBack.x + this.btBack.w &&
      mouseY > this.btBack.y &&
      mouseY < this.btBack.y + this.btBack.h
    ) {
 stopAllSounds();
 if(nt1) nt1.play();
      this.sceneManager.showScene(Maths);
    }
  }

  this.updateTimeDigits = function () {
    this.digits = [];
    this.currentDigit = 0;
    this.finished = false;
    this.lastMinute = minute();

    let totalWidth = 4 * 100 + 20;
    let xStart = (width - totalWidth) / 2;
    this.xStart = xStart;

    let y = 250;
    let h = nf(hour(), 2);
    let m = nf(minute(), 2);
    let timeStr = h + m;

    let x = xStart;
    for (let i = 0; i < timeStr.length; i++) {
      let shape = this.getDigitPath(timeStr[i]);
      this.digits.push({
        char: timeStr[i],
        x: x,
        y: y,
        progress: 0,
        shape: shape
      });
      x += 100;
      if (i === 1) x += 20;
    }
  };

  this.drawColon = function (x, y) {
    fill(135, 206, 250);
    noStroke();
    ellipse(x, y + 20, 6, 6);
    ellipse(x, y + 50, 6, 6);
    noFill();
    stroke(135, 206, 250);
  };

  this.getDigitPath = function (d) {
    if (d === "0") return [[10,0],[0,20],[0,60],[10,80],[30,80],[40,60],[40,20],[30,0],[10,0]];
    if (d === "1") return [[20,0],[20,80]];
    if (d === "2") return [[0,20],[10,0],[30,0],[40,20],[0,80],[40,80]];
    if (d === "3") return [[0,10],[20,0],[40,20],[20,40],[40,60],[20,80],[0,70]];
    if (d === "4") return [[40,80],[40,0],[0,40],[40,40]];
    if (d === "5") return [[40,0],[0,0],[0,40],[30,40],[40,60],[30,80],[0,70]];
    if (d === "6") return [[30,0],[0,40],[0,70],[20,80],[40,60],[0,40]];
    if (d === "7") return [[0,0],[40,0],[20,80]];
    if (d === "8") return [[20,0],[0,20],[20,40],[0,60],[20,80],[40,60],[20,40],[40,20],[20,0]];
    if (d === "9") return [[40,40],[20,0],[0,20],[0,40],[20,40],[40,40],[0,80]];
    return [];
  };

  this.drawFlower = function (x, y,s) {
    push();
    // translate(x, y);
    // for (let i = 0; i < 8; i++) {
    //   let angle = TWO_PI / 8 * i;
    //   let px = cos(angle) * 20;
    //   let py = sin(angle) * 20;
    //   fill(255, 105, 180);
    //   noStroke();
    //   ellipse(px, py, 20, 20);
    // }
    // fill(255, 215, 0);
    // ellipse(0, 0, 15, 15);
  fill(255, 105, 180); // pink
  noStroke();

  ellipse(x, y - 20 * s, 20 * s, 20 * s); // top
  ellipse(x + 20 * s, y, 20 * s, 20 * s); // right
  ellipse(x - 20 * s, y, 20 * s, 20 * s); // left
  ellipse(x - 10 * s, y + 20 * s, 20 * s, 20 * s); // b.left
  ellipse(x + 10 * s, y + 20 * s, 20 * s, 20 * s); // b.right

  fill(255, 215, 0); // yellow
  ellipse(x, y, 18 * s, 18 * s);

    pop();
  }
}


//////////WRONG ANSWER////////////////



function CryingFaceScene() {
    this.worms = { x: 50, y: 200, size: 200, speed: 25 };
    this.treasure = { x: 300, y: 150, size: 160 };
    this.btHelp2 = { x: 450, y: 630, w: 100, h: 40 };

    this.setup = function () {}

    this.enter = function () {
        this.randomizeTreasure();
        nt2.stop(); 
        b.setVolume(1.5);
        if (!b.isPlaying()) b.loop();
        pencil.visible = false;

    }

    this.randomizeTreasure = function () {
        this.treasure.x = random(50, width - this.treasure.size);
        this.treasure.y = random(50, height - this.treasure.size);
    }

    this.draw = function () {
        background("rgb(255, 255, 143)");
        fill("rgb(241, 148, 138)");
        ellipse(500,600,1200,700);
        image(imgtr, this.treasure.x, this.treasure.y, this.treasure.size, this.treasure.size);
        image(imgw, this.worms.x, this.worms.y, this.worms.size, this.worms.size);

        // Collide
        let hit = collideRectRect(this.worms.x, this.worms.y, this.worms.size, this.worms.size,
                                  this.treasure.x, this.treasure.y, this.treasure.size, this.treasure.size);
        if (hit) {
            if (!n.isPlaying()) n.play();
            if (b.isPlaying()) b.stop();
            this.sceneManager.showScene(Maths);
        }

        // Help button
        if (checkButtonPress("Help", this.btHelp2.x, this.btHelp2.y, this.btHelp2.w, this.btHelp2.h,
                             color(220, 100, 100), color(100), color(250))) {
            this.sceneManager.showScene(help);
        }
fill("rgb(0, 105, 92)");
    text("Let's eat an apple to back to the Math!", width / 2, 50);
    
    }

    this.keyPressed = function () {
        switch (key) {
            case "a": this.worms.x -= this.worms.speed; break;
            case "d": this.worms.x += this.worms.speed; break;
            case "w": this.worms.y -= this.worms.speed; break;
            case "s": this.worms.y += this.worms.speed; break;


        }
        this.worms.x = constrain(this.worms.x, 0, width - this.worms.size);
        this.worms.y = constrain(this.worms.y, 0, height - this.worms.size);
       
        if (!moving.isPlaying()) {
        moving.play();
            //nt3.stop();
    }}


    this.mousePressed = function () {
        if (mouseX > this.btHelp2.x && mouseX < this.btHelp2.x + this.btHelp2.w &&
            mouseY > this.btHelp2.y && mouseY < this.btHelp2.y + this.btHelp2.h) {
            this.sceneManager.showScene(help2);
        }
    }
}

//////////////HELP 2////////////////
function help2() {
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
    text("How to move", width/2, 100);
    text("- Press 'a' to turn left, press 'd' to turn right", width/2, 150);
    text("- Press 'w' to go up, press 's' to go down", width/2, 200);
    text("Let him eat an apple!", width/2, 250);

    // Let's go button draw
    drawButton("Let's do it!", width / 2 - 70, height - 70, 140, 40,
      color(190, 190, 220), color(220, 100, 220), color(250));
  }

  // mouse pressed for  let's go button
  this.mousePressed = function () {
    
    if (mouseX > width / 2 - 70 && mouseX < width / 2 - 70 + 140 &&
        mouseY > height - 70 && mouseY < height - 70 + 40) {
      this.sceneManager.showScene(CryingFaceScene);
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


