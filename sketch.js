
var monkey , monkey_running,ground;
var banana ,bananaImage, obstacle,obstacles, obstacleImage;
var food, bananaGroup, obstacleGroup;
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600,600)
  
  monkey=createSprite(100,400,50,50)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1;

  ground=createSprite(300,440,1000,10)
  
  score = 0;
  
  bananaGroup = new Group;
  obstacleGroup = new Group;
  
}


function draw() {
    fill("red")
    textSize(25)
    text("SurvivalTime: "+ score, 250,50);
  
  score = score + Math.round(getFrameRate()/60);
  
  ground.velocityX=2; 
  if(ground.x=600){
    ground.x=500;
  }
  ground.visible=false;
  monkey.velocityY=4;
  
  monkey.collide(ground)
  
    if(keyDown("space")){
    monkey.velocityY=-4 ;
  }
//Call this as function
  food();
  obstacles();

  drawSprites();
}

function food (){
  if(frameCount%80===0){
   banana=createSprite(550,350,10,10)
   banana.addImage(bananaImage)
   banana.scale=0.1;
   banana.velocityX=-2;
   banana.lifetime=250;
    
   banana.y=Math.round(random(180,300))
   
   bananaGroup.add(banana)
  }

}

function obstacles(){
   if (frameCount % 300 === 0){
    obstacle=createSprite(550,425,10,10)
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.1;    
    obstacle.velocityX=-2;
    obstacle.lifetime=250;
  }
}


