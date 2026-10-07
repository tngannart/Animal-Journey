class ntBear {
    k;
    lx;
    ly;
    rot;
    sc;
    shownose;
    sx;
    sy;
    sizeFactor;

    constructor(lk, llx, lly, lrot, lsc, lsn, lsx, lsy) {
        this.k = color(random(255), random(0, 160, 160), random(255));
        this.lx = llx;
        this.ly = lly;
        this.rot = lrot;
        this.sc = lsc;
        this.shownose = lsn;
        this.sx = random(-3, 2);
        this.sy = random(-2, 3);
        this.sizeFactor = random(0.5, 2); 
    }

    displayBear(size = 100) { 
        push();
        translate(this.lx, this.ly);
        rotate(this.rot);
        scale(this.sc);
        this.tail(size * this.sizeFactor/2);
        this.ear(size * this.sizeFactor/2, this.k);
        this.head(size * this.sizeFactor/2, this.k);
        this.eye(size * this.sizeFactor/2, this.k);

        this.cutiecheek(size * this.sizeFactor/2);
        this.leg(size * this.sizeFactor/2, this.k);

        if (this.shownose == 1) {
            this.nose(size * this.sizeFactor/2); 
        }
        pop();
    }

    updateBear() {
        this.lx += this.sx;
        this.ly += this.sy;

        // if (this.lx < 1) this.lx = width;
        // if (this.ly < 2) this.ly = height;
        // if (this.lx > width) this.lx = 1;
        // if (this.ly > height) this.ly = 2;
        if (this.lx < 0 || this.lx > width) {
            this.sx *= -1; 
        }
        if (this.ly < 0 || this.ly > height) {
            this.sy *= -1; 
        }
        
    }

    tail(size) {
        push();
        fill(205, 127, 50);
        for (let i = 0; i < 360; i += 360) {
            let x = cos(radians(i)) * size;
            let y = sin(radians(i)) * size;
            ellipse(x, y, size * 0.8, size * 0.8);
        }
        pop();
    }

    ear(size,k) {
        push();
        fill(k);
        stroke(1);
        ellipse(size * 0.5, -size * 0.7, size * 0.5, size * 0.5);
        ellipse(-size * 0.5, -size * 0.7, size * 0.5, size * 0.5);
        pop();
    }

    head(size,k) {
        push();
        fill(k);
        stroke(1);
        ellipse(0, 0, size * 1.6, size * 1.6);
        pop();
    }

    eye(size, k) {
        push();
        fill(255);
        stroke(1);
        ellipse(-size * 0.3, -size * 0.2, size * 0.25, size * 0.25);
        ellipse(size * 0.3, -size * 0.2, size * 0.25, size * 0.25);
        fill(k);
        ellipse(-size * 0.25, -size * 0.2, size * 0.1, size * 0.1);
        ellipse(size * 0.25, -size * 0.2, size * 0.1, size * 0.1);
        pop();
    }

    nose(size) {
        push();
        fill(205, 127, 50);
        triangle(
            -size * 0.1, size * 0.05, 
            size * 0.1, size * 0.05, 
            0, size * 0.25
        );
        pop();
    }

    cutiecheek(size) {
        push();
        fill(253, 49, 5);
        ellipse(size * 0.45, size * 0.2, size * 0.4, size * 0.2);
        ellipse(-size * 0.45, size * 0.2, size * 0.4, size * 0.2);
        pop();
    }

    leg(size,k) {
        push();
        fill(k);
        stroke(1);
        rect(size * 0.6, size * 0.35, size * 0.8, size * 0.5);
        rect(-size * 1.3, size * 0.35, size * 0.8, size * 0.5);
        pop();
    }
}

