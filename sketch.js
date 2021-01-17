const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){
    
}

function setup(){
   
    var canvas = createCanvas(400,1000);
    engine = Engine.create();
    world = engine.world;

    drop = new Drop((random(100,450)),0,10)
}

function draw(){
    
    background("black")

    drop.display();
}   

