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
  for (let i = 0; i < shapes.length; i++) {
    fill(color[i], color[i], color[i][2])

    if (shapes[i] === "square") {
      square(x[i], y[i], size[i])
    }

    else if(shapes[i] === "circle")
    {
      circle (x[i], y[i], size[i])
    }
  }

}



function generateArt() {

  shapes = []

  for (let i = 0; i < hoeveelObjecten; i++) {
    x[i] = round(random(0, width))
    y[i] = round(random(0, height))

    shapes[i] = random(["square", "circle", "lines"])

    color[i] = [random(0, 255), random(0, 255), random(0, 255)]

    size[i] = round(random(50, 200))
  }
}

function keyPressed() {
  if (keyCode == 8) {
    generateArt()
  }
}
