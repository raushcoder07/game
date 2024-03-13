let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");

const msgPara= document.querySelector("#msg")

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");
const showWinner=(userWin ,userChoice,compChoice)=>{
    if(userWin){
        console.log("you Win");
        userScore++;
        userScorepara.innerText=userScore;
        msgPara.innerText=`you win ! ${userChoice} beats ${compChoice}`;
        msgPara.style.backgroundColor="green";
    }else{
        console.log("you loose");
        compScore++;
        compScorepara.innerText=compScore;
        msgPara.innerText=`you loose ${compChoice} beats ${userChoice}`;
        msgPara.style.backgroundColor="red";
    }
}

const playgame=(userChoice)=>{
    console.log("user choice  =",userChoice);
    //genetrate computer choice ->modular functiom
    const compChoice= gencompChoice();
    console.log("comp choice =" ,compChoice);
    if(userChoice=== compChoice){
        console.log("game is draw");
        msgPara.innerText=" game is draw // play again";
        msgPara.style.backgroundColor ="black";
     } else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors ,paper
            userWin =compChoice==="paper"? false:true;
        }
        else if(userChoice==="paper"){
              //scissors ,rock
              userWin= compChoice==="scissors" ?false:true;
        } else{
               // rock ,paper
               userWin=compChoice==="rock" ?false: true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

const gencompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx =Math.floor(Math.random()*3);
    return options[randIdx];
}



choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id")
        // console.log("choice is click" ,userChoice);
        playgame(userChoice);
    })
})