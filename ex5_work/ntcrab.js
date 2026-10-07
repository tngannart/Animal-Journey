function intro() {
    let loy = 0;
    let startBtn = { x: 0, y: 0, w: 120, h: 40 };

    this.setup = function () {
        console.log("We are at setup for intro");
        outputVolume(0.15);
        startBtn.x = width / 2 - 60;
        startBtn.y = height - 140;
    }

    this.enter = function () {
        console.log("We are at entering intro");
        if (typeof nt1 !== 'undefined') nt1.stop();
    }

    this.draw = function () {
        background(255, 234, 0);

        fill(123,22,10);
        ellipse(width / 2, height / 2 + 150, 260, 220);
        fill(0, 105, 92);
        rect(-5, height - 170, width + 5, 170);
        noStroke();
        // push();
        // translate(width / 2, loy - 100);
        // fill(10, 200, 160);
        // text("Intro", 0, -120);
        // ellipse(0, 0, 80, 140);
        // loy = (loy > height - 140) ? 0 : loy + 1;
        // pop();
fill(0, 105, 92);
    textSize(67);
    textAlign(CENTER);
    textFont(font1);
    text("Animal Journey", width / 2, height -300);

        // Draw Start button (visual only)
        checkButtonPress("Start Here", startBtn.x, startBtn.y, startBtn.w, startBtn.h,
                         color(140, 180, 130), color(130), color(200));
    }

    this.mousePressed = () => {
        if (mouseX > startBtn.x && mouseX < startBtn.x + startBtn.w &&
            mouseY > startBtn.y && mouseY < startBtn.y + startBtn.h) {
            if (typeof nt1 !== 'undefined' && !nt1.isPlaying()) nt1.play();
            this.sceneManager.showNextScene();
        }
    }
}

/////////////////////////////// CRAB ////////////////////////////////////
function Crab() {
    this.crab = { x: 50, y: 200, size: 70, speed: 25 };
    this.treasure = { x: 300, y: 150, size: 70 };
    this.btHelp = { x: 450, y: 330, w: 100, h: 40 };

    this.setup = function () {}

    this.enter = function () {
        this.randomizeTreasure();
        if (typeof carrot !== 'undefined') carrot.visible = false;
        if (!nt4.isPlaying()) nt4.loop();
    }

    this.randomizeTreasure = function () {
        this.treasure.x = random(50, width - this.treasure.size);
        this.treasure.y = random(50, height - this.treasure.size);
    }

    this.draw = function () {
        background(120, 180, 255);
        fill(0, 71, 171);
        ellipse(300,350,700,200);
        image(imgtr, this.treasure.x, this.treasure.y, this.treasure.size, this.treasure.size);
        image(imgcrab, this.crab.x, this.crab.y, this.crab.size, this.crab.size);

        // Collide
        let hit = collideRectRect(this.crab.x, this.crab.y, this.crab.size, this.crab.size,
                                  this.treasure.x, this.treasure.y, this.treasure.size, this.treasure.size);
        if (hit) {
            if (!nt5.isPlaying()) nt5.play();
            if (nt4.isPlaying()) nt4.stop();
            this.sceneManager.showNextScene();
        }

        // Help button
        if (checkButtonPress("Help", this.btHelp.x, this.btHelp.y, this.btHelp.w, this.btHelp.h,
                             color(220, 100, 100), color(100), color(250))) {
            this.sceneManager.showScene(help);
        }
    }

    this.keyPressed = function () {
        switch (key) {
            case "a": this.crab.x -= this.crab.speed; break;
            case "d": this.crab.x += this.crab.speed; break;
            case "w": this.crab.y -= this.crab.speed; break;
            case "s": this.crab.y += this.crab.speed; break;


        }
        this.crab.x = constrain(this.crab.x, 0, width - this.crab.size);
        this.crab.y = constrain(this.crab.y, 0, height - this.crab.size);
       
        if (!nt6.isPlaying()) {
        nt6.play();
            //nt3.stop();
    }}


    this.mousePressed = function () {
        if (mouseX > this.btHelp.x && mouseX < this.btHelp.x + this.btHelp.w &&
            mouseY > this.btHelp.y && mouseY < this.btHelp.y + this.btHelp.h) {
            this.sceneManager.showScene(help);
        }
    }
}
///////////////////////// HELP /////////////////
function help() {
    this.setup = function () {
        console.log("We are at setup for help");
    }

    this.enter = function () {
        console.log("We are at entering for help");
        if (typeof ghosty !== 'undefined') ghosty.visible = false;
    }

    this.draw = function () {
        background("lightblue");
        fill(200, 150, 0);
        //ellipse(width / 2, height / 2 + 150, 260, 220);
        // fill(0, 120, 200);
        // rect(-5, height - 170, width + 5, 170);

        fill("black");
        textAlign(LEFT);
        textSize(35);
        text("Welcome to the Crab Adventure!", 150, 50);
        text("How to move", 40, 100);
        text("- Press 'a' to turn left, press 'd' to turn right", 30, 150);
        text("- Press 'w' to go up, press 's' to go down", 30, 200);
        text("Let's find a treature!!!", 30, 250);

        // Back
        if (checkButtonPress("Let's go!", width / 2 - 70, height - 70, 140, 40,
                             color(220, 100, 100), color(100), color(250))) {
            this.sceneManager.showScene(Crab);
        }
    }
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


// function CryingFaceScene() {
//   this.faces = [];
//   this.tryAgainButton = null;

//   this.enter = function () {
//     // Hide input and button
//        pencil.visible = false;

//     if (typeof maths !== 'undefined') {
//   if (maths.input) maths.input.hide();
//   if (maths.button) maths.button.hide();
// }
//  stopAllSounds();  
//   if (nt2 && nt2.isPlaying()) nt2.stop();
//   if (nt3 && nt3.isPlaying()) nt3.stop();

//   if (nt4 && !nt4.isPlaying()) nt4.loop();


//     // create 10 faces randomly
//     this.faces = [];
//     for (let i = 0; i < 80; i++) {
//       this.faces.push({
//         x: random(50, width - 50),
//         y: random(50, height - 50),
//         vx: random([-3, 3]),
//         vy: random([-2, 2]),
//         size: random(60, 120)
//       });
//     }

//     // Try Again button
//     this.tryAgainButton = createButton('Try Again');
//     this.tryAgainButton.position(width / 2 + 30, height - 100);
//     this.tryAgainButton.size(120, 40);
//     this.tryAgainButton.mousePressed(() => {
//       this.tryAgainButton.remove();
//       this.sceneManager.showScene(Maths);
//     })
//   }

//   this.exit = function () {
//      this.input.hide();
//     if (this.tryAgainButton) {
//       this.tryAgainButton.remove();
//       this.tryAgainButton = null;
//     stopAllSounds();
//  if(nt1) nt1.play();
//     }
//   }

//   this.draw = function () {
//     background(255);

//     for (let face of this.faces) {
//       face.x += face.vx;
//       face.y += face.vy;

//       if (face.x < 0 || face.x + face.size > width) face.vx *= -1;
//       if (face.y < 0 || face.y + face.size > height) face.vy *= -1;

//       if (img2) {
//         image(img2, face.x, face.y, face.size, face.size);
//       } else {
//         fill(200, 0, 0);
//         ellipse(face.x + face.size / 2, face.y + face.size / 2, face.size);
//       }
//     }

//     // Try again
//     textAlign(CENTER, CENTER);
//     textSize(40);
//     fill(0);
//     text("One more time...", width / 2, 50);
//   }
// }