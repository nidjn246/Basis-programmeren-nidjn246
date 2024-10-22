let startgame = false
let nameanimal
let bground
let size = 15
let hunger = 100
let energy = 100
let health = 100
let happiness = 100
let larryState
let resetbar = 0
let resetTimer = 0
let stats = 0
let buttonTimer= 0
let fur = 0
let menuOpen = false

// all of the states larry can output
let states = {
  idle: 0,
  low_health: 1,
  lower_health: 2,
  death: 3,
  littlecry: 4,
  hardcry: 5,
  littletired: 6,
  tired: 7,
  hungry: 8,
  starving: 9,
}


function setup() {
  createCanvas(700, 450);
  createButtons()
  // changeBackground()
  //load all the data from the local storage to the game
  loadData()
}

//load the background image
function preload(){
  bground = loadImage ("/../Images/background.jpg")
}

function draw() {
  console.log (fur)
  background(bground)
  saveData()
    //make the reset button work
    reset()

  happiness = constrain(happiness, 0, 100)
  hunger = constrain(hunger, 0, 100)
  health = constrain(health, 0, 100)
  energy = constrain(energy, 0, 100)
  drawBars()
  textSize ( 30)
  fill (0)
  textFont ("comic sans ms")
  text (nameanimal, 310, 140)
  textSize (15)
  text ("Hold Esc to reset Larry", 10, 30)
  checkState()
  drawAnimal()

  if (menuOpen == true){
    fill (255)
    rect (301, 10, 350, 80)
    blackColor.show()
    greenColor.show()
    redColor.show()
  }
  else {
    blackColor.hide()
    greenColor.hide()
    redColor.hide()
  }

  if (hunger > 0){
    hunger = hunger - deltaTime / 2000
  }
  
  if (energy > 0){
    energy = energy - deltaTime / 2500
  }
  
  if (hunger < 1){
    health = health - deltaTime / 4000
  }
  
  if (happiness > 0){
    happiness = happiness - deltaTime / 5000
  }

  //roept een functie aan na x tijd
  //setTimeout(resetKnoppen, 300);
}


function resetKnoppen()
{

}


  function saveData (){
  stats = []
  stats.push (hunger, energy, health, happiness, fur)
  storeItem('hungerstat', stats[0])
  storeItem('energystat', stats[1])
  storeItem('healthstat', stats[2])
  storeItem('happinessstat', stats[3])
  storeItem('colorfur', stats[4])
}

// function changeBackground (){
//   rightButton = createImage ("/../Images/rightarrow.png")
//   rightButton.Size (70, 70)
//   rightButton.position (100, 100)
// }

function loadData(){
  hunger = getItem("hungerstat") || 100
  energy = getItem("energystat") || 100
  health = getItem("healthstat") || 100
  happiness = getItem("happinessstat") || 100
  fur = getItem("colorfur") || 0
}

function createButtons(){
  foodButton = createImg("/../Images/burger.png")
  foodButton.size (70, 70)
  foodButton.position(100, 370)
  foodButton.mouseClicked(giveFood)

  playButton = createImg("/../Images/play.png")
  playButton.position(250, 370)
  playButton.size (80, 70)
  playButton.mouseClicked(play)
  
  sleepButton = createImg("/../Images/bed.png")
  sleepButton.position(400, 380)
  sleepButton.size (80, 50)
  sleepButton.mouseClicked(sleep)

  HealthButton = createImg("/../Images/soap.png")
  HealthButton.size (80, 80)
  HealthButton.position(550, 370)
  HealthButton.mouseClicked(heal)

  menu = createImg ("/../Images/hamburgermenu.png")
  menu.position (650, 10)
  menu.size (40, 40)
  menu.mouseClicked (menuBar)

  blackColor = createImg ("/../Images/black.jpeg")
  blackColor.size (70, 70)
  blackColor.position (320, 15)
  blackColor.mouseClicked(black1)

  greenColor = createImg ("/../Images/green.png")
  greenColor.size (70, 70)
  greenColor.position (440, 15)
  greenColor.mouseClicked(green1)

  redColor = createImg ("/../Images/red.jpg")
  redColor.size (70, 70)
  redColor.position (560, 15)
  redColor.mouseClicked(red1)
}

function black1 (){
  fur = [0]
}

function green1 (){
  fur = [4, 130, 4]
}

function red1 (){
  fur = "red"
}

function menuBar(){
 menuOpen = !menuOpen
}

function giveFood(){
  hunger += 30;
  if (hunger > 100){
    health -= 10
  }
  
  energy += 10;
  happiness += 5;
}

function sleep (){
energy += 80;
happiness -= 10
health += 5
hunger -= 20;

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

  else if (hunger > 25 && hunger < 50){
    larryState = states.hungry
  }

  else if (hunger < 25){
    larryState = states.starving
  }

  else if (happiness < 50 && happiness > 25){
    larryState = states.littlecry
  }

  else if (happiness < 25){
    larryState = states.hardcry
  }

  else if (energy < 50 && energy > 25){
    larryState = states.littletired
  }

  else if (energy < 25){
    larryState = states.tired
  }

  else {
    larryState = states.idle
  }
}

