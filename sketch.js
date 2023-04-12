let ground;
let lander;
var lander_img;
var bg_img;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;
var block21,block22,block23,block24,bloc25,block26,block27,block28,block29,block30;
var  block31,block32,block33,block34,bloc35,block36,block37,block38,block39;


var moon;



var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(80);

  lander = createSprite(50,120,30,30);
  lander.addImage(lander_img);
lander.scale = 0.07;
lander.debug=true
lander.setCollider("rectangle",0,0,700,700)
moon = createSprite(width-120,height/3,120,120);
moon.visible=false;

edges=createEdgeSprites()

database=firebase.database()
database.ref("playercount").on("value",(data)=>{
  playercount=data.val()}
)
form=new Form()
form.display()





 // lander.velocityX=2;
 // lander.velocityY=1
  block1 = createSprite(350,70,450,10);
  block2 = createSprite(190,150,150,10);
  block2.shapeColor="red"
  block3 = createSprite(420,150,150,10);

  block4 = createSprite(500,345,10,400);
  block5 = createSprite(570,270,10,400)
  block5.shapeColor="red"
  block6 = createSprite(25,340,10,180);

  block7 = createSprite(580,470,30,10);
  block8 = createSprite(700,470,30,10);
  block8.shapeColor="red"

  
  block9 = createSprite(650,540,300,10);
  block9.shapeColor="red"


  block10 = createSprite(800,445,10,200);
  block10.shapeColor="red"

  block11 = createSprite(710,350,10,250);

block12 = createSprite(780,220,150,10);

block13 = createSprite(260,250,10,200);
block14= createSprite(350,250,10,200);

block15= createSprite(190,350,150,10);
block16 = createSprite(190,425,150,10);

block17 = createSprite(350,355,10,150);

block18 = createSprite(110,302,10,107);
block19 = createSprite(80,425,100,10);;;
block20 = createSprite(25,245,10,100);;;
block21 = createSprite(225,218,10,65);;;

block22 = createSprite(165,245,120,10);
block23 = createSprite(120,190,200,10);

block24 = createSprite(850,150,10,150);
block25 = createSprite(950,150,10,150);
block26 = createSprite(870,350,150,10);
block27 = createSprite(950,420,10,150);
block28 = createSprite(600,400,10,150);
block29 = createSprite(680,400,10,150);
block30 = createSprite(995,500,100,10);
block30.shapeColor="red"


block31 = createSprite(1050,570,10,150);
block31.shapeColor="red"

block32 = createSprite(1100,640,100,10);
block32.shapeColor="red"

block33 = createSprite(1150,570,10,150);
block34 = createSprite(1150,420,10,150);
block35 = createSprite(1170,350,150,10);
block36 = createSprite(1100,320,10,65);
block37 = createSprite(950,45,10,65);
block37.shapeColor="red";
block38 = createSprite(600,70,200,10);
block38.shapeColor="red";
block39 = createSprite(700,43,10,65);
block39.shapeColor="red";
block40 = createSprite(1050,690,10,100);
block40.shapeColor="red"










  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0,width,height);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop(); 
if(keyDown("w")){
  lander.y=lander.y-5
}
if(keyDown("s")){
  lander.y=lander.y+5
}
if(keyDown("a")){
  lander.x=lander.x-5
}
if(keyDown("d")){
  lander.x=lander.x+5
}

if(lander.isTouching(block2) ||lander.isTouching(block5) || lander.isTouching(block8) || lander.isTouching(block9) || lander.isTouching(block10)){
  lander.x=50
  lander.y=120
  lander.collide(block2)
}

lander.bounceOff(block1);
lander.bounceOff(block2);
lander.bounceOff(block3);

lander.bounceOff(block4);
lander.bounceOff(block5);
lander.bounceOff(block6);

lander.bounceOff(block7);
lander.bounceOff(block8);
lander.bounceOff(block9);

lander.bounceOff(block10);
lander.bounceOff(block11);

lander.bounceOff(block12);

lander.bounceOff(block13);
lander.bounceOff(block14);

lander.bounceOff(block15);
lander.bounceOff(block16);

lander.bounceOff(block17);
lander.bounceOff(block18);
lander.bounceOff(block19);
lander.bounceOff(block20);
lander.bounceOff(block21);

lander.bounceOff(block22);
lander.bounceOff(block23);

lander.bounceOff(block24);
lander.bounceOff(block25);
lander.bounceOff(block26);
lander.bounceOff(block27);
lander.bounceOff(block28);
lander.bounceOff(block29);
lander.bounceOff(block30);
lander.bounceOff(block31);
lander.bounceOff(block32);
lander.bounceOff(block33);
lander.bounceOff(block34);
lander.bounceOff(block35);
lander.bounceOff(block36);
lander.bounceOff(block37);
lander.bounceOff(block38);
lander.bounceOff(block39);
lander.bounceOff(block40);
lander.bounceOff(edges);


















  
  //fall down
 // vy +=g;
 // lander.position.y+=vy;
  drawSprites();
  if(lander.isTouching(moon)){
    lander.debug=true
    moon.debug=true
    fill("lightgreen")
    textSize(50)
    text("congratulation!!!!you have completed the maze!!!!",width/5-100,height/5)
  
    lander.collide(moon)
  }

  

}


