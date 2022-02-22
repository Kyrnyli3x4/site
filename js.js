var dropArray = [];

function init()
{

    var canvas = document.querySelector('canvas'); 
       
canvas.width=W=window.innerWidth;
canvas.height=H=window.innerHeight;

var c = canvas.getContext('2d');
window.addEventListener('resize',function()
{
 canvas.width=W=window.innerWidth;
canvas.height=H=window.innerHeight;
create() ;
})
function Drop(x,y,dy,width,height)
{
    this.x=x;    this.y=y;
    this.dy=dy;  
    this.width=width;
    this.height=height;
   this.color="white";

  
    if(dy < 28)
    {  dy = 3;    }
this.draw=function()
{
       c.beginPath();
       c.rect(this.x,this.y,this.width,this.height);
       c.fillStyle=this.color;
       c.fill();
}
this.update = function()
{   
    
    this.y+=dy;
    
    if( this.y > H)
    {    this.y= -20;     }
    this.draw();
    }
}
function create()
{
dropArray = [];

for(var i=0;i<=300;i++)
{   
    var width =(Math.random()*2) +1;
    var height =(Math.random()*4) +1;    var x = (Math.random()*(W-2*width)) + width;
    var y = Math.random()*H;                    
    var dy = Math.random()*6;
    
    dropArray[i]= new Drop(x,y,dy,width,height);
    } 
}
function animate()
{
 requestAnimationFrame(animate);
 c.clearRect(0,0,W,H);
    
 for(var j=0;j<dropArray.length;j++)
  {    dropArray[j].update();  }
}
animate();
create();
}


