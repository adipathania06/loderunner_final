class Gameover{
    constructor(x,y,width,height,scale){

   this.image = loadImage("sprites/gameover.png");
   this.body = createSprite(x,y,width,height); 
   this.scale = scale;
    }
}