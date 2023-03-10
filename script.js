console.log('Hello World')
let botWin=0;
let playerWin=0;


let user= prompt("Hello! what is your name");

//alert(`Welcome to Rock, Paper, Scissors game ${userName} click OK! to begin `);


function computerPlay(){
    let rps,botChoice,random;
    rps = ["rock","paper","scissors"];
    random = Math.floor(Math.random() *3);
    botChoice = rps[random];
    return  botChoice;
}

function playRound(playerSelection,computerSelection){
    let  rpsDatabase,message,botScore,playerScore 
    rpsDatabase = {
        "rock":{"rock": 0.5,"paper":0,"scissors":1},
        "paper":{"rock": 1,"paper":0.5,"scissors":0},
        "scissors":{"rock":0,"paper":1,"scissors":0.5}
    }
    
    botScore=rpsDatabase[computerSelection][playerSelection],
    playerScore =rpsDatabase[playerSelection][computerSelection]

   
    console.log(`Bot chose ${computerSelection}`);

    if (botScore === 1){
        message = `Bot won! ${computerSelection} beat ${playerSelection}`
       // console.log (`Score`,botScore,playerScore);
        console.log(message)
        return ( message, {botScore:1,playerScore:0})
    }else if (botScore === 0.5){
        message = `You tie!`
        //console.log (`Score`, botScore,playerScore);
        console.log(message)
        return {botScore:0,playerScore:0}
    }else {
        message = `You won! ${playerSelection} beat ${computerSelection}`
        console.log(message)
      //  console.log (`Score`,botScore ,playerScore);
        return {botScore:0,playerScore:1}
    }
    
}

function rpsGame(){
    for(i=0;i<5;i++){
        let botChoice,score
        
        botChoice = computerPlay()
        player =  prompt('Choose Rock, Paper or Scissors').toLowerCase()
        score = playRound(player,botChoice)

        botWin += score.botScore
        playerWin += score.playerScore
        console.log("scores \n",`Computer:${botWin}`,`${user}:${playerWin}`)
        console.log(`You chose! ${player}`)
        
        console.log(`End Of Round ${i+1}`)
       // console.log(botWin++,playerWin++)
    }
}
rpsGame()

