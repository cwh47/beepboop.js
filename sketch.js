var armH=185;
var legH=140;
var tvY=145;
var body=99+1;
var ten=10;

function setup() {
  createCanvas(300,550);
}

function draw() {
  background(252,184,234);
  strokeWeight(2);

  //body
  fill(121,180,199);
  rect(body,170,body,170);
  
  //left arm
  rect(67,170,33,armH);
  
  //right arm
  rect(200,170,33,armH);
  
  //left leg
  rect(100,340,50,legH);
  
  //right leg
  rect(150,340,50,legH);
  
  //head
  rect(105,100,90,70);
  
  //chest
  fill(227,60,57);
  rect(120,190,60,130);
  
  //antenna
  line(149,100,149,60);
  
  //antenna ball
  fill(227,60,57);
  ellipse(149,60,20,20);
  
  //left eye
  rect(125,120,ten,ten);
  
  //right eye
  rect(165,120,ten,ten);
  
  //mouth
  fill(255,255,255);
  rect(120,145,60,15);
  
  //teeth horizontal
  line(120,152,180,152);
  
 //teeth vert
  line(130,tvY,130,160);
  line(140,tvY,140,160);
  line(150,tvY,150,160);
  line(160,tvY,160,160);
  line(170,tvY,170,160);
}
