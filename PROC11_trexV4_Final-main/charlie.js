var PLAY = 1;
var END = 0;
var gameState = PLAY;
 
 
var trex ,trex_running, trex_collided;
var ground,invisibleGround,groundImage;
var cloud, cloudsGroup, groundImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
var Puntuación, Score
var trex_collided
 
//falto declarar el suelo, la imagen del suelo y el suelo invisible
function preload(){
    trex_running=loadAnimation("trex1.png", "trex3.png", "trex4.png");

//animación va con loadAnimation*****************************************************************************

    //trex_collided= loadImage("trex_collided.png");
 
    groundImage = loadImage("ground2.png");
 
    cloudImage = loadImage("cloud.png");
 
//añadir las imagenes de los obstaculos
 
obstacle1 = loadImage("obstacle1.png");
obstacle2 = loadImage("obstacle2.png");
obstacle3 = loadImage("obstacle3.png");
obstacle4 = loadImage("obstacle4.png");
obstacle5 = loadImage("obstacle5.png");
obstacle6 = loadImage("obstacle6.png");
    //falta agregar animación del suelo

    //falta las imagenes de gameOver y restart ************************************************************************
 
 }
 
 function setup(){
    createCanvas(600,200);
 
   
    //Sprite de Trex
    trex = createSprite(50,180,20,50);
    trex.addAnimation("running", trex_running);


    ///agregar la animacion del choque del dinosaurio************************************************************

   
   //Tamaño y posición al Trex
   trex.scale = 0.5;
   //trex.x = 50;
   //Sprite del Suelo
   ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
   //se escribe WIDTH y el velocity tiene que ser negativo
    ground.x = ground.width /2;
    ground.velocityX = -4;
   
     //te hizo falta crear los grupos para los obstaculos y las nubes **************************************************
  obstaclesGroup = createGroup();
  cloudsGroup = createGroup();
 
    //con esto creas el suelo invisible
    invisibleGround = createSprite(200,190,400,10);
    invisibleGround.visible=false;
 
    console.log("Hola" +5);
    trex.setCollider("circle",0,0,40);
    trex.debug=true;
 
    score =0;
 
    //
}
 
 
   
function draw() {
    background(180);
    //mostrar puntuación
    text("Puntuación: "+ score, 500,50);
    
    
    
    if(gameState === PLAY){
      // falta poner los sprites de game over y restart como invisibles **********************************************


      //mover el suelo
      ground.velocityX = -4;
      //puntuación
      score = score + Math.round(frameCount/60);
      
      if (ground.x < 0){
        ground.x = ground.width/2;
      }
      
      //hacer que el Trex salte al presionar la barra espaciadora
      if(keyDown("space")&& trex.y >= 100) {
          trex.velocityY = -13;
      }
      
      //agregar gravedad
      trex.velocityY = trex.velocityY + 0.8
    
      //aparecer nubes
      spawnClouds();
    
      //aparecer obstáculos en el suelo
      spawnObstacles();
      
      if(obstaclesGroup.isTouching(trex)){
        //agregar codigo para cambiar la animación
        trex.changeAnimation("collided",trex_collided);
          gameState = END;
      }
    }
     else if (gameState === END) {
        ground.velocityX = 0;

        //Poner gameOver y restart como visibles *****************************************************************
      
  

      //Faltó la vida de los grupos**************************************************
      
  
  
       obstaclesGroup.setVelocityXEach(0);
       cloudsGroup.setVelocityXEach(0);
     }
    
   
    //evitar que el Trex caiga
    trex.collide(invisibleGround);
    
    
    
    drawSprites();
  }
 //Recuerda que el spawnClouds va fuera del function draw, para que tengas más cuidado con las llaves **********************

  
//Evitar que Trex Caiga

 
//spawnClouds();
function spawnClouds () {
    if (frameCount %60 === 0) {
        cloud = createSprite(600,95,40,10);
        cloud.addImage(cloudImage);
        cloud.y = Math.round(random(10,100));
        cloud.scale = 0.5; cloud.velocityX= -4;
       
        //depth
 cloud.depth=trex.depth;
 trex.depth=trex.depth+1;
 
    }
   
}
 
 

 
 
 
 
   
 
 
   
   
    function spawnObstacles(){
        if (frameCount % 60 === 0){
            var obstacle = createSprite(400,165,10,40);
            obstacle.velocityX = -6;
 
            var rand= Math.round(random(1,6));
            switch(rand) {
                case 1: obstacle.addImage(obstacle1);
                        break;
                case 2: obstacle.addImage(obstacle2);
                        break;
                case 3: obstacle.addImage(obstacle3);
                        break;
                case 4: obstacle.addImage(obstacle4);
                        break;
                case 5: obstacle.addImage(obstacle5);
                        break;
                case 6: obstacle.addImage(obstacle6);
                        break;
                default: break;
 
            }
 
            obstacle.scale = 0.5;
            obstacle.lifetime= 300;
 
            obstaclesGroup.add(obstacle);
        }
 
 
       
    }

