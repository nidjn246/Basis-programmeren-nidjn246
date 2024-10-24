// alle variables
let x = 100
let greeting = "Hello World!"
let a = 10
let b = 2
let optellen = a + b
let aftrekken = a - b
let vermenigvuldigen = a * b
let delen = a / b
let y = 80
let rng

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // alle text
  text (x, 20, 20)
  text (greeting, 20, 60)
  text (optellen, 20, y)
  text (aftrekken, 20, y + 20)
  text (vermenigvuldigen, 20, y + 40)
  text (delen, 20, y + 60)
  text (rng, 200, 200)
}

  function mouseClicked ( ) 
  {
  rng = round (random(0, 1000))
}