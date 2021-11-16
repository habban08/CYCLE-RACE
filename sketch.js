var box1

function setup() 
{
  createCanvas(400, 400);
box1=new Box(100,200,20,10,4)



}

function draw() 
{
  background(220);
box1.show()
box1.move()
}

