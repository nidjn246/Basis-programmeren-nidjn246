let x = 0
let sharkx = 200
let sideshark = 2
function setup() {
  createCanvas(640, 480);
  for (let i = 0; i < 10; i++) {
    drawShape()
  }
}

function draw() {
  shark(sharkx, 390, sideshark)
  if (keyIsDown(RIGHT_ARROW) == true){
    sharkx++
    sideshark = 2
   }
   if (keyIsDown(LEFT_ARROW) == true){
    sharkx--
    sideshark = 1
   }
   if (sharkx < 0){
    sharkx = 680
   }
   if (sharkx > 680){
    sharkx = 0
   }
}

function drawShape() {
  x = random(0, 640)
  y = random(0, 480)
  strokeWeight(0)
  fill(255)
  circle(x, y, 100)
  square(x - 24, y + 30, 50)
  fill(0)
  circle(x - 20, y - 10, 30)
  circle(x + 20, y - 10, 30)
  triangle(x - 10, y + 30, x + 10, y + 30, x, y + 10)
  rect(x + 15, y + 55, 5, 25)
  rect(x, y + 55, 5, 25)
  rect(x - 15, y + 55, 5, 25)
}

function shark(xshark, yshark, side) {
  background(200)
  strokeWeight(0)
  console.log (xshark)
  if (side == 1){
    fill (100)
    circle(xshark - 10, yshark, 50)
    fill (200)
    circle(xshark, yshark, 40)
  }
  else  if (side == 2){
    fill (100)
    circle(xshark + 10, yshark, 50)
    fill (200)
    circle(xshark, yshark, 40)
  }
  else {fill (100)
    circle(xshark + 10, 390, 50)
    fill (200)
    circle(xshark, 390, 40)}
  fill ("blue")
  rect (0, 390, 680, 100)
}