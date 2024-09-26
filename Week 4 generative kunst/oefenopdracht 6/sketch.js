function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  fill (0);
  text ("1.", 20, 15)
  text ("2.", 20, 105)
  text ("3.", 80, 105)
  text ("4.", 80, 205)
  text ("5.", 540, 20)
  text ("6.", 350, 105)
  text ("7.", 625, 105)
  fill (255)
 // 
for(let rijtien = 0; rijtien < 10; rijtien++)
{
square (20 + (rijtien * 50), 20, 50)
if(rijtien == 5)
  {
    fill ("blue")
  }
  else 
  {
    fill (255)
  }
}
fill (0)
for(let ondervijf = 0; ondervijf < 5; ondervijf++)
  {
square (20, 110 + (ondervijf * 50), 50)
if(ondervijf == 0)
  {
    fill (255)
  }
  
  if(ondervijf == 0)
    {
      fill (50)
    }
              
    if(ondervijf == 1)
    {
      fill (100)
    }
    if(ondervijf == 2)
    {
      fill (125)
    }

    if(ondervijf == 3)
    {
      fill (150)
    }
    if(ondervijf == 3)
    {
      fill (255)
    }
  }
  let width = 25
  let x = 80
  for(let rijvier = 0; rijvier < 4; rijvier++)
  {
    let green = 255 / 3 * rijvier
    fill ( 0, green, 0)
    rect (x, 110, width, 50)
    width = width + 25
    x = x + width
  }
}