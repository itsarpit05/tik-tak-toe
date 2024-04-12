 let boxes = document.querySelectorAll(".box");
 let rbtn = document.querySelector(".reset-btn");
 let newGamebtn = document.querySelector("#new-btn");
 let msgcontainer = document.querySelector(".msg-container");
 let msg = document.querySelector("#msg");
 let turnO = true;
 let cnt=0;
 const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
 ];

 const resetGame = () =>{
    turnO = true; 
    cnt=0;
    enablebox();
    msgcontainer.classList.add("hide");
 };


 boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turnO){
          box.innerText = "O";
          turnO = false;
        }
        else{
            box.innerText ="X";
            turnO= true;
        }
        box.disabled = true;
        cnt++;
        let isWinner = checkWinner();

        if(cnt==9 && !isWinner){
            gameDraw();
        }
    });
 });

 const gameDraw = () => {
    msg.innerText = `DRAWW!!.`;
    msgcontainer.classList.remove("hide");
    disablebox();
  };

 const disablebox = () =>{
    for( let box of boxes){
        box.disabled = true;
    }
};

const enablebox = () =>{
    for( let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }

};

 

 const showWinner = (winner) =>{
  msg.innerText= `Congratulations, Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disablebox();

 };
 const checkWinner = ()=>{
    for( let it of win){
let posn1val= boxes[it[0]].innerText;
let posn2val= boxes[it[1]].innerText;
let posn3val= boxes[it[2]].innerText;

 if(posn1val!="" && posn2val!="" && posn3val!=""){
    if(posn1val=== posn2val && posn2val===posn3val){
        console.log("Winner",posn1val);

        showWinner(posn1val);
    }
 }
    }
 };


 newGamebtn.addEventListener("click" , resetGame);
 rbtn.addEventListener("click",resetGame);
