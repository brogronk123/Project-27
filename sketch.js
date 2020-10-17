
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof();
	bobObject1 = new bob(250,200,50);
	rope1 = new Chain(bobObject1.body, roof.body, -50*2, 0);
	Matter.Body.setStatic(bobObject1.body, false);
	bobObject2 = new bob(300,200,50);
	rope2 = new Chain(bobObject2.body, roof.body, -25*2, 0);
	bobObject3 = new bob(350,200,50);
	rope3 = new Chain(bobObject3.body, roof.body, -0*2, 0);
	bobObject4 = new bob(400,200,50);
	rope4 = new Chain(bobObject4.body, roof.body, 25*2, 0);
	bobObject5 = new bob(450,200,50);
	rope5 = new Chain(bobObject5.body, roof.body, 50*2, 0);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}


function keyPressed(){
	if(keyCode == 38){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-100});
	}
}
