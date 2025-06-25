var n1=Math.floor((Math.random()*6))+1
var n2=Math.floor((Math.random()*6))+1
const heading=document.querySelector("h1");
const btn=document.querySelector("button");
const d1=document.querySelector("#dice1");
const dot1_1=d1.querySelector(".dot1");
const dot2_1=d1.querySelector(".dot2");
const dot3_1=d1.querySelector(".dot3");
const dot4_1=d1.querySelector(".dot4");
const dot5_1=d1.querySelector(".dot5");
const dot6_1=d1.querySelector(".dot6");
const dot7_1=d1.querySelector(".dot7");
const dot8_1=d1.querySelector(".dot8");
const dot9_1=d1.querySelector(".dot9");

const d2=document.querySelector("#dice2");
const dot1_2=d2.querySelector(".dot1");
const dot2_2=d2.querySelector(".dot2");
const dot3_2=d2.querySelector(".dot3");
const dot4_2=d2.querySelector(".dot4");
const dot5_2=d2.querySelector(".dot5");
const dot6_2=d2.querySelector(".dot6");
const dot7_2=d2.querySelector(".dot7");
const dot8_2=d2.querySelector(".dot8");
const dot9_2=d2.querySelector(".dot9");
btn.addEventListener("click",()=>{
    heading.innerText="REFRESH ME";
    dot1_1.style.visibility="visible";
    dot2_1.style.visibility="hidden";
    dot3_1.style.visibility="visible";
    dot4_1.style.visibility="visible";
    dot5_1.style.visibility="hidden";
    dot6_1.style.visibility="visible";
    dot7_1.style.visibility="visible";
    dot8_1.style.visibility="hidden";
    dot9_1.style.visibility="visible";
    dot1_2.style.visibility="visible";
    dot2_2.style.visibility="hidden";
    dot3_2.style.visibility="visible";
    dot4_2.style.visibility="visible";
    dot5_2.style.visibility="hidden";
    dot6_2.style.visibility="visible";
    dot7_2.style.visibility="visible";
    dot8_2.style.visibility="hidden";
    dot9_2.style.visibility="visible";
})
if(n1===1){
    dot1_1.style.visibility="hidden";
    dot2_1.style.visibility="hidden";
    dot3_1.style.visibility="hidden";
    dot4_1.style.visibility="hidden";
    dot6_1.style.visibility="hidden";
    dot7_1.style.visibility="hidden";
    dot8_1.style.visibility="hidden";
    dot9_1.style.visibility="hidden";
}
else if(n1===2){
    dot2_1.style.visibility="hidden";
    dot3_1.style.visibility="hidden";
    dot4_1.style.visibility="hidden";
    dot5_1.style.visibility="hidden";
    dot6_1.style.visibility="hidden";
    dot7_1.style.visibility="hidden";
    dot8_1.style.visibility="hidden";
}
else if(n1===3){
    dot2_1.style.visibility="hidden";
    dot3_1.style.visibility="hidden";
    dot4_1.style.visibility="hidden";
    dot6_1.style.visibility="hidden";
    dot7_1.style.visibility="hidden";
    dot8_1.style.visibility="hidden";
}
else if(n1===4){
    dot2_1.style.visibility="hidden";
    dot4_1.style.visibility="hidden";
    dot5_1.style.visibility="hidden";
    dot6_1.style.visibility="hidden";
    dot8_1.style.visibility="hidden";
}
else if(n1===5){
    dot2_1.style.visibility="hidden";
    dot4_1.style.visibility="hidden";
    dot6_1.style.visibility="hidden";
    dot8_1.style.visibility="hidden";
}
else{
    dot2_1.style.visibility="hidden";
    dot5_1.style.visibility="hidden";
    dot8_1.style.visibility="hidden";
}

if(n2===1){
    dot1_2.style.visibility="hidden";
    dot2_2.style.visibility="hidden";
    dot3_2.style.visibility="hidden";
    dot4_2.style.visibility="hidden";
    dot6_2.style.visibility="hidden";
    dot7_2.style.visibility="hidden";
    dot8_2.style.visibility="hidden";
    dot9_2.style.visibility="hidden";
}
else if(n2===2){
    dot2_2.style.visibility="hidden";
    dot3_2.style.visibility="hidden";
    dot4_2.style.visibility="hidden";
    dot5_2.style.visibility="hidden";
    dot6_2.style.visibility="hidden";
    dot7_2.style.visibility="hidden";
    dot8_2.style.visibility="hidden";
}
else if(n2===3){
    dot2_2.style.visibility="hidden";
    dot3_2.style.visibility="hidden";
    dot4_2.style.visibility="hidden";
    dot6_2.style.visibility="hidden";
    dot7_2.style.visibility="hidden";
    dot8_2.style.visibility="hidden";
}
else if(n2===4){
    dot2_2.style.visibility="hidden";
    dot4_2.style.visibility="hidden";
    dot5_2.style.visibility="hidden";
    dot6_2.style.visibility="hidden";
    dot8_2.style.visibility="hidden";
}
else if(n2===5){
    dot2_2.style.visibility="hidden";
    dot4_2.style.visibility="hidden";
    dot6_2.style.visibility="hidden";
    dot8_2.style.visibility="hidden";
}
else{
    dot2_2.style.visibility="hidden";
    dot5_2.style.visibility="hidden";
    dot8_2.style.visibility="hidden";
}
if(n1>n2){
    heading.innerText="PLAYER 1 WINS!";
}
else if(n2>n1){
    heading.innerText="PLAYER 2 WINS!";
}
else{
    heading.innerText="ITS A TIE!!"
}
