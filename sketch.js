const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4,backgroundIMG;

var engine, world;
var drops = [];


var maxDrops=100;
var umbrella
var thunderCreatedFrame=0;
var rand

function preload(){
   backgroundIMG=loadImage("snow1.jpg")
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    umbrella = new Umbrella(200,500);
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,400), random(0,400)));
        }

    }
    
}

function draw(){
    Engine.update(engine);
    background(backgroundIMG); 

    //creating thunder

   
    
    

    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].Position()
        
    }

    umbrella.display()
    
}   