const dodger=document.getElementById("dodger");
const ground=document.getElementById("ground");
var held=false;
const b= sessionStorage.getItem("bscore");


const styles=window.getComputedStyle(dodger);

 dodger.addEventListener("pointerdown",(e)=>{
    held=true;
 
   dodger.setPointerCapture(e.pointerId);
 });


dodger.addEventListener("pointerup",(e)=>{
     
  held=false;

 });


 ground.addEventListener("pointermove",(e)=>{
 
    if(held==true){ 
    const present=e.clientX;
    const presentY=e.clientY;
    const max = window.innerWidth;
    const maxHeight=window.innerHeight;
  
    if(presentY>=(maxHeight-parseFloat(styles.width))){
      var waxY=maxHeight-parseFloat(styles.width);
    }else if(presentY<=2){
      var waxY=2;
    }else{
    var waxY=presentY;
    }
    
if(present>=(max-parseFloat(styles.width))){
  var wax=(max-parseFloat(styles.width));
 dodger.style.transform = `translate(${wax}px, ${waxY-467}px)`;

}else if(present<=2){
 dodger.style.transform = `translate(${1}px, ${waxY-467}px)`;  


}else{


   dodger.style.transform = `translate(${present-30}px, ${waxY-467}px)`;

  }

   }
 
});





const obstacles=document.querySelector(".obstacles");
const first =document.querySelector("#first");
const second = document.querySelector("#second");
const third= document.querySelector("#third");
const show=document.querySelector("#show");

 let t=0;
 let g =0;
 var free;
var u =2;
var score=0;
 
   //free;
   free=Math.floor(Math.random()*3)+1;
   
   show.style.display="none";
  
function move(){
  


first.style.display= "block";
second.style.display = "block";
third.style.display= "block";

if(free==1){
    
   first.style.display = "none"; 
    
  }else if(free==2){
    
    second.style.display = "none";
  }else{

    third.style.display = "none";
  }

    t += u; // move 2px per frame
  obstacles.style.transform = `translateY(${t}px)`;
  if(t>window.innerHeight+20){
  t=0;
  
  if(u>7&&u<=10){
    u=u+0.05;
  }else if(u>10){
    u=u+0.01;
  }else if(u>3&&u<=7){
    u=u+0.5;
  }
  else{
    u=u+1;
  }
  obstacles.style.transform =  `translateY(${0}px)`;
 free= Math.floor(Math.random()*3)+1;
  score++;
  
const body = document.body;
const showScore = document.querySelector(".score");



if (score >= 20 && score <= 60) {
  // Stage 2 — Energetic neon
  showScore.style.color = "#39ff14";
  body.style.background = "linear-gradient(90deg, #3270c7ff, #00d2ff)";
  dodger.style.background = "linear-gradient(135deg, #00f5a0, #00d9f5)";
  dodger.style.boxShadow=" 0 0 12px rgba(0, 255, 136, 0.4)"

  
}
else if (score > 60 && score < 120) {
  // Stage 3 — Warm challenge
  showScore.style.color = "#eeff03ff";
  body.style.background = "linear-gradient(135deg, #0f2027, #203a43, #2c5364)";
  dodger.style.background = "linear-gradient(135deg, #dada25eb, #e0ac00ff)";
  dodger.style.boxShadow=" 0 0 14px rgba(255, 255, 0, 0.39)"
 
}
else if (score >= 120 && score < 300) {
  // Stage 4 — Intense mode
  showScore.style.color = "#ff007f";
  body.style.background = "linear-gradient(90deg, #8e2de2, #4a00e0)";
  dodger.style.background = "linear-gradient(135deg, #ff0080, #7928ca)";
  dodger.style.boxShadow=" 0 0 14px rgba(245, 23, 134, 0.41)"
}
else if (score >= 300) {
  // Stage 5 — Elite tier
  showScore.style.color = "#ff0000";
body.style.background = "linear-gradient(120deg, #0a0014, #22001f, #3b0035)";
dodger.style.background = "linear-gradient(135deg, #ff0000, #ff9900)";
dodger.style.boxShadow = `
  0 0 12px rgba(255, 0, 80, 0.6),
  0 0 30px rgba(255, 80, 0, 0.3)
`;

}
}

 

}






function compare(rectD,rect,position){
   if(!(rectD.bottom < rect.top ||
    rectD.top > rect.bottom ||
    rectD.right < rect.left ||
    rectD.left > rect.right
)){

  
   return true;

  }else{ return false;}//to rturn back false
   
}



//touch obstacles
function isTouching(a, b,c,d) {
  const rectDodger = a.getBoundingClientRect();
  const rectFirst = b.getBoundingClientRect();
  const rectSecond = c.getBoundingClientRect();
  const rectThird = d.getBoundingClientRect();


 var cap1 = compare(rectDodger,rectFirst,first)||
            compare(rectDodger,rectSecond,second)||
            compare(rectDodger,rectThird,third);
  
  return cap1;
}


document.querySelector("#back").addEventListener("click",()=>{
  window.location.href="./index.html";
});
document.querySelector(".replay").addEventListener("click",()=>{
  window.location.href="./game.html";
});

function gameLoop() {
  const showScore = document.querySelector(".score");
  const match= isTouching(dodger, first, second, third);
 if(match==true){
  
  setTimeout(()=>{
 show.style.display="block";

  },200);
  if(b>score){
    var z = b;
  }else{
    var z = score;
    sessionStorage.setItem("newb",score);

  }
 

  showScore.innerHTML="score "+score;
  document.querySelector(".bestscore").innerHTML="best score "+z;
return;
 
  }else{
      move(); 
  }
    // move obstacles, check collision
    requestAnimationFrame(gameLoop); // loop
}

requestAnimationFrame(gameLoop);




