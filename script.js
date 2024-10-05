let userseq=[];
let gameseq=[];
let level=0
let started=false;
let colorseq=["orange","green","blue","pink"];
let body=document.querySelector("body");
let btns=document.querySelectorAll(".btn");
let p=document.querySelector("p");
let maxer=0;
body.addEventListener("keypress",()=>{
    if (started==false){

        leveler();
    }
});

function leveler(){
    started=true;
    userseq=[];
  level++;
  p.innerText=`Level ${level} ~ Highest: ${maxer}`

  let randIndx=Math.floor(Math.random()*colorseq.length)
  let colorselector=colorseq[randIndx];
  gameseq.push(colorselector)
  flash(colorselector)
  console.log(gameseq)
  
  
}
function flash(colorselector){
    let colorClass=document.querySelector(`.${colorselector}`)
    colorClass.classList.add("flash")
    setTimeout(()=>{
        colorClass.classList.remove("flash");
    },300)
   
}
function checkAns(Idx){
    if(userseq[Idx]==gameseq[Idx]){
        if(userseq.length==gameseq.length){
            leveler();
        }
    }
    else{
        reset();
    }
}

function btnPress(){
    if(started==true){

        let id=this.getAttribute("id");
        userseq.push(id);
        console.log(userseq)
      
      flash(id);
      console.log(userseq.length)
      checkAns(userseq.length-1);
    }

}

for ( btn of btns) {
    btn.addEventListener("click", btnPress)
}

function reset(){

    max=level;
    if(max>maxer){

        maxer=max;
    }
    
    level=0;
    p.innerText=`GAMEOVER :Press any Key To Reset [Max Score:${max}]`
    userseq=[];
    gameseq=[];
    started=false
}