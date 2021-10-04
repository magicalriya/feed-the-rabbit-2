var garden,rabbit,apple,orangeLeaf;
var gardenImg,rabbitImg,appleImg,orangeLeafImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeLeafImg=loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX;

  var select_sprites=Math.round(random(1,2));
   
  if (frameCount % 80 ==0){ 
     if(select_sprites==1){ 
      createapples(); 
    } else { createorangeLeaf(); 
    } }

 createapples()
 createorangeLeaf()

  drawSprites();
}

function createapples(){
  apple=createSprite(random(50,350),40,10,10);
  apple.addImage=(appleImg);
  apple.scale=0.30;
  apple.velocityY=4;
  apple.lifetime=150;
}
function createorangeLeaf(){
  orangeLeaf=createSprite(random(50,350),40,10,10);
  orangeLeaf.addImage=(orangeLeafImg);
  orangeLeaf.scale=0.30;
  orangeLeaf.velocityY=4;
  orangeLeaf.lifetime=150;
}
