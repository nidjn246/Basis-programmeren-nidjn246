
let size = 10
let hunger = 100
let energy = 100
let health = 100

function setup() {
  createCanvas(600, 400);
  createButtons()
}
function draw() {
  console.log (hunger)
  background(220)
  drawAnimal()
  drawBars()
  if (hunger < 200){
  hunger = hunger + deltaTime / 350
}

if (energy > 0){
  energy = energy - deltaTime / 2000
}
  
if (health > 0){
  health = health - deltaTime / 10000
}
  
}

function createButtons(){
  foodButton = createButton("Feed")
  foodButton.position(100, 100)
  foodButton.mouseClicked(giveFood)

  energyButton = createButton("Sleep")
  energyButton.position(100, 140)
  energyButton.mouseClicked(sleep)

  HealthButton = createButton("Clean")
  HealthButton.position(100, 180)
  HealthButton.mouseClicked(heal)

  HappyButton = createButton("Clean")
  HealthButton.position(100, 180)
  HealthButton.mouseClicked(heal)
}

function giveFood(){
  if (hunger > 120){
  hunger = hunger - 20
  }
  if (energy < 90){
  energy = energy + 10
  }
}

function sleep(){
  
}

function heal(){
  if (health < 80){
    health = health + 20
    }
}

function drawBars(){
  //hunger
  strokeWeight (1)
  fill (255)
  rect (350, 100, 10, 100)
  fill ("Green")
  rect (350, 200, 10, 100 - hunger)
  fill (0)
  text ("Hunger", 340, 210)

  //happyness
  strokeWeight (1)
  fill ("yellow")
  rect (410, 100, 10, 100)
  fill (255)
  rect (410, 100, 10, 100 - energy)
  fill(0)
  text ("Energy", 395, 210)

  //Health
  strokeWeight (1)
  fill ("red")
  rect (470, 100, 10, 100)
  fill (255)
  rect (470, 100, 10, 100 - health)
  fill(0)
  text ("Health", 455, 210)
}


function drawAnimal() {

  let animal =
    [
      [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0],
      [0, 0, 2, 1, 1, 1, 2, 1, 1, 1, 2, 0],
      [0, 0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0],
      [0, 0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0],
      [0, 0, 2, 1, 1, 1, 2, 1, 1, 1, 2, 0],
      [0, 0, 2, 1, 1, 3, 3, 3, 1, 1, 2, 0],
      [0, 0, 0, 2, 1, 1, 3, 1, 1, 2, 0, 0],
      [0, 0, 2, 2, 1, 1, 1, 1, 1, 2, 2, 0],
      [0, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2],
      [0, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2],
      [0, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2],
      [0, 0, 0, 3, 3, 3, 0, 3, 3, 3, 0, 0],
    ]

  let colorpallet = [
    color(0, 0, 0, 0),
    color(255),
    color(0),
    color(250, 128, 11),
  ];

  drawImage(200, 100, animal, colorpallet);
}

function drawImage(startX, startY, image, palette) {
  strokeWeight(0)
  //make the squares with the for loop
  for (let y = 0; y < image.length; y++) {
    for (let x = 0; x < image[y].length; x++) {
      fill(palette[image[y][x]])
      square(startX + (x * size), startY + (y * size), size)
    }
  }
}