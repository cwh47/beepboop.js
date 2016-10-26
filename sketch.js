var boundary1 = 0;
var boundary2 = 0;
var boundary3 = 0;
var boundary4 = 0;
var boundary5 = 0;

var leftBoundary = 0;
var rightBoundary = 0;

var buttonSize = 100;

var currentArea = "";

var brushColor = "#f7f7f7";
var brushSize = 25;

var currentRC = 0;
var colorArray = ["#92baf4", "#ee4bb5", "#ffabe7", "#01ec8f", "#feda43"];
var counter = 0;

function setup() {
  createCanvas(500, 600);
  boundary0 = 55;
  boundary1 = 150;
  boundary2 = 250;
  boundary3 = 350;
  boundary4 = 450;
  boundary5 = height;
  leftBoundary = 400;
  rightBoundary = width;
  background(252, 184, 234);

}

function draw() {

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
  fill(brushColor);
  if (mouseIsPressed === true) {
    fill(brushColor);
  }
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

  //paint tray
  fill("#4cdcce");
  rect(leftBoundary, boundary0, buttonSize, buttonSize);
  fill("#cffb4c");
  rect(leftBoundary, boundary1, buttonSize, buttonSize);
  fill("#fd209a");
  rect(leftBoundary, boundary2, buttonSize, buttonSize);
  fill("#fa8072");
  rect(leftBoundary, boundary3, buttonSize, buttonSize);
  fill("#3399ff");
  rect(leftBoundary, boundary4, buttonSize, buttonSize);

  //brush characteristics
  fill(brushColor);
  rect(mouseX, mouseY, brushSize, brushSize);
  console.log(currentArea);
  if (mouseX >= leftBoundary && mouseX < rightBoundary) {
    if (mouseY >= boundary0 && mouseY < boundary1) {
      currentArea = "area0";
    } else if (mouseY > boundary1 && mouseY < boundary2) {
      //console.log("area1");
      currentArea = "area1";
    } else if (mouseY > boundary2 && mouseY < boundary3) {
      //console.log("area2");
      currentArea = "area2";
    } else if (mouseY > boundary3 && mouseY < boundary4) {
      //console.log("area3");
      currentArea = "area3";
    } else if (mouseY > boundary4 && mouseY < boundary5) {
      //console.log("area4");
      currentArea = "area4";
    } else {
      currentArea = "";
    }
  }
}

function checkSize(brushSize) {
  if (brushSize > 45) {
    brushSize = 25;
  }
}



function mousePressed() {

  switch (currentArea) {
    case 'area0':
      brushColor = "#4cdcce";
      break;

    case 'area1':
      brushColor = "#cffb4c";
      break;

    case 'area2':
      brushColor = (random(colorArray));
      break;

    case 'area3':
      brushSize++;
      checkSize(brushSize);
      brushColor = "#fa8072";
      break;

    case 'area4':
      brushSize--;
      checkSize(brushSize);
      brushColor = "#3399ff";
      break;

    default:
      brushColor = "#ffffff";
  }

  //counter
  counter++;
  if (counter >= colorArray) {
    counter = 0;
  }
}