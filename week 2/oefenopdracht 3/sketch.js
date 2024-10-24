let score

function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(0, 100, 100);
  textSize (50)
  text (score, 100, 50)
  textSize (50)
  if (score > 89){
    fill ("green")
    text ("uitstekend!", 10, 100 )}
  else if (score > 69 && score < 90){
    fill ("yellow")
    text ("Goed gedaan!", 10, 100 )}
  else if (score > 49 && score < 70){
    fill ("orange")
    text ("Voldoende", 10, 100 )}
  else if (score < 50){
    fill ("red")
    text ("Onvoldoende", 10, 100 )}
}

function mouseClicked() {
  score = round (random (0, 100))
}