var centerX = 0;
var centerY = 0;
var scaling = .15;

function setup() {
  createCanvas(900, 900);
  centerX = width / 2;
  centerY = height / 2;

  background(color("#e6ff19"));

  for (var i = 0; i < 100; i++) {
    multiDrawing(random(width / 4), random(height / 4), random(0.0, 2.0));
  }
}

function draw(){push();
  fill(255)
  strokeWeight(1);
  translate(mouseX - (centerX * scaling), mouseY - (centerY * scaling));
  scale(scaling);
  //body
  fill(121, 180, 199);
  rect(100, 170, 100, 170);

  //left arm
  rect(67, 170, 33, 185);

  //right arm
  rect(200, 170, 33, 185);

  //left leg
  rect(100, 340, 50, 140);

  //right leg
  rect(150, 340, 50, 140);

  //head
  rect(105, 100, 90, 70);

  //antenna
  line(149, 100, 149, 60);
  fill("#a382f1")
  
  //antenna ball
  ellipse(149, 60, 20, 20);

  //chest
  rect(120, 190, 60, 130);

  //left eye
  rect(125, 120, 10, 10);

  //right eye
  rect(165, 120, 10, 10);

  //mouth
  fill(255, 255, 255);
  rect(120, 145, 60, 15);

  //teeth horizontal
  line(120, 152, 180, 152);

  //teeth vert
  line(130, 145, 130, 160);
  line(140, 145, 140, 160);
  line(150, 145, 150, 160);
  line(160, 145, 160, 160);
  line(170, 145, 170, 160);
}

function multiDrawing(posX, posY, scales) {
  push();
  fill(255)
  strokeWeight(1);
  translate(posX, posY);
  scale(scales);
  strokeWeight(2);

  //body
  fill(121, 180, 199);
  rect(100, 170, 100, 170);

  //left arm
  rect(67, 170, 33, 185);

  //right arm
  rect(200, 170, 33, 185);

  //left leg
  rect(100, 340, 50, 140);

  //right leg
  rect(150, 340, 50, 140);

  //head
  rect(105, 100, 90, 70);

  //antenna
  line(149, 100, 149, 60);
  fill("#da0099")
  //antenna ball
  ellipse(149, 60, 20, 20);

  //chest
  rect(120, 190, 60, 130);

  //left eye
  rect(125, 120, 10, 10);

  //right eye
  rect(165, 120, 10, 10);

  //mouth
  fill(255, 255, 255);
  rect(120, 145, 60, 15);

  //teeth horizontal
  line(120, 152, 180, 152);

  //teeth vert
  line(130, 145, 130, 160);
  line(140, 145, 140, 160);
  line(150, 145, 150, 160);
  line(160, 145, 160, 160);
  line(170, 145, 170, 160);

}