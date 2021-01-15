var cat,catImg;
var mouse,mouseImg;


function preload() {
    //load the images here
catImgSiting=loadImage("images/tomOne.png");

catImgHungry=loadImage("images/tomTwo.png");
catImgHungry2=loadImage("images/tomThree.png");
catImgsiting2=loadImage("images/tomFour.png");
mouseImghodlingCheese=loadImage("images/jerryOne.png");
mouseImgStanding=loadImage("images/jerryTwo.png");
mouseImgremovingTounge=loadImage("images/jerryThree.png");
mouseImgDetective=loadImage("images/jerryOne.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(200,300,40,50)
cat.shapeColour="green"
cat.addImage("catImage",catImgHungry)
mouse=createSprite(200,400,40,50)
mouse.addImage("mouseImage",mouseImgStanding)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2)
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

}
