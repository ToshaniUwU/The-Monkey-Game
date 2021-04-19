
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var survivalTime 
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
createCanvas(500,500);
  
   //creating the monkey 
  monkey=createSprite(100,415,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
   
  //creating the grounds
 ground = createSprite( 400,450,900,10);
 
   obstaclesGroup = createGroup();
  bananaGroup = createGroup();
 survivalTime=0;
} 

function draw() {
   
 background("lightblue");
   if(obstaclesGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstaclesGroup.setVelocityXEach(0);
        bananaGroup.setVelocityXEach(0);
        obstaclesGroup.setLifetimeEach(-1);
        bananaGroup.setLifetimeEach(-1);
   }
  //making the ground non stop
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);

  if (keyDown("space") && monkey.y>160) {
 monkey.velocityY = -10;      

  }
  
spawnObstacles()
  spawnBanana();
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
 
  drawSprites();
   textSize(30)
  stroke("black")
 fill("black")
   text("survivalTime: "+ survivalTime,250,50);
 
 
  survivalTime=Math.ceil(frameCount/frameRate())
}
function spawnObstacles(){ 
  if (frameCount % 300 === 0){
   var obstacle = createSprite(400,425,10,40);
obstacle.addImage(obstacleImage); 
    obstacle.scale=0.1
    obstacle.velocityX =-4
 obstaclesGroup.add(obstacle);
  } 
}
function spawnBanana(){
     if(World.frameCount% 80 ===0){
      banana =createSprite(400,200,20,20);
       banana.addImage(bananaImage);
       banana.x=Math.round(random(100,300));
   banana.velocityX=-(8);
  banana.setLifetime=100;
        banana.scale=0.1;
       
     }}


