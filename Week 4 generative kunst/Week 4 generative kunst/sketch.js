let x = []
let y = []
let color = []
let shapes = []
let size = []
let hoeveelObjecten = 150;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(210);
  strokeWeight(1)

  //make the shapes
  for (let i = 0; i < shapes.length; i++) {

    //make the shapes a random color
    fill(color[i], color[i], color[i][2])

    //make a square at a random location
    if (shapes[i] === "square") {
      square(x[i], y[i], size[i])
    }

    //make a circle at a random location
    else if(shapes[i] === "circle")
    {
      circle (x[i], y[i], size[i])
    }
  }

}

function generateArt() {
  //reset the art
  shapes = []
  
  //make all the random numbers for the shapes
  for (let i = 0; i < hoeveelObjecten; i++) {

    //make a random number for the x and y
    x[i] = round(random(0, width))
    y[i] = round(random(0, height))

    //a list of all the shapes
    shapes[i] = random(["square", "circle", "lines"])

    //make a random color
    color[i] = [random(0, 255), random(0, 255), random(0, 255)]

    //make a random size
    size[i] = round(random(50, 200))
  }
}

function keyPressed() {
  //if backspace is pressed generate art
  if (keyCode == 8) {
    generateArt()
  }
}
