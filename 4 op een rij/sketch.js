let playerturn = 0

function setup() {
  createCanvas(700, 500);
}

function draw() {
  background(220);
  drawGrid()
}

let grid =
  [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
  ]
function drawGrid() {

  let colorPallet =
    [
      color(255), //white
      color(255, 0, 0), //red
      color(255, 255, 0)//yellow
    ]

  let rowHeight = 55;

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      let maxHeight = (grid[x].length - 1) * rowHeight;

      fill(colorPallet[grid[x][y]])
      circle(x * 55 + 160, (maxHeight - (y * rowHeight)) + 100, 50)
    }
  }
}

let colomnClicked
let colomnHeight = -1
function mouseClicked() {
  playerturn++
  if (playerturn > 2) {
    playerturn = 1
  }
  if (colomnHeight < 5){
    colomnHeight++
  }
  if (mouseX > 133 && mouseX < 545) {
    colomnClicked = floor((mouseX - 133) / 55 + 1)
    grid[colomnClicked - 1][colomnHeight] = playerturn
  }

  
}