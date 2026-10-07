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
let textarr1 =[
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
        [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
        [10,10,10,10,10,12,12,12,10,12,12,12,10,10,10,10,10,10,10,10],
        [10,10,10,12,12,12,13,13,11,13,13,12,12,12,12,12,10,10,10,10],
        [10,10,10,12,12,12,13,13,13,11,13,13,13,13,13,12,10,10,10,10],
        [10,10,12,13,13,12,13,13,13,11,11,12,13,13,12,10,10,10,10,10],
        [10,12,13,13,12,13,13,13,12,13,11,12,13,12,12,10,10,10,10,10],
        [10,10,12,13,12,12,14,12,13,13,12,14,12,13,12,12,12,12,10,10],
        [10,10,10,12,12,14,15,14,14,12,14,15,15,12,13,12,12,12,10,10],
        [10,10,10,12,14,14,15,16,14,15,14,15,16,14,12,13,13,12,10,10],
        [10,10,10,10,14,15,15,14,15,16,14,15,14,14,12,13,13,12,10,10],
        [10,10,10,10,14,15,16,14,15,14,14,14,14,14,12,13,13,12,10,10],
        [10,10,10,10,14,15,15,14,14,15,14,16,15,16,14,12,12,12,10,10],
        [10,10,10,10,14,14,15,16,14,15,15,15,15,15,14,10,10,10,10,10],
        [10,10,10,10,14,14,15,15,14,14,15,15,14,14,14,10,10,10,10,10],
        [10,10,10,10,14,15,16,14,15,14,15,14,15,15,14,10,10,10,10,10],
        [10,10,10,10,14,15,15,14,14,15,15,16,15,14,14,10,10,10,10,10],
        [10,10,10,10,10,14,14,15,14,15,15,15,14,14,10,10,10,10,10,10],
        [10,10,10,10,10,10,14,15,15,14,15,14,14,10,10,10,10,10,10,10],
        [10,10,10,10,10,10,10,14,14,14,14,14,10,10,10,10,10,10,10,10],
        [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
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

 //Aron
var gridarr = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 3, 3, 1, 1, 4, 1, 3, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 2, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 2, 3, 3, 2, 3, 2, 2, 2, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

var gridarrA = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 3, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 3, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 3, 3, 0, 0, 0, 0],
    [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 0, 0, 0, 0],
    [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];


//Ryan
let gridarrR = [
      [10,10,10,10,10,10,10,10,10,10,11,11,10,10,10,10,10,10,10,10],
      [10,10,10,10,10,10,10,10,11,11,11,11,11,11,10,10,10,10,10,10],
      [10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,10,10,10,10,10],
      [10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,10,10,10,10],
      [10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,10,10,10],
      [10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,10,10],
      [10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,10,10],
      [10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,10],
      [10,11,11,11,11,11,11,11,13,13,13,13,11,11,11,11,11,11,11,10],
      [11,11,11,11,11,11,11,13,13,13,13,13,13,11,11,11,11,11,11,11],
      [11,11,11,11,11,11,13,12,12,12,12,12,13,13,13,11,11,11,11,11],
      [11,11,11,11,11,11,11,13,12,12,12,12,12,13,13,11,11,11,11,11],
      [11,11,11,11,11,11,11,11,13,13,13,13,13,11,11,11,11,11,11,11],
      [10,11,11,11,11,11,11,11,11,13,13,13,11,11,11,11,11,11,11,10],
      [10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,10],
      [10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,10,10],
      [10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,10,10],
      [10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,10,10,10],
      [10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,10,10,10,10],
      [10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,10,10,10,10,10]

];

     let font1;
     let images =[];
     let cellSize = 15;
     let currentPage = 0;
     
     function preload()  {
            font1 = loadFont('assets/nausea.otf');
            //font3 = loadFont('assets/fruit.ttf');
            images[0] = loadImage('assets/0.png');
            images[1] = loadImage('assets/1.png');
            images[2] = loadImage('assets/2.png');
            images[3] = loadImage('assets/3.png');
            images[4] = loadImage('assets/4.png');

            //font2 = loadFont('assets1/sigokae.ttf');
            images[10] = loadImage('assets1/0b.png');
            images[11] = loadImage('assets1/1b.png');
            images[12] = loadImage('assets1/2b.png');
            images[13] = loadImage('assets1/3b.png');
            images[14] = loadImage('assets1/4b.png');
            images[15] = loadImage('assets1/5b.png');
            images[16] = loadImage('assets1/6b.png');
     }

     function setup() {
        createCanvas(1200, 900);
        background(0, 60, 150);
        fill(100);
        textAlign(LEFT);
        textFont(font1);
         
   }

   function draw() {
    background(40,90);


    if (currentPage == 0) {   // intro and title
      
        push();
        translate(80,100);
        fill(200);
        textSize(40);
        text ("My groups memebers were Aron F, and Ryan N",0 ,0, 1000);
        translate(0,110);
        text ("I have 8 mapped images, copied at least twice \nfor a total of more than 16.",0 ,0,1000 );
        translate(250,120);
        mapToColorPixels(gridarr1, -70, 0, 0, 0.6);
        mapToColorPixels(gridarr2, 270, 0, 0, 0.6);


        pop();



    } else if (currentPage == 1) {
      //2darr, x,y,rot,scale, alpha
      mapToMonoPixels(gridarr1, 430, 320, 10, 4, 50);
      mapToMonoPixels(gridarr1, 430, 320, 10, 4, 50);


      mapToColorText(textarr1, 150, 250, -15, 1, 150);
      mapToColorText(textarr2, 700, 400, 35, 0.55, 220);
      mapToMonoPixels(gridarr1, 920, 350, -10, 1.1, 150);
      mapToMonoPixels(gridarr2, -100, 280, -45, 1.1,200);

      mapToColorPixels(gridarr2, 400, 700, -25, .65, 255);
      mapToColorPixels(gridarr1, 100, 440, 20, .811, 100);

      push();
      translate(100,40);
      fill(200);
      textSize(30);
      let t = "This and example of my 2 arrays , mapped a total of six different ways."
      text(t,0,0,400);  // the 4th argument is the textWidth per line.
      pop();
 

    } else if (currentPage == 2) {
        
    mapToColorShapes(gridarr2, -30, 0, 0, 9, 8);
    // mapToMonoPixelsOffset(gridarr1, 120, 480, 0, 1.5, 10);
    // mapToColorPixels(gridarr1, 520, 260, 45, 2.15, 255);
     //mapToColorShapes(gridarr2, 120, 480, 0, 0.65, 255);
     mapToColorText(textarr2, 470, -120, 10, 1.5, 70); 
     mapToColorText(textarr2, 480, -120, 10, 1.5, 170); 

     mapToColorText(textarr1, 20, 570, 10, 1, 50); 
     mapToColorText(textarr1, 10, 600, 10, 1, 255); 
     mapToColorShapes(gridarr2, 800, 350, 25, 1.5, 220);

     mapToColorPixelsOffset(gridarr1, 330, 100, 65, 1.5, 220);
     
     push();
     translate(40,50);
     fill(200);
     textSize(30);
     let t = "This is more text to describe this page.."
     text(t,0,0,400);
     pop();


    } else if (currentPage == 3) {
        mapToTintedBitMaps(gridarr,images, -400, 30, -20, 10.85,7);
        mapToBitMaps(gridarr,images, 150, 250, 0, 1.55);
        mapToBitMaps(gridarrR,images, 600, 250, 0, 1.55,190);
        push();
        translate(50,50);
        fill(200);
        textSize(25);
         let t = "This page shows my groupmates' arrays, Aron and Ryan. I chose an apple array from Aron and a blueberry one from Ryan. I really like how they use pixel art to describe the fruits and make realistic 2D fruit images. "    ;
        t += "\n";   // this is a command you can put in text to create a line break.
        t += "Using my bitmaps on two themes oceans and weather combined with their arrays created a sense of harmony.";
        text(t,0,0,800);
        pop();

    } else {  // optional for  4th page

      
    }

}

function keyPressed() { 
    if ( key == '1' ) {     //intro
        console.log("Page 1");
        currentPage = 1;
  
       } else if ( key == '2' ) { 
          console.log("Page 2");
          currentPage = 2;
          
       } else if ( key == '3' ) { 
          console.log("Page 3");
          currentPage = 3;   
       } else {
          currentPage = 0;
  
       }
    }
 
function mapToMonoPixels(arr,lx,ly,rot,sc,fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    
    let maxVal = 0;
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr[1].length; j++) {
            if (arr[i][j] > maxVal) {
                maxVal = arr[i][j];
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            let normalized = arr[i][j] / maxVal;  
            fill(normalized * 255-50,fade);          
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
               } else if ( value == 10 ){  
                   fill(96, 130, 182);
              } else if ( value == 11 ){
                  fill(60, 40, 30);
              } else if ( value == 12 ) {
                  fill(0,128,0);
                } else if ( value == 13 ) {
                  fill(50,205,50 );
                } else if ( value == 14 ) {
                 fill(128,0,128);  
               } else if ( value == 15 ) {
                 fill(159,43,104);
               } else if ( value == 16 ) {  
                fill(218,112,214);
            } else {
             fill(255,234,0); 
    
            }
         rect(j * 25, i * 25, 20, 20);
        }
     }        
       pop();
 }

 function mapToMonoPixelsOffset(arr,lx,ly,rot,sc) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {

        for (var j = 0; j < arr[0].length; j++) {
            let cg = arr[i][j];
            
            fill(cg * 128); 
        if ( i % 2  == 0 ) {   
            push();
            translate((j*12)+3,(i*12));
            rotate(radians(45));  //make the rectangle rotate
          
            rect(0,0, 10 , 10);
            pop();

        } else {

            push();
            translate((j*12)-3,(i*12));
            rotate(radians(45));  
            rect(0,0, 10 , 10);
            pop();

         }   
        }  
    }

   pop();

}
function mapToColorPixelsOffset(arr,lx,ly,rot,sc) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[0].length; j++) {
        let value = arr[i][j];
        let angle = map(value, 0, 4, 0, TWO_PI);
        push();
        if ( value == 0 ) {
            fill(140, 50, 134);
        } else if ( value == 1 ){
            fill(150,205,50);
        } else if ( value == 2 ) {
            fill(34,139,34);
        } else if ( value == 3 ) {
            fill(12,105,255);
          } else if ( value == 10 ){  
              fill(96, 130, 182);
         } else if ( value == 11 ){
             fill(60, 40, 30);
         } else if ( value == 12 ) {
             fill(0,128,0);
           } else if ( value == 13 ) {
             fill(50,205,50 );
           } else if ( value == 14 ) {
            fill(128,0,128);  
          } else if ( value == 15 ) {
            fill(159,43,104);
          } else if ( value == 16 ) {  
           fill(218,112,214);
       } else {
        fill(255,234,100); 
       }
        translate(i * cellSize, j * cellSize);
        rotate(angle);
        triangle(-5, 5, 5, 5, 0, -10);
        pop();
      }
    }
    pop();
}

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
        } else if ( value == "cloud" ){
           fill(137, 207, 240,fade);
        } else if ( value == "field" ){
              fill(207, 159, 255,fade);
        } else if ( value == "board" ) {
         fill(241,67,54,fade);
        } else if ( value == "pen" ){
            fill(255, 195,0,fade);
          } else if ( value == "eraser" ){
            fill(243,156,18,fade); 
        } else if ( value == "ruler" ){
            fill(247,220,111,fade);
        } else if ( value == "marker" ){
            fill(52, 152, 219,fade);
        } else if ( value == "light" ){
            fill(69,179,157,fade);
        } else {
            fill(125,60,152,fade);
     }
        text(value, j * 50, i * 15,100);
             //text(value, j * 40, i * 15,100);

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
                } else if ( value == 4 ) {
                    nuimg = imgarr[4];
                  } else if ( value == 10 ){  
                    nuimg = imgarr[10];
                  } else if ( value == 11 ){
                    nuimg = imgarr[11];
                  } else if ( value == 12 ) {
                    nuimg = imgarr[12];
                  } else if ( value == 13 ) {
                    nuimg = imgarr[13];
                  } else if ( value == 14 ) {
                    nuimg = imgarr[14];
                  } else if ( value == 15 ) {
                    nuimg = imgarr[15];
                  } else {
                    nuimg = imgarr[16];
                  }
                image(nuimg, j * 12, i * 12, 14, 14);
            }
        }
        pop();
      
      }
      function mapToTintedBitMaps(arr,imgarr,lx,ly,rot,sc,fade) {
        push();
        translate(lx,ly);
        rotate(radians(rot));
        scale(sc);
        let nuimg;
        let c;
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[0].length; j++) {
                    let value = arr[i][j];
                    if ( value == 0 || value == 10) {
                    nuimg = imgarr[3];
                    c = color(255,100,0,fade);
                    } else if ( value == 1 || value == 11){
                    c = color(255,0,255,fade);
                    nuimg = imgarr[2];
                    } else if ( value == 2 || value == 12) {
                    nuimg = imgarr[1];
                    c = color(20,200,120,fade);
                } else if ( value == 3 || value == 13) {
                    nuimg = imgarr[4];
                    c = color(20,200,120,fade);
                } else if ( value == 2 || value == 12) {
                    nuimg = imgarr[1];
                    c = color(20,150,120,fade);
                } else {
                    nuimg = imgarr[0];
                    c = color(120,0,240,fade);
                    }
                
                c = color(255,fade);
                tint(c);
                image(nuimg, j * 9, i * 9, 15, 15);
            }
        }
        pop();
    
        }


      function mapToColorShapes(arr,lx,ly,rot,sc, fade) {
        push();
        translate(lx,ly);
        rotate(radians(rot));
        scale(sc);
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[0].length; j++) {
                 let value = arr[i][j];
                  if ( value == 0  || value == 10) {
                      fill(200,70,0, fade);
                      ellipse(j * 12, i * 12, 10, 10);
                  } else if ( value == 1 || value == 11 ){
                      fill(50,0,30, fade);
                       rect(j * 12-6, i * 12-6, 10, 10,2);
                    } else if ( value == 2 || value == 12 ){
                        fill(50,241,230, fade);
                         rect(j * 12-6, i * 12-6, 10, 10,2);
                        } else if ( value == 3 || value == 13 ){
                            fill(50,150,255, fade);
                             rect(j * 12-6, i * 12-6, 10, 10,2);
                            } else if ( value == 4 || value == 14 ){
                                fill(50,190,134, fade);
                                 rect(j * 12-6, i * 12-6, 10, 10,2);
                                } else if ( value == 15 ){
                                    fill(50,100,30, fade);
                                     rect(j * 12-6, i * 12-6, 10, 10,2);
                    } else {
                      fill(123,150,123, fade);
                       ellipse(j * 12, i * 12, 15, 10,5);
                  }
            }
        }
        pop();
    
}
