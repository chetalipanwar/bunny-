var gamestate = "serve";
var edges;
var bunnyImg;
var snakeImg,fireImg,wildPlantImg;



function preload() {
  bunnyImg = loadImage("images/bunny.png");
  snakeImg = loadImage("images/snake.png");
  fireImg = loadImage("images/fire.png");
  wildPlantImg = loadImage("images/wildPlant.png")
}

function setup() {

  createCanvas(displayWidth, displayHeight);
  //creating objects and giving them size and animation
  bunny = createSprite(30,370,30,40);
  bunny.addImage(bunnyImg);
  bunny.scale = 0.3;
  
  edges = createEdgeSprites();
  
  snake = createSprite(130,385,115,20);
  snake.addImage(snakeImg);
  snake.scale = 0.3;

  fire1 = createSprite(281,210,20,25);
  fire1.addImage(fireImg);
  fire1.scale = 0.2;
  
  fire2 = createSprite(240,210,20,25);
  fire2.addImage(fireImg);
  fire2.scale = 0.2;
  
  fire3 = createSprite(200,210,20,25);
  fire3.addImage(fireImg);
  fire3.scale = 0.2;
 
  wildplant = createSprite(180,320,20,20);
  wildplant.addImage(wildPlantImg);
  wildplant.scale = 0.1;
   
  bridge1 = createSprite(130,340,130,20);
  bridge1.shapeColor = ("brown");
 
  bridge2 = createSprite(225,340,110,20);
  bridge2.shapeColor = ("brown");

  bridge3 = createSprite(240,240,120,20);
  bridge3.shapeColor = ("brown");
  
  bridge4 = createSprite(30,220,100,20);
  bridge4.shapeColor = ("brown");
  
  bridge5 = createSprite(370,70,150,20);
  bridge5.shapeColor = ("brown");
  
  
  
  movingdisk = createSprite(200,120,100,20);
  movingdisk.shapeColor = ("BLACK");
 
  carrot = createSprite(374,29,20,20);
  //carrot.setAnimation("carrot_2");
 // carrot.scale = 0.5;
  
  tree1 = createSprite(342,356,20,20);
  //tree1.setAnimation("fantasytree_05_1");
  //tree1.scale = 0.3;
  
  tree2 = createSprite(55,58,20,20);
 // tree2.setAnimation("fantasytree_05_1");
 // tree2.scale = 0.3;*/
  
  //gamestate to form different stages of game
  gamestate = "serve";
}

function draw(){

        //to clear the screen 
        background("green");
        //creating edges
       // createEdgeSprites();
  
        //(special poin to remember and to understand){
      // 1::IF GAME STATE IS SERVE THEN TEXT ....
      // 2::WHEN GAME STATE IS SERVE AND SPACE IS PRESSED THN MOVE THE snake,movingdisk and wildplant BY THE GIVEN VILOCITY
      // 3::IF ONCE SPACE IS PRESSED THAN GAMESTATE WILL CHANGED INTO GAMESTATE PLAY.}
     
      // place information in the centre
         if (gamestate === "serve"){
            text("press space to serve",200,150);
      
         if (keyDown("space")){
      //giving movement to snake
           snake.velocityX=3;
      //giving movement to wildplant
           wildplant.velocityX=4;
      //giving movement to disk
           movingdisk.velocityX=3;
}
      //gamestate serve will convert into gamestate play
         if (keyDown("space") && gamestate === "serve") {
            serve();
            gamestate = "play";
      }
}
      
      //giving instructions so that bunny can out 
      if (bunny.isTouching(snake) ){
      text("game over",200,150);
      reset();
      gamestate = "serve";
      //playSound("assets/snakebite.mp3", false);
      
      }
       if (bunny.isTouching(wildplant) ){
      text("game over",200,150);
      reset();
      gamestate = "serve";
     // playSound("assets/wildplant.mp3", false);
      
      }
       if (bunny.isTouching(fire1) ){
      text("game over",200,150);
      reset();
      gamestate = "serve";
      //playSound("assets/crash.mp3", false);
      
      }
      
       if (bunny.isTouching(fire2) ){
      text("game over",200,150);
      reset();
      //playSound("assets/crash.mp3", false);
      }
      
       if (bunny.isTouching(fire3) ){
      text("game over",200,150);
      reset();
     // playSound("assets/crash.mp3", false);
      }
      
      //to make bunny win
      if (bunny.isTouching(carrot)){
      // command is for if bunny touches the diamond then show bunny reached the carrot
      
     // playSound("assets/carrot.mp3", false);
      
      stroke=0;
      fill=0;
      textsize=(200);
      text("congratulations bunny reached the carrot",50,150);
      snake.velocityX=0;
      wildplant.velocityX=0;
      movingdisk.velocityX=0;
      bunny.velocityX=0;
      bunny.velocityY=0; 
      }
  
  //giving function to all the objects to bounce off from somthing
 // snake.bounceOff(rightEdge);
  //snake.bounceOff(leftEdge);
  
 // wildplant.bounceOff(rightEdge);
  //wildplant.bounceOff(leftEdge);
  
 // movingdisk.bounceOff(rightEdge);
  //movingdisk.bounceOff(leftEdge);
  
  
 
//making the bunny colide with all the bridges and disks
  bunny.collide(bridge1);
   bunny.collide(bridge2);
    bunny.collide(bridge3);
     bunny.collide(bridge4);
      bunny.collide(bridge5);
       bunny.collide(movingdisk);
    //    bunny.collide(bottomEdge);
    //     bunny.collide(edges);
         
         
//making other objects colide with different objects
  wildplant.collide(bridge1);
 wildplant.collide(bridge2);



//making bunny move with the arrow keys
if (keyDown(LEFT_ARROW)){
bunny.x = bunny.x-2;
}

if (keyDown(RIGHT_ARROW)){
bunny.x = bunny.x+2;
}

if (keyDown(DOWN_ARROW)){
bunny.y = bunny.y+2;
}
//making bunny jump
if (keyDown("UP_ARROW")){
bunny.velocityY=-10;
}
bunny.velocityY = bunny.velocityY + 0.5;


if (bunny.isTouching(fire1)){
      // playSound("assets/crash.mp3", false);
      }

//to display all the sprites
drawSprites();

  }

function serve(){
  snake.velocityX=3;
  wildplant.velocityX=4;
  movingdisk.velocityX=3;
}

function reset(){
  snake.x=130;
  snake.y=385;
  snake.velocityX=0;
  snake.velocityY=0;
  wildplant.x=180;
  wildplant.y=320;
  wildplant.velocityX=0;
  wildplant.velocityY=0;
  movingdisk.x=200;
  movingdisk.y=120;
  movingdisk.velocityX=0;
  movingdisk.velocityY=0;
  bunny.x=30;
  bunny.y=370;
}









