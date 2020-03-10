const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine , world

function setup()
{
  var canvas = createCanvas(400,400);
 engine = Engine.create();
 world = engine.world; 

 ceiling = new Ceiling(200,10,400,20);
 ball = new Ball(200,200,20);
 chain = new Chain(ceiling.body,ball.body);

}

function draw()
  {
    background(0);
    Engine.update(engine);

    text("PRESS SPACE TO MOVE THE BALL",150,300);
    text("PRESS ENTER TO STOP THE BALL",150,350);

    ceiling.display();
    ball.display();
    chain.display();

    if(keyCode===32 && mouseX>0 && mouseX<400 && mouseY>0 && mouseY<400)
    {
      ball.body.position.y = mouseY;
      ball.body.position.x = mouseX;
      
     }
     else if (keyCode === ENTER)
     {
     ball.body.position.x = 200; 
     ceiling.display();
     ball.display();
     chain.display();
     }    

  }
