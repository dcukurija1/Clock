function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
}
function draw() {
  background(0);
  var h = hour();
  var m = minute();
  var s = second();

  var angleHour = map(h,0,12,0,360);
  var angleMinute = map(m, 0,60,0,360);
  var angleSecond = map(s, 0,60,0,360);

  translate(windowWidth/2,300);
  rotate(-90);

  stroke(42, 247, 48);
    strokeWeight(10);
    noFill();
  ellipse(0,0,450,450);

  push();
    noFill();
    strokeWeight(7);
    stroke(42, 247, 48);
    rotate(angleHour);
    line(0,0,100,0);
  pop();

  push();
    strokeWeight(5);
    noFill();
    stroke(42, 247, 48);
    rotate(angleMinute);
    line(0,0,150,0);
  pop();

  push();
    strokeWeight(3);
    noFill();
    stroke(42, 247, 48);
    rotate(angleSecond);
    line(0,0,200,0);
  pop();

  push();
    textSize(50);
    textFont('Courier New');
    fill(42, 247, 48);
    strokeWeight(3);
    stroke(42, 247, 48);
    rotate(90);
    textAlign(CENTER);
    text(nf(h,2,0) + ':' + nf(m,2,0) + ':' + nf(s,2,0),0,325);
  pop();
}
