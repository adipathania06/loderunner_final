class Player{
    constructor(x,y,width,height,scale){

   //this.image = loadImage("sprites/hero2.png");
   this.body = createSprite(x,y,width,height); 
   this.scale = scale;
   this.image1 = loadAnimation("sprites/player1.gif","sprites/player2.gif",
   "sprites/player3.gif","sprites/player4.gif","sprites/player5.gif",
   "sprites/player6.gif","sprites/player7.gif","sprites/player8.gif")
  this.image2 = loadImage("sprites/player_left.gif");  
  this.body.addAnimation("player1",this.image1);  
  this.body.addImage("player2",this.image2);
    }
   display(){
       this.body.scale = this.scale;
    
    if(keyIsDown(UP_ARROW)){
  this.body.y= this.body.y -30
    }
if(keyIsDown(DOWN_ARROW)){
  this.body.y= this.body.y +30;
    }
    if(keyIsDown(RIGHT_ARROW)){
        this.body.changeAnimation("player1",this.image1);
  this.body.x= this.body.x +30;
    }
    if(keyIsDown(LEFT_ARROW)){
        this.body.changeImage("player2",this.image2);
  this.body.x= this.body.x -30;
    }
   

   
   }

}