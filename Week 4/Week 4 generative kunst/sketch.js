function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (let i = 0; i < 3; i++)
  {
    console.log (i)
   circle (100, 50 + (i * 50), 40,);
   if(i == 1)
   {
      fill ("green")
   }
   else if (i == 0)
   {  
    fill ("orange")
   }
   else if (i == 2)
   {
      fill ("red")
   }
  }

}
