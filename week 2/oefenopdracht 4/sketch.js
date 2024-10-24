let number1
let number2

function setup() {
  createCanvas(400, 200);
}
//
function draw() {
  background(220);
  if (number1 > number2)
  text ("number1 wint want number2", 20, 20)
 
  else if (number1 < number2)
  text ("number1 verliest van number 2", 20, 20)

  else 
  text ("number1 en number2 zijn gelijk", 20, 20)

  text (number1, 20, 40)
  text (number2, 20, 60)
}

function mouseClicked () {
number2 = round (random (1, 100))
number1 = round (random (1, 100))
}