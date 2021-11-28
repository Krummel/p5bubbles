var x = 1;
var bubbles = [];

function setup() {
  createCanvas(400, 600);
  for (var i = 0; i < 30; i++) {
    bubbles[i] = new bubble(random(0, width), random(0, height), 10);
  }
  
  setInterval(vent,1000);
}

function mouseDragged() {
  bubbles.push(new bubble(mouseX, mouseY, random(8, 15)));
}

function draw() {
  background(100,150,200);
  for (var x = 0; x < bubbles.length; x++) {
    bubbles[x].display();
    bubbles[x].update();
    if (bubbles[x].y + bubbles[x].r < 0) {
      bubbles.splice(x, 1);
    }
  }
  print(bubbles.length);
  if(bubbles.length > 400){
    bubbles.splice(0, 1);
  }
}

function vent(){
  var xpos = random(width);
  for (var i = 0; i < 10; i++) {
    bubbles.push(new bubble(xpos, height, random(8, 15)));
  }
}

function bubble(x, y, r) {
  (this.x = x),
    (this.y = y),
    (this.r = r),
    (this.display = function () {
      stroke(255, 255);
      strokeWeight(1);
      noFill();
      ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }),
    (this.update = function () {
      this.x = this.x + random(-2, 2);
      this.y = this.y + random(-3, 0);
    });
}


