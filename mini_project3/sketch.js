let gridarr1 = [
// 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,1,1,0,0,0,0,2,2,0,0,0,0],
  [0,0,0,0,0,2,2,0,1,1,0,0,0,2,2,2,2,0,0,0],
  [0,0,0,0,2,2,2,2,1,1,0,0,2,2,2,1,1,1,0,0],
  [0,0,0,1,1,1,1,2,2,1,1,2,2,2,1,1,1,0,0,0],
  [0,0,1,1,1,1,1,1,2,1,1,2,2,1,1,1,0,0,0,0],
  [0,0,1,0,0,1,1,1,2,2,1,2,1,0,0,0,0,0,0,0],
  [0,0,0,0,0,3,4,3,4,3,4,3,4,0,0,0,0,0,0,0],
  [0,0,0,0,0,4,3,4,3,4,3,4,3,4,0,0,0,0,0,0],
  [0,0,0,0,0,3,4,3,4,3,4,3,4,3,0,0,0,0,0,0],
  [0,0,0,0,0,4,3,4,3,4,3,4,3,4,0,0,0,0,0,0],
  [0,0,0,0,0,3,4,3,4,3,4,3,4,3,0,0,0,0,0,0],
  [0,0,0,0,0,4,3,4,3,4,3,4,3,4,0,0,0,0,0,0],
  [0,0,0,0,0,3,4,3,4,3,4,3,4,3,0,0,0,0,0,0],
  [0,0,0,0,0,4,3,4,3,4,3,4,3,4,0,0,0,0,0,0],
  [0,0,0,0,0,0,4,3,4,3,4,3,4,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,4,3,4,3,4,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

//1:star, 2:moon, 3: cloud, 4: sun

let textarr =[
  ["field","field","field","field","field","field","field","field","field","field","field","field","field","field","field","field","field","field","field","field"],
  ["field","field","field","field","field","field","field","field","field","field","field","field","field","field","field","field","field","field","field","field"],
  ["field","field","field","field","field","field","field","field","star","star","field","field","field","field","field","field","field","field","field","field"],
  ["field","field","field","field","field","field","field","field","star","star","field","field","field","field","moon","moon","field","field","field","field"],
  ["field","field","field","field","field","moon","moon","field","star","star","field","field","field","moon","moon","moon","moon","field","field","field"],
  ["field","field","field","field","moon","moon","moon","moon","star","star","field","field","moon","moon","moon","star","star","star","field","field"],
  ["field","field","field","star","star","star","star","moon","moon","star","star","moon","moon","moon","star","star","star","field","field","field"],
  ["field","field","star","star","star","star","star","star","moon","star","star","moon","moon","star","star","star","field","field","field","field"],
  ["field","field","star","field","field","star","star","star","moon","moon","star","moon","star","field","field","field","field","field","field","field"],
  ["field","field","field","field","cloud","sun","cloud","sun","cloud","sun","cloud","sun","field","field","field","field","field","field","field","field"],
  ["field","field","field","field","sun","cloud","sun","cloud","sun","cloud","sun","cloud","sun","field","field","field","field","field","field","field"],
  ["field","field","field","field","cloud","sun","cloud","sun","cloud","sun","cloud","sun","cloud","field","field","field","field","field","field","field"],
  ["field","field","field","field","sun","cloud","sun","cloud","sun","cloud","sun","cloud","sun","field","field","field","field","field","field","field"],
  ["field","field","field","field","cloud","sun","cloud","sun","cloud","sun","cloud","sun","cloud","field","field","field","field","field","field","field"],
  ["field","field","field","field","sun","cloud","sun","cloud","sun","cloud","sun","cloud","sun","field","field","field","field","field","field","field"],
  ["field","field","field","field","cloud","sun","cloud","sun","cloud","sun","cloud","sun","cloud","field","field","field","field","field","field","field"],
  ["field","field","field","field","sun","cloud","sun","cloud","sun","cloud","sun","cloud","sun","field","field","field","field","field","field","field"],
  ["field","field","field","field","field","field","sun","cloud","sun","cloud","sun","field","field","field","field","field","field","field","field","field"],
  ["field","field","field","field","field","field","field","sun","cloud","sun","cloud","sun","field","field","field","field","field","field","field","field"],
  ["field","field","field","field","field","field","field","field","field","field","field","field","field","field","field","field","field","field","field","field"]

];


let gridarr2 = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,2,2,2,0,2,2,2,0,0,0,0,0,0,0,0],
  [0,0,0,2,2,2,3,3,1,3,3,2,2,2,2,2,0,0,0,0],
  [0,0,0,2,2,2,3,3,3,1,3,3,3,3,3,2,0,0,0,0],
  [0,0,2,3,3,2,3,3,3,1,1,2,3,3,2,0,0,0,0,0],
  [0,2,3,3,2,3,3,3,2,3,1,2,3,2,2,0,0,0,0,0],
  [0,0,2,3,2,2,4,2,3,3,2,4,2,3,2,2,2,2,0,0],
  [0,0,0,2,2,4,5,4,4,2,4,5,5,2,3,2,2,2,0,0],
  [0,0,0,2,4,4,5,6,4,5,4,5,6,4,2,3,3,2,0,0],
  [0,0,0,0,4,5,5,4,5,6,4,5,4,4,2,3,3,2,0,0],
  [0,0,0,0,4,5,6,4,5,4,4,4,4,4,2,3,3,2,0,0],
  [0,0,0,0,4,5,5,4,4,5,4,6,5,6,4,2,2,2,0,0],
  [0,0,0,0,4,4,5,6,4,5,5,5,5,5,4,0,0,0,0,0],
  [0,0,0,0,4,4,5,5,4,4,5,5,4,4,4,0,0,0,0,0],
  [0,0,0,0,4,5,6,4,5,4,5,4,5,5,4,0,0,0,0,0],
  [0,0,0,0,4,5,5,4,4,5,5,6,5,4,4,0,0,0,0,0],
  [0,0,0,0,0,4,4,5,4,5,5,5,4,4,0,0,0,0,0,0],
  [0,0,0,0,0,0,4,5,5,4,5,4,4,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,4,4,4,4,4,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]; 

let textarr2 =[
  ["board","board","board","board","board","board","board","board","board","board","board","board","board","board","board","board","board","board","board","board"],
  ["board","board","board","board","eraser","eraser","eraser","board","eraser","eraser","eraser","board","board","board","board","board","board","board","board","board"],
  ["board","board","board","eraser","eraser","eraser","ruler","ruler","pen","ruler","ruler","eraser","eraser","eraser","eraser","eraser","board","board","board","board"],
  ["board","board","board","eraser","eraser","eraser","ruler","ruler","ruler","pen","ruler","ruler","ruler","ruler","ruler","eraser","board","board","board","board"],
  ["board","board","eraser","ruler","ruler","eraser","ruler","ruler","ruler","pen","pen","eraser","ruler","ruler","eraser","ruler","eraser","board","board","board"],
  ["board","eraser","ruler","ruler","eraser","ruler","ruler","ruler","eraser","ruler","pen","eraser","ruler","eraser","eraser","board","board","board","board","board"],
  ["board","board","eraser","ruler","eraser","eraser","marker","eraser","ruler","ruler","eraser","marker","eraser","ruler","eraser","eraser","eraser","eraser","board","board"],
  ["board","board","board","eraser","eraser","marker","light","marker","marker","eraser","marker","light","light","eraser","ruler","eraser","eraser","eraser","board","board"],
  ["board","board","board","eraser","marker","maker","light","bag","marker","light","marker","light","bag","marker","eraser","ruler","ruler","eraser","board","board"],
  ["board","board","board","board","marker","light","light","marker","light","bag","marker","light","marker","marker","eraser","ruler","ruler","eraser","board","board"],
  ["board","board","board","board","marker","light","bag","marker","light","marker","maker","marker","marker","marker","eraser","ruler","ruler","eraser","board","board"],
  ["board","board","board","board","marker","light","light","marker","marker","light","marker","bag","light","bag","marker","eraser","eraser","eraser","board","board"],
  ["board","board","board","board","marker","marker","light","bag","marker","light","light","light","light","light","marker","board","board","board","board","board"],
  ["board","board","board","board","marker","marker","light","light","marker","maker","light","light","marker","marker","marker","board","board","board","board","board"],
  ["board","board","board","board","marker","light","bag","marker","light","marker","light","marker","light","light","marker","board","board","board","board","board"],
  ["board","board","board","board","marker","light","light","marker","marker","light","light","bag","light","marker","marker","board","board","board","board","board"],
  ["board","board","board","board","board","marker","marker","light","marker","light","light","light","marker","maker","board","board","board","board","board","board"],
  ["board","board","board","board","board","board","marker","light","light","marker","light","marker","marker","board","board","board","board","board","board","board"],
  ["board","board","board","board","board","board","board","marker","marker","marker","marker","marker","board","board","board","board","board","board","board","board"],
  ["board","board","board","board","board","board","board","board","board","board","board","board","board","board","board","board","board","board","board","board"]

];



let font1;
let images =[];
function preload()  {

  font1 = loadFont('assets/nausea.otf');
  images[0] = loadImage('assets/0.png');
  images[1] = loadImage('assets/1.png');
  images[2] = loadImage('assets/2.png');
  images[3] = loadImage('assets/3.png');
  images[4] = loadImage('assets/4.png');

  
  images[10] = loadImage('assets1/0b.png');
  images[11] = loadImage('assets1/1b.png');
  images[12] = loadImage('assets1/2b.png');
  images[13] = loadImage('assets1/3b.png');
  images[14] = loadImage('assets1/4b.png');
  images[15] = loadImage('assets1/5b.png');
  images[16] = loadImage('assets1/6b.png');
}

function setup() {
  createCanvas(1200, 800);
  background(120);
  textFont(font1);
  mapToColorText(textarr, 300, 130, 40, 5,100);
  mapToMonoPixels(gridarr2, 200, -100, 10, 1.5);
  mapToColorPixels(gridarr1, 60, 30, 20,0.7);
  mapToColorText(textarr, 400, 50, -10, 1.2);
  mapToBitMaps(gridarr1,images, 250, 300, 50, 1.7);
  mapToCircles(gridarr2, 200, 700, -45, 1.3);
  mapToBitMaps(textarr2,images, 1200, 250, 90, 2);
  mapToColorText(textarr2, 30, 500, 0, 5,80);

  console.log(gridarr1[0][20]);
}

function mapToMonoPixels(arr,lx,ly,rot,sc,fade) {
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            fill(arr[i][j] * 128,fade);
            rect(j * 12, i * 12, 10, 10);
        }
    }
   pop();
  }

