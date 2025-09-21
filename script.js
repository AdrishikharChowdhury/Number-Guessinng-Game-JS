let playerGuess = document.querySelector("#guess");
playerGuess.value=`${0}`;
let def = 100;
let easy = document.querySelector("#easy");
let med = document.querySelector("#medium");
let hard = document.querySelector("#hard");
let computerValue=0;
let message=document.querySelector("#message");
let newGame=document.querySelector("#new-game");
let difficulties=document.querySelectorAll(".difficulty");
let submit=document.querySelector("#submit");
let reset=document.querySelector("#reset-game");

difficulties.forEach((difficulty) => {
  difficulty.addEventListener("click", () => {
    difficulties.forEach((button) => {
      button.classList.remove("bg-blue-900");
      button.classList.add("bg-blue-500");
    });
    difficulty.classList.remove("bg-blue-500");
    difficulty.classList.add("bg-blue-900");
  });
});


const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let difficulty = def;

easy.addEventListener("click", () => {
  difficulty = def * 1;
  message.innerText=`Game Mode: Easy`;
});

med.addEventListener("click", () => {
  difficulty = def * 2;
  message.innerText=`Game Mode: Medium`;
});

hard.addEventListener("click", () => {
  difficulty = def * 3;
  message.innerText=`Game Mode: Hard`;
});

const game=()=>{
  playerGuess.disabled=false;
  computerValue = getRandomInt(0, difficulty);
  message.innerText=`Lets Play A Number Guessing Game`;
  submit.addEventListener("click",()=>{
    let playerValue=playerGuess.value;
    if(playerValue>computerValue){
      message.innerText=`Your Guess: ${playerValue}. You guessed high bro!!`;
    }
    else if(playerValue<computerValue){
      message.innerText=`Your Guess: ${playerValue}. You guessed low bro!!`;
    }
    else{
      message.innerText=`Your Guess: ${playerValue}. You won bro!!`;
      playerGuess.disabled=true;
    }
  })
}

const resetGame=()=>{
  message.innerText=`The Game Has Been Reset. Press New Game to play...`;
  playerGuess.disabled=false;
  playerGuess.value=`${0}`;
}

newGame.addEventListener("click",game);
reset.addEventListener("click", resetGame);