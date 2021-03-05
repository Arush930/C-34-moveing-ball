var ball;
var database,ballpos,pos

function setup(){
    createCanvas(500,500);
    database=firebase.database()
    ball = createSprite(250,250,10,10);
    ballpos= database.ref("Ball/Position")
     ball.shapeColor = "red";
     ballpos.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writepos(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writepos(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writepos(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writepos(0,+1);
    }
    drawSprites();
}

function writepos(x,y){
    database.ref("Ball/Position").set({
      x:ball.x + x,
      y:ball.y + y
    })
   
}

function readPosition(data){
pos=data.val()
ball.x=pos.x
ball.y=pos.y
}

function showError(){
console.log("error")
}