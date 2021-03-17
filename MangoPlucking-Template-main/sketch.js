
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	//load tree image and boy image
	gardenImage = loadImage("garden1.jpg");
	boyImage = loadImage("boy.png");
	treeImage = loadImage("tree.png");
}

function setup() {
	createCanvas(1200, 800);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Boy Sprite and add the image

	boy = createSprite(100,720,5,5);
	boy.addImage(boyImage);
	boy.scale=0.15;

	//Create Tree Sprite and add the image
	tree = createSprite(900,460,20,20);
	tree.addImage(treeImage);
	tree.scale=0.6;

	
	//Create Ground object 
	ground = new Ground(width/2,799,width,10);
	//ground = new Ground(width/2,800,width,10);
	
	//create 10 mango objects, mango1 to mango10
	mango1 = new Mango(800,200);
	mango2 = new Mango(850,350);
	mango3 = new Mango(950,350);
	mango4 = new Mango(1000,300);
	mango5 = new Mango(950,260);
	mango6 = new Mango(800,450);
	mango7 = new Mango(800,400);
	mango8 = new Mango(1050,200);
	mango9 = new Mango(900,350);
	mango10 = new Mango(820,400);
	

	//Create stone object
	stone = new Stone(30,620);
	
	//Create sling object by passing stone body and points(x,y)
	slingshot = new SlingShot(stone.body,{x:30, y:620});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(gardenImage);
  drawSprites();

  //Display Ground,Mangos,stone,sling
  //ground.display();
   stone.display();
   ground.display();
   mango1.display();
   mango2.display();
   mango3.display();
   mango4.display();
   mango5.display();
   mango6.display();
   mango7.display();
   mango8.display();
   mango9.display();
   mango10.display();
  
   slingshot.display();

  //detect collision between stone and all the mangoes using detectcollision()

 detectCollision(stone,mango1)
 detectCollision(stone,mango2)
 detectCollision(stone,mango3)
 detectCollision(stone,mango4)
 detectCollision(stone,mango5)
 detectCollision(stone,mango6)
 detectCollision(stone,mango7)
 detectCollision(stone,mango8)
 detectCollision(stone,mango9)
 detectCollision(stone,mango10) 
//  detectCollision(stone,ground)
//  detectCollision(ground,mango1)
//  detectCollision(ground,mango2)
//  detectCollision(ground,mango3)
//  detectCollision(ground,mango4)
//  detectCollision(ground,mango5)
//  detectCollision(ground,mango6)
//  detectCollision(ground,mango7)
//  detectCollision(ground,mango8)
//  detectCollision(ground,mango9)
//  detectCollision(ground,mango10)

  //console.log(mango1.x,mango1.y);
 
}

function mouseDragged(){
	//Use Matter.Body.setPosition to set the position of the stone
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
	// if(keyCode === 32){
	// Matter.Body.setPosition(stone.body,{x:235,y:420})
	// launcherObject.attach(stone.body);
	slingshot.fly();
	// }
}

function detectCollision(stone_arg,mango_arg){
	//Detect collision using the function mentioned in pdf
	stoneBodyPosition=stone_arg.body.position;
	mangoBodyPosition=mango_arg.body.position;
    console.log(mangoBodyPosition.x)
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=50){
		Matter.Body.setStatic(mango_arg.body,false);
	}

}