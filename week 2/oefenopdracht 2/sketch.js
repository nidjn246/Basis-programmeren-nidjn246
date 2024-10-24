//alle variabelen
let isTrue
let message = "de boolean waarde is:"
let combinedMessage
function setup() {
  createCanvas(400, 400);
}
//alle text
function draw() {
  background(220);
  text (isTrue, 20, 20)
  text (message, 20, 40)
  text (combinedMessage, 20, 60)
}
// klikken met de muis
function mouseClicked () {
isTrue = !isTrue
combinedMessage = message + !isTrue
}