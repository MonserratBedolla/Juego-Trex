var trex ,trex_running,trex_collided; 
var ground,invisibleGround,groundImage; 

//pusiste 2 veces el preload, hay que tener cuidado con eso
function preload(){ 
    trex_running = loadAnimation("trex1.png","trex3.png","trex4.png"); 
    trex_collided = loadImage("trex_collided.png"); 
    groundImage = loadImage("ground2.png"); 
    console.info("esta parte del codigo esta mal"); 
} 
function setup(){ 
    createCanvas(600,200); 
    trex=createSprite(50,160,20,50); 
    trex.addAnimation("running",trex_running); 
    trex.scale=(0.5); 
    ground=createSprite(200,180,400,20); 
    ground.addImage("ground",groundImage); 
    ground.velocityX=-5;
    ground.x = ground.width /2; 
    console.info("esta parte del codigo esta mal"); 
    invisibleGround = createSprite(200,190,400,10);
    invisibleGround.visible=true; 
} 
//crear sprite de Trex 
function draw(){ 
    console.info("esta parte del codigo esta mal"); 
    background("220"); 
    //los simbolos de Y en programación son &&
    if (keyDown("space") && trex.y >=100){ 
        trex.velocityY = -10;
         console.info("esta parte del codigo esta mal"); 
        } 
         trex.velocityY = trex.velocityY + 0.8; 
       if (ground.x < 0) { 
            ground.x = ground.width / 2; 
            console.info("esta parte del codigo esta mal"); 
        } 
      trex.collide(invisibleGround);
        drawSprites();
    }
    //Estás haciendo un gran trabajo, sigue esforzándote mucho, revisa bien el código, nos vemos en clase