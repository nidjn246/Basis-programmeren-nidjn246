let playerturn = 1
let playerwin = false
function setup() {
  createCanvas(750, 500);
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
  textSize (30)
  text ("Player 1:", 560, 200)
  text ("Player 2:", 560, 270)
  fill (255, 0, 0)
  circle (720, 195, 50)
  fill (255, 255, 0)
  circle (720, 265, 50)
  fill (0)
  textSize (40)
  if (playerwin == true){
    text("Player " + playerturn + " wins!", 300, 500);
  }
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
      color(255, 0, 0), //red
      color(255, 255, 0),//yellow
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
      if (checkForWin(colomnClicked, colomnHeight)) {
        playerwin = true
        noLoop(); 
      }
        break;
    }
  }
}


function checkForWin(x, y) {
  let player = grid[x][y];
  
  return (
    checkDirection(x, y, 1, 0, player) ||
    checkDirection(x, y, 0, 1, player) || 
    checkDirection(x, y, 1, 1, player) || 
    checkDirection(x, y, 1, -1, player)
  );
}

function checkDirection(x, y, dx, dy, player) {
  let count = 1;

  for (let i = 1; i < 4; i++) {
    let nx = x + i * dx;
    let ny = y + i * dy;
    if (nx >= 0 && nx < grid.length && ny >= 0 && ny < grid[0].length && grid[nx][ny] === player) {
      count++;
    } else {
      break;
    }
  }

  for (let i = 1; i < 4; i++) {
    let nx = x - i * dx;
    let ny = y - i * dy;
    if (nx >= 0 && nx < grid.length && ny >= 0 && ny < grid[0].length && grid[nx][ny] === player) {
      count++;
    } else {
      break;
    }
  }

  return count >= 4;
}