var centerX=0;
var centerY=0;

function setup(){
  createCanvas(500,500);
  centerX=width/2;
  centerY=height/2;
}

function draw(){
  ellipse(centerX,centerY,10,10);
  
  if(mouseY<centerY){
    console.log("above centerY");
  }
}