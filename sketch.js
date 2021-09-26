const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var rope;
let engine;
let world;
var ground;
var frut ;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  rope = new Rope (6,{x:245,y:30});
  var frutoptions = {
    density: 0.001

  
  }

  
  frut = Bodies.circle(300,300,15,frutoptions) 
  Matter.Composite.add(rope.body,frut)
  frutconstraint = new Link (rope,frut)

}

function draw() 
{
  background(51);
  ground.show();
  
  Engine.update(engine);
  ellipse(frut.position.x,frut.position.y,15,15)
rope.show();
 
   
}
