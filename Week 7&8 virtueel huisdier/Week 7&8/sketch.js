let size = 10
let hunger = 100
let energy = 100
let health = 100
let happiness = 100
let larryState
let resetbar = 0
let resetTimer = 0
let stats = []

let states = {
  idle: 0,
  low_health: 1,
  lower_health: 2,
  death: 3
}


function setup() {
  createCanvas(600, 400);
  createButtons()
  loadData()
}
function draw() {
  reset()
  background(220)
  saveData()
  happiness = constrain(happiness, 0, 100)
  hunger = constrain(hunger, 100, 200)
  health = constrain(health, 0, 100)
  energy = constrain(energy, 0, 100)
  drawBars()
  textSize ( 20)
  fill (0)
  textFont ("comic sans ms")
  text ("Larry", 240, 90)
  textSize (15)
  text ("Hold Esc to reset Larry", 10, 370)
  checkState()
  drawAnimal()

  if (hunger < 200){
    hunger = hunger + deltaTime / 2000
  }
  
  if (energy > 0){
    energy = energy - deltaTime / 2500
  }
  
  if (hunger > 199){
    health = health - deltaTime / 4000
  }
  
  if (happiness > 0){
    happiness = happiness - deltaTime / 5000
  }
}

function saveData (){
  stats = []
  stats.push (hunger, energy, health, happiness)
  storeItem('hungerstat', stats[0])
  storeItem('energystat', stats[1])
  storeItem('healthstat', stats[2])
  storeItem('happinessstat', stats[3])
}

function loadData(){
  hunger = getItem("hungerstat")
  energy = getItem("energystat")
  health = getItem("healthstat")
  happiness = getItem("happinessstat")
}

function createButtons(){
  foodButton = createButton("Feed")
  foodButton.position(100, 100)
  foodButton.mouseClicked(giveFood)

  energyButton = createButton("Play with Larry")
  energyButton.position(100, 140)
  energyButton.mouseClicked(play)

  HealthButton = createButton("Clean")
  HealthButton.position(100, 220)
  HealthButton.mouseClicked(heal)

  PlayButton = createButton("Sleep")
  PlayButton.position(100, 180)
  PlayButton.mouseClicked(sleep)
}

function giveFood(){
hunger -= 30;
if (hunger < 101){
  health -= 10
}

energy += 10;

}

function sleep (){
energy += 80;
happiness -= 10
health += 5
hunger += 20;

}

function play(){
happiness += 30


energy -= 10;

}

function heal(){
  health += 20;
}

function checkState(){
  if (health < 50 && health > 25){
    larryState = states.low_health
  }

  else if (health < 25 && health > 1){
    larryState = states.lower_health
  }

  else if (health < 1){
    larryState = states.death
  }

  else if (happiness < 50 && happiness > 25){
    larryState = 4
  }

  else if (happiness < 25){
    larryState = 5
  }

  else if (energy < 50 && energy > 25){
    larryState = 6
  }

  else if (energy < 25){
    larryState = 7
  }

  else {
    larryState = states.idle
  }
}

function drawBars(){
  textSize(13)
  //hunger
  strokeWeight (1)
  fill (255)
  rect (350, 100, 10, 100)
  fill ("Green")
  rect (350, 200, 10, 100 - hunger)
  fill (0)
  text ("Hunger", 340, 210)

  //energy
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

  //Happiness
  strokeWeight (1)
  fill ("orange")
  rect (530, 100, 10, 100)
  fill (255)
  rect (530, 100, 10, 100 - happiness)
  fill(0)
  text ("happiness", 510, 210)

  //resetbar
  fill (255)
  rect (10, 380, 160, 15)
  fill ("red")
  rect (10, 380, resetbar, 15)
}


