var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
 car=createSprite(50, 200, 50, 50);
 car1=createSprite(50, 50, 15,15);
 car1.shapeColor="red";
 car2=createSprite(50, 70, 15,15);
 car2.shapeColor="yellow";
 car3=createSprite(50, 90, 15,15);
 car3.shapeColor="green";

 wall=createSprite(1500,200,30, 200);
 wall.shapeColor=color(80,80,80);
 car.velocityX= speed;
}

function draw() {
  background("black");
  fill("white");
  text("=180<Deformation",60,55);
  text("=100<Deformation<180",60,75);
  text("=Deformation<100",60,95);
  if(wall.x-car.x<=(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation>180){
      car.shapeColor="red";
    }
    if(deformation<180 && deformation>100){
      car.shapeColor="yellow";
    }
    if(deformation<100){
      car.shapeColor="green";
    }

  }
  
  drawSprites();
}