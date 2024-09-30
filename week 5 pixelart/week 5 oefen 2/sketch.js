let colorraster =
[
  [0, 1, 2, 0],
  [1, 2, 3, 1],
  [3, 2, 0, 0],
  [3, 2, 0, 0]
]

function setup() {
  createCanvas(400, 400);
}

function draw() 
{
  background(0, 190, 40);

  for (let x = 0; x < 4; x++)
  {
    for (let y = 0; y < 4; y++)
    {
    if (colorraster[y][x]==0)
      {
        fill("red")
      }
    else if (colorraster[y][x] == 1)
      {
        fill("blue")
      }
    else if (colorraster[y][x] == 2)
      {
        fill ("yellow")
      }
    else if (colorraster[y][x] == 3)
      {
        fill ("green")
      }
      square (x * 25 + 50, y * 25 + 50, 25)
    }
  }
}