function mapToColorPixels(arr,lx,ly,rot,sc) {
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc);
  for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
           let value = arr[i][j];
            
           if ( value == 0 ) {
                fill(0, 150, 255);
            } else if ( value == 1 ){
                fill(50,205,50);
            } else if ( value == 2 ) {
                fill(34,139,34);
            } else if ( value == 3 ) {
                fill(255,195,0);

            } else {
               fill(255,234,0); 
      
            }
          rect(j * 25, i * 25, 20, 20);
      }
  }


 pop();

}
//1:star, 2:moon, 3: cloud, 4: sun

function mapToColorText(arr,lx,ly,rot,sc,fade) {
  textSize(15);
  textAlign(CENTER);
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc);
  for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
           let value = arr[i][j];
            if ( value == "field" ) {
                fill(218, 247, 166,fade);
            } else if ( value == "star" ){
                fill(255, 195,0,fade);
            } else if ( value == "moon" ){
                fill(255, 87, 51,fade); 
            } else if ( value == "cloud" || value == "eraser"  ){
                fill(137, 207, 240, fade);

            } else {
                fill(207, 159, 255,fade);
            }
             text(value, j * 40, i * 15,100);
      }
  }
  pop();

}

function mapToBitMaps(arr,imgarr,lx,ly,rot,sc) {
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc);
  let nuimg;
  for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
           let value = arr[i][j];
            if ( value == 0 ) {
              nuimg = imgarr[0];
            } else if ( value == 1 ){
              nuimg = imgarr[1];
            } else if ( value == 2 ) {
              nuimg = imgarr[2];
            } else if ( value == 3 ) {
              nuimg = imgarr[3];
            } else if ( value == "board" ) {
              nuimg = imgarr[10];
            } else if ( value == "pen" ) {
              nuimg = imgarr[11];
            } else if ( value == "ruler" ) {
              nuimg = imgarr[13];  
            } else if ( value == "eraser" ) {
              nuimg = imgarr[12];
            } else if ( value == "marker" ) {
              nuimg = imgarr[14];
            } else if ( value == "light" ) {
              nuimg = imgarr[15];  
            } else if ( value == "bag" ) {
              nuimg = imgarr[16];
            } else {
              nuimg = imgarr[4];
            
            }
          image(nuimg, j * 12, i * 12, 14, 14);
      }
  }
  pop();

}

function mapToCircles(arr, lx, ly, rot, sc) {
  push();
  translate(lx, ly);
  rotate(radians(rot));
  scale(sc);
  noStroke();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      let value = arr[i][j];
      if (value == 1) fill(255, 255, 0);
      else if (value == 2) fill(100, 255, 100);
      else if (value == 3) fill(150, 150, 255);
      else if (value == 4) fill(255, 100, 100);
      else fill(50);
      ellipse(j * 20, i * 20, 15);
    }
  }
  pop();
}
