
var monkey , monkey_running,monkeyStop
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup,ground
var score
var gameState="play";
var a1,a1i

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  monkeyStop=loadAnimation("sprite_1.png");
}



function setup() {
createCanvas(600,300);
  
 monkey=createSprite(50,220);
  monkey.addAnimation("running",monkey_running);
    monkey.addAnimation("stop",monkeyStop);
  
  monkey.scale=0.15
  
  ground=createSprite(500,260,1000,5)
  ground.shapeColor="brown"
  
  
  bananaGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
background("Green");
    fill("white")
  text("SURVIVAL TIME "+score,450,50);
  if(gameState==="play"){
  if(keyDown("space")&&monkey.y>210){
    monkey.velocityY= -18;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  
   
    score=round(frameCount/15);
    
    obstacles();
  Createbanana();
  if(obstacleGroup.isTouching(monkey)){
    gameState="end";
  }  
  
  
  }
  else if(gameState==="end"){
    monkey.velocityY=0;
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    monkey.changeAnimation("stop",monkeyStop)
    bananaGroup.setLifetimeEach(-1);
    obstacleGroup.setLifetimeEach(-1);
    fill("WHITE");
    stroke("white");
    textSize(25)
    text("OOPS.. TRY AGAIN",250,150);
  }
  drawSprites();
  monkey.collide(ground);
}

function Createbanana(){
  if(frameCount% 100 ===0){
    banana=createSprite(600,round(random(60,95)));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-4;
    bananaGroup.add(banana);
    banana.lifetime=300;
  }
}

function obstacles(){
  if(frameCount%150 ===0){
    obstacle=createSprite(600,230);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-5
    obstacle.scale=0.15;
    obstacleGroup.add(obstacle);
    obstacle.lifetime=400;
  }
  
}



