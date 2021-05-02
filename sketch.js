var monkey , monkey_Img;
var banana ,bananaImage, obstacle, obstacleImage;
var BananaGroup, obstaclesGroup;
var score;
var background,backgroundImg;
var ground;
var PLAY;
var END;
var gameState;
var youWonImg,youWon;

function preload()
{
  monkey_Img =                   loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png",
"Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png",
"Monkey_08.png","Monkey_09.png","Monkey_10.png" )

    bananaImage = loadImage("banana.png");
    obstacleImage = loadImage("stone.png");
  
  backgroundImg = loadImage("jungle.jpg");
   youWonImg = loadImage("monkey222.webp");
  
    
  
  
  
  
  
}
function setup() 
{
  createCanvas(600, 400);
  
  background = createSprite(500,100,1800,600);
  background.addImage(backgroundImg);


monkey = createSprite(100,317,600,40);
  monkey.addAnimation("monkey_running",monkey_Img);
  monkey.scale = 0.08;
  
  ground = createSprite(600,360,1200,10);
  ground.x = ground.width/2;
  ground.visible = false;
  //ground.addImage(groundImg);
  //ground.scale = 0.3;
  ground.shapeColor = "green";
           
  
  //SurvivalTime = 0;
  
  BananaGroup = createGroup();
  obstaclesGroup = createGroup();
  
  score = 0;
  
  PLAY = 0;
  END = 1;
  gameState = PLAY
  
  //monkey.debug = true;
  
  
  
  
  
  

  
}


function draw() 
{
 // background(jungleImg);
  
  if(gameState===PLAY)
    {
  //camera.x =  displayWidth/2;
camera.y = monkey.y - 50 ;

  // score = score + Math.round(getFrameRate()/60);
      console.log(monkey.y);
      
      if (ground.x < 300)
    {
      ground.x = ground.width/2;
    }
  
   ground.velocityX = -8;
  
      
     background.velocityX = -8;
  
  if(background.x < 100)
    {
      background.x = background.width/2;
    }
  
    
  if(keyDown("space") && monkey.y >= 315)
    {
      monkey.velocityY = -11;
    }
  
  monkey.velocityY = monkey.velocityY + 0.3;
  
  spawnBananas();
  spawnObstacles();
      
      if(BananaGroup.isTouching(monkey))
    {
      
      BananaGroup.destroyEach();
      score = score + 2;
      
    }
      
  if(obstaclesGroup.isTouching(monkey) && monkey.scale> 0.08)
  {
  monkey.scale=0.08;
}
      
  
  console.log(monkey.scale);
      if(score===100){
        gameState=END;
      }
      switch(score){
        case 30: monkey.scale = 0.09;
          break;
        case 60: monkey.scale = 0.11;
          break;
        case 90 : monkey.scale = 0.12;
          break;
          default : break;
          
          
      }
      
}
  
  else if (gameState === END)
    {
      background.velocityX = 0;
      ground.velocityX = 0;
    monkey.velocityY = 0
      BananaGroup.setVelocityXEach(0);
      obstaclesGroup.setVelocityXEach(0);
      BananaGroup.setLifetimeEach(-1);
      obstaclesGroup.setLifetimeEach(-1);
      youWon = createSprite(width/2,height/2,100,150);
      youWon.scale = 1.6
      youWon.addImage("youWon",youWonImg);
    }
  
  monkey.collide(ground);
  
  
  
          
  /*SurvivalTime.depth = jungle.depth;
  SurvivalTime.depth = SurvivalTime.depth + 1;*/
  
  
  
  
  
  
  
  
  
  
  
  
  drawSprites();
  
  stroke("white");
fill("white");
textSize(22);
text("SCORE :" + score,50,50);
  
  /*var SurvivalTime = 0;
  stroke("black");
  textSize(20);
  fill("black");
  SurvivalTime = Math.ceil(frameCount/frameRate());
  text("SURVIVAL TIME = "+ SurvivalTime,375,50);*/
  


  
}

function spawnBananas()

{
  
  if(frameCount % 80 === 0)
    {
      banana = createSprite(600,200,20,20);
      banana.y = random(120,200);
      //banana.debug = true;
      //console.log(banana.collider);
      //banana.setCollider("circle",0,0,50);
  
      //banana.velocityX = -6;
      banana.addImage(bananaImage);
      banana.scale=0.08;
      banana.lifetime = 150;
      banana.velocityX = Math.round(random(-7,-13));
      BananaGroup.add(banana);
      
      /*var rn = Math.round(random(1,2,3,4));
  switch(rn)
    {
      case 1 : banana.velocityX = -10;
        break;
        case 2 : banana.velocityX = -7;
        break;
        case 3 : banana.velocityX = -8;
        break;
        case 4 : banana.velocityX = -9;
        break;
        default : break;*/
      
      
    }
}
  
function spawnObstacles()
  {
    if(frameCount % 300 === 0)
      {
        obstacle = createSprite(600,327,40,40);
        obstacle.velocityX = Math.round(random(-7,-12));
        //console.log(obstacle.x);
        obstacle.addImage(obstacleImage);
        obstacle.scale = 0.16;
        obstacle.lifetime = 150;
        obstaclesGroup.add(obstacle);
   }
    
  }








