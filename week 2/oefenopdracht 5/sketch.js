let getal = 0
let color = 1
let green = "green"
let red = "red"
let orange = "orange"

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  textSize (10)
  fill (0)
  //alle texten
  text ("1. Houd B in om een blokje te laten verschijnen", 20, 20)
  text ("Druk op spatie om het getal op 0 te zetten.", 20, 120)
  text ("Druk op enter om van rood -> groen -> oranje te gaan.", 20, 240)
  text ("Beweeg de eightball met WASD EN de pijltjestoetsen", 360, 20)
  
  // als B word ingeklikt maak een vierkant
  if (keyIsDown (66)){
  square (20, 40, 60,)}

  // doe +1 bij getal elke frame
  getal = getal + 1
  textSize (50)

  //maak het getal zichtbaar
  text (getal, 20, 170)

  //als het getal boven 500 is maak het 0
  if (getal > 500){
    getal = 0}
  
  //stoplicht frame
  fill ("grey")
  strokeWeight (0)
  rect (20, 250, 70, 170)
  
  //stoplicht lichten
  fill (green)
  circle (55, 390, 50)
  fill (orange)
  circle (55, 330, 50)
  fill (red)
  circle (55, 277, 50)
  }
  


  //als je op key 32 (space) klikt word getal 0
  function keyPressed () {
  if (keyCode == "32")
  getal = 0
  //als je op 13 (enter) klikt komt er +1 bij color
  if (keyCode == "13"){
  color = color + 1}
  //als color hoger is dan 3 word color 1
  if (color > 3){
  color = 1}
  //als color 1 is maak rood rood en anders donkerrood
  if (color == 1){
  red = "red"
  }
  else{
    red = "darkred"
  }
  //als color 2 is maak lime lime en anders groen
  if (color == 2){
  green = "lime"
  }
  else{
  green = "green"
  }
  //als color 2 is maak oranje oranje en anders donkeroranje
  if (color == 3){
  orange = "orange"
  }
  else{
  orange = "darkorange"
  }
}
