let playerturn = 1
let cell1 = 0
let cell2 = 0
let cell3 = 0
let cell4 = 0
let cell5 = 0
let cell6 = 0
let cell7 = 0
let cell8 = 0
let cell9 = 0
let playerwin = 0
let reset = 0
let tie = 0
//s
function setup() 
{
  createCanvas(400, 500);
}

function draw() 
{
  background(70, 200, 50);
  fill (0)
  strokeWeight (0)
  textSize (30)
  stroke (0)
  strokeWeight (3)
  //the black lines
  line (125, 0, 125, 400)
  line (275, 0, 275, 400)
  line (0, 125, 400, 125)
  line (0, 275, 400, 275)

  ///if cell1 is 1 make an X
  if (cell1 == 1)
  {
    fill (255)
    strokeWeight (10)
    stroke("blue")
    line (10, 10, 110, 110)
    line (110, 10, 10, 110)
  }
  //if cell1 is 2 make an circle
  if (cell1 == 2)
  {
    stroke ("red")
    strokeWeight (10)
    fill (70, 200, 50)
    circle (60, 60, 100)
  }
  //if cell2 is 1 make an X
  if (cell2 == 1)
  {
    fill (255)
    strokeWeight (10)
    stroke("blue")
    line (150, 10, 250, 110)
    line (250, 10, 150, 110)
  }
  //if cell2 is 2 make an circle  
  if (cell2 == 2)
  {
    stroke ("red")
    fill (70, 200, 50)
    strokeWeight (10)
    circle (200, 60, 100)
  }
  //if cell3 is 1 make an X
  if (cell3 == 1)
  {
    fill (255)
    strokeWeight (10)
    stroke("blue")
    line (290, 10, 390, 110)
    line (390, 10, 290, 110)
  }
   //if cell3 is 2 make an circle   
  if (cell3 == 2)
  {
    stroke ("red")
    fill (70, 200, 50)
    strokeWeight (10)
    circle (340, 60, 100)
  }
  //if cell4 is 1 make an X
  if (cell4 == 1)
  {
    fill (255)
    strokeWeight (10)
    stroke("blue")
    line (10, 140, 110, 250)
    line (10, 250, 110, 140)
  }
  //if cell4 is 2 make an circle
  if (cell4 == 2)
  {
    stroke ("red")
    fill (70, 200, 50)
    strokeWeight (10)
    circle (60, 200, 100)
  }
   //if cell5 is 1 make an X 
  if (cell5 == 1)
  {
    fill (255)
    strokeWeight (10)
    stroke("blue")
    line (150, 140, 250, 250)
    line (150, 250, 250, 140)
  }
  //if cell5 is 2 make an circle 
  if (cell5 == 2)
  {
    stroke ("red")
    fill (70, 200, 50)
    strokeWeight (10)
    circle (200, 200, 100)
  }
  //if cell6 is 1 make an X  
  if (cell6 == 1)
  {
    fill (255)
    strokeWeight (10)
    stroke("blue")
    line (290, 140, 390, 250)
    line (290, 250, 390, 140)
  }
  //if cell6 is 2 make an circle 
  if (cell6 == 2)
  {
    stroke ("red")
    fill (70, 200, 50)
    strokeWeight (10)
    circle (340, 200, 100)
  }
  //if cell7 is 1 make an X  
  if (cell7 == 1)
  {
    fill (255)
    strokeWeight (10)
    stroke("blue")
    line (20, 290, 100, 380)
    line (20, 380, 100, 290)
  }
  //if cell7 is 1 make an circle  
  if (cell7 == 2)
  {
    stroke ("red")
    fill (70, 200, 50)
    strokeWeight (10)
    circle (60, 345, 100)
  }
  //if cell8 is 1 make an X    
  if (cell8 == 1)
  {
    fill (255)
    strokeWeight (10)
    stroke("blue")
    line (245, 290, 155, 380)
    line (245, 380, 155, 290)
  }
  //if cell8 is 2 make an circle    
  if (cell8 == 2)
  {
    stroke ("red")
    fill (70, 200, 50)
    strokeWeight (10)
    circle (200, 345, 100)
  }
  //if cell9 is 1 make an X  
  if (cell9 == 1)
  {
    fill (255)
    strokeWeight (10)
    stroke("blue")
    line (380, 290, 300, 380)
    line (380, 380, 300, 290)
  }
  //if cell9 is 2 make an circle  
  if (cell9 == 2)
  {
    stroke ("red")
    fill (70, 200, 50)
    strokeWeight (10)
    circle (340, 345, 100)
  }
  //if playerwin is 1 start the timer and make a text player 1 wins
  if (playerwin == 1)
  { 
    fill ("blue")
    strokeWeight (2)
    textSize (30)
    stroke ("lightblue")
    text ("Player 1 wins!", 100, 480)
    reset = reset + 1
  }
  //if playerwin is 0 make a text saying whos turn it is
  if(playerwin == 0)
  {
    fill (0)
    strokeWeight (0)
    textSize (30)
    stroke (0)
    text ("turn: player " + playerturn, 100, 480)
    }

  //if playerturn is 2 start the timer and make a text player 2 wins
  if (playerwin == 2)
  {
    fill ("red")
    strokeWeight (2)
    textSize (30)
    stroke ("lightred")
    text ("Player 2 wins!", 100, 480)
    reset = reset + 1
  } 
  // if playerwin is 3 start the teset timer and make it display the text its a tie!
  if (playerwin == 3)
  {
    fill ("gray")
    strokeWeight (2)
    textSize (30)
    stroke ("lightgray")
    text ("Its a tie!", 140, 480)
    reset = reset + 1
    } 
  //if the timer is above 200 reset the cells and reset the timer and make it player 1's turn
  if (reset > 200)
  {
    reset = 0
    cell1 = 0
    cell2 = 0
    cell3 = 0
    cell4 = 0
    cell5 = 0
    cell6 = 0
    cell7 = 0
    cell8 = 0
    cell9 = 0
    playerwin = 0
    playerturn = 1
    tie = 0
  }
}

