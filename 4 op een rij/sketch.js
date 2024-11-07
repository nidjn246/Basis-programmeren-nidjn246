let playerturn = 1
function setup() {
  createCanvas(700, 500);
}

function draw() {
 background(255);
  strokeWeight (0)
  fill (0, 103, 208)
  rect (145, 65, 400, 350)
  drawGrid()
  fill (0)
  textSize (50)
  text ("Player: " + playerturn, 250, 50)
  textSize (20)
  text ("Player 1:", 560, 200)
  text ("Player 2:", 560, 270)
  fill (255, 0, 0)
  circle (670, 195, 30)
  fill (255, 255, 0)
  circle (670, 265, 30)
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
  strokeWeight (1)
  let colorPallet =
    [
      color(255), //white
      color(255, 255, 0),//yellow
      color(255, 0, 0), //red
    ]

  let rowHeight = 55;

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      let maxHeight = (grid[x].length - 1) * rowHeight;
      fill(colorPallet[grid[x][y]])
      circle(x * 55 + 180, (maxHeight - (y * rowHeight)) + 100, 50)
    }
  }
}

let colomnClicked
let colomnHeight
function mouseClicked() {
  if (colomnHeight < 5) {
    colomnHeight++
  }
  if (mouseX > 133 && mouseX < 545 && mouseY > 73 && mouseY < 400) {
    colomnClicked = floor((mouseX - 155) / 55)
  }
  
  for (colomnHeight = 0; colomnHeight < grid[colomnClicked].length; colomnHeight++) {
    if (grid[colomnClicked][colomnHeight] == 0) {
      grid[colomnClicked][colomnHeight] = playerturn;
      playerturn++
      if (playerturn > 2) {
        playerturn = 1
      }
        break;
    }
  }
}
