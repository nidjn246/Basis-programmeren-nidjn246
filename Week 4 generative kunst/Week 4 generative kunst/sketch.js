let x = ["square1", "square2", "square3"]
let y = ["square1", "square2", "square3"]

function setup() {
  createCanvas(800, 600);
}

function draw() {
background(220);
strokeWeight (0)
/*fill ("red")
square (x[0], y[0], 200)
fill("darkblue")
circle (x[1], y[1], 90)
*/

for (let i = 0; i < 5; i++)
{
  square (x[i], y[i], 200)
  if (i == 0)
  {
    fill ("red")
  }
  else if(i == 1)
  {
    fill ("darkblue")
  }
  else if(i == 2)
  {
    fill ("lime")
  }
}
}

function keyPressed()
{
  if (keyCode == 8)
{
  x[0] = round(random (0, 800))
  x[1] = round(random (0, 800))
  y[0] = round(random (0, 800))
  y[1] = round(random (0, 800))
  x[2] = round(random (0, 800))
  y[2] = round(random (0, 600))
  
}
}