function drawAnimal() {

  let animal =
  [ 
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
    ],
    [
      [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0],
      [0, 0, 2, 1, 1, 1, 2, 1, 1, 1, 2, 0],
      [0, 0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0],
      [0, 0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0],
      [0, 0, 2, 1, 4, 1, 2, 1, 4, 1, 2, 0],
      [0, 0, 2, 1, 4, 3, 3, 3, 4, 1, 2, 0],
      [0, 0, 0, 2, 1, 1, 3, 1, 1, 2, 0, 0],
      [0, 0, 2, 2, 1, 1, 1, 1, 1, 2, 2, 0],
      [0, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2],
      [0, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2],
      [0, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2],
      [0, 0, 0, 3, 3, 3, 0, 3, 3, 3, 0, 0],
    ],
    [
      [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0],
      [0, 0, 2, 1, 1, 1, 2, 1, 1, 1, 2, 0],
      [0, 0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0],
      [0, 0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0],
      [0, 0, 2, 1, 4, 1, 2, 1, 4, 1, 2, 0],
      [0, 0, 2, 1, 4, 3, 3, 3, 4, 1, 2, 0],
      [0, 0, 0, 2, 1, 1, 3, 1, 1, 2, 0, 0],
      [0, 0, 2, 2, 4, 1, 1, 1, 4, 2, 2, 0],
      [0, 2, 2, 2, 1, 4, 1, 1, 1, 2, 2, 2],
      [0, 2, 2, 2, 1, 1, 1, 1, 4, 2, 2, 2],
      [0, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2],
      [0, 0, 0, 3, 3, 3, 0, 3, 3, 3, 0, 0],
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0],
      [0, 0, 0, 4, 2, 2, 2, 2, 2, 4, 0, 0],
      [0, 0, 4, 2, 3, 2, 2, 2, 3, 2, 4, 0],
      [0, 4, 4, 3, 3, 3, 2, 3, 3, 3, 4, 0],
    ],
    [
      [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0],
      [0, 0, 2, 1, 1, 1, 2, 1, 1, 1, 2, 0],
      [0, 0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0],
      [0, 0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0],
      [0, 0, 2, 1, 5, 1, 2, 1, 5, 1, 2, 0],
      [0, 0, 2, 1, 1, 3, 3, 3, 1, 1, 2, 0],
      [0, 0, 0, 2, 1, 1, 3, 1, 1, 2, 0, 0],
      [0, 0, 2, 2, 1, 1, 1, 1, 1, 2, 2, 0],
      [0, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2],
      [0, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2],
      [0, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2],
      [0, 0, 0, 3, 3, 3, 0, 3, 3, 3, 0, 0],
    ],
    [
      [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0],
      [0, 0, 2, 1, 1, 1, 2, 1, 1, 1, 2, 0],
      [0, 0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0],
      [0, 0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0],
      [0, 0, 2, 1, 5, 1, 2, 1, 5, 1, 2, 0],
      [0, 0, 2, 1, 5, 3, 3, 3, 5, 1, 2, 0],
      [0, 0, 0, 2, 5, 1, 3, 1, 5, 2, 0, 0],
      [0, 0, 2, 2, 1, 1, 1, 1, 1, 2, 2, 0],
      [0, 2, 2, 2, 5, 1, 1, 1, 1, 2, 2, 2],
      [0, 2, 2, 2, 1, 1, 1, 1, 5, 2, 2, 2],
      [0, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2],
      [0, 0, 0, 3, 5, 3, 0, 3, 5, 3, 0, 0],
    ],
    [
      [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0],
      [0, 0, 2, 1, 1, 1, 2, 1, 1, 1, 2, 0],
      [0, 0, 2, 1, 1, 1, 2, 1, 1, 1, 2, 0],
      [0, 0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0],
      [0, 0, 2, 1, 1, 1, 2, 1, 1, 1, 2, 0],
      [0, 0, 2, 1, 1, 3, 3, 3, 1, 1, 2, 0],
      [0, 0, 0, 2, 1, 1, 3, 1, 1, 2, 0, 0],
      [0, 0, 2, 2, 1, 1, 1, 1, 1, 2, 2, 0],
      [0, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2],
      [0, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2],
      [0, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2],
      [0, 0, 0, 3, 3, 3, 0, 3, 3, 3, 0, 0],
    ],
    [
      [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0],
      [0, 0, 2, 1, 1, 1, 2, 1, 1, 1, 2, 0],
      [0, 0, 2, 1, 1, 1, 2, 1, 1, 1, 2, 0],
      [0, 0, 2, 2, 2, 1, 2, 1, 2, 2, 2, 0],
      [0, 0, 2, 1, 1, 1, 2, 1, 1, 1, 2, 0],
      [0, 0, 2, 1, 1, 3, 3, 3, 1, 1, 2, 0],
      [0, 0, 0, 2, 1, 1, 3, 1, 1, 2, 0, 0],
      [0, 0, 2, 2, 1, 1, 1, 1, 1, 2, 2, 0],
      [0, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2],
      [0, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2],
      [0, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2],
      [0, 0, 0, 3, 3, 3, 0, 3, 3, 3, 0, 0],
    ]
  ]

  let colorpallet = [
    color(0, 0, 0, 0),
    color(255),
    color(0),
    color(250, 128, 11),
    color(255, 0, 0),
    color(0, 100, 255)
  ];

  drawImage(200, 100, animal[larryState], colorpallet);
}

function drawImage(startX, startY, image, palette) {
  strokeWeight(0)
  for (let y = 0; y < image.length; y++) {
    for (let x = 0; x < image[y].length; x++) {
      fill(palette[image[y][x]])
      square(startX + (x * size), startY + (y * size), size)
    }
  }
}

function reset (){
  if (keyIsDown(ESCAPE)){
    console.log (resetTimer)
    resetTimer = resetTimer + deltaTime / 1000
    resetbar++
  }
  else {
    resetTimer = 0
    resetbar = 0
  }

  if (resetbar == 160){
    resetbar = 0
    hunger = 100
    energy = 100
    health = 100
    happiness = 100
  }
}