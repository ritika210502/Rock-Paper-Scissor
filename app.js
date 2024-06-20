let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};


const showWinner = (userWins, compWins, userScore, compScore, userChoice, compChoice) => {
    if(userWins)
    {
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else if(compWins)
    {
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
    else{
        msg.innerText="Gams was Draw,Play Again";
        msg.style.backgroundColor = "#081b31";
    }
};

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    let userWins=false;
    let compWins=false;

    console.log("User Choice:",userChoice);
    console.log("Computer Choice:",compChoice);

    if(userChoice=="rock" && compChoice=="paper")
    {
        console.log("Computer Wins");
        compScore++;
        compWins=true;
    }
    else if(userChoice=="rock" && compChoice=="scissor")
    {
        console.log("You Wins");
        userScore++;
        userWins=true;
    }
    else if(userChoice=="paper" && compChoice=="scissor")
    {
        console.log("Computer Wins");
        compScore++;
        compWins=true;


    }
    else if(userChoice=="paper" && compChoice=="rock")
    {
        console.log("You Wins");
        userScore++;
        userWins=true;


    }
    else if(userChoice=="scissor" && compChoice=="paper")
        {
            console.log("Computer Wins");
            compScore++;
            compWins=true;

        }
    else if(userChoice=="scissor" && compChoice=="rock")
    {
        console.log("You Wins");
        userScore++;
        userWins=true;
    }
    else{
        console.log("Its Draw, Play Again");
    } 
    console.log("User Score:", userScore, "Computer Score:", compScore);
    showWinner(userWins, compWins, userScore, compScore, userChoice, compChoice);

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});