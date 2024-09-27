let xsquare = ["square1", "square2", "square3"]
let ysquare = ["square1", "square2", "square3"]
let xcircle = ["circle1"]
let ycircle = ["circle1"]
let red = ["square1", "square2", "square3"]
let green = ["square1", "square2", "square3"]
let blue = ["square1", "square2", "square3"]
let red1 = ["circle1", "circle2", "circle3"]
let green1 = ["circle1", "circle2", "circle3"]
let blue1 = ["circle1", "circle2", "circle3"]
let backgroundcolor
let backgroundcolor1
let backgroundcolor2
let sizecircle
let sizesquare 

function setup() 
{
  createCanvas(800, 600);
}

function draw() 
{
  background(backgroundcolor, backgroundcolor1, backgroundcolor2);
  strokeWeight(5)

  //a loop to make squares
  for (let i = 0; i < xsquare.length; i++) 
 {

    //if the xsquare is bigger then 600 make it a random color
    if (xsquare[i] > 600) 
    {
      fill (red1[0], green1[0], blue1[0])
    }

    //else if the xsquare is smaller then 200 make it a random color
    else if (xsquare[i] < 200) 
    {
      fill (red1[1], green1[1], blue1[1])
    }

    //else if the xsquare is smaller then 400 make it a random color  
    else if (xsquare[i] < 400) 
    {
      fill (red1[2], green1[2], blue1[2])
    }

    //make a square
    square(xsquare[i], ysquare[i], sizesquare)
  }

    //a loop to make circles
    for (let i = 0; i < xcircle.length; i++) 
  {

    //if the xcircle is bigger then 600 make it a random color
    if (xcircle[i] > 600) 
    {
      fill (red[0], green[0], blue[0])
    }

    //else if the xcircle is smaller then 200 make it a random color
    else if (xcircle[i] < 200) 
    {
      fill (red[1], green[1], blue[1])
    }

    //else if the xcircle is smaller then 400 make it a random color 
    else if (xcircle[i] < 400) 
    {
      fill (red[2], green[2], blue[2])
    }

    //make a circle
    circle(xcircle[i], ycircle[i], sizecircle)
  }
}

function keyPressed() {

  //if backspace is clicked make the size of the square/circle random
  if (keyCode == 8) 
  {
    sizecircle = random (120, 200)
    sizesquare = random (120, 200)
    backgroundcolor = random (0, 255)
    backgroundcolor1 = random (0, 255)
    backgroundcolor2 = random (0, 255)
  
    //how many squares there need to be made
    for (let square = 0; square < random (20, 35); square++) 
    {
      xsquare[square] = round(random(0, 800))
      ysquare[square] = round(random(0, 600))
    }

    //how many circles need to be made
    for (let circle = 0; circle < random (20, 35); circle++) 
    {
      xcircle[circle] = round(random(0, 800))
      ycircle[circle] = round(random(0, 600))
    }

    //generate all the random colors for the shapes (not the best way to do it)
    red[0] = random(0, 255)
    green[0] = random(0, 255)
    blue[0] = random(0, 255)
    red[1] = random(0, 255)
    green[1] = random(0, 255)
    blue[1] = random(0, 255)
    red[2] = random(0, 255)
    green[2] = random(0, 255)
    blue[2] = random(0, 255)
    red1[0] = random(0, 255)
    green1[0] = random(0, 255)
    blue1[0] = random(0, 255)
    red1[1] = random(0, 255)
    green1[1] = random(0, 255)
    blue1[1] = random(0, 255)
    red1[2] = random(0, 255)
    green1[2] = random(0, 255)
    blue1[2] = random(0, 255)
  }
}