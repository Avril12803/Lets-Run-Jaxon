// creating variables for the sprite.
var jakeImg, pathImg, path, jake,left_boundary,right_boundary;

function preload(){

//  loading the images fot various sprites
jakeImg = loadAnimation("Runner-1","Runner-2")
pathImg = loadImg("path.png")
}

function setup(){
// creating the canvas
createCanvas(400,400)

// creating a sprite called path
path = createSprite(200,200)
path.addImage(pathImg)
path.velocityY = 5
path.y=path.height/30

// creating a sprite called jake
jake = createSprite(200,80,100,100)
jake.addAnimation("Runner-1","Runner-2",jakeImg)

// creating the left Boundary
left_boundary = createSprite(0,300,100,600)

// creating the right Boundary
right_boundary = createSprite(390,300,80,600)

left_boundary.visible=false
right_boundary.visible=false
}

function draw (){
backgroung(0)

// giving the path its velocity
path.velocityY = 5

jake.x=World.mouseX

// code to reset the background
if (path.y>400) {
path.y=height/2
}

// giving the sprite jake to colide the boundaries
jake.collide(left_boundary)
jake.collide(right_boundary)

// creating edge sprites
edges=createEdgeSprites()
jake.collide(edges[3])





drawSprites()
}