function drawBars(){
  textSize(13)
  //hunger
  strokeWeight (1)
  fill ("green")
  rect (450, 100, 10, 100)
  fill (255)
  rect (450, 100, 10, 100 - hunger)
  fill (0)
  text ("Food", 440, 210)

  //energy
  strokeWeight (1)
  fill ("yellow")
  rect (510, 100, 10, 100)
  fill (255)
  rect (510, 100, 10, 100 - energy)
  fill(0)
  text ("Energy", 495, 210)

  //Health
  strokeWeight (1)
  fill ("red")
  rect (570, 100, 10, 100)
  fill (255)
  rect (570, 100, 10, 100 - health)
  fill(0)
  text ("Health", 555, 210)

  //Happiness
  strokeWeight (1)
  fill ("orange")
  rect (630, 100, 10, 100)
  fill (255)
  rect (630, 100, 10, 100 - happiness)
  fill(0)
  text ("happiness", 610, 210)

  //resetbar
  if (keyIsDown (ESCAPE)){
  fill (255)
  rect (10, 40, 160, 15)
  fill ("red")
  rect (10, 40, resetbar, 15)
  }
}


function drawAnimal() {

  let animal =
  [ 
    [
      [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0],
      [0, 0, 2, 1, 1, 1, 2, 1, 1, 1, 2, 0],
      [0, 0, 2, 1, 7, 1, 2, 1, 7, 1, 2, 0],
      [0, 0, 2, 1, 7, 1, 2, 1, 7, 1, 2, 0],
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
      [0, 0, 2, 1, 7, 1, 2, 1, 7, 1, 2, 0],
      [0, 0, 2, 1, 1, 1, 2, 1, 1, 1, 2, 0],
      [0, 0, 2, 1, 1, 3, 3, 3, 1, 1, 2, 0],
      [0, 0, 0, 2, 1, 6, 3, 6, 1, 2, 0, 0],
      [0, 0, 2, 2, 1, 6, 1, 1, 1, 2, 2, 0],
      [0, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2],
      [0, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2],
      [0, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2],
      [0, 0, 0, 3, 3, 3, 0, 3, 3, 3, 0, 0],
    ],
    [
      [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0],
      [0, 0, 2, 1, 1, 1, 2, 1, 1, 1, 2, 0],
      [0, 0, 2, 1, 1, 1, 2, 1, 1, 1, 2, 0],
      [0, 0, 2, 1, 7, 1, 2, 1, 7, 1, 2, 0],
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
      [0, 0, 2, 1, 7, 1, 2, 1, 7, 1, 2, 0],
      [0, 0, 2, 1, 7, 1, 2, 1, 7, 1, 2, 0],
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
      [0, 0, 2, 1, 7, 1, 2, 1, 7, 1, 2, 0],
      [0, 0, 2, 1, 7, 1, 2, 1, 7, 1, 2, 0],
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
      [0, 0, 2, 1, 7, 1, 2, 1, 7, 1, 2, 0],
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
      [0, 0, 2, 7, 7, 1, 2, 1, 7, 7, 2, 0],
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
      [0, 0, 2, 1, 7, 1, 2, 1, 7, 1, 2, 0],
      [0, 0, 2, 1, 7, 1, 2, 1, 7, 1, 2, 0],
      [0, 0, 2, 1, 1, 1, 2, 1, 1, 1, 2, 0],
      [0, 0, 2, 1, 1, 3, 3, 3, 1, 1, 2, 0],
      [0, 0, 0, 2, 2, 1, 3, 1, 2, 2, 0, 0],
      [0, 0, 0, 0, 0, 2, 1, 2, 0, 0, 0, 0],
      [0, 0, 0, 0, 2, 2, 1, 2, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 1, 2, 0, 0, 0, 0],
      [0, 0, 0, 1, 2, 2, 2, 2, 2, 0, 0, 0],
      [0, 0, 0, 3, 3, 3, 0, 3, 3, 3, 0, 0],
    ],
    [
      [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0],
      [0, 0, 2, 1, 1, 1, 2, 1, 1, 1, 2, 0],
      [0, 0, 2, 1, 7, 1, 2, 1, 7, 1, 2, 0],
      [0, 0, 2, 1, 7, 1, 2, 1, 7, 1, 2, 0],
      [0, 0, 2, 1, 1, 1, 2, 1, 1, 1, 2, 0],
      [0, 0, 2, 1, 1, 3, 3, 3, 1, 1, 2, 0],
      [0, 0, 0, 2, 2, 1, 3, 1, 2, 2, 0, 0],
      [0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0],
      [0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0],
      [0, 0, 0, 3, 3, 3, 0, 3, 3, 3, 0, 0],
    ]
  ]

  let colorpallet = [
    color(0, 0, 0, 0),
    color(255),
    color(fur),
    color(250, 128, 11),
    color(255, 0, 0),
    color(0, 100, 255),
    color(0, 180, 0),
    color(0)
  ];

  drawImage(250, 160, animal[larryState], colorpallet);
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
    fur = 0
  }
}

function keyPressed(){
  if (keyIsPressed == true){
    if (keyCode == 32){
    fur = [random(0, 255), random(0, 255), random(0, 255)]
  }
}


}