function mouseClicked ()
{
  if (playerwin == 0){
  //cell 1
  if (mouseX > 0 && mouseX < 123 && mouseY > 0 && mouseY < 123 && cell1 == 0)
  {
    cell1 = playerturn
    changePlayer();
  }
  //cell 2
  if (mouseX > 125 && mouseX < 275 && mouseY > 0 && mouseY < 123 && cell2 == 0)
  {
    cell2 = playerturn
    changePlayer();
  }
    
  //cell 3
  if (mouseX > 275 && mouseX < 400 && mouseY > 0 && mouseY < 123 && cell3 == 0)
  {
    cell3 = playerturn
    changePlayer();
  }

  //cell 4
  if (mouseX > 0 && mouseX < 123 && mouseY > 123 && mouseY < 275 && cell4 == 0)
  {
    cell4 = playerturn
    changePlayer();
  }

  //cell 5
  if (mouseX > 123 && mouseX < 275 && mouseY > 123 && mouseY < 275 && cell5 == 0)
  {
    cell5 = playerturn
    changePlayer();
  }
  //cell 6
  if (mouseX > 275 && mouseX < 400 && mouseY > 123 && mouseY < 275 && cell6 == 0)
  {
    cell6 = playerturn
    changePlayer();
  }
  //cell 7
  if (mouseX > 0 && mouseX < 123 && mouseY > 275 && mouseY < 400 && cell7 == 0)
  {
    cell7 = playerturn
    changePlayer();
  }
  
  //cell 8
  if (mouseX > 123 && mouseX < 275 && mouseY > 275 && mouseY < 400 && cell8 == 0)
  {
    cell8 = playerturn
    changePlayer();
  }

  //cell 9
  if (mouseX > 275 && mouseX < 400 && mouseY > 275 && mouseY < 400 && cell9 == 0)
  {
    cell9 = playerturn
    changePlayer();
  }
}
  //bovenste rij win 1
  if (cell1 == 1 && cell2 == 1 && cell3 == 1)
  {
    playerwin = 1 
  }
  //bovenste rij win 2
  if (cell1 == 2 && cell2 == 2 && cell3 == 2)
  {
    playerwin = 2 
  }
  //middelste rij win 1
  if (cell4 == 1 && cell5 == 1 && cell6 == 1)
  {
    playerwin = 1
  }
  //middelste rij win 2
  if (cell4 == 2 && cell5 == 2 && cell6 == 2)
  {
    playerwin = 2
  }
  //onderste rij win 1
  if (cell7 == 1 && cell8 == 1 && cell9 == 1)
  {
    playerwin = 1
  }
  //onderste rij win 2
  if (cell7 == 2 && cell8 == 2 && cell9 == 2)
  {
    playerwin = 2
  }
  //boven naar onder links win 1
  if (cell1 == 1 && cell4 == 1 && cell7 == 1)
  {
    playerwin = 1
  }
  //boven naar onder links win 2
  if (cell1 == 2 && cell4 == 2 && cell7 == 2)
  {
    playerwin = 2
  }
  //boven naar onder midden win 1
  if (cell2 == 1 && cell5 == 1 && cell8 == 1)
  {
      playerwin = 1
  }
  //boven naar onder midden win 2
  if (cell2 == 2 && cell5 == 2 && cell8 == 2)
  {
    playerwin = 2
  }
  //boven naar onder rechts win 1
  if (cell3 == 1 && cell6 == 1 && cell9 == 1)
  {
    playerwin = 1
  }
  //boven naar onder rechts win 2
  if (cell3 == 2 && cell6 == 2 && cell9 == 2)
  {
    playerwin = 2
  }
  //right top to left bottom win 1
  if (cell3 == 1 && cell5 == 1 && cell7 == 1)
  {
    playerwin = 1
  }
  //right top to left bottom win 2
  if (cell3 == 2 && cell5 == 2 && cell7 == 2)
  {
    playerwin = 2
  }
  //left top to right bottom win 1
  if (cell1 == 1 && cell5 == 1 && cell9 == 1)
  {
    playerwin = 1
  }
  //right top to right bottom win 2
  if (cell1 == 2 && cell5 == 2 && cell9 == 2)
  {
    playerwin = 2
  }

  if (tie == 9 && playerwin == 0)
  {
    playerwin = 3
  }
}
function changePlayer()
{
  //when this activates make playerturn and tie +1
  playerturn = playerturn + 1
  tie = tie + 1
  if (playerturn > 2)
  {
    playerturn = 1
  }
  
}