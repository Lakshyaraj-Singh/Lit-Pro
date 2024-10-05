let userseq=[];
let gameseq=[];
let level=0
let started=false;
let colorseq=["orange","green","blue","pink"];
let body=document.querySelector("body");
let p=document.querySelector("p");

body.addEventListener("keypress",()=>{
    if (started==false){

        leveler();
    }
});

function leveler(){
    started=true;
  level++;
  p.innerText=`Level ${level}`

  let randIndx=Math.floor(Math.random()*colorseq.length)
  let colorselector=colorseq[randIndx];
  gameseq.push(colorselector)
  flash(colorselector)
  
  
}
function flash(colorselector){
    let colorClass=document.querySelector(`.${colorselector}`)
    colorClass.classList.add("flash")
    setTimeout(()=>{
        colorClass.classList.remove("flash");
    },300)
   


}
