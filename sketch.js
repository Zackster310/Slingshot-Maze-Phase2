const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground,platform1;

var box1,box2,box3,box4;

var ball;

var sling;

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,590,800,20);
    platform1 = new Ground(600,200,200,10)

    ball = new Circle(150,220,40);

    sling = new Chain(ball,{x:150,y:220});

    box1 = new Box(570,150,50,50);
    box2 = new Box(630,150,50,50);
    box3 = new Box(600,100,50,50);

    box4 = new Box(780,580,50,50);

}

function draw(){
    background(150);
    Engine.update(engine);

    ground.display();
    platform1.display();

    ball.display();
    sling.display();

    box1.display();
    box2.display();
    box3.display();

    box4.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
 }
 
 function mouseReleased(){
    sling.fly();
 }
