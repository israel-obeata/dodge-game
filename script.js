const score=document.querySelector("#score");
const button= document.querySelector("#button");
var keep;
if(sessionStorage.getItem("newb")==null){
    keep=0;
}else{
     keep= sessionStorage.getItem("newb");
}

button.addEventListener("click",()=>{
    window.location.href="./game.html"; 
});
sessionStorage.setItem("bscore",keep);
document.querySelector(".score").innerHTML="best score "+ keep;