let animals = 
[
  ["goudvis", "Zalm", "Clownvis", "Haai", "tonijn"],
  ["Adelaar", "Papegaai", "Mees", "Kolibrie", "Uil"],
  ["Leeuw", "Olifant", "Walvis", "Vleermuis", "Giraffe"],
  ["Bij", "Vlinder", "Mier", "Libelle", "Kever"],
]

function setup() {
  createCanvas(400, 400);
}

function draw() 
{
  fill (0)
  background(0, 190, 40);
  textSize (20)
  text (animals[0][0], 10, 20)
  text (animals[0][3], 10, 40)
  text (animals[1][1], 10, 60)
  text (animals[1][2], 10, 80)
  text (animals[2][2], 10, 100)
  text (animals[3][1], 10, 140)
  text (animals[2][0], 10, 120)
  text (animals[3][2], 10, 180)
  text (animals[3][3], 10, 160)


  
  for(let i = 0; i<5;i++)
  {
    for (let j=0; j<5;j++)
    {
      if(i==1&&j==0)
      fill ("red")

      else fill (255)

      square (i*50+100, j*50+5, 40, 40)
    }
  }
}