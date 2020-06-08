//today we are going to make our own new game which is named as "lode runner"
var brick;
var player;
var enemy;
var money;
var score = 0;
var gameover;
var enemySpeed= []; 

function setup(){
    var canvas = createCanvas(1200,650);
  brick1 = new Brick(600,200,200,20,0.2);
  brick2 = new Brick(660,200,200,20,0.2); 
   brick3 = new Brick(720,200,200,20,0.2);
   brick4 = new Brick(780,200,200,20,0.2);
   brick5 = new Brick(840,200,200,20,0.2);
   brick6 = new Brick(900,200,200,20,0.2);
   brick7 = new Brick(960,200,200,20,0.2);
   brick8 = new Brick(1020,200,200,20,0.2);
   brick9 = new Brick(1080,200,200,20,0.2);
   brick10 = new Brick(1140,200,200,20,0.2);
   brick11 = new Brick(1200,200,200,20,0.2);
   brick12 = new Brick(300,575,200,20,0.2);
   brick13 = new Brick(30,575,200,20,0.2);
   brick14 = new Brick(90,575,200,20,0.2);
   brick15 = new Brick(150,575,200,20,0.2);
   brick16 = new Brick(210,575,200,20,0.2);
   brick17 = new Brick(270,575,200,20,0.2);
   brick18 = new Brick(330,575,200,20,0.2);
   brick19 = new Brick(390,575,200,20,0.2);
   brick20 = new Brick(450,575,200,20,0.2);
   brick21 = new Brick(510,575,200,20,0.2);
   brick22 = new Brick(570,575,200,20,0.2);
   brick23 = new Brick(630,575,200,20,0.2);
   brick24 = new Brick(690,575,200,20,0.2);
   brick25 = new Brick(750,575,200,20,0.2);
   brick26 = new Brick(810,575,200,20,0.2);
    brick27 = new Brick(870,575,200,20,0.2)
   brick28 = new Brick(930,575,200,20,0.2);
   brick29 = new Brick(990,575,200,20,0.2);
   brick30 = new Brick(1050,575,200,20,0.2);
  brick31 = new Brick(1110,575,200,20,0.2);
   brick32 = new Brick(1170,575,200,20,0.2);
   brick33 = new Brick(840,380,200,20,0.2);
   brick34 = new Brick(900,380,200,200,0.2);
   brick35 = new Brick(960,380,200,20,0.2);
   brick36 = new Brick(1020,380,200,20,0.2);
   brick37 = new Brick(1080,380,200,20,0.2);
   brick38 = new Brick(1140,380,200,20,0.2);
   brick39 = new Brick(1200,380,200,20,0.2);
   brick40 = new Brick(30,300,200,20,0.2);
   brick41 = new Brick(90,300,300,20,0.2);
  brick42 = new Brick(150,300,200,20,0.2);
  brick43 = new Brick(210,300,200,20,0.2);
  brick44 = new Brick(270,300,200,20,0.2);
brick45 = new Brick(330,300,200,20,0.2);
brick46 = new Brick(390,300,200,20,0.2);
 brick47 = new Brick(450,300,200,20,0.2);
 brick48 = new Brick(510,300,200,20,0.2);
brick49 = new Brick(570,300,200,20,0.2);

   money1 = new Money(60,250,20,20,0.07);
   money2 = new Money(590,150,20,20,0.07);
   money3 = new Money(700,530,20,20,0.07);
   money4 = new Money(150,530,20,20,0.07);
   money5 = new Money(1050,330,20,20,0.07);

   enemySpeed = [15,-15];
   enemy1 = new Enemy(70,90,10,10,1);
   enemy1.body.velocityX = enemySpeed[0];
   player=  new Player(100,400,10,10,1);

   ladder1 = new Ladder(1140,480,20,20,0.06);
   ladder2 = new Ladder(840,290,20,20,0.06);

   gameover = new Gameover(990,440,20,20,0.2);
setInterval(function(){ 
  if(enemy1.body.velocityX===enemySpeed[0]){
enemy1.body.velocityX = enemySpeed[1]}
else{
  enemy1.body.velocityX = enemySpeed[0] }



 }, 8000);
function keyPressed(){
if(keyCode === 69){
  player.move();
}
}
function keyPressed(){
  if(keyCode === 68){
    brick10.body.visible = false;
  }
}


}
function draw(){
background("black");
textSize(35);
fill("white");
text("score:"+score,900,50);
brick1.display();
brick2.display();
brick3.display();
brick4.display();
brick5.display();
brick6.display();
brick7.display();
brick8.display();
brick9.display();
brick10.display();
brick11.display();
brick12.display();
brick13.display();
brick14.display();
brick15.display();
brick16.display();
brick17.display();
brick18.display();
brick19.display();
brick20.display();
brick21.display();
brick22.display();
brick23.display();
brick24.display();
brick25.display();
brick26.display();
brick27.display();
brick28.display();
brick29.display();
brick30.display();
brick31.display();
brick32.display();
brick33.display();
brick34.display();
brick35.display();
brick36.display();
brick37.display();
brick38.display();
brick39.display();
brick40.display();
brick41.display();
brick42.display();
brick43.display();
brick44.display();
brick45.display();
brick46.display();
brick47.display();
brick48.display();
brick49.display();

money1.display();
money2.display();
money3.display();
money4.display();
money5.display();


ladder1.display();
ladder2.display();


enemy1.display();
player.display();
//setInterval(function(){ enemy1.body.velocityX = enemySpeed[1] }, 8000);

 
  

if(player.body.isTouching(money1.body)){
  score = score+1;
money1.body.visible = false;
}
if(player.body.isTouching(money2.body)){
  score = score+1;
money2.body.visible = false;
}
if(player.body.isTouching(money3.body)){
  score = score+1;
money3.body.visible = false;
}
if(player.body.isTouching(money4.body)){
  score = score+1;
money4.body.visible = false;
}
if(player.body.isTouching(money5.body)){
  score = score+1;
money5.body.visible = false;
}

 if(player.body.isTouching(enemy1.body)){
  score = score-5;
  player.body.destroy();
 }
 if(player.body.isTouching(ladder1.body)){
  score = score+1;
  
 }

player.body.collide(brick1.body);
player.body.collide(brick2.body);
player.body.collide(brick3.body);
player.body.collide(brick4.body);
player.body.collide(brick5.body);
player.body.collide(brick6.body);
player.body.collide(brick7.body);
player.body.collide(brick8.body);
player.body.collide(brick9.body);
player.body.collide(brick10.body);
player.body.collide(brick11.body);



}