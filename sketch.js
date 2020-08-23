const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball1, ball2, ball3, ball4;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

   
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0
    }

    ball1= Bodies.circle(200,100,20,ball_options);
    World.add(world,ball1);
    //ball1.shapeColor="green";
    
    ball2= Bodies.circle(220,110,15,ball_options);
    World.add(world,ball2);
    //ball2.shapeColor="red";

    ball3= Bodies.circle(230,200,30,ball_options);
    World.add(world,ball3);
    //ball3.shapeColor="purple";

    ball4= Bodies.circle(240,250,20,ball_options);
    World.add(world,ball4);
    //ball4.shapeColor="blue";


    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    fill("red");
    ellipse(ball1.position.x,ball1.position.y,20);
    ellipse(ball2.position.x,ball2.position.y,15);
    ellipse(ball3.position.x,ball3.position.y,30);
    ellipse(ball4.position.x,ball4.position.y,40);

    
}