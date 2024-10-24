let wolk = 800
let car = 10
let sun = -100
let color = 0
let red = "red"
let green = "green"
let orange = "orange"
let tijd = 0
let autokleur = "green"

function setup() {
  createCanvas(800, 600);
}

function draw() {
  //de lucht
  tijd = tijd + 1
  //als de tijd onder 1780 is maak het dag
  if (tijd >= 0 && tijd < 1780){
  background(135, 206, 235)}
  //als de tijd over 1780 zit maak het nacht
  else if (tijd > 1780 && tijd < 3560){
  background (25, 25, 112)}
  //als de tijd over 3560 is maak de tijd 0
  else if (tijd > 3560){
  tijd = 0}
  //bergen
  strokeWeight (1)
  fill ("grey")
  //rechterberg
  triangle (400, 250, 200, 585, 600, 585)
  //linkerberg
  triangle (150, 300, 0, 585, 350, 585)

  //bomen achter de auto
  //boom kleur
  fill (165, 42, 41)
  strokeWeight (0)
  //linker boomstam
  rect (80, 500, 20, 100)
  //blaadjes kleur
  fill (32, 133, 58)
  //linker blaadjes
  circle (90, 490, 70)
  //rechter boomstamkleur
  fill (165, 42, 41)
  //rechter boomstam
  rect (590, 500, 20, 100)
  //blaadjes kleur
  fill (32, 133, 58)
  //rechter blaadjes
  circle (600, 490, 70)

  //sun and moon
  sun = sun + 0.5
  //als het dag is maak hele gele zon
  if (tijd < 1780){
  fill (254, 203, 0)
  circle (sun + 1 + 60, 50, 80)}
  //als het nacht is maak de zon een halve maan
  else { 
  fill (246, 241, 213)
  circle (sun + 1 + 60, 50, 80)
  fill (25, 25, 112)
  circle (sun + 15 + 60, 50, 60)}
  strokeWeight (0)
  //sun and moon beweging
  if (sun > 800) 
  sun = sun = -100
  
  //de wolk 
  //als het dag is maak witte woll
  if (tijd < 1780){
  fill (255)
  strokeWeight (0)
  circle (wolk + -1 + 60, 150, 50)
  circle (wolk + -1 + 80, 140, 50)
  circle (wolk + -1 + 80, 160, 50)
  circle (wolk + -1 + 105, 150, 50)}
  //als het nacht is maak grijze wolk
  else { 
  fill (71, 71, 71)
  circle (wolk + -1 + 60, 150, 50)
  circle (wolk + -1 + 80, 140, 50)
  circle (wolk + -1 + 80, 160, 50)
  circle (wolk + -1 + 105, 150, 50)}
  //wolk beweging
  wolk = wolk + -1.5
  if (wolk < -200) 
  wolk = wolk = +800

  //de weg
  strokeWeight (10)
  stroke (100)
  rect (0, 590, 800, 10)

  //het stoplicht
  strokeWeight (0)
  fill (50, 50, 50)
  //onderste deel stoplight
  rect (730, 450, 15, 135)
  //bovenste dell stoplight
  rect (710, 310, 55, 140)

  //de lichten van het stoplicht
  color = color + 1
  fill (red)
  circle (737, 335, 40)
  fill (orange)
  circle (737, 380, 40)
  fill (green)
  circle (737, 425, 40)
 
  //de auto
  strokeWeight (0)
  fill (autokleur)
  //onderste autoframe
  rect (car + 1 + 1, 545, 100, 30)
  //bovenste outoframe
  rect (car + 1 + 15, 520, 70, 30)
  //kleur van de ramen
  fill (135, 206, 235)
  strokeWeight (1)
  //linker raam
  rect (car + 1 + 60, 530, 20, 15)
  //rechter raam
  rect (car + 1 + 30, 530, 20, 15)
  stroke (0)
  fill (255)
  strokeWeight (10)
  //linker wiel
  circle (car + 1 + 30, 580, 15)
  //rechter wiel
  circle (car + 1 + 80, 580, 15)
  //beweging auto
  if (car > 800) 
  car = car = -100
  if (color > 0 && color < 300)
  car = car +4
  if (color > 600 && color < 800)
  car = car +0
  if (color > 300 && color < 600)
  car = car +2 

//voorste boom
strokeWeight (0)
//rechter boomstamkleur
fill (165, 42, 41)
//rechter boomstam
rect (350, 500, 20, 100)
//blaadjes kleur
fill (32, 133, 58)
//rechter blaadjes
circle (360, 490, 70)

//als color 900 tot 1100 is gaat rood aan
  if (color > 600 && color < 800){
    red = "red"
    
  }
  else {
    red = "darkred"
  }
//als color 0 tot 600 is gaat groen aan
  if (color > 0 && color < 300){
    green = "lime"
  }
  else {
    green = "green"
  }
//als color 600 tot 900 is gaat oranje aan
  if (color > 300 && color < 600){
    orange = "orange"
  }
  else {
    orange = "darkorange"
  }
  if (color > 800)
    color = 0
  if (color == 600 && color == 601 && color == 602){
  }
}

function mouseClicked(){
  //als de muisX en Y positie tussen die 2 getallen zit maak de auto rood
  if (mouseX > 717 && mouseX < 757 && mouseY > 315 && mouseY < 355){
  autokleur = "red"}

  //als de muisX en Y positie tussen die 2 getallen zit maak de auto oranje
  if (mouseX > 717 && mouseX < 757 && mouseY > 360 && mouseY < 400){
  autokleur = "orange"}
  //als de muisX en Y positie tussen die 2 getallen zit maak de auto groen
  if (mouseX > 717 && mouseX < 757 && mouseY > 405 && mouseY < 445){
  autokleur = "green"}

}